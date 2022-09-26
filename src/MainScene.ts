class MainScene extends eui.Component {

    // private safeArea1: eui.Rect;
    // private safeArea2: eui.Rect;
    // private dangerousArea: eui.Rect;

    private factor: number = 50;
    private startTime: number;
    private stageWidth: number;
    private stageHeight: number;

    protected createChildren(): void {
        super.createChildren();
        this.skinName = skins.MainSceneSkin;

        this.stageWidth = egret.MainContext.instance.stage.stageWidth;
        this.stageHeight = egret.MainContext.instance.stage.stageHeight;
        this.initBombGrid();
        this.randomBombGrid();
        this.initWorld();
        this.timeShape = new egret.Shape();
        this.addChild(this.timeShape);

    }
    public initTimer() {
        this.text.text = "請將丸子移出油鍋(越接近油的顏色分數越高)";
        this.startTime = egret.getTimer();
    }
    private pointArray = [];
    public initBombGrid() {
        const wCount = 5;
        const hCount = 5;
        const w = this.stageWidth * 0.6 / wCount;
        const h = this.stageHeight / hCount;
        const baseX = this.stageWidth * 0.2;
        const baseY = this.stageHeight * 0;
        this.pointArray = [];
        for (let i = 0; i < wCount; i++) {
            for (let j = 0; j < hCount; j++) {
                const x = (baseX + w * i + w / 2) / this.factor;
                const y = (baseY + h * j + h / 2) / this.factor;
                this.pointArray.push({ x, y });
            }
        }
    }
    public randomBombGrid() {
        for (let i = 0; i < this.pointArray.length; i++) {
            this.pointArray[i].random = Math.random();
        }
        this.pointArray.sort((a, b) => {
            return a.random - b.random;
        })
    }
    private world: p2.World;
    private initWorld() {
        this.world = new p2.World({
            gravity: [0, 0],
        });
        this.world.sleepMode = p2.World.BODY_SLEEPING;
    }
    private makeWallItem({ x, y, w, h }) {
        const body = new p2.Body({
            mass: 1,
            type: p2.Body.STATIC,
            position: [x, y]
        });
        body.addShape(new p2.Box({ width: w, height: h }));

        const shape = new egret.Shape();
        shape.graphics.beginFill(0x0000ff, 1);
        shape.graphics.drawRect(x * this.factor, y * this.factor, w * this.factor, h * this.factor);
        shape.graphics.endFill();
        shape.anchorOffsetX = w * this.factor / 2;
        shape.anchorOffsetY = h * this.factor / 2;
        body.displays = [shape];
        this.addChild(shape);
        this.world.addBody(body);
        return body;
    }
    public initWall() {
        const stageWidth = egret.MainContext.instance.stage.stageWidth;
        const stageHeight = egret.MainContext.instance.stage.stageHeight;
        const width = stageWidth / this.factor;
        const height = stageHeight / this.factor;
        const thickness = 1 / 10;
        const wallArray = [
            { x: width / 2, y: height + thickness / 2, w: width, h: thickness },
            { x: width / 2, y: -thickness / 2, w: width, h: thickness },
            { x: -thickness / 2 + width * 0.2, y: height / 2, w: thickness, h: height },
            { x: width + thickness / 2 - width * 0.2, y: height / 2, w: thickness, h: height },
        ];
        for (let i = 0; i < wallArray.length; i++) {
            this.makeWallItem(wallArray[i]);
        }
    }
    private bombCount = 10;
    private maxLifeTime = 0;
    private bombBodyArray = [];
    private bombArray = [];
    public resetBomb() {
        this.randomBombGrid();
        for (let i = 0; i < this.bombCount; i++) {
            const bomb = this.bombArray[i];
            const { x, y } = this.pointArray[i];
            const lifeTime = (Math.floor(Math.random() * 10) + 10) * 1000;
            // const lifeTime = 2000;
            if (lifeTime > this.maxLifeTime) {
                this.maxLifeTime = lifeTime;
            }
            bomb.putDownDangerous();
            bomb.setLifeTime(lifeTime);
            bomb.setP(x, y);
            const body = bomb.getBody()
            this.world.removeBody(body);
            this.world.addBody(body);
        }
    }

    public initBomb() {
        this.bombArray = [];
        this.bombBodyArray = [];
        for (let i = 0; i < this.bombCount; i++) {
            const bomb = new Bomb();
            bomb.addStage(this);
            bomb.addWorld(this.world);
            this.bombArray.push(bomb);
            this.bombBodyArray.push(bomb.getBody());
        }
        this.resetBomb()

        let hitBombIndex = -1;
        let mouseSubVec;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (e: egret.TouchEvent) => {
            hitBombIndex = -1;
            const mouseP = p2.vec2.fromValues(e.stageX / this.factor, (this.stageHeight - e.stageY) / this.factor);
            const collisionArray = this.world.hitTest(mouseP, this.world.bodies, 0.1);
            while (collisionArray.length > 0) {
                const item = collisionArray.shift();
                if (item.type !== p2.Body.STATIC) {
                    const index = this.bombBodyArray.indexOf(item);
                    if (index != -1) {
                        hitBombIndex = index;
                        const bomb = this.bombArray[hitBombIndex];
                        bomb.catchUp();

                        this.world.removeBody(item);
                        item.sleep();
                        mouseSubVec = p2.vec2.create();
                        p2.vec2.sub(mouseSubVec, item.position, mouseP);
                        break;
                    }
                }
            }
        }, this);

        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, (e: egret.TouchEvent) => {
            if (hitBombIndex != -1) {
                const mouseP = p2.vec2.fromValues(e.stageX / this.factor, (this.stageHeight - e.stageY) / this.factor);
                const bomb = this.bombArray[hitBombIndex];
                const hitCollisionItem = bomb.getBody();
                p2.vec2.add(
                    hitCollisionItem.position,
                    mouseP,
                    mouseSubVec
                );
                hitCollisionItem.velocity = p2.vec2.create();
                this.setPositionBodyToShape(hitCollisionItem);
            }
        }, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, (e: egret.TouchEvent) => {
            if (hitBombIndex != -1) {
                const bomb = this.bombArray[hitBombIndex];
                const hitCollisionItem = bomb.getBody();

                if (
                    e.stageX >= this.stageWidth * 0.2
                    && e.stageX <= this.stageWidth * 0.8
                    && e.stageY >= this.stageHeight * 0
                    && e.stageY <= this.stageHeight * 1
                ) {
                    // console.log('紅')
                    bomb.putDownDangerous()
                } else {
                    // console.log('綠');
                    bomb.putDownSafe()
                }

                this.text.text = "score:" + this.getScore();
                this.world.addBody(hitCollisionItem);
                hitBombIndex = -1;
            }
        }, this);

        this.drawText();
    }
    private timeShape;
    public startTick() {
        egret.startTick((timeStamp) => {
            let d = ((egret.getTimer() - this.startTime) / this.maxLifeTime);
            if (d > 1) {
                this.resetGame();
                return true;
            }


            // console.log(maxTime);
            this.world.step(16 / 1000);
            for (let i = 0; i < this.bombArray.length; i++) {
                const item = this.bombArray[i];
                item.drawTimeLife(timeStamp);
                item.randomMove(5);
                item.setParticlePosition();
            }
            for (let i = 0; i < this.world.bodies.length; i++) {
                const boxBody = this.world.bodies[i];
                if (boxBody.type == p2.Body.STATIC) continue
                this.setPositionBodyToShape(boxBody);
            }
            this.timeShape.graphics.clear();
            this.timeShape.graphics.beginFill(0xff0000);
            // console.log(egret.getTimer());
            const width = d * this.stage.stageWidth;
            this.timeShape.graphics.drawRect(0, 0, width, 10);
            this.timeShape.graphics.endFill();
            return false;
        }, this);
    }
    public setPositionBodyToShape(body: p2.Body) {
        const stageHeight = egret.MainContext.instance.stage.stageHeight;
        const box: egret.DisplayObject = body.displays[0];
        if (box) {
            box.x = body.position[0] * this.factor;
            box.y = stageHeight - (body.position[1] * this.factor);

            box.rotation = 360 - (body.angle + body.shapes[0].angle) * 180 / Math.PI;

        }
    }
    private text: egret.TextField;
    public drawText() {
        this.text = new egret.TextField;
        this.addChild(this.text);

        this.text.size = 20;
        this.text.x = 0;
        this.text.y = this.stage.stageHeight - 20;
        this.text.width = this.stage.stageWidth
        this.text.textAlign = egret.HorizontalAlign.CENTER
        this.text.textColor = 0x000000;
        this.text.type = egret.TextFieldType.DYNAMIC;
        this.text.lineSpacing = 6;
        this.text.multiline = true;

    }
    private resetGame: Function;
    public endHandler(func) {
        this.resetGame = func
    }
    public getScore() {
        let score = 0;
        for (let i = 0; i < this.bombArray.length; i++) {
            const bomb = this.bombArray[i];
            if (bomb.catchState) {
                score += bomb.getScore();
            }
        }
        return score;
    }
}