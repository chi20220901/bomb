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
var MaskScene = (function (_super) {
    __extends(MaskScene, _super);
    function MaskScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaskScene.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        // this.skinName=skins.MasK
    };
    return MaskScene;
}(eui.Component));
__reflect(MaskScene.prototype, "MaskScene");
//# sourceMappingURL=MaskScene.js.map