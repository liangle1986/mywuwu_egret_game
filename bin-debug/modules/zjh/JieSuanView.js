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
 * 大结算界面
 */
var JieSuanView = (function (_super) {
    __extends(JieSuanView, _super);
    function JieSuanView() {
        var _this = _super.call(this) || this;
        _this.skinName = "NNGameResultSkin";
        _this.name = "NNGameResult";
        return _this;
    }
    JieSuanView.prototype.childrenCreated = function () {
        this.list.itemRenderer = JieSuanTile;
    };
    JieSuanView.prototype.createComplete = function (event) {
        _super.prototype.createComplete.call(this, event);
    };
    JieSuanView.prototype.show = function () {
        var _this = this;
        if (this.uiOpenData != null) {
            var playerList = this.uiOpenData["playerList"];
            playerList.forEach(function (value, index) {
                if (playerList[index]["playerId"] == _this.uiOpenData["totalWinnerId"])
                    playerList[index]["isWin"] = true;
            }, this);
            this.dataList = new eui.ArrayCollection(playerList);
            this.list.dataProvider = this.dataList;
        }
        this.bindButton(this.closeBtn);
        this.bindButton(this.shareBtn);
    };
    JieSuanView.prototype.touchBindButtonHandler = function (clickTarget) {
        _super.prototype.touchBindButtonHandler.call(this, clickTarget);
        if (clickTarget == this.closeBtn) {
            GameEventManager.addEvent(NetAction.backToHall.toString(), this.backToHallResponse, this);
            var data = {};
            data["msgType"] = NetAction.backToHall;
            data["msg"] = { "playerId": MyUserInfo.getInstance().userId };
            SocketCommand.getInstance().send(data);
        }
        else if (clickTarget == this.shareBtn) {
            var screenShot = new egret.RenderTexture();
            screenShot.drawToTexture(this, new egret.Rectangle(0, 0, this.width, this.height));
            var imgBase64 = "";
            // imgBase64 = screenShot.toDataURL("image/png");
            screenShot.saveToFile("image/png", "result.png");
            egret.ExternalInterface.call("shareResult", imgBase64);
        }
    };
    JieSuanView.prototype.backToHallResponse = function (evt) {
        GameEventManager.dispatchEvent(GameEventManager.QUIT_ROOM);
    };
    return JieSuanView;
}(IFrameBase));
__reflect(JieSuanView.prototype, "JieSuanView");
var JieSuanTile = (function (_super) {
    __extends(JieSuanTile, _super);
    function JieSuanTile() {
        var _this = _super.call(this) || this;
        _this.skinName = "NNGameResultTileSkin";
        return _this;
    }
    JieSuanTile.prototype.childrenCreated = function () {
        this._faceImg = new DImage(52, 54);
        this._faceImg.x = 7;
        this._faceImg.y = 7;
        this.addChild(this._faceImg);
        this.winnerIcon.visible = false;
        this.updateView();
    };
    JieSuanTile.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        LogUtils.log("this.data = " + this.data);
        this.updateView();
    };
    JieSuanTile.prototype.updateView = function () {
        if (this.data != null) {
            this.idTF.text = "ID:" + this.data["playerId"];
            // this._winTF.text = data["winTimes"]; //胜
            // this._lostTF.text = data["loseTimes"]; //负
            // this._totalScoreTF.text = data["totalScore"];
            // this.cardTypeTF.text = "";
            for (var i = 0; i < 7; i++) {
                this["cardTypeTF" + i + "_0"].text = "";
                this["cardTypeTF" + i + "_1"].text = "";
            }
            this["cardTypeTF0_0"].text = "胜";
            this["cardTypeTF0_1"].text = +this.data["winTimes"];
            this["cardTypeTF1_0"].text = "负";
            this["cardTypeTF1_1"].text = +this.data["loseTimes"];
            this["cardTypeTF2_0"].text = "最大牌";
            this["cardTypeTF2_1"].text = PlayerType.getPokerTypeName(this.data["maxCardType"]);
            // this.cardTypeTF.appendText("胜：" +this.data["winTimes"]+"\n");
            // this.cardTypeTF.appendText("" +this.data["loseTimes"]+"\n");
            // this.cardTypeTF.appendText("最大牌型：" + PlayerType.getPokerTypeName(this.data["maxCardType"]));
            var playerObjInfo = GameGlobal.mapLayer.getBattle().getPlayerInfoById(this.data["playerId"]);
            var nickName = playerObjInfo["nickName"];
            var len = StringUtils.getStringLen(nickName);
            if (len > 6) {
                nickName = nickName.substr(0, 6) + "...";
            }
            this.nickNameTF.text = nickName;
            this._faceImg.load(playerObjInfo["headImgUrl"]);
            var totalScore = this.data["totalScore"];
            var len = totalScore.toString().length;
            if (this.data["isWin"]) {
                this.winnerIcon.visible = true;
            }
            if (this.bn && this.contains(this.bn))
                this.removeChild(this.bn);
            if (totalScore > 0) {
                this.bn = new DBitmapNumber(totalScore, 30, 2);
            }
            else {
                this.bn = new DBitmapNumber(totalScore, 30, 1);
            }
            this.addChild(this.bn);
            this.bn.x = (155 - len * 30) >> 1;
            this.bn.y = 366;
        }
    };
    return JieSuanTile;
}(eui.ItemRenderer));
__reflect(JieSuanTile.prototype, "JieSuanTile");
//# sourceMappingURL=JieSuanView.js.map