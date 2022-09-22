var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.factor = 50;
        return _this;
    }
    MainScene.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.skinName = skins.MainSceneSkin;
        // this.startGameBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startHandler, this);
        setTimeout(this.startHandler.bind(this), 100);
        // this.startHandler.bind(this)()
        // this.addEventListener(egret.Event.ADDED_TO_STAGE, this.startHandler, this);
    };
    MainScene.prototype.startHandler = function () {
        var _this = this;
        var areaArray = [this.safeArea1, this.safeArea2, this.dangerousArea];
        egret.Tween.get(this.startGameBtn).to({ alpha: 0 }, 500).call(function () { return _this.removeChild(_this.startGameBtn); });
        egret.Tween.get(this.background).to({ alpha: 0 }, 500).call(function () { return _this.removeChild(_this.background); });
        var _loop_1 = function (i) {
            egret.Tween.get(areaArray[i])
                .call(function () { return areaArray[i].fillAlpha = 1; })
                .set({ alpha: 0 })
                .to({ alpha: 1 }, 500);
        };
        for (var i = 0; i < areaArray.length; i++) {
            _loop_1(i);
        }
        var stageWidth = egret.MainContext.instance.stage.stageWidth;
        var stageHeight = egret.MainContext.instance.stage.stageHeight;
        // console.log(stageWidth, stageHeight)
        var wCount = 5;
        var hCount = 5;
        var w = stageWidth * 0.6 / wCount;
        var h = stageHeight / hCount;
        var pointArray = [];
        var baseX = stageWidth * 0.2;
        var baseY = stageHeight * 0;
        for (var i = 0; i < wCount; i++) {
            for (var j = 0; j < hCount; j++) {
                var x = (baseX + w * i + w / 2) / this.factor;
                var y = (baseY + h * j + h / 2) / this.factor;
                pointArray.push({ x: x, y: y, random: Math.random() });
            }
        }
        pointArray.sort(function (a, b) {
            return a.random - b.random;
        });
        var world = new p2.World({
            gravity: [0, 0],
        });
        world.sleepMode = p2.World.BODY_SLEEPING;
        var makeWall = function (_a) {
            var x = _a.x, y = _a.y, w = _a.w, h = _a.h;
            var body = new p2.Body({
                mass: 1,
                type: p2.Body.STATIC,
                position: [x, y]
            });
            body.addShape(new p2.Box({ width: w, height: h }));
            var shape = new egret.Shape();
            shape.graphics.beginFill(0x0000ff, 1);
            shape.graphics.drawRect(x * _this.factor, y * _this.factor, w * _this.factor, h * _this.factor);
            shape.graphics.endFill();
            shape.anchorOffsetX = w * _this.factor / 2;
            shape.anchorOffsetY = h * _this.factor / 2;
            body.displays = [shape];
            _this.addChild(shape);
            return body;
        };
        var texture = RES.getRes('newParticle_png');
        var config = RES.getRes('newParticle_json');
        console.log(config);
        var parter = new particle.GravityParticleSystem(texture, config);
        this.addChild(parter);
        parter.start();
        var width = stageWidth / this.factor;
        var height = stageHeight / this.factor;
        var thickness = 1 / 4;
        var wallArray = [
            { x: width / 2, y: height + thickness / 2, w: width, h: thickness },
            { x: width / 2, y: -thickness / 2, w: width, h: thickness },
            { x: -thickness / 2 + width * 0.2, y: height / 2, w: thickness, h: height },
            { x: width + thickness / 2 - width * 0.2, y: height / 2, w: thickness, h: height },
        ];
        for (var i = 0; i < wallArray.length; i++) {
            world.addBody(makeWall(wallArray[i]));
        }
        var bombCount = 20;
        var bombArray = [];
        var bombBodyArray = [];
        for (var i = 0; i < pointArray.length; i++) {
            var _a = pointArray[i], x = _a.x, y = _a.y;
            var bomb = new Bomb(x, y);
            bomb.addStage(this);
            bomb.addWorld(world);
            bombArray.push(bomb);
            bombBodyArray.push(bomb.getBody());
            if (i + 1 >= bombCount)
                break;
        }
        var hitBombIndex = -1;
        var mouseSubVec;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            hitBombIndex = -1;
            var mouseP = p2.vec2.fromValues(e.stageX / _this.factor, (stageHeight - e.stageY) / _this.factor);
            var collisionArray = world.hitTest(mouseP, world.bodies, 0.1);
            while (collisionArray.length > 0) {
                var item = collisionArray.shift();
                if (item.type !== p2.Body.STATIC) {
                    var index = bombBodyArray.indexOf(item);
                    if (index != -1) {
                        hitBombIndex = index;
                        var bomb = bombArray[hitBombIndex];
                        bomb.catchUp();
                        world.removeBody(item);
                        item.sleep();
                        mouseSubVec = p2.vec2.create();
                        p2.vec2.sub(mouseSubVec, item.position, mouseP);
                        break;
                    }
                }
            }
        }, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) {
            if (hitBombIndex != -1) {
                var mouseP = p2.vec2.fromValues(e.stageX / _this.factor, (stageHeight - e.stageY) / _this.factor);
                var bomb = bombArray[hitBombIndex];
                var hitCollisionItem = bomb.getBody();
                p2.vec2.add(hitCollisionItem.position, mouseP, mouseSubVec);
                hitCollisionItem.velocity = p2.vec2.create();
                _this.setPositionBodyToShape(hitCollisionItem);
            }
        }, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, function (e) {
            if (hitBombIndex != -1) {
                var bomb = bombArray[hitBombIndex];
                var hitCollisionItem = bomb.getBody();
                if (e.stageX >= stageWidth * 0.2
                    && e.stageX <= stageWidth * 0.8
                    && e.stageY >= stageHeight * 0
                    && e.stageY <= stageHeight * 1) {
                    console.log('回鍋');
                    bomb.putDownDangerous();
                }
                else {
                    console.log('未回鍋');
                    bomb.putDownSafe();
                }
                world.addBody(hitCollisionItem);
                hitBombIndex = -1;
            }
        }, this);
        egret.startTick(function (timeStamp) {
            world.step(16 / 1000);
            for (var i = 0; i < bombArray.length; i++) {
                var item = bombArray[i];
                item.drawTimeLife(timeStamp);
                item.randomMove(5);
            }
            for (var i = 0; i < world.bodies.length; i++) {
                var boxBody = world.bodies[i];
                if (boxBody.type == p2.Body.STATIC)
                    continue;
                _this.setPositionBodyToShape(boxBody);
            }
            return false;
        }, this);
    };
    MainScene.prototype.setPositionBodyToShape = function (body) {
        var stageHeight = egret.MainContext.instance.stage.stageHeight;
        var box = body.displays[0];
        if (box) {
            box.x = body.position[0] * this.factor;
            box.y = stageHeight - (body.position[1] * this.factor);
            box.rotation = 360 - (body.angle + body.shapes[0].angle) * 180 / Math.PI;
            if (body.sleepState == p2.Body.SLEEPING) {
                box.alpha = 0.5;
            }
            else {
                box.alpha = 1;
            }
        }
    };
    return MainScene;
}(eui.Component));
__reflect(MainScene.prototype, "MainScene");
//# sourceMappingURL=MainScene.js.map