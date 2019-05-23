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
var PlayerInfoView = (function (_super) {
    __extends(PlayerInfoView, _super);
    function PlayerInfoView() {
        var _this = _super.call(this) || this;
        _this.skinName = "PlayerDetailInfoSkin2";
        return _this;
    }
    PlayerInfoView.prototype.tweenShow = function () {
        _super.prototype.tweenShow.call(this);
        var faceUrl = "";
        this.ipTF.text = "";
        this.distanceTF.text = "";
        var nickNameStr = "";
        if (this.uiOpenData != null) {
            var playerId = this.uiOpenData["playerId"];
            if (playerId == MyUserInfo.getInstance().userId) {
                nickNameStr = MyUserInfo.getInstance().userName;
                this.idTF.text = "ID：" + MyUserInfo.getInstance().userId;
                this.ipTF.text = MyUserInfo.getInstance().city;
                faceUrl = MyUserInfo.getInstance().faceUrl;
                this.distanceTF.text = "";
                this.bq1.visible = this.bq2.visible = this.bq3.visible = this.bq4.visible = this.bq5.visible = false;
            }
            else {
                this.bq1.visible = this.bq2.visible = this.bq3.visible = this.bq4.visible = this.bq5.visible = true;
                nickNameStr = this.uiOpenData["nickName"];
                this.idTF.text = "ID：" + this.uiOpenData["playerId"];
                faceUrl = this.uiOpenData["headImgUrl"];
                GameEventManager.removeEvent(NetAction.playerInfo.toString(), this.onPlayerInfoResponse, this);
                GameEventManager.addEvent(NetAction.playerInfo.toString(), this.onPlayerInfoResponse, this);
                var msgObj = {};
                msgObj["msgType"] = NetAction.playerInfo;
                msgObj["token"] = GameModel.instance().token;
                msgObj["msg"] = { "otherPlayerId": this.uiOpenData["playerId"] };
                SocketCommand.getInstance().send(msgObj);
            }
        }
        if (nickNameStr.length > 8) {
            nickNameStr = nickNameStr.substr(0, 8) + "...";
        }
        this.nickNameTF.text = nickNameStr;
        this._faceImg.load(faceUrl);
        this.bindButton(this.bq1);
        this.bindButton(this.bq2);
        this.bindButton(this.bq3);
        this.bindButton(this.bq4);
        this.bindButton(this.bq5);
    };
    PlayerInfoView.prototype.createComplete = function (event) {
        _super.prototype.createComplete.call(this, event);
        this._faceImg = new DImage(124, 124, "hall_json.testface2");
        this["mainView"].addChild(this._faceImg);
        this._faceImg.x = 45;
        this._faceImg.y = 88;
    };
    PlayerInfoView.prototype.setData = function (data, showPosition) {
        // var faceUrl:string = "";
        // var nickName:string = "";
        // if(data == null)
        // {
        // 	nickName = MyUserInfo.getInstance().userName;
        // 	this._userIdTF.text = MyUserInfo.getInstance().userId;
        // 	this._ipTF.text = MyUserInfo.getInstance().city;
        // 	faceUrl = MyUserInfo.getInstance().faceUrl;
        // }
        // else
        // {
        // 	nickName = data["nickName"];
        // 	this._userIdTF.text = data["playerId"];
        // 	this._ipTF.text = data["ip"];
        // 	faceUrl = data["headImgUrl"];
        // }
        if (data === void 0) { data = null; }
        if (showPosition === void 0) { showPosition = false; }
        // if(nickName.length > 10)
        // {
        // 	nickName = nickName.substr(0, 10)+"...";
        // }
        // this._nickNameTF.text = nickName;
        // if(showPosition)
        // {
        // 	GameEventManager.removeEvent(NetAction.playerInfo.toString(), this.onPlayerInfoResponse, this);
        // 	GameEventManager.addEvent(NetAction.playerInfo.toString(), this.onPlayerInfoResponse, this);
        // 	var data:Object = {};
        // 	data["msgType"] = NetAction.playerInfo;
        // 	data["token"] = GameModel.instance().token;
        // 	SocketCommand.getInstance().send(data);
        // }
        // this._faceImg.texture = RES.getRes("game_json.testFace");
        // this._faceImg.width = 124; this._faceImg.height = 124;
        // this.loadFace(faceUrl);
    };
    PlayerInfoView.prototype.onPlayerInfoResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        this.ipTF.text = data["address"];
        this.distanceTF.text = data["distance"];
    };
    /**
     * 子类如果有bindButton, click事件覆盖次方法实现
     */
    PlayerInfoView.prototype.touchBindButtonHandler = function (clickTarget) {
        _super.prototype.touchBindButtonHandler.call(this, clickTarget);
        var chatMsg = "xh";
        if (clickTarget == this.bq1) {
            chatMsg = "dzh";
        }
        else if (clickTarget == this.bq2) {
            chatMsg = "hc";
        }
        else if (clickTarget == this.bq3) {
            chatMsg = "pj";
        }
        else if (clickTarget == this.bq4) {
            chatMsg = "jd";
        }
        else if (clickTarget == this.bq5) {
            // chatMsg = "dzh";
        }
        var data = {};
        data["msgType"] = NetAction.chatMsg;
        data["msg"] = { "chatType": 5, "chatMsg": chatMsg, "otherPlayerId": this.uiOpenData["playerId"] };
        SocketCommand.getInstance().send(data);
        this.close();
    };
    return PlayerInfoView;
}(IFrameBase));
__reflect(PlayerInfoView.prototype, "PlayerInfoView");
//# sourceMappingURL=PlayerInfoView.js.map