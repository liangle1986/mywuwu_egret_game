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
/**
 * 全屏界面
 */
var FullScreenIFrame = (function (_super) {
    __extends(FullScreenIFrame, _super);
    function FullScreenIFrame() {
        var _this = _super.call(this) || this;
        _this.showTweenEffect = true;
        _this.isFullScene = true;
        _this.percentHeight = 100;
        _this.percentWidth = 100;
        return _this;
    }
    /**
     * 渐隐显示
     */
    FullScreenIFrame.prototype.tweenShow = function () {
        this.alpha = 1;
        this.x = GameGlobal.stageW;
        egret.Tween.removeTweens(this);
        egret.Tween.get(this).to({ x: 0 }, 200);
    };
    /**缓动隐藏 */
    FullScreenIFrame.prototype.tweenRemove = function () {
        this.alpha = 1;
        egret.Tween.removeTweens(this);
        egret.Tween.get(this).to({ alpha: 0 }, 200).call(this.tweenRemoveComp, this);
    };
    return FullScreenIFrame;
}(IFrameBase));
__reflect(FullScreenIFrame.prototype, "FullScreenIFrame");
//# sourceMappingURL=FullScreenIFrame.js.map