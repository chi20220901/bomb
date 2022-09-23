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
        _this.pointArray = [];
        _this.bombCount = 10;
        _this.maxLifeTime = 0;
        _this.bombBodyArray = [];
        _this.bombArray = [];
        return _this;
    }
    MainScene.prototype.createChildren = function () {
        var _this = this;
        _super.prototype.createChildren.call(this);
        this.skinName = skins.MainSceneSkin;
        var areaArray = [this.safeArea1, this.safeArea2, this.dangerousArea];
        this.stageWidth = egret.MainContext.instance.stage.stageWidth;
        this.stageHeight = egret.MainContext.instance.stage.stageHeight;
        this.initBombGrid();
        this.randomBombGrid();
        this.initWorld();
        this.timeShape = new egret.Shape();
        this.addChild(this.timeShape);
        this.startGameBtn.once(egret.TouchEvent.TOUCH_TAP, function () {
            egret.Tween.get(_this.startGameBtn).to({ alpha: 0 }, 500);
            // .call(() => this.removeChild(this.startGameBtn));
            egret.Tween.get(_this.background).to({ alpha: 0 }, 500);
            var _loop_1 = function (i) {
                egret.Tween.get(areaArray[i])
                    .call(function () { return areaArray[i].fillAlpha = 1; })
                    .set({ alpha: 0 })
                    .to({ alpha: 1 }, 500);
            };
            // .call(() => this.removeChild(this.background));
            for (var i = 0; i < areaArray.length; i++) {
                _loop_1(i);
            }
            _this.startTime = egret.getTimer();
            _this.initWall();
            _this.initBomb();
            _this.startTick();
        }, this);
        // setTimeout(this.startHandler.bind(this), 100);
        // this.startHandler.bind(this)()
        // this.addEventListener(egret.Event.ADDED_TO_STAGE, this.startHandler, this);
    };
    MainScene.prototype.reset = function () {
        this.startTime = egret.getTimer();
    };
    MainScene.prototype.initBombGrid = function () {
        var wCount = 5;
        var hCount = 5;
        var w = this.stageWidth * 0.6 / wCount;
        var h = this.stageHeight / hCount;
        var baseX = this.stageWidth * 0.2;
        var baseY = this.stageHeight * 0;
        this.pointArray = [];
        for (var i = 0; i < wCount; i++) {
            for (var j = 0; j < hCount; j++) {
                var x = (baseX + w * i + w / 2) / this.factor;
                var y = (baseY + h * j + h / 2) / this.factor;
                this.pointArray.push({ x: x, y: y });
            }
        }
    };
    MainScene.prototype.randomBombGrid = function () {
        for (var i = 0; i < this.pointArray.length; i++) {
            this.pointArray[i].random = Math.random();
        }
        this.pointArray.sort(function (a, b) {
            return a.random - b.random;
        });
    };
    MainScene.prototype.initWorld = function () {
        this.world = new p2.World({
            gravity: [0, 0],
        });
        this.world.sleepMode = p2.World.BODY_SLEEPING;
    };
    MainScene.prototype.makeWallItem = function (_a) {
        var x = _a.x, y = _a.y, w = _a.w, h = _a.h;
        var body = new p2.Body({
            mass: 1,
            type: p2.Body.STATIC,
            position: [x, y]
        });
        body.addShape(new p2.Box({ width: w, height: h }));
        var shape = new egret.Shape();
        shape.graphics.beginFill(0x0000ff, 1);
        shape.graphics.drawRect(x * this.factor, y * this.factor, w * this.factor, h * this.factor);
        shape.graphics.endFill();
        shape.anchorOffsetX = w * this.factor / 2;
        shape.anchorOffsetY = h * this.factor / 2;
        body.displays = [shape];
        this.addChild(shape);
        this.world.addBody(body);
        return body;
    };
    MainScene.prototype.initWall = function () {
        var stageWidth = egret.MainContext.instance.stage.stageWidth;
        var stageHeight = egret.MainContext.instance.stage.stageHeight;
        var width = stageWidth / this.factor;
        var height = stageHeight / this.factor;
        var thickness = 1 / 10;
        var wallArray = [
            { x: width / 2, y: height + thickness / 2, w: width, h: thickness },
            { x: width / 2, y: -thickness / 2, w: width, h: thickness },
            { x: -thickness / 2 + width * 0.2, y: height / 2, w: thickness, h: height },
            { x: width + thickness / 2 - width * 0.2, y: height / 2, w: thickness, h: height },
        ];
        for (var i = 0; i < wallArray.length; i++) {
            this.makeWallItem(wallArray[i]);
        }
    };
    MainScene.prototype.resetBomb = function () {
        this.randomBombGrid();
        for (var i = 0; i < this.bombCount; i++) {
            var bomb = this.bombArray[i];
            var _a = this.pointArray[i], x = _a.x, y = _a.y;
            var lifeTime = (Math.floor(Math.random() * 10) + 10) * 1000;
            if (lifeTime > this.maxLifeTime) {
                this.maxLifeTime = lifeTime;
            }
            bomb.setLifeTime(lifeTime);
            bomb.setP(x, y);
        }
        this.maxLifeTime = 1000;
    };
    MainScene.prototype.initBomb = function () {
        var _this = this;
        this.bombArray = [];
        this.bombBodyArray = [];
        for (var i = 0; i < this.bombCount; i++) {
            var bomb = new Bomb();
            bomb.addStage(this);
            bomb.addWorld(this.world);
            this.bombArray.push(bomb);
            this.bombBodyArray.push(bomb.getBody());
        }
        this.resetBomb();
        var hitBombIndex = -1;
        var mouseSubVec;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            hitBombIndex = -1;
            var mouseP = p2.vec2.fromValues(e.stageX / _this.factor, (_this.stageHeight - e.stageY) / _this.factor);
            var collisionArray = _this.world.hitTest(mouseP, _this.world.bodies, 0.1);
            while (collisionArray.length > 0) {
                var item = collisionArray.shift();
                if (item.type !== p2.Body.STATIC) {
                    var index = _this.bombBodyArray.indexOf(item);
                    if (index != -1) {
                        hitBombIndex = index;
                        var bomb = _this.bombArray[hitBombIndex];
                        bomb.catchUp();
                        _this.world.removeBody(item);
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
                var mouseP = p2.vec2.fromValues(e.stageX / _this.factor, (_this.stageHeight - e.stageY) / _this.factor);
                var bomb = _this.bombArray[hitBombIndex];
                var hitCollisionItem = bomb.getBody();
                p2.vec2.add(hitCollisionItem.position, mouseP, mouseSubVec);
                hitCollisionItem.velocity = p2.vec2.create();
                _this.setPositionBodyToShape(hitCollisionItem);
            }
        }, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, function (e) {
            if (hitBombIndex != -1) {
                var bomb = _this.bombArray[hitBombIndex];
                var hitCollisionItem = bomb.getBody();
                // console.log(
                //     wallArray[0].x, wallArray[0].y
                //     , bomb.shape.x, bomb.shape.y
                //     , bomb.shapeBody.position[0], bomb.shapeBody.position[1]
                // );
                if (e.stageX >= _this.stageWidth * 0.2
                    && e.stageX <= _this.stageWidth * 0.8
                    && e.stageY >= _this.stageHeight * 0
                    && e.stageY <= _this.stageHeight * 1) {
                    // console.log('紅')
                    bomb.putDownDangerous();
                }
                else {
                    // console.log('綠');
                    bomb.putDownSafe();
                }
                var score = 0;
                for (var i = 0; i < _this.bombArray.length; i++) {
                    var bomb_1 = _this.bombArray[i];
                    if (bomb_1.catchState) {
                        score += bomb_1.getScore();
                    }
                }
                // console.log(score)
                _this.text.text = "score:" + score;
                _this.world.addBody(hitCollisionItem);
                hitBombIndex = -1;
            }
        }, this);
        this.drawText();
    };
    MainScene.prototype.resetGame = function () {
        var _this = this;
        egret.Tween.get(this.startGameBtn)
            .set({ alpha: 0 })
            .to({ alpha: 1 }, 500);
        egret.Tween.get(this.background)
            .set({ alpha: 0 })
            .to({ alpha: 1 }, 500);
        this.startGameBtn.once(egret.TouchEvent.TOUCH_TAP, function () {
            _this.startTime = egret.getTimer();
            _this.randomBombGrid();
            _this.resetBomb();
            // this.startTick();
            egret.Tween.get(_this.startGameBtn).to({ alpha: 0 }, 500);
            // .call(() => this.removeChild(this.startGameBtn));
            egret.Tween.get(_this.background).to({ alpha: 0 }, 500);
            // .call(() => this.removeChild(this.background));
        }, this);
    };
    MainScene.prototype.startTick = function () {
        var _this = this;
        egret.startTick(function (timeStamp) {
            _this.timeShape.graphics.clear();
            _this.timeShape.graphics.beginFill(0xff0000);
            var d = ((egret.getTimer() - _this.startTime) / _this.maxLifeTime);
            // console.log(this.startTime, this.maxLifeTime)
            var width = d * _this.stage.stageWidth;
            _this.timeShape.graphics.drawRect(0, 0, width, 10);
            _this.timeShape.graphics.endFill();
            console.log(1);
            if (d > 1) {
                _this.resetGame();
                return true;
            }
            // console.log(maxTime);
            _this.world.step(16 / 1000);
            for (var i = 0; i < _this.bombArray.length; i++) {
                var item = _this.bombArray[i];
                item.drawTimeLife(timeStamp);
                item.randomMove(5);
                item.setParticlePosition();
            }
            for (var i = 0; i < _this.world.bodies.length; i++) {
                var boxBody = _this.world.bodies[i];
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
            // if (body.sleepState == p2.Body.SLEEPING) {
            //     box.alpha = 0.5;
            // } else {
            //     box.alpha = 1;
            // }
        }
    };
    MainScene.prototype.drawText = function () {
        this.text = new egret.TextField;
        this.addChild(this.text);
        this.text.size = 20;
        this.text.x = 0;
        this.text.y = this.stage.stageHeight - 20;
        this.text.width = this.stage.stageWidth;
        this.text.textAlign = egret.HorizontalAlign.CENTER;
        this.text.textColor = 0x000000;
        this.text.type = egret.TextFieldType.DYNAMIC;
        this.text.lineSpacing = 6;
        this.text.multiline = true;
        this.text.text = "請將丸子移出油鍋(越接近油的顏色分數越高)";
    };
    return MainScene;
}(eui.Component));
__reflect(MainScene.prototype, "MainScene");
//# sourceMappingURL=MainScene.js.map