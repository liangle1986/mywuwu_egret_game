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
var MallView2 = (function (_super) {
    __extends(MallView2, _super);
    function MallView2() {
        var _this = _super.call(this) || this;
        _this.skinName = "MallSkin";
        _this.name = "MallView";
        return _this;
    }
    MallView2.prototype.tweenShow = function () {
        _super.prototype.tweenShow.call(this);
        this.bindButton(this.copyBtn1);
        this.bindButton(this.copyBtn2);
    };
    /**
     * 子类如果有bindButton, click事件覆盖次方法实现
     */
    MallView2.prototype.touchBindButtonHandler = function (clickTarget) {
        _super.prototype.touchBindButtonHandler.call(this, clickTarget);
        if (clickTarget == this.copyBtn1) {
            egret.ExternalInterface.call("copyToclipboard", MallView2.WECHAT_NUM);
        }
        else if (clickTarget == this.copyBtn2) {
            egret.ExternalInterface.call("copyToclipboard", MallView2.PHONE_NUM);
        }
    };
    MallView2.WECHAT_NUM = "mywuwu";
    MallView2.PHONE_NUM = "杏趣社区";
    return MallView2;
}(IFrameBase));
__reflect(MallView2.prototype, "MallView2");
//# sourceMappingURL=MallView2.js.map