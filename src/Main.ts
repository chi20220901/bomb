//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {
    protected createChildren(): void {
        super.createChildren();
        egret.lifecycle.onPause = () => egret.ticker.pause();
        egret.lifecycle.onResume = () => egret.ticker.resume();

        egret.registerImplementation("eui.IAssetAdapter", new AssetAdapter());
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());

        this.runGame();
    }

    private async loadResource() {

        const loadingView = new LoadingUI();
        this.stage.addChild(loadingView);
        await RES.loadConfig("resource/default.res.json", "resource/");
        await new Promise((resolve) => {
            new eui.Theme("resource/default.thm.json", this.stage)
                .once(eui.UIEvent.COMPLETE, resolve, this);
        });
        await RES.loadGroup("preload", 0, loadingView);
        this.stage.removeChild(loadingView);
    }

    private async runGame() {
        await this.loadResource();
        const mainScene = new MainScene();
        this.addChild(mainScene);
        mainScene.initWall();
        mainScene.initBomb();
        // mainScene.startTick();
        const maskScene = new MaskScene();
        egret.Tween.get(maskScene).set({ alpha: 1 });
        egret.Tween.get(mainScene).set({ alpha: 0 });
        this.addChild(maskScene);
        maskScene.listenerClickBtn(() => {
            egret.Tween.get(maskScene).to({ alpha: 0 }, 500).call(() => this.removeChild(maskScene))
            egret.Tween.get(mainScene).to({ alpha: 1 }, 500);
            mainScene.startTick();
            // console.log('click')
        });

        // const skeletonData = RES.getRes("Sheep_Ani_1_ske_json");
        // const textureData = RES.getRes("Sheep_Ani_1_tex_json");
        // const texture = RES.getRes("Sheep_Ani_1_tex_png");

        // const factory = dragonBones.EgretFactory.factory;
        // factory.parseDragonBonesData(skeletonData);
        // factory.parseTextureAtlasData(textureData, texture);

        // const armatureDisplay = factory.buildArmatureDisplay("Armature");

        // armatureDisplay.animation.play("goat_idle_anim");

        // const scale = this.stage.stageWidth * 0.2 / 700;
        // armatureDisplay.scaleX = -scale;
        // armatureDisplay.scaleY = scale;
        // armatureDisplay.y = this.stage.stageHeight;
        // armatureDisplay.x = this.stage.stageWidth * 0.2 / 2;

        // this.addChild(armatureDisplay);
        // console.log(armatureDisplay)
        // this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (e: egret.TouchEvent) => {
        //     armatureDisplay.x = e.stageX;
        //     armatureDisplay.y = e.stageY;
        // }, this);

        // armatureDisplay.height
    }

}
