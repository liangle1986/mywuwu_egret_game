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
 * 牛牛 游戏界面
 */
var NNBattleView = (function (_super) {
    __extends(NNBattleView, _super);
    function NNBattleView() {
        var _this = _super.call(this) || this;
        _this._isLastPlayer = false;
        _this._countDownTime = 10; //倒计时
        _this._curRound = 1; //当前轮次
        _this._totalRound = 1; //总轮次
        _this._zhuangType = 0;
        _this._roomNum = 0;
        _this._playerOrderList = [];
        _this._roomBankerId = ""; //庄家id
        _this._playerDataHash = new HashMap();
        _this._pokerPos = [];
        _this._isShowScore = false;
        _this._isWatcher = false;
        _this._gameStatus = -1;
        _this._battleData = null;
        _this._pokerOldPos = [
            [224, -180], [-263, -46], [-200, 70], [136, 127], [280, 70], [340, -46]
        ];
        _this._jiesuanData = null;
        _this._jiesuanData2 = null;
        _this._sayPokerTimeOutId = -1;
        _this._sayPokerData = null;
        _this._isRecording = false; //是否正在录音
        _this.skinName = "NiuNiuBattleSkin";
        _this.name = "NNBattleView";
        _this.percentWidth = 100;
        _this.percentHeight = 100;
        return _this;
    }
    NNBattleView.prototype.getPlayerInfoById = function (id) {
        return this._playerDataHash.get(id);
    };
    NNBattleView.prototype.createComplete = function (event) {
        _super.prototype.createComplete.call(this, event);
        this._emotionContainer = new egret.DisplayObjectContainer();
        this.addChild(this._emotionContainer);
        this._flyContianer = new egret.DisplayObjectContainer();
        this.addChild(this._flyContianer);
        this.arrow.visible = false;
        egret.Tween.removeTweens(this.arrow);
        egret.Tween.get(this.arrow, { "loop": true }).to({ y: 44 }, 300).to({ y: 4 }, 300);
        this._countDownTimer = new egret.Timer(1000);
        this._countDownTimer.addEventListener(egret.TimerEvent.TIMER, this.onTimerHandle, this);
        var len = GameGlobal.MAX_PLAYER_COUNT;
        var cardGroup;
        for (var i = 0; i < len; i++) {
            this._pokerPos[i] = [];
            for (var j = 0; j < 5; j++) {
                var card = this["cardGroup" + i + "_" + j];
                this._pokerPos[i][j] = { "x": card.x, "y": card.y };
            }
        }
        var self = this;
        egret.ExternalInterface.addCallback("recordEndPlay", function (message) {
            LogUtils.log("recordEndPlay");
            //  self._myPlayerView.showRecord(true);
            self.showPlayerRecord(0, true);
            SoundManager.instance.isMusicOn = false;
        });
        egret.ExternalInterface.addCallback("playMyRecordEnd", function (message) {
            LogUtils.log("playMyRecordEnd");
            //  self._myPlayerView.showRecord(false);
            self.showPlayerRecord(0, false);
            SoundManager.instance.isMusicOn = true;
        });
        //收到上传成功，发送聊天消息
        egret.ExternalInterface.addCallback("uploadRecordComplete", function (message) {
            LogUtils.log("uploadRecordComplete::send record chat message");
            var data = {};
            data["msgType"] = NetAction.chatMsg;
            data["msg"] = { "chatType": 6, "chatMsg": message };
            SocketCommand.getInstance().send(data);
        });
        this._timer = new egret.Timer(60 * 1000);
    };
    NNBattleView.prototype.onTimerHandle = function (evt) {
        this._countDownTime--;
        this._countDownTime = Math.max(this._countDownTime, 0);
        if (this._countDownTime <= 0) {
            this._countDownTimer.stop();
            this._countDownTimer.reset();
            this.countDown.visible = false;
        }
        this.countDownTF.text = this._countDownTime.toString();
    };
    /**
     * 金币飞入赢家
     */
    NNBattleView.prototype.flyToWiners = function (fromOrderIndex, toOrderIndex, total) {
        if (total == 0)
            return;
        this._isShowScore = false;
        var cnt = Math.abs(total);
        var fromPos = [this["player" + fromOrderIndex].x + 30, this["player" + fromOrderIndex].y + 30];
        var toPos = [this["player" + toOrderIndex].x + 30, this["player" + toOrderIndex].y + 30];
        var flyComplete = false;
        var coinCount = cnt;
        if (coinCount > 20)
            coinCount = 20;
        for (var i = 0; i < coinCount; i++) {
            var img = new eui.Image("nnGame2_json.flyCoin");
            img.anchorOffsetX = 16;
            img.anchorOffsetY = 16;
            img.x = total < 0 ? fromPos[0] : toPos[0];
            img.y = total < 0 ? fromPos[1] : toPos[1];
            this._flyContianer.addChild(img);
            var to_p = total < 0 ? toPos : fromPos;
            egret.Tween.get(img).wait(50 * i).to({ x: to_p[0], y: to_p[1] }, 600).call(this.removeImg, this, [img, i, coinCount]);
        }
    };
    NNBattleView.prototype.showFloatScore = function () {
        if (this._isShowScore)
            return;
        this._isShowScore = true;
        this._flyContianer.removeChildren();
        var len = this._otherOrderList.length;
        for (var i = 0; i < len; i++) {
            var orderIndex = this._otherOrderList[i];
            var playerData = this._playerOrderHash2.get(orderIndex);
            if ((playerData["status"] == NNBattleView.WATCHER)) {
                continue;
            }
            var count = Number(this["score" + orderIndex + "_1"].text.trim());
            if (count == 0)
                continue;
            var posX = this["player" + orderIndex].x + 60;
            var posY = this["player" + orderIndex].y - 20;
            var bn;
            if (count > 0) {
                bn = new DBitmapNumber(count, 30, 2);
            }
            else {
                bn = new DBitmapNumber(count, 30, 1);
            }
            bn.x = posX;
            bn.y = posY;
            this._flyContianer.addChild(bn);
            egret.Tween.removeTweens(bn);
            egret.Tween.get(bn).to({ y: posY - 40 }, 600);
        }
        count = Number(this["score0_1"].text.trim());
        if (this._isWatcher) {
            return;
        }
        posX = this["player0"].x + 60;
        posY = this["player0"].y - 20;
        var bn;
        if (count > 0) {
            bn = new DBitmapNumber(count, 30, 2);
        }
        else {
            bn = new DBitmapNumber(count, 30, 1);
        }
        bn.x = posX;
        bn.y = posY;
        this._flyContianer.addChild(bn);
        egret.Tween.removeTweens(bn);
        egret.Tween.get(bn).to({ y: posY - 40 }, 600);
    };
    NNBattleView.prototype.removeImg = function (img, i, total) {
        egret.Tween.removeTweens(img);
        if (img.parent) {
            img.parent.removeChild(img);
        }
        img.source = null;
        img = null;
        if (i >= total - 1) {
            this.showFloatScore();
        }
    };
    NNBattleView.prototype.init = function (battleData) {
        if (battleData === void 0) { battleData = null; }
        if (!this.initialized) {
            egret.callLater(this.init, this, battleData);
            return;
        }
        this.clear();
        if (battleData == null)
            throw new Error("battleData is null!!!");
        this._battleData = battleData;
        GameModel.instance().roomId = this._battleData["roomId"];
        this.updateBattleInfo();
        if (this._battleData.hasOwnProperty("status")) {
            this._gameStatus = this._battleData["status"];
        }
        var roomOwnerId = this._battleData["roomOwnerId"];
        var playerList = this._battleData["playerList"];
        var len = playerList.length;
        var order = 1; //1-5
        var status = 1;
        var myStatus = 1;
        var roomBankerId = this._battleData["roomBankerId"];
        var otherPlayerList = [];
        this._otherOrderList = [];
        this._playerOrderList = [];
        this._playerOrderHash2 = new HashMap();
        this._playerDataHash = new HashMap();
        console.log("playerList.len = " + len);
        // var dImage:DImage;
        for (var i = 0; i < len; i++) {
            var playerData = playerList[i];
            var playerId = playerData["playerId"];
            order = playerData["order"];
            status = playerData["status"];
            //玩家自己
            if (playerId == MyUserInfo.getInstance().userId) {
                GameModel.instance().myOrder = order;
                myStatus = status;
                if (myStatus == BasePlayerView.WATCHER) {
                    this._isWatcher = true;
                }
                this.readyBtn.visible = ((status == 1) && (this._gameStatus == 1));
                this.setPlayerData(0, playerData);
                this.updatePlayerStatus(0, status);
                if (playerData.hasOwnProperty("onlineStatus") && (playerData["onlineStatus"] != null))
                    this.setPlayerOffline(0, playerData["onlineStatus"] != 1);
                if (!this._isWatcher) {
                    this.showPlayerPoker(0, playerData["cardList"], playerData["cardType"]);
                    this.updatePlayerStakeScore(0, playerData["stakeScore"]);
                }
                var stakeScoreList = playerData["stakeScoreList"];
                if (stakeScoreList == undefined || stakeScoreList == null) {
                }
                else {
                    if ((!this._isWatcher) && (this._gameStatus == NNBattleView.GAME_INSTAKESCORE) && (roomBankerId != MyUserInfo.getInstance().userId)) {
                        this.clearTable2();
                        this.hideBetButton();
                        this.betGroup.visible = true;
                        var scoreLen = stakeScoreList.length;
                        for (var j = 0; j < scoreLen; j++) {
                            var beiButton = new eui.Image();
                            beiButton.source = "nnGame2_json.bei" + stakeScoreList[j];
                            beiButton["value"] = stakeScoreList[j];
                            beiButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBeiHandle, this);
                            this.betGroup.addChild(beiButton);
                            beiButton.x = 161 * j;
                        }
                    }
                }
                this._playerOrderHash2.put(0, playerData);
            }
            else {
                otherPlayerList.push(playerData);
                console.log("otherPlayerList = " + otherPlayerList.length);
            }
            this._playerDataHash.put(playerId.toString(), playerData);
            this._playerOrderList.push(playerData);
        }
        len = otherPlayerList.length;
        console.log("len = " + len);
        for (i = 0; i < len; i++) {
            var playerData = otherPlayerList[i];
            order = playerData["order"];
            status = playerData["status"];
            var myOrder = GameModel.instance().myOrder;
            var orderIndex = GameUtls.sitId2LR(myOrder, order);
            this.setPlayerData(orderIndex, playerData);
            this.updatePlayerStatus(orderIndex, status);
            if (playerData.hasOwnProperty("onlineStatus") && (playerData["onlineStatus"] != null))
                this.setPlayerOffline(orderIndex, playerData["onlineStatus"] != 1);
            if (status != 0) {
                if (this._gameStatus == 4 || this._gameStatus == 2)
                    this.showPlayerPoker(orderIndex, [], playerData["cardType"]);
                else
                    this.showPlayerPoker(orderIndex, playerData["cardList"], playerData["cardType"]);
            }
            this.updatePlayerStakeScore(orderIndex, playerData["stakeScore"]);
            console.log("orderIndex = " + orderIndex);
            this["player" + orderIndex].visible = true;
            this._otherOrderList.push(orderIndex);
            this._playerOrderHash2.put(orderIndex, playerData);
        }
        //房主
        if (roomOwnerId == MyUserInfo.getInstance().userId) {
            // this._myPlayerView.isFang = true;
        }
        else {
            // playerView = this.getOtherPlayerView(roomOwnerId) as NN_OtherPlayerView;
            // playerView.isFang = true;
        }
        //游戏状态更新界面
        if (this._gameStatus != -1) {
            this.inviteBtn.visible = false;
            this.updateRound(this._battleData["curGame"]);
            if (roomBankerId != "" && roomBankerId != null) {
                var orderIndex = this.getOrderByPlayerId(roomBankerId);
                orderIndex = GameUtls.sitId2LR(GameModel.instance().myOrder, orderIndex);
                this.updatePlayerZhuang(orderIndex);
                this._roomBankerId = roomBankerId;
            }
            if (this._gameStatus == NNBattleView.GAME_READY) {
                this.inviteBtn.visible = true;
            }
            else if (this._gameStatus == NNBattleView.GAME_INROB) {
                this.hideBetButton();
                this.betGroup.visible = false;
                if (!this._isWatcher)
                    this.qiangzhuangGroup.visible = true;
                //显示抢庄倒计时
                this.countDown.visible = true;
                this.countDownTF.text = "5";
                this._countDownTime = 5;
                this._countDownTimer.reset();
                this._countDownTimer.start();
            }
            else if (this._gameStatus == NNBattleView.GAME_INSTAKESCORE) {
            }
            else if (this._gameStatus == NNBattleView.GAME_INGAME) {
                if (myStatus != NNBattleView.SHOWCARDED && (!this._isWatcher)) {
                    this.liangpaiBtn.visible = true;
                }
            }
            else if (this._gameStatus == NNBattleView.GAME_CURGAMEOVER) {
                this._jiesuanData = this._battleData;
                this.jiesuanResponseTimeOut();
            }
            else if (this._gameStatus == NNBattleView.GAME_TOTALGAMEOVER) {
                this._jiesuanData2 = this._battleData;
                this.jiesuanResponseTimeOut2();
            }
        }
        this.initEvents();
        SoundManager.instance.playMusic("table_mp3");
        // var effect:egret.MovieClip = DUtils.createMovieClipByName("nnEffect");
        // 			effect.frameRate = 12;
        // 			// effect.play(-1);
        // 			this.addChild(effect);
        // 			effect.x = 558;
        // 			effect.y = 496;
        // 			MovieClipUtils.playOnce(effect, null);
    };
    NNBattleView.prototype.updateRound = function (value) {
        if (value == undefined || value == null || value == 0)
            value = 1;
        this._curRound = value;
        var zhuangTypeStr = this.getZhuangTypeStr(this._zhuangType);
        var teaHouseNum = this._battleData["teaHouseNum"];
        if (teaHouseNum != null && teaHouseNum != 0) {
            this.infoTF.text = "茶楼号：" + this._battleData["teaHouseNum"] + " 第" + this._battleData["tableNum"] + "桌 局数：" + this._curRound + "/" + this._totalRound + " " + zhuangTypeStr;
        }
        else {
            this.infoTF.text = "房间号：" + this._roomNum + " 局数：" + this._curRound + "/" + this._totalRound + " " + zhuangTypeStr;
        }
    };
    NNBattleView.prototype.setPlayerData = function (order, data) {
        this["score" + order].text = data["totalScore"];
        var nickName = data["nickName"];
        if (StringUtils.getStringLen(nickName) > 6)
            nickName = nickName.substr(0, 6) + "...";
        this["face" + order].source = data["headImgUrl"];
        this["nickName" + order].text = nickName;
    };
    NNBattleView.prototype.setPlayerOffline = function (order, value) {
        if (order == 0)
            return;
        this["offline" + order].visible = value;
    };
    /**
     *
     */
    NNBattleView.prototype.updatePlayerStakeScore = function (orderIndex, stakeScore) {
        if (stakeScore === void 0) { stakeScore = 0; }
        if (stakeScore == null || stakeScore == NaN || stakeScore == 0)
            return;
        this["bet" + orderIndex].visible = true;
        this["betScore" + orderIndex].text = stakeScore.toString();
    };
    NNBattleView.prototype.getPokerResName = function (num, color) {
        var prefix = "poker1_json";
        if (num <= 3)
            prefix = "poker1_json";
        else if (num <= 6) {
            prefix = "poker2_json";
        }
        else if (num <= 9) {
            prefix = "poker3_json";
        }
        else if (num <= 12) {
            prefix = "poker4_json";
        }
        else {
            prefix = "poker5_json";
        }
        return prefix;
    };
    NNBattleView.prototype.fapai = function () {
        var len = GameGlobal.MAX_PLAYER_COUNT;
        var cardGroup;
        for (var i = 0; i < len; i++) {
            cardGroup = this["cardGroup" + i];
            if (cardGroup.visible) {
                for (var j = 0; j < 5; j++) {
                    var cardPos = this._pokerPos[i][j];
                    var card = this["cardGroup" + i + "_" + j];
                    egret.Tween.removeTweens(card);
                    //cardGroup.horizontalCenter = 0;
                    //cardGroup.verticalCenter = 0;
                    card.x = this._pokerOldPos[i][0];
                    card.y = this._pokerOldPos[i][1];
                    if (i == 0) {
                        card.scaleX = 56 / 99;
                        card.scaleY = 75 / 131;
                        egret.Tween.get(card).wait(100 * j).to({ "x": cardPos["x"], "y": cardPos["y"], "scaleX": 1, "scaleY": 1 }, 100);
                    }
                    else {
                        egret.Tween.get(card).wait(100 * j).to({ "x": cardPos["x"], "y": cardPos["y"] }, 100);
                    }
                }
            }
        }
    };
    /**
     * 展示扑克牌
     */
    NNBattleView.prototype.showPlayerPoker = function (order, cardList, cardType, showAnimation, nnCardList) {
        if (cardType === void 0) { cardType = -1; }
        if (showAnimation === void 0) { showAnimation = false; }
        if (nnCardList === void 0) { nnCardList = []; }
        if (cardList == null || cardList == undefined)
            return;
        this["cardGroup" + order].visible = true;
        var len = cardList.length;
        var cardDataList = [];
        for (var i = 0; i < len; i++) {
            var card = new Card(cardList[i].cardValue, cardList[i].cardSuit);
            cardDataList.push(card);
        }
        len = 5;
        for (var i = 0; i < len; i++) {
            var cardData = cardDataList[i];
            var cardView = this["cardGroup" + order + "_" + i];
            cardView.texture = RES.getRes(order == 0 ? "poker5_json.cardBg" : "poker5_json.cardBg2");
            cardView.scaleX = cardView.scaleY = 1;
            cardView["data"] = null;
            if (i < cardDataList.length) {
                var prefix = this.getPokerResName(cardData.getNum(), cardData.getColor());
                cardView.texture = RES.getRes(prefix + ".card" + cardData.getNum() + "_" + cardData.getColor());
                cardView["data"] = cardData;
                if (order != 0) {
                    cardView.scaleX = cardView.scaleY = 56 / 99;
                }
            }
        }
        if (cardType != -1) {
            var pokerTypeStr = NNPlayerType.getPokerTypeStrBySererNum(cardType);
            if (showAnimation) {
                if (order == 0) {
                    this.showMyPokerNiu(nnCardList, NNPlayerType.getPokerTypeName(cardType));
                }
                this["cardType" + order].visible = true;
                this["cardType" + order].texture = RES.getRes("niuniu_json." + pokerTypeStr);
                if (pokerTypeStr == "niu10" || pokerTypeStr == "jinniu" || pokerTypeStr == "wuxiaoniu" || pokerTypeStr == "zdn") {
                    this._nnEffect = DUtils.createMovieClipByName("nnEffect");
                    this._nnEffect.frameRate = 12;
                    // effect.play(-1);
                    this.addChild(this._nnEffect);
                    this._nnEffect.x = 558;
                    this._nnEffect.y = 496;
                    MovieClipUtils.playOnce(this._nnEffect, null);
                }
                SoundManager.instance.playSound(pokerTypeStr + "_mp3");
            }
        }
    };
    /**
     *
     */
    NNBattleView.prototype.showMyPokerNiu = function (cardList, nnType) {
        if (nnType === void 0) { nnType = ""; }
        //查找当前属于牛的部分牌
        var resultNiuCards = [];
        var len = 5;
        var cardLen = cardList.length;
        for (var i = 0; i < len; i++) {
            var cardView = this["cardGroup0_" + i];
            for (var j = 0; j < cardLen; j++) {
                var cardNum = cardList[j]["cardValue"];
                if (cardView["data"].getNum() == cardNum) {
                    resultNiuCards.push(cardView);
                    break;
                }
            }
        }
        if (resultNiuCards.length >= 3) {
            len = resultNiuCards.length;
            for (var i = 0; i < len; i++) {
                var cardView = resultNiuCards[i];
                var nextY = cardView.y - 40;
                egret.Tween.removeTweens(cardView);
                egret.Tween.get(cardView).to({ y: nextY }, 200).wait(100).to({ y: cardView.y }, 200);
            }
            var value0 = resultNiuCards[0].data.getNum();
            var value1 = resultNiuCards[1].data.getNum();
            var value2 = resultNiuCards[2].data.getNum();
            if (value0 > 10)
                value0 = 10;
            if (value1 > 10)
                value1 = 10;
            if (value2 > 10)
                value2 = 10;
            this.resultTF.text = value0 + "+" + value1 + "+" + value2 + "=" + nnType;
        }
    };
    /**
     * 如果是抢庄，这里需要标记 抢庄了几倍 x1
     */
    NNBattleView.prototype.updatePlayerStatus = function (order, status, value) {
        if (value === void 0) { value = -1; }
        this["readyed" + order].visible = (status == NNBattleView.READYED);
        this["qiangFlag" + order].visible = (status == NNBattleView.QZ || status == NNBattleView.NOT_QZ);
        if (status == NNBattleView.QZ || status == NNBattleView.NOT_QZ) {
            if (value == 0)
                this["qiangFlag" + order].texture = RES.getRes("nnGame2_json.n_buqiang");
            else
                this["qiangFlag" + order].texture = RES.getRes("nnGame2_json.n_qiangzhuang" + value);
        }
    };
    NNBattleView.prototype.updateBattleInfo = function () {
        var maxRound = this._battleData["totalGames"];
        var zhuangType = this._battleData["roomBankerType"];
        var roomNum = this._battleData["roomId"];
        var teaHouseNum = this._battleData["teaHouseNum"];
        this._totalRound = maxRound;
        this._curRound = 1;
        this._zhuangType = zhuangType;
        this._roomNum = roomNum;
        var zhuangTypeStr = this.getZhuangTypeStr(zhuangType);
        if (teaHouseNum != 0 && teaHouseNum != null) {
            this.infoTF.text = "茶楼号：" + this._battleData["teaHouseNum"] + " 第" + this._battleData["tableNum"] + "桌 局数：1/" + this._totalRound + " " + zhuangTypeStr;
        }
        else {
            this.infoTF.text = "房间号：" + roomNum + " 局数：1/" + this._totalRound + " " + zhuangTypeStr;
        }
        this.timeTF.text = DateUtils.dateFormat(new Date(), "hh:mm");
        // if(this._timer)
        // {
        this._timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimerHandle2, this);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerHandle2, this);
        this._timer.reset();
        this._timer.start();
        // }
    };
    NNBattleView.prototype.onTimerHandle2 = function (evt) {
        this.timeTF.text = DateUtils.dateFormat(new Date(), "hh:mm");
    };
    NNBattleView.prototype.getZhuangTypeStr = function (type) {
        var typeStr = "轮流坐庄";
        switch (type) {
            case 1:
                break;
            case 2:
                typeStr = "霸王庄";
                break;
            case 3:
                typeStr = "看牌抢庄";
                break;
            case 4:
                typeStr = "赢家当庄";
                break;
        }
        return typeStr;
    };
    NNBattleView.prototype.clear = function () {
        this.timeTF.text = "--";
        this.infoTF.text = "--";
        this.bankerIcon.visible = false;
        this.countDown.visible = false;
        this._isWatcher = false;
        //隐藏玩家
        var len = GameGlobal.MAX_PLAYER_COUNT;
        for (var i = 0; i < len; i++) {
            if (this["player" + (i + 1)])
                this["player" + (i + 1)].visible = false;
            this["readyed" + i].visible = false;
            this["score" + i].text = "";
            this["nickName" + i].text = "";
            this["qiangFlag" + i].visible = false;
            this["cardGroup" + i].visible = false;
            this["zhuang" + i].visible = false;
            this["zhuang" + i].touchEnabled = false;
            this["bet" + i].visible = false;
            this["cardType" + i].visible = false;
            this["e" + i].visible = false;
            this["chat" + i].visible = false;
            this["chatTF" + i].text = "--";
            this["yuyin" + i].visible = false;
        }
        this.readyBtn.visible = this.inviteBtn.visible = true;
        this.liangpaiBtn.visible = false;
        this.qiangzhuangGroup.visible = false;
        this.betGroup.visible = false;
        this._roomBankerId = "";
        egret.clearTimeout(this._sayPokerTimeOutId);
        this._isLastPlayer = false;
        this._sayPokerTimeOutId = -1;
        this._countDownTimer.stop();
        this._countDownTimer.reset();
        this.countDown.visible = false;
        egret.Tween.removeTweens(this.bankerIcon);
        this._flyContianer.removeChildren();
        this._emotionContainer.removeChildren();
    };
    NNBattleView.prototype.initEvents = function () {
        this.bindButton(this.quitBtn);
        this.bindButton(this.helpBtn);
        this.bindButton(this.setBtn);
        this.bindButton(this.chatBtn);
        this.bindButton(this.inviteBtn);
        this.bindButton(this.readyBtn);
        this.bindButton(this.liangpaiBtn);
        this.bindButton(this.arrow);
        this.recordBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.recordBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.recordBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchRelease, this);
        for (var i = 0; i < 6; i++) {
            var qiangBtn = this["qiang" + i];
            if (qiangBtn)
                this.bindButton(qiangBtn);
            var faceImg = this["face" + i];
            this.bindButton(faceImg);
        }
        this.addNetEvents();
    };
    NNBattleView.prototype.addNetEvents = function () {
        GameEventManager.addEvent(NetAction.ready.toString(), this.onReadyResponse, this);
        GameEventManager.addEvent(NetAction.readyStake.toString(), this.onReadyStakeResponse, this);
        GameEventManager.addEvent(NetAction.readyRobBanker.toString(), this.onReadyRobBankerResponse, this);
        GameEventManager.addEvent(NetAction.sayPoker.toString(), this.onSayPokerResponse, this);
        GameEventManager.addEvent(NetAction.showCard.toString(), this.onShowCardResponse, this);
        GameEventManager.addEvent(NetAction.robBanker.toString(), this.onRobBankerResponse, this);
        GameEventManager.addEvent(NetAction.robBankerOverTime.toString(), this.onRobBankerResponse, this);
        GameEventManager.addEvent(NetAction.stake.toString(), this.onStakeResponse, this);
        GameEventManager.addEvent(NetAction.jiesuan.toString(), this.onJiesuanResponse, this);
        GameEventManager.addEvent(NetAction.jiesuan2.toString(), this.onJiesuanResponse2, this);
        GameEventManager.addEvent(NetAction.offline.toString(), this.onOfflineResponse, this);
        GameEventManager.addEvent(NetAction.online.toString(), this.onOnlineResponse, this);
        GameEventManager.addEvent(NetAction.autodissolveRoom.toString(), this.autodissolveRoomResponse, this);
        GameEventManager.addEvent(NetAction.chatMsg.toString(), this.onChatMsgResponse, this);
        GameEventManager.addEvent(NetAction.countDown.toString(), this.onCountDownResponse, this);
        GameEventManager.addEvent(NetAction.cuopai.toString(), this.onShowLastPoker, this);
    };
    NNBattleView.prototype.onShowLastPoker = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var playerId = data["playerId"];
        var cardType = data["cardType"];
        var cardList = data["cardList"];
        // var nnCardList:Array<any> = data["nnCardList"]; //牛牛牌
        // var isLastShowCard:number = data["isLastShowCard"]; //最后一个人亮牌
        if (playerId == MyUserInfo.getInstance().userId) {
            this.showPlayerPoker(0, cardList, cardType, false);
            this.arrow.visible = false;
        }
    };
    NNBattleView.prototype.onChatMsgResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var playerId = data["playerId"];
        var chatType = data["chatType"];
        var chatMsg = data["chatMsg"];
        var otherPlayerId = data["otherPlayerId"];
        //给特定玩家的表情消息
        if (chatType == 5) {
            this.sendEmotionToPlayer(chatMsg, playerId, otherPlayerId);
            SoundManager.instance.playSound(chatMsg + "_mp3");
            return;
        }
        //录制
        if (chatType == 6) {
            if (otherPlayerId == MyUserInfo.getInstance().userId)
                return;
            var self = this;
            egret.ExternalInterface.addCallback("playRecordEnd", function (message) {
                // var playerView:NN_OtherPlayerView = self.getOtherPlayerView(message) as NN_OtherPlayerView;
                // if(playerView)
                // 	playerView.showRecord(false);
                var orderIndex = self.getOrderByPlayerId(otherPlayerId);
                orderIndex = GameUtls.sitId2LR(GameModel.instance().myOrder, orderIndex);
                self.showPlayerRecord(orderIndex, true);
                SoundManager.instance.isMusicOn = true;
            });
            SoundManager.instance.isMusicOn = false;
            // var playerView:NN_OtherPlayerView = self.getOtherPlayerView(otherPlayerId) as NN_OtherPlayerView;
            // playerView.showRecord(true);
            var orderIndex = this.getOrderByPlayerId(otherPlayerId);
            orderIndex = GameUtls.sitId2LR(GameModel.instance().myOrder, orderIndex);
            self.showPlayerRecord(orderIndex, true);
            egret.ExternalInterface.call("playRecord", otherPlayerId + "|" + chatMsg);
        }
        if (playerId == MyUserInfo.getInstance().userId) {
            this.showChatMsg(playerId, chatType, chatMsg);
        }
        else {
            this.showChatMsg(playerId, chatType, chatMsg);
        }
    };
    NNBattleView.prototype.showChatMsg = function (playerId, chatType, chatMsg) {
        var orderIndex = this.getOrderByPlayerId(playerId);
        orderIndex = GameUtls.sitId2LR(GameModel.instance().myOrder, orderIndex);
        //文字
        if (chatType == 1 || chatType == 3) {
            var chatView = this["chat" + orderIndex];
            chatView.visible = true;
            egret.Tween.removeTweens(chatView);
            this["chatTF" + orderIndex].text = chatMsg;
            chatView.alpha = 1;
            egret.Tween.get(chatView).wait(2000).to({ alpha: 0 }, 1000).call(function () {
                chatView.visible = false;
            }, this);
        }
        else {
            var emotionImg = this["e" + orderIndex];
            emotionImg.visible = true;
            emotionImg.alpha = 1;
            emotionImg.source = "emotion_json." + chatMsg;
            egret.Tween.get(emotionImg).wait(2000).to({ alpha: 0 }, 800).call(function () {
                emotionImg.visible = false;
            }, this);
        }
        if (chatType == 3) {
            var chatIndex = NN_ChatView.WORDS.indexOf(chatMsg);
            if (MyUserInfo.getInstance().gender == 0)
                SoundManager.instance.playSound("word-" + chatIndex + "_mp3");
            else
                SoundManager.instance.playSound("word-" + chatIndex + "2_mp3");
        }
    };
    /**
     * 给玩家发送表情
     */
    NNBattleView.prototype.sendEmotionToPlayer = function (emotion, playerId, toPlayerId) {
        var _this = this;
        var emotionImg = new egret.Bitmap();
        emotionImg.texture = RES.getRes("emotion_json." + emotion);
        emotionImg.anchorOffsetX = emotionImg.width * 0.5;
        emotionImg.anchorOffsetY = emotionImg.height * 0.5;
        var centerPos = [];
        var orderIndex = this.getOrderByPlayerId(playerId);
        orderIndex = GameUtls.sitId2LR(GameModel.instance().myOrder, orderIndex);
        centerPos = [this["player" + orderIndex].x + 30, this["player" + orderIndex].y + 30];
        emotionImg.x = centerPos[0];
        emotionImg.y = centerPos[1];
        this._emotionContainer.addChild(emotionImg);
        var toPos = [0, 0];
        var orderIndex = this.getOrderByPlayerId(toPlayerId);
        orderIndex = GameUtls.sitId2LR(GameModel.instance().myOrder, orderIndex);
        toPos = [this["player" + orderIndex].x + 30, this["player" + orderIndex].y + 30];
        //todo 动态计算飞入时间
        egret.Tween.get(emotionImg).to({ x: toPos[0], y: toPos[1] }, 800).call(function (img) {
            egret.Tween.removeTweens(img);
            if (_this._emotionContainer.contains(img))
                _this._emotionContainer.removeChild(img);
            var emotionMc = DUtils.createMovieClipByName(emotion);
            emotionMc.frameRate = 12;
            emotionMc.anchorOffsetX = emotionMc.width * 0.5;
            emotionMc.anchorOffsetY = emotionMc.height * 0.5;
            emotionMc.x = emotionImg.x;
            emotionMc.y = emotionImg.y;
            if (emotion == "jd") {
                emotionMc.x = emotionImg.x - 140;
                emotionMc.y = emotionImg.y - 110;
            }
            else if (emotion == "dzh") {
                emotionMc.y = emotionImg.y - 20;
            }
            else if (emotion == "pj") {
                emotionMc.x = emotionImg.x - 10;
            }
            _this._emotionContainer.addChild(emotionMc);
            MovieClipUtils.playOnce(emotionMc, null);
        }, this, [emotionImg]);
    };
    NNBattleView.prototype.autodissolveRoomResponse = function (evt) {
        var data = evt.data;
        var playerId = data["playerId"];
        AlertView.getInstance().setConfirmCallBack(this.autodissolveRoomConfirm, this);
        AlertView.getInstance().show("由于玩家离开时间较长，房间自动解散，是否返回大厅？", AlertView.CONFIRM_MODE);
    };
    NNBattleView.prototype.autodissolveRoomConfirm = function () {
        GameEventManager.dispatchEvent(GameEventManager.QUIT_ROOM);
    };
    /**
     * 小结算返回
     */
    NNBattleView.prototype.onJiesuanResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        this._jiesuanData = data;
        if (this._isLastPlayer) {
            egret.clearTimeout(this._sayPokerTimeOutId);
            this._sayPokerTimeOutId = egret.setTimeout(this.jiesuanResponseTimeOut, this, 1000);
        }
    };
    // /**
    //  * 获取当前坐庄玩家
    //  */
    // private getZhuangOrderIndex():eui.Group
    // {
    // 	var len:number = GameGlobal.MAX_PLAYER_COUNT;
    // 	for(var i:number = 0; i < len; i++)
    // 	{
    // 		if(this["zhuang"+i].visible)
    // 			return this["player"+i];
    // 	}
    // }
    NNBattleView.prototype.jiesuanResponseTimeOut = function () {
        var roomOwnerId = this._jiesuanData["roomOwnerId"];
        // var roomBankerId:string = this._jiesuanData["roomBankerId"]; //庄家
        var playerList = this._jiesuanData["playerList"];
        // if(roomBankerId == null)
        // roomBankerId = this._roomBankerId;
        this._isWatcher = false;
        this.readyBtn.visible = true;
        this.liangpaiBtn.visible = false;
        var len = playerList.length;
        var zhuangOrderIndex = this.getOrderByPlayerId(this._roomBankerId);
        zhuangOrderIndex = GameUtls.sitId2LR(GameModel.instance().myOrder, zhuangOrderIndex);
        for (var i = 0; i < len; i++) {
            var data = playerList[i];
            var playerId = data["playerId"];
            var totalScore = data["totalScore"];
            var playerOrder = this.getOrderByPlayerId(playerId);
            var orderIndex = GameUtls.sitId2LR(GameModel.instance().myOrder, playerOrder);
            var playerData = this._playerOrderHash2.get(orderIndex);
            if (playerData) {
                if (playerData["status"] == NNBattleView.WATCHER) {
                    playerData["status"] = NNBattleView.NOT_READY;
                    continue;
                }
            }
            //自己
            if (playerId == MyUserInfo.getInstance().userId) {
                this._isWatcher = false;
                if (data["curScore"] > 0) {
                    // SoundManager.instance.playSound("win_mp3");
                }
                else {
                    // SoundManager.instance.playSound("lose_mp3");
                }
            }
            this["score" + orderIndex].text = totalScore.toString();
            this["score" + orderIndex + "_1"].text = data["curScore"].toString();
            if (orderIndex != zhuangOrderIndex) {
                this.flyToWiners(orderIndex, zhuangOrderIndex, data["curScore"]);
            }
        }
    };
    /**
     * 服务端返回压分
     */
    NNBattleView.prototype.onStakeResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var playerId = data["playerId"];
        var stakeScore = data["stakeScore"];
        var isLastPlayer = data["isLastStakeScore"];
        if (playerId == MyUserInfo.getInstance().userId && (!this._isWatcher)) {
            this.betGroup.visible = false;
        }
        var playerOrder = this.getOrderByPlayerId(playerId);
        var orderIndex = GameUtls.sitId2LR(GameModel.instance().myOrder, playerOrder);
        this["bet" + orderIndex].visible = true;
        this.qiangzhuangGroup.visible = false;
        this["betScore" + orderIndex].text = stakeScore;
        this._isLastPlayer = (isLastPlayer == 1);
        if (isLastPlayer) {
            if (this._zhuangType == 3 && (!this._isWatcher)) {
                this.arrow.visible = true;
                this.liangpaiBtn.visible = true;
                this.countDown.visible = true;
                this.countDownTF.text = "10";
                this._countDownTime = 10;
                this._countDownTimer.reset();
                this._countDownTimer.start();
            }
        }
        // this.countDown.visible = false;
        // this._countDownTimer.reset();
        // this._countDownTimer.stop();
    };
    NNBattleView.prototype.removeNetEvents = function () {
        GameEventManager.removeEvent(NetAction.ready.toString(), this.onReadyResponse, this);
        GameEventManager.removeEvent(NetAction.readyStake.toString(), this.onReadyStakeResponse, this);
        GameEventManager.removeEvent(NetAction.readyRobBanker.toString(), this.onReadyRobBankerResponse, this);
        GameEventManager.removeEvent(NetAction.sayPoker.toString(), this.onSayPokerResponse, this);
        GameEventManager.removeEvent(NetAction.showCard.toString(), this.onShowCardResponse, this);
        GameEventManager.removeEvent(NetAction.robBanker.toString(), this.onRobBankerResponse, this);
        GameEventManager.removeEvent(NetAction.robBankerOverTime.toString(), this.onRobBankerResponse, this);
        GameEventManager.removeEvent(NetAction.stake.toString(), this.onStakeResponse, this);
        GameEventManager.removeEvent(NetAction.jiesuan.toString(), this.onJiesuanResponse, this);
        GameEventManager.removeEvent(NetAction.jiesuan2.toString(), this.onJiesuanResponse2, this);
        GameEventManager.removeEvent(NetAction.offline.toString(), this.onOfflineResponse, this);
        GameEventManager.removeEvent(NetAction.online.toString(), this.onOnlineResponse, this);
        GameEventManager.removeEvent(NetAction.autodissolveRoom.toString(), this.autodissolveRoomResponse, this);
        GameEventManager.removeEvent(NetAction.chatMsg.toString(), this.onChatMsgResponse, this);
        GameEventManager.removeEvent(NetAction.cuopai.toString(), this.onShowLastPoker, this);
        GameEventManager.removeEvent(NetAction.countDown.toString(), this.onCountDownResponse, this);
    };
    NNBattleView.prototype.onCountDownResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        this.countDown.visible = true;
        this.countDownTF.text = "10";
        this._countDownTime = 10;
        this._countDownTimer.reset();
        this._countDownTimer.start();
    };
    /**
     * 服务端返回抢庄结果
     */
    NNBattleView.prototype.onRobBankerResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var playerId = data["playerId"];
        var robMultiple = data["robMultiple"];
        if (playerId == MyUserInfo.getInstance().userId) {
            this.qiangzhuangGroup.visible = false;
            this.countDown.visible = false;
            this._countDownTimer.stop();
            this._countDownTimer.reset();
        }
        var orderIndex = this.getOrderByPlayerId(playerId);
        orderIndex = GameUtls.sitId2LR(GameModel.instance().myOrder, orderIndex);
        this.updatePlayerStatus(orderIndex, NNBattleView.QZ, robMultiple);
    };
    NNBattleView.prototype.onJiesuanResponse2 = function (evt) {
        var result = evt.data;
        var data = result["data"];
        this._jiesuanData2 = data;
        if (this._isLastPlayer) {
            egret.clearTimeout(this._sayPokerTimeOutId);
            this._sayPokerTimeOutId = egret.setTimeout(this.jiesuanResponseTimeOut2, this, 1000);
        }
    };
    NNBattleView.prototype.jiesuanResponseTimeOut2 = function () {
        GameGlobal.iframeLayer.showIFrame(NNGameResult, this._jiesuanData2);
    };
    /**
     * 亮牌
     */
    NNBattleView.prototype.onShowCardResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var playerId = data["playerId"];
        var cardType = data["cardType"];
        var cardList = data["cardList"];
        var nnCardList = data["nnCardList"]; //牛牛牌
        var isLastShowCard = data["isLastShowCard"]; //最后一个人亮牌
        if (playerId == MyUserInfo.getInstance().userId) {
            this.showPlayerPoker(0, cardList, cardType, true, nnCardList);
            this.liangpaiBtn.visible = false;
            this.arrow.visible = false;
        }
        else {
            var playerOrder = this.getOrderByPlayerId(playerId);
            var orderIndex = GameUtls.sitId2LR(GameModel.instance().myOrder, playerOrder);
            this.showPlayerPoker(orderIndex, cardList, cardType, true, nnCardList);
        }
        this._isLastPlayer = (isLastShowCard == 1);
        this.countDown.visible = false;
        this._countDownTimer.reset();
        this._countDownTimer.stop();
        if (CuoPaiEffect.isShow)
            CuoPaiEffect.getInstance().hide();
    };
    /**
     * 服务端返回发牌信息
     */
    NNBattleView.prototype.onSayPokerResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        if (this._zhuangType == 3)
            return;
        this._sayPokerData = data;
        if (this._isLastPlayer) {
            egret.clearTimeout(this._sayPokerTimeOutId);
            this._sayPokerTimeOutId = egret.setTimeout(this.sayPokerResponseTimeOut, this, 1000);
        }
    };
    /**
     *
     */
    NNBattleView.prototype.sayPokerResponseTimeOut = function () {
        egret.clearTimeout(this._sayPokerTimeOutId);
        this.betGroup.visible = false;
        var cardList = this._sayPokerData["cardList"];
        var cardType = this._sayPokerData["cardType"];
        this.showPlayerPoker(0, cardList, cardType, false);
        this.liangpaiBtn.visible = true;
        var len = this._otherOrderList.length;
        for (var i = 0; i < len; i++) {
            this.resetPlayerPokers(this._otherOrderList[i]);
        }
        this.countDown.visible = true;
        this.countDownTF.text = "5";
        this._countDownTime = 5;
        this._countDownTimer.reset();
        this._countDownTimer.start();
        this.fapai();
    };
    NNBattleView.prototype.resetPlayerPokers = function (index) {
        //观察者
        var playerData = this._playerOrderHash2.get(index);
        if (playerData["status"] == BasePlayerView.WATCHER)
            return;
        this["cardGroup" + index].visible = true;
        this.showPlayerPoker(index, [], -1, false);
    };
    NNBattleView.prototype.onOfflineResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var playerId = data["playerId"];
        if (playerId != MyUserInfo.getInstance().userId) {
            var playerOrder = this.getOrderByPlayerId(playerId);
            var orderIndex = GameUtls.sitId2LR(GameModel.instance().myOrder, playerOrder);
            if (orderIndex >= 0)
                this["offline" + orderIndex].visible = true;
        }
    };
    NNBattleView.prototype.onOnlineResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var playerId = data["playerId"];
        if (playerId != MyUserInfo.getInstance().userId) {
            var playerOrder = this.getOrderByPlayerId(playerId);
            var orderIndex = GameUtls.sitId2LR(GameModel.instance().myOrder, playerOrder);
            if (orderIndex >= 0)
                this["offline" + orderIndex].visible = false;
        }
    };
    /**
     * 服务端返回准备抢庄消息（抢庄才有）
     */
    NNBattleView.prototype.onReadyRobBankerResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var curGame = data["curGame"];
        var cardList = data["cardList"];
        this.clearTable2();
        //庄图标
        this.bankerIcon.visible = true;
        this.bankerIcon.x = 534;
        this.bankerIcon.y = 311;
        this.readyBtn.visible = this.inviteBtn.visible = false;
        this.updateRound(curGame);
        this.resetResult(0);
        if (!this._isWatcher) {
            this.qiangzhuangGroup.visible = true;
            this.showPlayerPoker(0, cardList, -1, false);
            var len = this._otherOrderList.length;
            for (var i = 0; i < len; i++) {
                var orderIndex = this._otherOrderList[i];
                this.resetResult(orderIndex);
                this.showPlayerPoker(orderIndex, [], -1);
            }
            this.fapai();
        }
    };
    /**
     *
     */
    NNBattleView.prototype.resetResult = function (orderIndex) {
        this["qiangFlag" + orderIndex].visible = false;
        this["bet" + orderIndex].visible = false;
    };
    /**
     * 服务端返回准备
     */
    NNBattleView.prototype.onReadyResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var playerId = data["playerId"];
        this.clearTable();
        if (playerId == MyUserInfo.getInstance().userId) {
            this.readyBtn.visible = false;
            this._isWatcher = false;
        }
        var playerOrder = this.getOrderByPlayerId(playerId);
        var orderIndex = GameUtls.sitId2LR(GameModel.instance().myOrder, playerOrder);
        var playerData = this._playerOrderHash2.get(orderIndex);
        if (playerData)
            playerData["status"] = NNBattleView.READYED;
        this.updatePlayerStatus(orderIndex, NNBattleView.READYED);
        this["bet" + orderIndex].visible = false;
        this["cardType" + orderIndex].visible = false;
    };
    NNBattleView.prototype.hideBetButton = function () {
        // var len:number = stakeScoreList.length;
        // for(var i:number = 0; i < len; i++)
        // {
        // 	var beiButton:eui.Button = this["bei"+stakeScoreList[i]];
        // 	beiButton.visible = true;
        // 	beiButton["value"] = stakeScoreList[i];
        // }
        this.betGroup.removeChildren();
    };
    /**
     * 服务端返回准备压分
     */
    NNBattleView.prototype.onReadyStakeResponse = function (evt) {
        var _this = this;
        var result = evt.data;
        var data = result["data"];
        var roomBankerId = data["roomBankerId"];
        var curGame = data["curGame"];
        var stakeScoreList = data["stakeScoreList"];
        this._roomBankerId = roomBankerId;
        this.clearTable2();
        //看牌抢庄
        if (this._zhuangType == 3 && (!this._isWatcher)) {
            var len = GameGlobal.MAX_PLAYER_COUNT;
            for (var i = 0; i < len; i++) {
                this["cardGroup" + i].visible = true;
            }
        }
        this.readyBtn.visible = this.inviteBtn.visible = false;
        this.liangpaiBtn.visible = false;
        this.updateRound(curGame);
        if (roomBankerId == MyUserInfo.getInstance().userId) {
            this.betGroup.visible = false;
        }
        else {
            if (!this._isWatcher) {
                this.betGroup.visible = true;
                this.hideBetButton();
                var len = stakeScoreList.length;
                for (var i = 0; i < len; i++) {
                    var beiButton = new eui.Image();
                    beiButton.source = "nnGame2_json.bei" + stakeScoreList[i];
                    beiButton["value"] = stakeScoreList[i];
                    beiButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBeiHandle, this);
                    this.betGroup.addChild(beiButton);
                    beiButton.x = 161 * i;
                }
            }
        }
        var playerOrder = this.getOrderByPlayerId(roomBankerId);
        var orderIndex = GameUtls.sitId2LR(GameModel.instance().myOrder, playerOrder);
        this.updatePlayerZhuang(orderIndex);
        egret.Tween.removeTweens(this.bankerIcon);
        var bankIconPosX = this["player" + orderIndex].x + 30;
        var bankIconPosY = this["player" + orderIndex].y + 30;
        egret.Tween.get(this.bankerIcon).to({ x: bankIconPosX, y: bankIconPosY }, 300).call(function () {
            _this.bankerIcon.visible = false;
        }, this);
        this.countDown.visible = true;
        this.countDownTF.text = "5";
        this._countDownTime = 5;
        this._countDownTimer.reset();
        this._countDownTimer.start();
    };
    NNBattleView.prototype.onTouchBeiHandle = function (evt) {
        var beiButton = evt.currentTarget;
        var value = beiButton["value"];
        var data = {};
        data["msgType"] = NetAction.stake;
        data["msg"] = { "stakeScore": value };
        SocketCommand.getInstance().send(data);
    };
    NNBattleView.prototype.updatePlayerZhuang = function (orderIndex) {
        this["zhuang" + orderIndex].visible = true;
    };
    NNBattleView.prototype.clearTable = function () {
        //隐藏玩家
        var len = GameGlobal.MAX_PLAYER_COUNT;
        for (var i = 0; i < len; i++) {
            this["zhuang" + i].visible = false;
            this["bet" + i].visible = false;
            this["qiangFlag" + i].visible = false;
            this["cardType" + i].visible = false;
            this["cardGroup" + i].visible = false;
        }
        if (this._nnEffect && this._nnEffect.parent)
            this._nnEffect.parent.removeChild(this._nnEffect);
        // this._flyContianer.removeChildren();
        this.qiangzhuangGroup.visible = false;
        this.betGroup.visible = false;
        this.arrow.visible = false;
        this.countDown.visible = false;
        this.countDownTF.text = "0";
        this._countDownTime = 10;
        this._countDownTimer.reset();
        this._countDownTimer.stop();
    };
    NNBattleView.prototype.clearTable2 = function () {
        //隐藏玩家
        var len = GameGlobal.MAX_PLAYER_COUNT;
        for (var i = 0; i < len; i++) {
            this["zhuang" + i].visible = false;
            this["readyed" + i].visible = false;
            this["bet" + i].visible = false;
            this["qiangFlag" + i].visible = false;
            this["cardType" + i].visible = false;
            this["cardGroup" + i].visible = false;
        }
        if (this._nnEffect && this._nnEffect.parent)
            this._nnEffect.parent.removeChild(this._nnEffect);
        this._flyContianer.removeChildren();
        this.qiangzhuangGroup.visible = false;
        this.betGroup.visible = false;
        this.arrow.visible = false;
        this.countDown.visible = false;
        this.countDownTF.text = "0";
        this._countDownTime = 10;
        this._countDownTimer.reset();
        this._countDownTimer.stop();
    };
    /**
     * 获取玩家order
     */
    NNBattleView.prototype.getOrderByPlayerId = function (playerId) {
        var len = this._playerOrderList.length;
        for (var i = 0; i < len; i++) {
            var playerData = this._playerOrderList[i];
            if (playerData["playerId"].toString() == playerId)
                return playerData["order"];
        }
        return null;
    };
    NNBattleView.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.clear();
        this.recordBtn.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.recordBtn.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.recordBtn.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchRelease, this);
        this._timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimerHandle2, this);
        this._timer.stop();
        this.removeNetEvents();
    };
    NNBattleView.prototype.onTouchBegin = function (evt) {
        if (this._recordMc == null)
            this._recordMc = DUtils.createMovieClipByName("record");
        this._recordMc.frameRate = 12;
        this._recordMc.play(-1);
        this.addChild(this._recordMc);
        this._recordMc.x = (GameGlobal.stageW - this._recordMc.width) >> 1;
        this._recordMc.y = (GameGlobal.stageH - this._recordMc.height) >> 1;
        this._isRecording = true;
        egret.ExternalInterface.call("recordBegin", "recordBegin");
    };
    NNBattleView.prototype.onTouchEnd = function (evt) {
        if (this._recordMc && this.contains(this._recordMc))
            this.removeChild(this._recordMc);
        this._isRecording = false;
        egret.ExternalInterface.call("recordEnd", "recordEnd");
    };
    NNBattleView.prototype.onTouchRelease = function (evt) {
        LogUtils.log("onTouchReleaseOutSize");
        if (this._recordMc && this.contains(this._recordMc))
            this.removeChild(this._recordMc);
        this._isRecording = false;
        this.showPlayerRecord(0, false);
        egret.ExternalInterface.call("recordCancel", "recordCancel");
    };
    /**
     * 播放玩家录制音频
     */
    NNBattleView.prototype.showPlayerRecord = function (orderIndex, value) {
        this["yuyin" + orderIndex].visible = value;
    };
    NNBattleView.prototype.touchBindButtonHandler = function (clickTarget) {
        _super.prototype.touchBindButtonHandler.call(this, clickTarget);
        if (clickTarget == this.setBtn) {
            GameGlobal.iframeLayer.showIFrame(SettingView);
        }
        else if (clickTarget == this.chatBtn) {
            GameGlobal.iframeLayer.showIFrame(NN_ChatView);
        }
        else if (clickTarget == this.inviteBtn) {
            //邀请游戏
            // var desc:string = GameGlobal.inviteDesc;
            // desc = desc.replace("{1}", this._battleData["roomId"]);
            // desc = desc.replace("{2}", this._battleData["totalGames"]);
            // var zhuangType:number = this._battleData["roomBankerType"];
            // var zhuangTypeStr:string = this.getZhuangTypeStr(zhuangType);
            // desc = desc.replace("{3}", zhuangTypeStr);
            // desc = desc.replace("{4}", this.getPayTypeStr(this._battleData["payType"]));
            var zhuangType = this._battleData["roomBankerType"];
            var zhuangTypeStr = this.getZhuangTypeStr(zhuangType);
            var desc = "[" + zhuangTypeStr + "]";
            var payType = this.getPayTypeStr(this._battleData["payType"]);
            if (this._battleData.hasOwnProperty("teaHouseNum") && (this._battleData["teaHouseNum"] != null)) {
                desc += "茶楼编号:" + this._battleData["teaHouseNum"] + ",第" + this._battleData["tableNum"] + "桌," + this._battleData["totalGames"] + "局," + payType + ",速度来玩吧!";
                ;
            }
            else
                desc += "房间号：" + this._battleData["roomId"] + "," + this._battleData["totalGames"] + "局," + payType + ",速度来玩吧!";
            egret.ExternalInterface.call("shareToFriend", GameGlobal.shareTitle + "|" + desc);
        }
        else if (clickTarget == this.readyBtn) {
            var data = {};
            data["msgType"] = NetAction.ready;
            data["msg"] = { "roomId": GameModel.instance().roomId, "playerId": MyUserInfo.getInstance().userId };
            SocketCommand.getInstance().send(data);
        }
        else if (clickTarget == this.helpBtn) {
            GameGlobal.iframeLayer.showIFrame(NiuNiuHelpView, this._battleData);
        }
        else if (clickTarget == this.quitBtn) {
            AlertView.getInstance().setConfirmCallBack(this.quitConfirm, this);
            AlertView.getInstance().show("是否确定解散房间？", AlertView.CONFIRM_MODE);
        }
        else if (clickTarget == this.liangpaiBtn) {
            var data = {};
            data["msgType"] = NetAction.showCard;
            SocketCommand.getInstance().send(data);
        }
        else if (clickTarget == this.arrow) {
            // var data:Object = {};
            // data["msgType"] = NetAction.showCard;
            // SocketCommand.getInstance().send(data);
            CuoPaiEffect.getInstance().show();
        }
        else if (clickTarget == this["qiang0"]) {
            var data = {};
            data["msgType"] = NetAction.robBanker;
            data["msg"] = { "robMultiple": 0, "isRobBanker": 3 };
            SocketCommand.getInstance().send(data);
        }
        else if (clickTarget == this["qiang1"]) {
            var data = {};
            data["msgType"] = NetAction.robBanker;
            data["msg"] = { "robMultiple": 1, "isRobBanker": 4 };
            SocketCommand.getInstance().send(data);
        }
        else if (clickTarget == this["qiang2"]) {
            var data = {};
            data["msgType"] = NetAction.robBanker;
            data["msg"] = { "robMultiple": 2, "isRobBanker": 4 };
            SocketCommand.getInstance().send(data);
        }
        else if (clickTarget == this["qiang3"]) {
            var data = {};
            data["msgType"] = NetAction.robBanker;
            data["msg"] = { "robMultiple": 3, "isRobBanker": 4 };
            SocketCommand.getInstance().send(data);
        }
        else if (clickTarget == this["qiang4"]) {
            var data = {};
            data["msgType"] = NetAction.robBanker;
            data["msg"] = { "robMultiple": 4, "isRobBanker": 4 };
            SocketCommand.getInstance().send(data);
        }
        else if (clickTarget == this["face0"]) {
            var uiData = this._playerOrderHash2.get(0);
            GameGlobal.iframeLayer.showIFrame(PlayerInfoView, uiData);
        }
        else if (clickTarget == this["face1"]) {
            var uiData = this._playerOrderHash2.get(1);
            GameGlobal.iframeLayer.showIFrame(PlayerInfoView, uiData);
        }
        else if (clickTarget == this["face2"]) {
            var uiData = this._playerOrderHash2.get(2);
            GameGlobal.iframeLayer.showIFrame(PlayerInfoView, uiData);
        }
        else if (clickTarget == this["face3"]) {
            var uiData = this._playerOrderHash2.get(3);
            GameGlobal.iframeLayer.showIFrame(PlayerInfoView, uiData);
        }
        else if (clickTarget == this["face4"]) {
            var uiData = this._playerOrderHash2.get(4);
            GameGlobal.iframeLayer.showIFrame(PlayerInfoView, uiData);
        }
        else if (clickTarget == this["face5"]) {
            var uiData = this._playerOrderHash2.get(5);
            GameGlobal.iframeLayer.showIFrame(PlayerInfoView, uiData);
        }
    };
    NNBattleView.prototype.getPayTypeStr = function (type) {
        var payStr = "房主支付";
        switch (type) {
            case 1:
                payStr = "房主支付";
                break;
            case 2:
                payStr = "AA支付";
                break;
        }
        return payStr;
    };
    NNBattleView.prototype.quitConfirm = function () {
        var data = {};
        data["msgType"] = NetAction.dissolveRoom;
        data["token"] = GameModel.instance().token;
        data["gameType"] = GameGlobal.gameType;
        data["msg"] = { "roomId": GameModel.instance().roomId, "playerId": MyUserInfo.getInstance().userId };
        SocketCommand.getInstance().send(data);
    };
    //status
    NNBattleView.GAME_READY = 1; //刚开始准备阶段
    NNBattleView.GAME_INROB = 2; //抢庄中
    NNBattleView.GAME_INSTAKESCORE = 3; //压分中
    NNBattleView.GAME_INGAME = 4; //小局中
    NNBattleView.GAME_CURGAMEOVER = 5; //小局结束
    NNBattleView.GAME_TOTALGAMEOVER = 6; //一圈结束
    //player status
    NNBattleView.NOT_READY = 1; //未准备
    NNBattleView.READYED = 2; //准备
    NNBattleView.NOT_QZ = 3; //不抢庄
    NNBattleView.QZ = 4; //抢庄
    NNBattleView.WATCHER = 0; //观察者
    NNBattleView.BETED = 5; //已压分
    NNBattleView.SHOWCARDED = 6; //已亮牌
    NNBattleView.WAIT_TO_BET = 7; //等待亮牌
    return NNBattleView;
}(BaseUIComponent));
__reflect(NNBattleView.prototype, "NNBattleView");
//# sourceMappingURL=NNBattleView.js.map