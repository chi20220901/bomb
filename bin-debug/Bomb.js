var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Bomb = (function () {
    function Bomb(x, y) {
        this.factor = 50;
        this.radius = 1;
        this.catchState = false;
        this.totalTime = (Math.floor(Math.random() * 10) + 10) * 1000;
        this.finishTime = this.totalTime + egret.getTimer();
        this.shape = new egret.Shape();
        this.shape.anchorOffsetX = this.radius * this.factor;
        this.shape.anchorOffsetY = this.radius * this.factor;
        // this.shape.graphics.beginFill(0xffffff, 1);
        // this.shape.graphics.drawCircle(this.radius * this.factor, this.radius * this.factor, this.radius * this.factor);
        // this.shape.graphics.endFill();
        this.shapeBody = new p2.Body({
            mass: 1,
            position: [x, y],
            type: p2.Body.DYNAMIC,
            // velocity: [0, 0],
            fixedRotation: true,
        });
        this.shapeBody.addShape(new p2.Circle({ radius: this.radius }));
        this.shapeBody.displays = [this.shape];
    }
    Bomb.prototype.drawTimeLife = function (timeStamp) {
        var dt = 1 - (this.finishTime - timeStamp) / this.totalTime;
        if (this.catchState) {
            dt = 1 - this.catchTime / this.totalTime;
        }
        if (dt > 1) {
            dt = 1;
        }
        var progressPercentage = ((dt * 100) >> 0) / 100;
        var total = 0;
        var rgbBase = [0x0000ff, 0x00ff00, 0xff0000];
        //白黃黑
        var u = progressPercentage, startColor = 0xffffff, endColor = 0xedc532;
        if (progressPercentage >= 0.5) {
            u = (u - 0.5);
            startColor = endColor;
            endColor = 0x000000;
        }
        u *= 2;
        for (var i = 0; i < rgbBase.length; i++) {
            var a = (startColor & rgbBase[i]) >> i * 8;
            var b = (endColor & rgbBase[i]) >> i * 8;
            var c = (1 - u) * a + u * b;
            total += c << i * 8;
        }
        this.shape.graphics.clear();
        this.shape.graphics.beginFill(total, 1);
        this.shape.graphics.drawCircle(this.radius * this.factor, this.radius * this.factor, this.radius * this.factor);
        // this.shape.graphics.lineStyle(4, 0x000000);
        // const start = -90;
        // const end = start + progressPercentage * 360;
        // this.shape.graphics.drawArc(
        //     this.radius * this.factor,
        //     this.radius * this.factor,
        //     this.radius * this.factor, Math.PI / 180 * start,
        //     Math.PI / 180 * end, false
        // );
        this.shape.graphics.endFill();
    };
    Bomb.prototype.addWorld = function (world) {
        world.addBody(this.shapeBody);
    };
    Bomb.prototype.addStage = function (stage) {
        stage.addChild(this.shape);
    };
    Bomb.prototype.randomMove = function (len) {
        if (len === void 0) { len = 10; }
        if (this.catchState)
            return;
        var center = len / 2;
        if (p2.vec2.squaredLength(this.shapeBody.velocity) < 2 * 2) {
            this.shapeBody.velocity = p2.vec2.fromValues(Math.floor(Math.random() * len * 10) / 10 - center, Math.floor(Math.random() * len * 10) / 10 - center);
        }
    };
    Bomb.prototype.getBody = function () {
        return this.shapeBody;
    };
    Bomb.prototype.catchUp = function () {
        if (this.catchState)
            return;
        this.catchState = true;
        this.catchTime = this.finishTime - egret.getTimer();
        this.shapeBody.type = p2.Body.KINEMATIC;
    };
    Bomb.prototype.putDownDangerous = function () {
        this.catchState = false;
        this.finishTime = this.catchTime + egret.getTimer();
        this.shapeBody.type = p2.Body.DYNAMIC;
    };
    Bomb.prototype.putDownSafe = function () {
        this.catchState = true;
        this.finishTime = this.catchTime + egret.getTimer();
        this.shapeBody.type = p2.Body.KINEMATIC;
    };
    return Bomb;
}());
__reflect(Bomb.prototype, "Bomb");
//# sourceMappingURL=Bomb.js.map