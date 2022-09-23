class Bomb {
    private shape: egret.Shape;
    private shapeBody: p2.Body;
    private finishTime;
    private factor: number = 50;
    private radius: number = 1;
    private totalTime: number;
    private catchState: boolean = false;
    private catchTime: number;
    constructor(x, y) {
        this.totalTime = (Math.floor(Math.random() * 10) + 10) * 1000;
        this.finishTime = this.totalTime + egret.getTimer();

        this.shape = new egret.Shape();

        this.shape.anchorOffsetX = this.radius * this.factor;
        this.shape.anchorOffsetY = this.radius * this.factor;

        this.shapeBody = new p2.Body({
            mass: 1,
            position: [x, y],
            type: p2.Body.DYNAMIC,
            fixedRotation: true,
        });

        this.shapeBody.addShape(new p2.Circle({ radius: this.radius }));
        this.shapeBody.displays = [this.shape];

    }

    public drawTimeLife(timeStamp) {
        let dt = 1 - (this.finishTime - timeStamp) / this.totalTime;

        if (this.catchState) {
            dt = 1 - this.catchTime / this.totalTime;
        }
        if (dt > 1) {
            dt = 1
        }
        let progressPercentage = ((dt * 100) >> 0) / 100;
        let total = 0;
        const rgbBase = [0x0000ff, 0x00ff00, 0xff0000];
        //白黃黑
        let u = progressPercentage, startColor = 0xffffff, endColor = 0xefd54d;
        if (progressPercentage >= 0.5) {
            u = (u - 0.5)
            startColor = endColor;
            endColor = 0x000000;
        }
        u *= 2;
        for (let i = 0; i < rgbBase.length; i++) {
            const a = (startColor & rgbBase[i]) >> i * 8;
            const b = (endColor & rgbBase[i]) >> i * 8;
            const c = (1 - u) * a + u * b;
            total += c << i * 8;
        }

        this.shape.graphics.clear();
        this.shape.graphics.beginFill(total, 1);
        let radius = this.radius * this.factor;
        // if (this.catchState) {
        //     radius *= 1.5;
        // }
        this.shape.graphics.drawCircle(radius, radius, radius);

        // console.log(this.shapeBody.shapes[0].radius);
        this.shape.graphics.lineStyle(4, 0x000000);
        const start = -90;
        const end = start + progressPercentage * 360;
        this.shape.graphics.drawArc(
            this.radius * this.factor,
            this.radius * this.factor,
            this.radius * this.factor, Math.PI / 180 * start,
            Math.PI / 180 * end, false
        );

        this.shape.graphics.endFill();
    }
    public addWorld(world: p2.World) {
        world.addBody(this.shapeBody)

    }
    private particle: particle.GravityParticleSystem;
    public addStage(stage) {

        this.particle = new particle.GravityParticleSystem(RES.getRes('newParticle_png'), RES.getRes('newParticle_json'));
        stage.addChild(this.particle);
        this.particle.start();
        this.particle.zIndex = 1;

        this.shape.zIndex = 2;

        stage.addChild(this.shape);
    }

    public setParticlePosition() {
        if (this.catchState) return;
        if (!this.particle) return;
        this.particle.x = this.shape.x;
        this.particle.y = this.shape.y;
        this.particle.anchorOffsetX = 100;
        this.particle.anchorOffsetY = 100;
    }

    public randomMove(len = 10): void {
        if (this.catchState) return;
        const center = len / 2;
        if (p2.vec2.squaredLength(this.shapeBody.velocity) < 2 * 2) {
            this.shapeBody.velocity = p2.vec2.fromValues(
                Math.floor(Math.random() * len * 10) / 10 - center
                ,
                Math.floor(Math.random() * len * 10) / 10 - center
            );
        }
    }
    public getBody() {
        return this.shapeBody;
    }
    public catchUp() {
        if (this.catchState) return
        this.catchState = true;
        this.catchTime = this.finishTime - egret.getTimer();
        this.shapeBody.type = p2.Body.KINEMATIC;
        this.particle?.stop();
    }

    public putDownDangerous() {
        this.catchState = false;
        this.finishTime = this.catchTime + egret.getTimer();
        this.shapeBody.type = p2.Body.DYNAMIC;
        this.particle?.start();
    }

    public putDownSafe() {
        // const catchStateChange = this.catchState == true;
        this.catchState = true;
        this.finishTime = this.catchTime + egret.getTimer();
        this.shapeBody.type = p2.Body.KINEMATIC;
        // return catchStateChange;
    }
    private score = 0;
    public getScore() {
        const timeStamp = egret.getTimer()
        let dt = 1 - (this.finishTime - timeStamp) / this.totalTime;
        if (this.catchState) {
            dt = 1 - this.catchTime / this.totalTime;
        }
        if (dt > 1) {
            dt = 1;
        }
        this.score = ((0.5 - Math.abs(dt - 0.5)) * 2 * 100) >> 0;
        return this.score;
    }
}