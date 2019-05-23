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
var NNGameResult = (function (_super) {
    __extends(NNGameResult, _super);
    function NNGameResult() {
        var _this = _super.call(this) || this;
        _this.skinName = "NNGameResultSkin";
        _this.name = "NNGameResult";
        return _this;
    }
    NNGameResult.prototype.childrenCreated = function () {
        this.list.itemRenderer = NNGameResultTile;
    };
    NNGameResult.prototype.createComplete = function (event) {
        _super.prototype.createComplete.call(this, event);
    };
    NNGameResult.prototype.show = function () {
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
    NNGameResult.prototype.touchBindButtonHandler = function (clickTarget) {
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
    NNGameResult.prototype.backToHallResponse = function (evt) {
        GameEventManager.dispatchEvent(GameEventManager.QUIT_ROOM);
    };
    return NNGameResult;
}(IFrameBase));
__reflect(NNGameResult.prototype, "NNGameResult");
var NNGameResultTile = (function (_super) {
    __extends(NNGameResultTile, _super);
    function NNGameResultTile() {
        var _this = _super.call(this) || this;
        _this._allCardTypeArr = [
            { "name": "庄", "count": 0 },
            { "name": "五小牛", "count": 0 },
            { "name": "炸弹牛", "count": 0 },
            { "name": "金牛", "count": 0 },
            { "name": "牛牛", "count": 0 },
            { "name": "有牛", "count": 0 },
            { "name": "无牛", "count": 0 }
        ];
        _this.skinName = "NNGameResultTileSkin";
        return _this;
    }
    NNGameResultTile.prototype.childrenCreated = function () {
        this._faceImg = new DImage(52, 54);
        this._faceImg.x = 7;
        this._faceImg.y = 7;
        this.addChild(this._faceImg);
        this.winnerIcon.visible = false;
        this.updateView();
    };
    NNGameResultTile.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        this.updateView();
    };
    NNGameResultTile.prototype.updateView = function () {
        if (this.data != null) {
            this.idTF.text = "ID:" + this.data["playerId"];
            // this._winTF.text = data["winTimes"]; //胜
            // this._lostTF.text = data["loseTimes"]; //负
            // this._totalScoreTF.text = data["totalScore"];
            var countArr = [this.data["bankerCount"], this.data["fiveSmallNiuCount"], this.data["bombNiuCount"],
                this.data["goldNiuCount"], this.data["niuNiuCount"], this.data["youNiuCount"], this.data["wuNiuCount"]];
            // this.cardTypeTF.text = "";
            var len = this._allCardTypeArr.length;
            for (var i = 0; i < len; i++) {
                this["cardTypeTF" + i + "_0"].text = this._allCardTypeArr[i].name;
                this["cardTypeTF" + i + "_1"].text = +countArr[i];
                // this.cardTypeTF.appendText + ""+"\n"); // = PlayerType.getPokerTypeName(this.data["maxCardType"]);
            }
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
            else {
                this.winnerIcon.visible = false;
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
    return NNGameResultTile;
}(eui.ItemRenderer));
__reflect(NNGameResultTile.prototype, "NNGameResultTile");
//# sourceMappingURL=NNGameResult.js.map