class MainScene extends eui.Component {
    private startGameBtn: eui.Button;
    private safeArea1: eui.Rect;
    private safeArea2: eui.Rect;
    private dangerousArea: eui.Rect;
    private background: eui.Rect;
    private factor: number = 50;
    protected createChildren(): void {
        super.createChildren();
        this.skinName = skins.MainSceneSkin;
        // this.sortableChildren = true;
        // this.startGameBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startHandler, this);
        setTimeout(this.startHandler.bind(this), 100);
        // this.startHandler.bind(this)()
        // this.addEventListener(egret.Event.ADDED_TO_STAGE, this.startHandler, this);
    }

    private startHandler() {
        const areaArray = [this.safeArea1, this.safeArea2, this.dangerousArea];
        egret.Tween.get(this.startGameBtn).to({ alpha: 0 }, 500).call(() => this.removeChild(this.startGameBtn));
        egret.Tween.get(this.background).to({ alpha: 0 }, 500).call(() => this.removeChild(this.background));
        for (let i = 0; i < areaArray.length; i++) {
            egret.Tween.get(areaArray[i])
                .call(() => areaArray[i].fillAlpha = 1)
                .set({ alpha: 0 })
                .to({ alpha: 1 }, 500);
        }

        const stageWidth = egret.MainContext.instance.stage.stageWidth;
        const stageHeight = egret.MainContext.instance.stage.stageHeight;

        // console.log(stageWidth, stageHeight);

        const wCount = 5;
        const hCount = 5;
        const w = stageWidth * 0.6 / wCount;
        const h = stageHeight / hCount;
        const pointArray = [];
        const baseX = stageWidth * 0.2;
        const baseY = stageHeight * 0;
        for (let i = 0; i < wCount; i++) {
            for (let j = 0; j < hCount; j++) {
                const x = (baseX + w * i + w / 2) / this.factor;
                const y = (baseY + h * j + h / 2) / this.factor;
                pointArray.push({ x, y, random: Math.random() });
            }
        }

        pointArray.sort((a, b) => {
            return a.random - b.random;
        })

        const world: p2.World = new p2.World({
            gravity: [0, 0],
        });
        world.sleepMode = p2.World.BODY_SLEEPING;

        const makeWall = ({ x, y, w, h }) => {
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
            return body;
        }


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
            world.addBody(makeWall(wallArray[i]));
        }

        const bombCount = 10;
        const bombArray = [];
        const bombBodyArray = [];
        for (let i = 0; i < pointArray.length; i++) {
            const { x, y } = pointArray[i]
            const bomb = new Bomb(x, y);
            bomb.addStage(this);
            bomb.addWorld(world);
            bombArray.push(bomb);
            bombBodyArray.push(bomb.getBody());
            if (i + 1 >= bombCount) break;
        }

        let hitBombIndex = -1;
        let mouseSubVec;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (e: egret.TouchEvent) => {
            hitBombIndex = -1;
            const mouseP = p2.vec2.fromValues(e.stageX / this.factor, (stageHeight - e.stageY) / this.factor);
            const collisionArray = world.hitTest(mouseP, world.bodies, 0.1);
            while (collisionArray.length > 0) {
                const item = collisionArray.shift();
                if (item.type !== p2.Body.STATIC) {
                    const index = bombBodyArray.indexOf(item);
                    if (index != -1) {
                        hitBombIndex = index;
                        const bomb = bombArray[hitBombIndex];
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

        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, (e: egret.TouchEvent) => {
            if (hitBombIndex != -1) {
                const mouseP = p2.vec2.fromValues(e.stageX / this.factor, (stageHeight - e.stageY) / this.factor);
                const bomb = bombArray[hitBombIndex];
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
                const bomb = bombArray[hitBombIndex];
                const hitCollisionItem = bomb.getBody();
                console.log(
                    wallArray[0].x, wallArray[0].y
                    // , wallArray[1].x, wallArray[1].y
                    , bomb.shape.x, bomb.shape.y
                    , bomb.shapeBody.position[0], bomb.shapeBody.position[1]
                );

                if (
                    e.stageX >= stageWidth * 0.2
                    && e.stageX <= stageWidth * 0.8
                    && e.stageY >= stageHeight * 0
                    && e.stageY <= stageHeight * 1
                ) {
                    // console.log('紅')
                    bomb.putDownDangerous()

                } else {
                    // console.log('綠');
                    bomb.putDownSafe()
                }
                let score = 0;
                for (let i = 0; i < bombArray.length; i++) {
                    const bomb = bombArray[i];
                    if (bomb.catchState) {
                        score += bomb.getScore();
                    }
                }

                // console.log(score)
                this.text.text = "score:" + score;
                world.addBody(hitCollisionItem);
                hitBombIndex = -1;
            }
        }, this);

        egret.startTick((timeStamp) => {
            world.step(16 / 1000);
            for (let i = 0; i < bombArray.length; i++) {
                const item = bombArray[i];
                item.drawTimeLife(timeStamp);
                item.randomMove(5);
                item.setParticlePosition();
            }
            for (let i = 0; i < world.bodies.length; i++) {
                const boxBody = world.bodies[i];
                if (boxBody.type == p2.Body.STATIC) continue
                this.setPositionBodyToShape(boxBody);
            }
            return false;
        }, this);
        this.drawText();
    }

    public setPositionBodyToShape(body: p2.Body) {
        const stageHeight = egret.MainContext.instance.stage.stageHeight;
        const box: egret.DisplayObject = body.displays[0];
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
        this.text.text = "請將丸子移出油鍋(越接近油的顏色分數越高)";
    }
}