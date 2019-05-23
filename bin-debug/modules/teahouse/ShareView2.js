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
var ShareView2 = (function (_super) {
    __extends(ShareView2, _super);
    function ShareView2() {
        var _this = _super.call(this) || this;
        _this.skinName = "ShareSkin";
        return _this;
    }
    ShareView2.prototype.childrenCreated = function () {
    };
    ShareView2.prototype.createComplete = function (event) {
        _super.prototype.createComplete.call(this, event);
    };
    ShareView2.prototype.show = function () {
        this.bindButton(this.sharePublicBtn);
        this.bindButton(this.shareWechatBtn);
    };
    ShareView2.prototype.touchBindButtonHandler = function (clickTarget) {
        _super.prototype.touchBindButtonHandler.call(this, clickTarget);
        var shareDes = "我在楚风鱼乐棋牌," + MyUserInfo.getInstance().userName + "[茶楼号:" + GameModel.instance().teaHouseNum + "],赶紧加...";
        if (clickTarget == this.shareWechatBtn) {
            egret.ExternalInterface.call("shareToFriend", GameGlobal.shareTitle + "|" + shareDes);
        }
        else if (clickTarget == this.sharePublicBtn) {
            egret.ExternalInterface.call("share", GameGlobal.shareTitle + "|" + shareDes);
        }
    };
    return ShareView2;
}(IFrameBase));
__reflect(ShareView2.prototype, "ShareView2");
//# sourceMappingURL=ShareView2.js.map