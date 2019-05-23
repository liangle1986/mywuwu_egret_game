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
 * 分享界面
 */
var ShareView = (function (_super) {
    __extends(ShareView, _super);
    function ShareView() {
        var _this = _super.call(this) || this;
        _this.skinName = "ShareSkin";
        return _this;
    }
    ShareView.prototype.childrenCreated = function () {
    };
    ShareView.prototype.createComplete = function (event) {
        _super.prototype.createComplete.call(this, event);
    };
    ShareView.prototype.show = function () {
        this.bindButton(this.sharePublicBtn);
        this.bindButton(this.shareWechatBtn);
    };
    ShareView.prototype.touchBindButtonHandler = function (clickTarget) {
        _super.prototype.touchBindButtonHandler.call(this, clickTarget);
        if (clickTarget == this.shareWechatBtn) {
            egret.ExternalInterface.call("shareToFriend", GameGlobal.shareTitle + "|" + GameGlobal.shareDesc);
        }
        else if (clickTarget == this.sharePublicBtn) {
            egret.ExternalInterface.call("share", GameGlobal.shareTitle + "|" + GameGlobal.shareDesc);
        }
    };
    return ShareView;
}(IFrameBase));
__reflect(ShareView.prototype, "ShareView");
//# sourceMappingURL=ShareView.js.map