class MaskScene extends eui.Component {
    private startGameBtn: eui.Button;
    // private background: eui.Rect;
    protected createChildren(): void {
        super.createChildren();
        this.skinName = skins.MaskSceneSkin;
    }
    public listenerClickBtn(handler) {
        this.startGameBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, handler, this);
    }
}