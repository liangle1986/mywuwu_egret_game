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
 * 玩家信息界面
 */
var BasePlayerDetailView = (function (_super) {
    __extends(BasePlayerDetailView, _super);
    function BasePlayerDetailView() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    BasePlayerDetailView.prototype.setData = function (data) {
        if (data === void 0) { data = null; }
        this._data = data;
        var faceUrl = "";
        this._ipTF.text = "";
        this._distanceTF.text = "";
        var nickNameStr = "";
        if (data == null) {
            nickNameStr = MyUserInfo.getInstance().userName;
            this._userIdTF.text = MyUserInfo.getInstance().userId;
            this._ipTF.text = MyUserInfo.getInstance().city; //MyUserInfo.getInstance().ip;
            faceUrl = MyUserInfo.getInstance().faceUrl;
            this._distanceTF.text = "";
            this._xhImg.visible = this._pjImg.visible = this._jdImg.visible = this._dzhImg.visible = this._hcImg.visible = false;
        }
        else {
            nickNameStr = data["nickName"];
            this._userIdTF.text = "ID：" + data["playerId"];
            // this._ipTF.text = data["ip"];
            faceUrl = data["headImgUrl"];
            GameEventManager.removeEvent(NetAction.playerInfo.toString(), this.onPlayerInfoResponse, this);
            GameEventManager.addEvent(NetAction.playerInfo.toString(), this.onPlayerInfoResponse, this);
            var msgObj = {};
            msgObj["msgType"] = NetAction.playerInfo;
            msgObj["token"] = GameModel.instance().token;
            msgObj["msg"] = { "otherPlayerId": data["playerId"] };
            SocketCommand.getInstance().send(msgObj);
            if (data["playerId"] == MyUserInfo.getInstance().userId)
                this._xhImg.visible = this._pjImg.visible = this._jdImg.visible = this._dzhImg.visible = this._hcImg.visible = false;
            else
                this._xhImg.visible = this._pjImg.visible = this._jdImg.visible = this._dzhImg.visible = this._hcImg.visible = true;
        }
        var strLen = StringUtils.getStringLen(nickNameStr);
        if (strLen > 8) {
            nickNameStr = nickNameStr.substr(0, 8) + "...";
        }
        this._nickNameTF.text = nickNameStr;
        this._faceImg.load(faceUrl);
    };
    BasePlayerDetailView.prototype.onPlayerInfoResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        this._ipTF.text = data["address"];
        this._distanceTF.text = data["distance"];
    };
    BasePlayerDetailView.prototype.showComplete = function () {
        this._bg = DUtils.createBitmapByName("playerInfoBg_png");
        this.addChild(this._bg);
        this._faceImg = new DImage(105, 108, "nnGame_json.testface2");
        this.addChild(this._faceImg);
        this._faceImg.x = 55;
        this._faceImg.y = 42;
        this._nickNameTF = new egret.TextField();
        this._nickNameTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        this._nickNameTF.textColor = 0xffffff;
        this._nickNameTF.size = 29;
        this._nickNameTF.bold = true;
        this._nickNameTF.textAlign = egret.HorizontalAlign.LEFT;
        this.addChild(this._nickNameTF);
        this._nickNameTF.x = 192;
        this._nickNameTF.y = 35;
        this._nickNameTF.text = "--";
        // this._nickNameTF.text = MyUserInfo.getInstance().userName;
        this._userIdTF = new egret.TextField();
        this._userIdTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        this._userIdTF.textColor = 0xffffff;
        this._userIdTF.size = 25;
        this._userIdTF.bold = true;
        this._userIdTF.textAlign = egret.HorizontalAlign.LEFT;
        this.addChild(this._userIdTF);
        this._userIdTF.x = 194;
        this._userIdTF.y = 81;
        // this._userIdTF.text = MyUserInfo.getInstance().userId;
        this._ipTF = new egret.TextField();
        this._ipTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        this._ipTF.textColor = 0xffffff;
        this._ipTF.size = 25;
        this._ipTF.bold = true;
        this._ipTF.textAlign = egret.HorizontalAlign.LEFT;
        this.addChild(this._ipTF);
        this._ipTF.x = 194;
        this._ipTF.y = 118;
        // this._ipTF.text = MyUserInfo.getInstance().ip;
        this._distanceTF = new egret.TextField();
        this._distanceTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        this._distanceTF.textColor = 0xffffff;
        this._distanceTF.size = 25;
        this._distanceTF.bold = true;
        this._distanceTF.textAlign = egret.HorizontalAlign.LEFT;
        this.addChild(this._distanceTF);
        this._distanceTF.x = 194;
        this._distanceTF.y = 155;
        this._xhImg = new DButton("emotion_json.xh");
        this._xhImg.x = 35;
        this._xhImg.y = 208;
        this.addChild(this._xhImg);
        this._pjImg = new DButton("emotion_json.pj");
        this._pjImg.x = 133;
        this._pjImg.y = 202;
        this.addChild(this._pjImg);
        this._jdImg = new DButton("emotion_json.jd");
        this._jdImg.x = 221;
        this._jdImg.y = 204;
        this.addChild(this._jdImg);
        this._dzhImg = new DButton("emotion_json.dzh");
        this._dzhImg.x = 294;
        this._dzhImg.y = 205;
        this.addChild(this._dzhImg);
        this._hcImg = new DButton("emotion_json.hc");
        this._hcImg.x = 372;
        this._hcImg.y = 213;
        this.addChild(this._hcImg);
        this._closeBtn = new DButton("hall_json.closeBtn");
        this.addChild(this._closeBtn);
        this._closeBtn.x = 385;
        this._closeBtn.y = -29;
        this.iframeWidth = this._bg.width;
        this.iframeHeight = this._bg.height;
        var bg = new egret.Shape();
        bg.graphics.beginFill(0, 0.5);
        bg.graphics.drawRect(0, 0, GameGlobal.stage.stageWidth, GameGlobal.stage.stageHeight);
        bg.graphics.endFill();
        this.addChildAt(bg, 0);
        bg.x = -(GameGlobal.stage.stageWidth - this.iframeWidth) >> 1;
        bg.y = -(GameGlobal.stage.stageHeight - this.iframeHeight) >> 1;
        this._closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this._xhImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this._pjImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this._jdImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this._dzhImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this._hcImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    };
    BasePlayerDetailView.prototype.hide = function () {
        GameEventManager.removeEvent(NetAction.playerInfo.toString(), this.onPlayerInfoResponse, this);
    };
    BasePlayerDetailView.prototype.onTouchTap = function (evt) {
        if (evt.currentTarget == this._closeBtn) {
            GameGlobal.iframeLayer.hideIFrame2(BasePlayerDetailView);
        }
        else {
            var chatMsg = "xh";
            if (evt.currentTarget == this._xhImg) {
            }
            else if (evt.currentTarget == this._pjImg) {
                chatMsg = "pj";
            }
            else if (evt.currentTarget == this._jdImg) {
                chatMsg = "jd";
            }
            else if (evt.currentTarget == this._dzhImg) {
                chatMsg = "dzh";
            }
            else if (evt.currentTarget == this._hcImg) {
                chatMsg = "hc";
            }
            var data = {};
            data["msgType"] = NetAction.chatMsg;
            data["msg"] = { "chatType": 5, "chatMsg": chatMsg, "otherPlayerId": this._data["playerId"] };
            SocketCommand.getInstance().send(data);
            GameGlobal.iframeLayer.hideIFrame2(BasePlayerDetailView);
        }
    };
    return BasePlayerDetailView;
}(IFrameBase));
__reflect(BasePlayerDetailView.prototype, "BasePlayerDetailView");
//# sourceMappingURL=BasePlayerDetailView.js.map