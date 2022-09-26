class MaskScene extends eui.Component {
    private startGameBtn: eui.Button;
    private scoreText: eui.Label;
    // private background: eui.Rect;
    protected createChildren(): void {
        super.createChildren();
        this.skinName = skins.MaskSceneSkin;
    }
    public listenerClickBtn(handler) {
        this.startGameBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, handler, this);
    }
    public setScore(score) {
        this.startGameBtn.label = `重新遊戲`
        this.scoreText.text = `得分:${score}`
    }
}