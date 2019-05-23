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
 * 玩家自己
 */
var MyPlayerView = (function (_super) {
    __extends(MyPlayerView, _super);
    function MyPlayerView() {
        var _this = _super.call(this) || this;
        _this._faceBg.visible = false;
        var nickNameBg = DUtils.createBitmapByName("nnGame2_json.nameBg");
        nickNameBg.x = 154;
        nickNameBg.y = 151;
        _this.addChild(nickNameBg);
        _this._nickNameTF = new egret.TextField();
        _this._nickNameTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        _this._nickNameTF.size = 30;
        _this._nickNameTF.textColor = 0xffffff;
        _this._nickNameTF.textAlign = egret.HorizontalAlign.CENTER;
        _this._nickNameTF.width = 154;
        _this._nickNameTF.x = 146;
        _this._nickNameTF.y = 157;
        _this.addChild(_this._nickNameTF);
        _this._nickNameTF.text = "...";
        var goldBg = DUtils.createBitmapByName("nnGame2_json.nameBg");
        goldBg.x = 389;
        goldBg.y = 151;
        _this.addChild(goldBg);
        _this._scoreTF = new egret.TextField();
        _this._scoreTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        _this._scoreTF.size = 30;
        _this._scoreTF.textColor = 0xffdb56;
        _this._scoreTF.textAlign = egret.HorizontalAlign.CENTER;
        _this._scoreTF.width = 154;
        _this._scoreTF.x = 380;
        _this._scoreTF.y = 157;
        _this.addChild(_this._scoreTF);
        _this._scoreTF.text = "";
        _this._kanpaiTip = new egret.Bitmap();
        _this._kanpaiTip.texture = RES.getRes("zjhGame_json.kanpaiTip");
        _this.addChild(_this._kanpaiTip);
        _this._kanpaiTip.x = 444;
        _this._kanpaiTip.y = 43;
        _this._kanpaiTip.visible = false;
        _this._cardGroup.touchChildren = false;
        _this._cardGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTouchCard, _this);
        return _this;
    }
    MyPlayerView.prototype.reset = function () {
        _super.prototype.reset.call(this);
        this._cardGroup.showPokerValue(false);
        this._cardGroup.visible = false;
        this._kanpaiTip.visible = false;
    };
    MyPlayerView.prototype.hidePoker = function () {
        this._kanpaiTip.visible = false;
        this._cardGroup.showPokerValue(false);
        this._cardGroup.visible = false;
        this._giveuped.visible = false;
    };
    /**
     * 看牌
     */
    MyPlayerView.prototype.lookPoker = function (cardList, showAnimation) {
        if (showAnimation === void 0) { showAnimation = true; }
        _super.prototype.lookPoker.call(this, cardList, showAnimation);
        if (cardList != null && cardList.length > 0)
            this._kanpaiTip.visible = false;
    };
    // 更新牌的状态
    MyPlayerView.prototype.updateStatus = function (status) {
        _super.prototype.updateStatus.call(this, status);
        this._kanpaiTip.visible = (status == PlayerView.NOT_LOOK && this._cardGroup.visible);
    };
    Object.defineProperty(MyPlayerView.prototype, "canLook", {
        set: function (value) {
            if (value) {
                this._kanpaiTip.visible = true;
                this._cardGroup.touchEnabled = true;
            }
            else {
                this._kanpaiTip.visible = false;
                this._cardGroup.touchEnabled = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    MyPlayerView.prototype.onTouchCard = function (evt) {
        var data = {};
        data["msgType"] = NetAction.look;
        data["msg"] = { "roomId": GameModel.instance().roomId, "playerId": MyUserInfo.getInstance().userId };
        SocketCommand.getInstance().send(data);
    };
    return MyPlayerView;
}(PlayerView));
__reflect(MyPlayerView.prototype, "MyPlayerView");
//# sourceMappingURL=MyPlayerView.js.map