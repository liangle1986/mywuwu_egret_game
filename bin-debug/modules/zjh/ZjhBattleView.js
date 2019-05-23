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
 * 扎金花游戏界面
 */
var ZjhBattleView = (function (_super) {
    __extends(ZjhBattleView, _super);
    function ZjhBattleView() {
        var _this = _super.call(this) || this;
        _this._otherPlayerViews = []; //其他玩家
        _this._countDownTime = 10; //倒计时
        // private onCountDownResponse(evt:DEvent):void
        // {
        // 	var result:Object = evt.data;
        // 	var data:Object = result["data"];
        // 	// var time:number = data["time"];
        // 	this._countDownView.start();
        // }
        _this._isRecording = false; //是否正在录音
        _this._lastStakeScore = 1; //上个玩家下注
        _this._lastPlayerId = ""; //上个玩家uid
        _this._currentPlayerId = ""; //当前玩家id
        _this._fapaiTimerId = -1;
        _this._isTweening = false;
        return _this;
    }
    ZjhBattleView.prototype.init = function (roomInfo) {
        if (roomInfo === void 0) { roomInfo = null; }
        this.dispose();
        this._data = roomInfo;
        if (this._data == null) {
            throw new Error("battle data is null!!!");
        }
        GameModel.instance().roomId = this._data["roomId"];
        var roomOwnerId = this._data["roomOwnerId"]; //房主
        var roomBankerId = this._data["roomBankerId"]; //庄家
        var stakeButtom = this._data["stakeButtom"]; //底分
        var gameStatus = -1;
        if (this._data.hasOwnProperty("status"))
            gameStatus = this._data["status"];
        this._betInfoView.init(this._data);
        if (this._data.hasOwnProperty("curGame"))
            this._betInfoView.updateRound(this._data["curGame"], this._data["totalGames"]);
        this._playerDataHash = new HashMap();
        var playerList = this._data["playerList"];
        var len = playerList.length;
        var myOrder = 1; //1-5
        var myStatus = PlayerView.NOT_READY;
        var otherPlayList = [];
        for (var i = 0; i < len; i++) {
            var playerData = playerList[i];
            var playerId = playerData["playerId"];
            this._playerDataHash.put(playerId, playerData);
            if (playerId == MyUserInfo.getInstance().userId) {
                this._myPlayerView.setData(playerData);
                this._myPlayerView.updateScore(playerData["totalScore"]);
                myOrder = playerData["order"];
                myStatus = playerData["status"];
                this._readyBtn.visible = false;
                this._myPlayerView.updateStatus(myStatus);
                if (myStatus == PlayerView.READYED) {
                    this._readyBtn.visible = false;
                }
                else if (myStatus == PlayerView.NOT_READY) {
                    this._readyBtn.visible = true;
                }
                else if (myStatus == PlayerView.WATCHER) {
                    this._myPlayerView.canLook = false;
                    this._myPlayerView.lookPoker([], false);
                }
                else if (myStatus == PlayerView.LOOKED) {
                    this._myPlayerView.lookPoker(playerData["cardList"], false);
                    this._myPlayerView.canLook = false;
                    //押注翻倍
                    //看牌情况，2，4，6分
                    this._1fenBtn.setSkin("game_json.2fenBtn", "game_json.2fenBtn2");
                    this._1fenBtn["value"] = 2;
                    this._2fenBtn.setSkin("game_json.4fenBtn", "game_json.4fenBtn2");
                    this._2fenBtn["value"] = 4;
                    this._3fenBtn.setSkin("game_json.6fenBtn", "game_json.6fenBtn2");
                    this._3fenBtn["value"] = 6;
                }
                else {
                    this._myPlayerView.canLook = true;
                    this._myPlayerView.lookPoker([], false);
                }
                if (playerData.hasOwnProperty("onlineStatus") && (playerData["onlineStatus"] != null))
                    this._myPlayerView.setOffline(playerData["onlineStatus"] != 1);
                if (gameStatus == ZjhBattleView.GAMEING) {
                    if (myStatus != 0) {
                        //底分筹码
                        this.betChip(MyUserInfo.getInstance().userId, stakeButtom);
                    }
                    //压住筹码
                    var betScores = playerData["stakeScoreList"];
                    if (betScores != null && betScores.length > 0) {
                        var betScoreLen = betScores.length;
                        for (var j = 0; j < betScoreLen; j++) {
                            this.betChip(MyUserInfo.getInstance().userId, betScores[j]);
                        }
                    }
                }
            }
            else {
                otherPlayList.push(playerList[i]);
            }
        }
        GameModel.instance().myOrder = myOrder;
        this._otherPlayerViews = [];
        len = otherPlayList.length;
        var playerView;
        for (var i = 0; i < len; i++) {
            playerView = new OtherPlayerView();
            var otherPlayerData = otherPlayList[i];
            var order = otherPlayerData["order"];
            var status = otherPlayerData["status"];
            var otherOrder = GameUtls.sitId2LR(myOrder, order);
            playerView.x = GameUtls.PLAYER_SEAT_POS[otherOrder - 1][0];
            playerView.y = GameUtls.PLAYER_SEAT_POS[otherOrder - 1][1];
            playerView.setPosition(otherOrder);
            playerView.setData(otherPlayerData);
            this.addChild(playerView);
            playerView.updateScore(otherPlayerData["totalScore"]);
            this._otherPlayerViews.push(playerView);
            playerView.updateStatus(otherPlayerData["status"]);
            if (otherPlayerData["status"] == 4)
                playerView.lookPoker(otherPlayerData["cardList"], false);
            else
                playerView.lookPoker([], false);
            if (otherPlayerData.hasOwnProperty("onlineStatus") && (otherPlayerData["onlineStatus"] != null))
                playerView.setOffline(otherPlayerData["onlineStatus"] != 1);
            if (gameStatus == ZjhBattleView.GAMEING) {
                GameGlobal.iframeLayer.hideIFrame2(GameResult);
                if (status != 0)
                    this.betChip(otherPlayerData["playerId"], stakeButtom);
                //压住筹码
                var betScores = otherPlayerData["stakeScoreList"];
                if (betScores != null && betScores.length > 0) {
                    this._lastPlayerId = otherPlayerData["playerId"];
                    var betScoreLen = betScores.length;
                    for (var j = 0; j < betScoreLen; j++) {
                        this.betChip(otherPlayerData["playerId"], betScores[j]);
                    }
                }
                SoundManager.instance.playSound("send-chip_mp3");
            }
        }
        this.addChild(this._emotionContainer);
        if (roomOwnerId == MyUserInfo.getInstance().userId) {
            this._myPlayerView.isFang = true;
        }
        else {
            playerView = this.getPlayerView(roomOwnerId);
            if (playerView)
                playerView.isFang = true;
        }
        if (roomBankerId != null && roomBankerId != "") {
            if (roomBankerId == MyUserInfo.getInstance().userId) {
                this._myPlayerView.isZhuang = true;
            }
            else {
                playerView = this.getPlayerView(roomBankerId);
                playerView.isZhuang = true;
            }
        }
        //小结算
        if (gameStatus == ZjhBattleView.ROUND_END) {
            this._inviteBtn.visible = false;
            GameGlobal.iframeLayer.showIFrame(GameResult);
            var resultView = GameGlobal.iframeLayer.getIFrame(GameResult);
            resultView.setData(this._data);
            resultView.updateBtn(0);
        }
        else if (gameStatus == ZjhBattleView.GAME_END) {
            this._inviteBtn.visible = false;
            GameGlobal.iframeLayer.showIFrame(GameResult);
            var resultView = GameGlobal.iframeLayer.getIFrame(GameResult);
            resultView.setData(this._data);
            resultView.updateBtn(1);
        }
        else if (gameStatus == ZjhBattleView.GAMEING) {
            this._inviteBtn.visible = false;
            if (this._data.hasOwnProperty("curPlayerId")) {
                var curPlayerId = this._data["curPlayerId"];
                this.updatePlayerTurn(curPlayerId);
            }
        }
        this.addNetEvents();
        SoundManager.instance.playMusic("table_mp3");
    };
    ZjhBattleView.prototype.clearTable = function () {
        egret.clearTimeout(this._fapaiTimerId);
        this._giveUpBtn.setEnabled(false);
        this._compareBtn.setEnabled(false);
        this._1fenBtn.setEnabled(false);
        this._2fenBtn.setEnabled(false);
        this._3fenBtn.setEnabled(false);
        this._cancelCompareBtn.visible = false;
        this._compareBtn.visible = true;
        this._inviteBtn.visible = true;
        this._readyBtn.visible = true;
        this._myPlayerView.showMyTurn(false);
        var len = this._otherPlayerViews.length;
        for (var i = 0; i < len; i++) {
            var otherPlayerView = this._otherPlayerViews[i];
            otherPlayerView.reset();
            otherPlayerView.visible = false;
            if (otherPlayerView.stage)
                this.removeChild(otherPlayerView);
        }
        this._otherPlayerViews = [];
        this._playerDataHash = new HashMap();
        this._myPlayerView.reset();
        this._myPlayerView.visible = true;
        this._lastPlayerId = "";
        this._currentPlayerId = "";
        while (this._chipContainer.numChildren > 0)
            this._chipContainer.removeChildAt(0);
        while (this._emotionContainer.numChildren > 0) {
            var childObj = this._emotionContainer.removeChildAt(0);
            if (childObj instanceof egret.Bitmap) {
                egret.Tween.removeTweens(childObj);
            }
        }
    };
    // 移除所有舞台信息
    ZjhBattleView.prototype.dispose = function () {
        this.removeEvents();
        this.clearTable();
        GameGlobal.iframeLayer.hideIFrame2(NN_ChatView);
        GameModel.instance().roomId = 0;
        this._countDownTimer.stop();
        this._countDownTimer.reset();
        this.countDown.visible = false;
    };
    // 初始化游戏界面
    ZjhBattleView.prototype.initView = function () {
        this._bg = new egret.Bitmap();
        this._bg.texture = RES.getRes("bg4_png");
        this._bg.width = GameGlobal.stageW;
        this._bg.height = GameGlobal.stageH;
        this.addChild(this._bg);
        this._bottomBg = DUtils.createBitmapByName("n_bottomeBg_png");
        this._bottomBg.y = 586;
        this.addChild(this._bottomBg);
        // 游戏基本信息
        this._betInfoView = new BetInfoView();
        this.addChild(this._betInfoView);
        this._betInfoView.x = 177;
        this._betInfoView.y = 12;
        // this._optionBtn = new DButton("game_json.optionBtn2");
        // this._optionBtn.x = 13; this._optionBtn.y = 7;
        // this.addChild(this._optionBtn);
        // 录音
        this._recordBtn = new DButton("nnGame2_json.n_recordBtn");
        this.addChild(this._recordBtn);
        this._recordBtn.x = 1068;
        this._recordBtn.y = 595;
        //消息
        this._chatBtn = new DButton("nnGame2_json.n_chatBtn");
        this.addChild(this._chatBtn);
        this._chatBtn.x = 962;
        this._chatBtn.y = 596;
        // 弃牌
        this._giveUpBtn = new DButton("zjhGame_json.giveUpBtn", "zjhGame_json.giveUpBtn2");
        this._giveUpBtn.x = 925;
        this._giveUpBtn.y = 510;
        this.addChild(this._giveUpBtn);
        // 比牌
        this._compareBtn = new DButton("zjhGame_json.bipaiBtn", "zjhGame_json.bipaiBtn2");
        this._compareBtn.x = 738;
        this._compareBtn.y = 510;
        this.addChild(this._compareBtn);
        this._compareBtn.setEnabled(false);
        // 取消比牌
        this._cancelCompareBtn = new DButton("zjhGame_json.cancelBipaiBtn");
        this._cancelCompareBtn.x = 738;
        this._cancelCompareBtn.y = 510;
        this.addChild(this._cancelCompareBtn);
        this._cancelCompareBtn.visible = false;
        // 设置
        this._setBtn = new DButton("nnGame2_json.n_setBtn");
        this.addChild(this._setBtn);
        this._setBtn.x = 866;
        this._setBtn.y = 596;
        // 退出
        this._quitBtn = new DButton("nnGame2_json.n_quitBtn");
        this.addChild(this._quitBtn);
        this._quitBtn.x = 1049;
        this._quitBtn.y = 25;
        // 帮助
        this._helpBtn = new DButton("nnGame2_json.n_helpBtn");
        this.addChild(this._helpBtn);
        this._helpBtn.x = 1048;
        this._helpBtn.y = 108;
        // 准备
        this._readyBtn = new DButton("nnGame2_json.n_readyBtn");
        this._readyBtn.x = 484;
        this._readyBtn.y = 324;
        this.addChild(this._readyBtn);
        // 邀请按钮
        this._inviteBtn = new DButton("nnGame2_json.n_inviteBtn");
        this._inviteBtn.x = 472;
        this._inviteBtn.y = 241;
        this.addChild(this._inviteBtn);
        // this._settingView = new GameSettingView();
        // this._settingView.x = 19; this._settingView.y = 96;
        // this.addChild(this._settingView);
        // this._settingView.visible = false;
        // 分数按钮
        this.initFenBtns();
        this._chipContainer = new egret.DisplayObjectContainer();
        this.addChild(this._chipContainer);
        // 玩家舞台
        this._myPlayerView = new MyPlayerView();
        this._myPlayerView.x = 37;
        this._myPlayerView.y = 444;
        this.addChild(this._myPlayerView);
        this._emotionContainer = new egret.DisplayObjectContainer();
        this.addChild(this._emotionContainer);
        // this._refreshBtn = new DButton("game_json.refreshBtn");
        // this.addChild(this._refreshBtn);
        // this._refreshBtn.y = 10; this._refreshBtn.x = GameGlobal.stageW - this._refreshBtn.width - 20;
        // this._refreshBtn.visible = false;
        // this._countDownView = new CountDownView();
        // this.addChild(this._countDownView);
        // this._countDownView.x = (GameGlobal.stageW - this._countDownView.width) >> 1;
        // this._countDownView.y = GameGlobal.stageH - 390;//250;
        this.countDown = new egret.DisplayObjectContainer();
        this.addChild(this.countDown);
        this.countDown.x = 176;
        this.countDown.y = 60;
        this.countDown.visible = false;
        var countDownImg = DUtils.createBitmapByName("nnGame2_json.clockBg");
        this.countDown.addChild(countDownImg);
        this.countDownTF = new egret.TextField();
        this.countDownTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        this.countDownTF.textColor = 0xffffff;
        this.countDownTF.size = 30;
        this.countDown.addChild(this.countDownTF);
        this.countDownTF.x = 10;
        this.countDownTF.y = 32;
        this.countDownTF.text = "0";
        this.countDownTF.width = 59;
        this.countDownTF.textAlign = egret.HorizontalAlign.CENTER;
        this._countDownTimer = new egret.Timer(1000);
        this._countDownTimer.addEventListener(egret.TimerEvent.TIMER, this.onTimerHandle, this);
        this.addEvents();
        this.resize();
    };
    ZjhBattleView.prototype.onTimerHandle = function (evt) {
        this._countDownTime--;
        this._countDownTime = Math.max(this._countDownTime, 0);
        if (this._countDownTime <= 0) {
            this._countDownTimer.stop();
            this._countDownTimer.reset();
            this.countDown.visible = false;
        }
        this.countDownTF.text = this._countDownTime.toString();
    };
    ZjhBattleView.prototype.removeEvents = function () {
        //通信协议
        GameEventManager.removeEvent(NetAction.ready.toString(), this.onReadyResponse, this);
        GameEventManager.removeEvent(NetAction.sayPoker.toString(), this.onSayPokerResponse, this);
        GameEventManager.removeEvent(NetAction.look.toString(), this.onLookPokerResponse, this);
        GameEventManager.removeEvent(NetAction.giveup.toString(), this.onGiveupPokerResponse, this);
        GameEventManager.removeEvent(NetAction.follow.toString(), this.onFollowResponse, this);
        GameEventManager.removeEvent(NetAction.compare.toString(), this.onCompareResponse, this);
        GameEventManager.removeEvent(NetAction.autoCompare.toString(), this.onAutoCompareResponse, this); //小结算
        GameEventManager.removeEvent(NetAction.chatMsg.toString(), this.onChatMsgResponse, this);
        GameEventManager.removeEvent(NetAction.offline.toString(), this.onOfflineResponse, this);
        GameEventManager.removeEvent(NetAction.online.toString(), this.onOnlineResponse, this);
        GameEventManager.removeEvent(NetAction.autodissolveRoom.toString(), this.autodissolveRoomResponse, this);
        GameEventManager.removeEvent(NetAction.countDown.toString(), this.onCountDownResponse, this);
    };
    ZjhBattleView.prototype.onCountDownResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        this.countDown.visible = true;
        this.countDownTF.text = "10";
        this._countDownTimer.reset();
        this._countDownTimer.start();
    };
    ZjhBattleView.prototype.addNetEvents = function () {
        GameEventManager.addEvent(NetAction.ready.toString(), this.onReadyResponse, this);
        GameEventManager.addEvent(NetAction.sayPoker.toString(), this.onSayPokerResponse, this);
        GameEventManager.addEvent(NetAction.look.toString(), this.onLookPokerResponse, this);
        GameEventManager.addEvent(NetAction.giveup.toString(), this.onGiveupPokerResponse, this);
        GameEventManager.addEvent(NetAction.follow.toString(), this.onFollowResponse, this);
        GameEventManager.addEvent(NetAction.compare.toString(), this.onCompareResponse, this);
        GameEventManager.addEvent(NetAction.autoCompare.toString(), this.onAutoCompareResponse, this); //小结算
        GameEventManager.addEvent(NetAction.chatMsg.toString(), this.onChatMsgResponse, this);
        GameEventManager.addEvent(NetAction.offline.toString(), this.onOfflineResponse, this);
        GameEventManager.addEvent(NetAction.online.toString(), this.onOnlineResponse, this);
        GameEventManager.addEvent(NetAction.autodissolveRoom.toString(), this.autodissolveRoomResponse, this);
        GameEventManager.addEvent(NetAction.countDown.toString(), this.onCountDownResponse, this);
    };
    ZjhBattleView.prototype.addEvents = function () {
        //btn events
        this._quitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this._helpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this._setBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this._readyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this._inviteBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this._giveUpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this._compareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this._cancelCompareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this._chatBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this._recordBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this._1fenBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this._2fenBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this._3fenBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        // this._refreshBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this._recordBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this._recordBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this._recordBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchRelease, this);
        // GameEventManager.addEvent(NetAction.countDown.toString(), this.onCountDownResponse, this);
        // this.addNetEvents();
        //
        GameEventManager.addEvent("compareComplete", this.onCompareComplete, this);
        GameEventManager.addEvent(GameEventManager.NEXT_ROUND, this.onNextRound, this);
        //
        var self = this;
        egret.ExternalInterface.addCallback("recordEndPlay", function (message) {
            LogUtils.log("recordEndPlay");
            self._myPlayerView.showRecord(true);
            SoundManager.instance.isMusicOn = false;
        });
        egret.ExternalInterface.addCallback("playMyRecordEnd", function (message) {
            LogUtils.log("playMyRecordEnd");
            self._myPlayerView.showRecord(false);
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
    };
    ZjhBattleView.prototype.onTouchBegin = function (evt) {
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
    ZjhBattleView.prototype.onTouchEnd = function (evt) {
        if (this._recordMc && this.contains(this._recordMc))
            this.removeChild(this._recordMc);
        this._isRecording = false;
        egret.ExternalInterface.call("recordEnd", "recordEnd");
    };
    ZjhBattleView.prototype.onTouchRelease = function (evt) {
        LogUtils.log("onTouchReleaseOutSize");
        if (this._recordMc && this.contains(this._recordMc))
            this.removeChild(this._recordMc);
        this._isRecording = false;
        this._myPlayerView.showRecord(false);
        egret.ExternalInterface.call("recordCancel", "recordCancel");
    };
    ZjhBattleView.prototype.onOfflineResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var playerId = data["playerId"];
        if (playerId != MyUserInfo.getInstance().userId) {
            var playerView = this.getPlayerView(playerId);
            if (playerView)
                playerView.setOffline(true);
        }
    };
    ZjhBattleView.prototype.onOnlineResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var playerId = data["playerId"];
        if (playerId != MyUserInfo.getInstance().userId) {
            var playerView = this.getPlayerView(playerId);
            playerView.setOffline(false);
        }
    };
    /**
     * 给玩家发送表情
     */
    ZjhBattleView.prototype.sendEmotionToPlayer = function (emotion, playerId, toPlayerId) {
        var _this = this;
        var emotionImg = new egret.Bitmap();
        emotionImg.texture = RES.getRes("emotion_json." + emotion);
        emotionImg.anchorOffsetX = emotionImg.width * 0.5;
        emotionImg.anchorOffsetY = emotionImg.height * 0.5;
        var centerPos = this._myPlayerView.getChipBornPos();
        if (playerId != MyUserInfo.getInstance().userId) {
            var playerView = this.getPlayerView(playerId);
            centerPos = playerView.getChipBornPos();
        }
        emotionImg.x = centerPos[0];
        emotionImg.y = centerPos[1];
        this._emotionContainer.addChild(emotionImg);
        var toPos = [0, 0];
        if (toPlayerId != MyUserInfo.getInstance().userId) {
            var playerView = this.getPlayerView(toPlayerId);
            toPos = playerView.getChipBornPos();
        }
        else {
            toPos = this._myPlayerView.getChipBornPos();
        }
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
    ZjhBattleView.prototype.onChatMsgResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var playerId = data["playerId"];
        var chatType = data["chatType"];
        var chatMsg = data["chatMsg"];
        var otherPlayerId = data["otherPlayerId"];
        //给特定玩家的表情消息
        if (chatType == 5) {
            this.sendEmotionToPlayer(chatMsg, playerId, otherPlayerId);
            return;
        }
        //录制
        if (chatType == 6) {
            if (otherPlayerId == MyUserInfo.getInstance().userId)
                return;
            var self = this;
            egret.ExternalInterface.addCallback("playRecordEnd", function (message) {
                var playerView = self.getPlayerView(message);
                if (playerView)
                    playerView.showRecord(false);
                SoundManager.instance.isMusicOn = true;
            });
            SoundManager.instance.isMusicOn = false;
            var playerView = self.getPlayerView(otherPlayerId);
            playerView.showRecord(true);
            egret.ExternalInterface.call("playRecord", otherPlayerId + "|" + chatMsg);
        }
        if (playerId == MyUserInfo.getInstance().userId) {
            this._myPlayerView.showChatMsg(chatType, chatMsg);
        }
        else {
            var playerView = this.getPlayerView(playerId);
            playerView.showChatMsg(chatType, chatMsg);
        }
    };
    ZjhBattleView.prototype.autodissolveRoomResponse = function (evt) {
        var data = evt.data;
        var playerId = data["playerId"];
        AlertView.getInstance().setConfirmCallBack(this.autodissolveRoomConfirm, this);
        AlertView.getInstance().show("由于玩家离开时间较长，房间自动解散，是否返回大厅？", AlertView.CONFIRM_MODE);
    };
    ZjhBattleView.prototype.autodissolveRoomConfirm = function () {
        GameEventManager.dispatchEvent(GameEventManager.QUIT_ROOM);
    };
    ZjhBattleView.prototype.onCompareComplete = function (evt) {
        var data = evt.data;
        this.playerGetChip(data["winnerId"]);
    };
    ZjhBattleView.prototype.onNextRound = function () {
        var len = this._otherPlayerViews.length;
        for (var i = 0; i < len; i++) {
            var otherPlayerView = this._otherPlayerViews[i];
            otherPlayerView.setCompareFlag(false);
            otherPlayerView.showMyTurn(false);
            otherPlayerView.isZhuang = false;
            otherPlayerView.updateStatus(-1);
        }
        this._giveUpBtn.setEnabled(false);
        this._compareBtn.setEnabled(false);
        this._1fenBtn.setEnabled(false);
        this._2fenBtn.setEnabled(false);
        this._3fenBtn.setEnabled(false);
        this._cancelCompareBtn.visible = false;
        this._compareBtn.visible = true;
        var data = {};
        data["msgType"] = NetAction.ready;
        data["msg"] = { "roomId": GameModel.instance().roomId };
        SocketCommand.getInstance().send(data);
        GameGlobal.iframeLayer.hideIFrame2(GameResult);
    };
    ZjhBattleView.prototype.onJiesuanResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        GameGlobal.iframeLayer.showIFrame(JieSuanView, data);
    };
    ZjhBattleView.prototype.onAutoCompareResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var playerList = data["playerList"];
        var len = playerList.length;
        for (var i = 0; i < len; i++) {
            var playerId = playerList[i].playerId;
            var status = playerList[i].status;
            if (playerId == MyUserInfo.getInstance().userId) {
                this._myPlayerView.updateStatus(status);
                this._myPlayerView.updateScore(playerList[i].totalScore);
                this._myPlayerView.lookPoker(playerList[i].cardList);
            }
            else {
                var playerView = this.getPlayerView(playerId);
                playerView.updateStatus(status);
                playerView.updateScore(playerList[i].totalScore);
                playerView.lookPoker(playerList[i].cardList);
            }
        }
        var curWinnerId = data["curWinnerId"];
        this.playerGetChip(curWinnerId);
        this._cancelCompareBtn.visible = false;
        this._compareBtn.visible = true;
        //弹出小结算
        GameGlobal.iframeLayer.showIFrame(GameResult);
        var resultView = GameGlobal.iframeLayer.getIFrame(GameResult);
        resultView.setData(data);
        var status = data["status"];
        //大结算
        if (status == 4) {
            resultView.updateBtn(1);
        }
        else {
            resultView.updateBtn(0);
        }
    };
    ZjhBattleView.prototype.playerGetChip = function (playerId) {
        var _this = this;
        var len = this._chipContainer.numChildren;
        var moveToPos = [];
        if (playerId == MyUserInfo.getInstance().userId) {
            moveToPos = this._myPlayerView.getChipBornPos();
        }
        else {
            var playerView = this.getPlayerView(playerId);
            moveToPos = playerView.getChipBornPos();
        }
        var chipView;
        for (var i = 0; i < len; i++) {
            chipView = this._chipContainer.getChildAt(i);
            egret.Tween.get(chipView).to({ x: moveToPos[0], y: moveToPos[1] }, 500).to({ alpha: 0 }, 100).call(function () {
                if (chipView && _this._chipContainer.contains(chipView))
                    _this._chipContainer.removeChild(chipView);
            }, this);
        }
        SoundManager.instance.playSound("get-chip_mp3");
    };
    /**
     * 比牌
     */
    ZjhBattleView.prototype.onCompareResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var curStakeScore = data["stakeScore"];
        var curPlayerId = data["curPlayerId"];
        var winnerId = data["winnerId"];
        var loserId = data["loserId"];
        this._lastStakeScore = curStakeScore;
        var len = this._otherPlayerViews.length;
        for (var i = 0; i < len; i++) {
            var playerView = this._otherPlayerViews[i];
            playerView.touchEnabled = false;
            playerView.setCompareFlag(false);
        }
        if (loserId == MyUserInfo.getInstance().userId) {
            this._myPlayerView.updateStatus(PlayerView.GIVEUP2);
        }
        else {
            var playerView = this.getPlayerView(loserId);
            if (playerView)
                playerView.updateStatus(PlayerView.GIVEUP2);
        }
        BiPaiView.getInstance().show(data);
        this.updatePlayerTurn(curPlayerId);
    };
    ZjhBattleView.prototype.updatePlayerTurn = function (playerId, curStakeScore) {
        if (curStakeScore === void 0) { curStakeScore = 1; }
        var len = this._otherPlayerViews.length;
        for (var i = 0; i < len; i++) {
            var playerView = this._otherPlayerViews[i];
            playerView.showMyTurn(false);
        }
        this._myPlayerView.showMyTurn(false);
        this._giveUpBtn.setEnabled(false);
        this._compareBtn.setEnabled(false);
        this._1fenBtn.setEnabled(false);
        this._2fenBtn.setEnabled(false);
        this._3fenBtn.setEnabled(false);
        this._currentPlayerId = playerId;
        if (playerId != MyUserInfo.getInstance().userId) {
            var playerView = this.getPlayerView(playerId);
            if (playerView)
                playerView.showMyTurn(true);
        }
        else {
            this._myPlayerView.showMyTurn(true);
            this._giveUpBtn.setEnabled(true);
            var activeList = this.getActivePlayerList();
            var playerCount = activeList.length;
            if (playerCount <= 1)
                this._compareBtn.setEnabled(true);
            else
                this._compareBtn.setEnabled(this._myPlayerView.isKanpai);
            this.updateBetRule();
        }
    };
    /**
     * 更新下注规则
     */
    ZjhBattleView.prototype.updateBetRule = function () {
        LogUtils.log("this._lastPlayerId = " + this._lastPlayerId + ",lastStakeScoe = " + this._lastStakeScore);
        //上家有下注
        if (this._lastPlayerId != "" && this._lastPlayerId != MyUserInfo.getInstance().userId) {
            this._1fenBtn.setEnabled(true);
            this._2fenBtn.setEnabled(true);
            this._3fenBtn.setEnabled(true);
            var playerView = this.getPlayerView(this._lastPlayerId);
            if (playerView != null) {
                LogUtils.log("playerView.isKanpai = " + playerView.isKanpai);
                LogUtils.log("_myPlayerView.isKanpai = " + this._myPlayerView.isKanpai);
                if (playerView.isKanpai) {
                    if (this._myPlayerView.isKanpai) {
                        if (this._1fenBtn["value"] < this._lastStakeScore)
                            this._1fenBtn.setEnabled(false);
                        if (this._2fenBtn["value"] < this._lastStakeScore)
                            this._2fenBtn.setEnabled(false);
                        if (this._3fenBtn["value"] < this._lastStakeScore)
                            this._3fenBtn.setEnabled(false);
                    }
                    else {
                        var stakeScore = this._lastStakeScore;
                        if (stakeScore > 3)
                            stakeScore = stakeScore / 2;
                        if (this._1fenBtn["value"] < stakeScore)
                            this._1fenBtn.setEnabled(false);
                        if (this._2fenBtn["value"] < stakeScore)
                            this._2fenBtn.setEnabled(false);
                        if (this._3fenBtn["value"] < stakeScore)
                            this._3fenBtn.setEnabled(false);
                    }
                }
                else {
                    if (this._myPlayerView.isKanpai) {
                        if (this._1fenBtn["value"] < this._lastStakeScore * 2)
                            this._1fenBtn.setEnabled(false);
                        if (this._2fenBtn["value"] < this._lastStakeScore * 2)
                            this._2fenBtn.setEnabled(false);
                        if (this._3fenBtn["value"] < this._lastStakeScore * 2)
                            this._3fenBtn.setEnabled(false);
                    }
                    else {
                        if (this._1fenBtn["value"] < this._lastStakeScore)
                            this._1fenBtn.setEnabled(false);
                        if (this._2fenBtn["value"] < this._lastStakeScore)
                            this._2fenBtn.setEnabled(false);
                        if (this._3fenBtn["value"] < this._lastStakeScore)
                            this._3fenBtn.setEnabled(false);
                    }
                }
            }
        }
        else {
            this._1fenBtn.setEnabled(true);
            this._2fenBtn.setEnabled(true);
            this._3fenBtn.setEnabled(true);
        }
    };
    ZjhBattleView.prototype.onFollowResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var playerId = data["playerId"];
        var curStakeScore = data["stakeScore"];
        var stakeTimes = data["stakeTimes"]; //玩家跟注次数
        var curPlayerId = data["curPlayerId"];
        var totalStakeTimes = data["totalStakeTimes"];
        if (totalStakeTimes != undefined && totalStakeTimes != null) {
            this._betInfoView.updateCurrentRound(totalStakeTimes);
        }
        this._lastStakeScore = curStakeScore;
        this._lastPlayerId = playerId;
        this.betChip(playerId, curStakeScore);
        SoundManager.instance.playSound("send-chip_mp3");
        this.updatePlayerTurn(curPlayerId, curStakeScore);
    };
    ZjhBattleView.prototype.onGiveupPokerResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var playerId = data["playerId"];
        // var cardType:number = data["cardType"];
        // var cardList:Array<any> = data["cards"];
        if (playerId == MyUserInfo.getInstance().userId) {
            this._myPlayerView.updateStatus(PlayerView.GIVEUP);
        }
        else {
            var playerView = this.getPlayerView(playerId);
            playerView.updateStatus(PlayerView.GIVEUP);
        }
        //下一个操作玩家
        var curPlayerId = data["curPlayerId"];
        this.updatePlayerTurn(curPlayerId);
        SoundManager.instance.playSound("fold_mp3");
    };
    ZjhBattleView.prototype.onLookPokerResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var playerId = data["playerId"];
        var cardType = data["cardType"];
        var cardList = data["cardList"];
        if (playerId == MyUserInfo.getInstance().userId) {
            this._myPlayerView.lookPoker(cardList);
            this._myPlayerView.updateStatus(PlayerView.LOOKED);
            this._myPlayerView.canLook = false;
            //看牌情况，2，4，6分
            this._1fenBtn.setSkin("zjhGame_json.2fenBtn", "zjhGame_json.2fenBtn2");
            this._1fenBtn["value"] = 2;
            this._2fenBtn.setSkin("zjhGame_json.4fenBtn", "zjhGame_json.4fenBtn2");
            this._2fenBtn["value"] = 4;
            this._3fenBtn.setSkin("zjhGame_json.6fenBtn", "zjhGame_json.6fenBtn2");
            this._3fenBtn["value"] = 6;
            this._compareBtn.setEnabled(this._currentPlayerId == MyUserInfo.getInstance().userId);
        }
        else {
            var playerView = this.getPlayerView(playerId);
            playerView.updateStatus(PlayerView.LOOKED);
            if (this._cancelCompareBtn.visible) {
                playerView.setCompareFlag(true);
                playerView.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchOtherPlayer, this);
            }
        }
        //当前轮到自己操作
        if (this._currentPlayerId == MyUserInfo.getInstance().userId)
            this.updateBetRule();
        SoundManager.instance.playSound("check_mp3");
    };
    ZjhBattleView.prototype.onReadyResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var playerId = data["playerId"];
        if (playerId == MyUserInfo.getInstance().userId) {
            this._readyBtn.visible = false;
            this._1fenBtn.setSkin("zjhGame_json.1fenBtn", "zjhGame_json.1fenBtn2");
            this._1fenBtn["value"] = 1;
            this._2fenBtn.setSkin("zjhGame_json.2fenBtn", "zjhGame_json.2fenBtn2");
            this._2fenBtn["value"] = 2;
            this._3fenBtn.setSkin("zjhGame_json.3fenBtn", "zjhGame_json.3fenBtn2");
            this._3fenBtn["value"] = 3;
            this._myPlayerView.updateStatus(PlayerView.READYED);
        }
        else {
            var playerView = this.getPlayerView(playerId);
            playerView.updateStatus(PlayerView.READYED);
        }
        this._myPlayerView.hidePoker();
    };
    /**
     * 发牌
     */
    ZjhBattleView.prototype.onSayPokerResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        var roomBankerId = data["roomBankerId"];
        this._betInfoView.updateRound(data["curGame"], data["totalGames"]);
        this._inviteBtn.visible = false;
        this._readyBtn.visible = false;
        this._betInfoView.updateRound(data["curGame"], data["totalGames"]);
        // this._myPlayerView.updateStatus(PlayerView.READYED);
        //下注筹码
        var playerList = this._data["playerList"];
        for (var i = 0; i < playerList.length; i++) {
            if (playerList[i].playerId == MyUserInfo.getInstance().userId) {
                this._myPlayerView.updateStatus(PlayerView.NOT_READY);
                this._myPlayerView.isZhuang = false;
            }
            else {
                var playerView = this.getPlayerView(playerList[i].playerId);
                playerView.updateStatus(PlayerView.NOT_READY);
                playerView.isZhuang = false;
            }
            this.betChip(playerList[i].playerId);
        }
        SoundManager.instance.playSound("send-chip_mp3");
        if (roomBankerId == MyUserInfo.getInstance().userId) {
            this._myPlayerView.isZhuang = true;
        }
        else {
            var playerView = this.getPlayerView(roomBankerId);
            playerView.isZhuang = true;
        }
        this._lastStakeScore = 0;
        this._lastPlayerId = "";
        this._currentPlayerId = "";
        var curPlayerId = data["curPlayerId"];
        this.updatePlayerTurn(curPlayerId);
        if (curPlayerId == MyUserInfo.getInstance().userId) {
            this._giveUpBtn.setEnabled(true);
            this._1fenBtn.setEnabled(true);
            this._2fenBtn.setEnabled(true);
            this._3fenBtn.setEnabled(true);
        }
        else {
            this._giveUpBtn.setEnabled(false);
            this._1fenBtn.setEnabled(false);
            this._2fenBtn.setEnabled(false);
            this._3fenBtn.setEnabled(false);
        }
        this._1fenBtn.setSkin("zjhGame_json.1fenBtn", "zjhGame_json.1fenBtn2");
        this._1fenBtn["value"] = 1;
        this._2fenBtn.setSkin("zjhGame_json.2fenBtn", "zjhGame_json.2fenBtn2");
        this._2fenBtn["value"] = 2;
        this._3fenBtn.setSkin("zjhGame_json.3fenBtn", "zjhGame_json.3fenBtn2");
        this._3fenBtn["value"] = 3;
        egret.clearTimeout(this._fapaiTimerId);
        this._fapaiTimerId = egret.setTimeout(this.fapai, this, 500);
        GameGlobal.iframeLayer.hideIFrame2(GameResult);
    };
    ZjhBattleView.prototype.fapai = function () {
        this._myPlayerView.sayPoker();
        this._myPlayerView.canLook = true;
        var len = this._otherPlayerViews.length;
        for (var i = 0; i < len; i++) {
            var otherPlayerView = this._otherPlayerViews[i];
            otherPlayerView.sayPoker();
        }
        SoundManager.instance.playSound("start_mp3");
    };
    ZjhBattleView.prototype.betChip = function (playerId, chipValue) {
        if (chipValue === void 0) { chipValue = 1; }
        var chipView = new ChipView();
        var chipFrom = this._myPlayerView.getChipBornPos();
        if (playerId != MyUserInfo.getInstance().userId) {
            var otherPlayerView = this.getPlayerView(playerId);
            otherPlayerView.updateBetNum(chipValue);
            chipFrom = otherPlayerView.getChipBornPos();
        }
        else {
            this._myPlayerView.updateBetNum(chipValue);
        }
        chipView.x = chipFrom[0];
        chipView.y = chipFrom[1];
        this._chipContainer.addChild(chipView);
        var toPos = this.getRandomChipPos();
        egret.Tween.get(chipView).to({ x: toPos[0], y: toPos[1] }, 300);
        chipView.setValue(chipValue);
        this._betInfoView.addChip(chipValue);
    };
    ZjhBattleView.prototype.getActivePlayerList = function () {
        var len = this._otherPlayerViews.length;
        var playingCount = 0;
        var resultList = [];
        for (var i = 0; i < len; i++) {
            var playerView = this._otherPlayerViews[i];
            if (playerView.isOffline())
                continue;
            if ((playerView.getStatus() != PlayerView.GIVEUP) && (playerView.getStatus() != PlayerView.GIVEUP2) && (playerView.getStatus() != PlayerView.WATCHER)) {
                resultList.push(playerView);
            }
        }
        return resultList;
    };
    ZjhBattleView.prototype.getRandomChipPos = function () {
        var centerX = GameGlobal.stage.stageWidth * 0.5;
        var centerY = GameGlobal.stage.stageHeight * 0.5;
        return [centerX + DUtils.createRandomNum(-30, 30), centerY + DUtils.createRandomNum(-30, 30)];
    };
    ZjhBattleView.prototype.getPlayerView = function (playerId) {
        var len = this._otherPlayerViews.length;
        for (var i = 0; i < len; i++) {
            var playerView = this._otherPlayerViews[i];
            var data = playerView.getData();
            if (data["playerId"].toString() == playerId.toString())
                return this._otherPlayerViews[i];
        }
        return null;
    };
    ZjhBattleView.prototype.quitConfirm = function () {
        var data = {};
        data["msgType"] = NetAction.dissolveRoom;
        data["token"] = GameModel.instance().token;
        data["gameType"] = GameGlobal.gameType;
        data["msg"] = { "roomId": GameModel.instance().roomId, "playerId": MyUserInfo.getInstance().userId };
        SocketCommand.getInstance().send(data);
    };
    ZjhBattleView.prototype.getPayTypeStr = function (type) {
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
    ZjhBattleView.prototype.onTouchTap = function (evt) {
        if (evt.currentTarget == this._quitBtn) {
            AlertView.getInstance().setConfirmCallBack(this.quitConfirm, this);
            AlertView.getInstance().show("是否确定解散房间？", AlertView.CONFIRM_MODE);
        }
        else if (evt.currentTarget == this._readyBtn) {
            var data = {};
            data["msgType"] = NetAction.ready;
            data["msg"] = { "roomId": GameModel.instance().roomId, "playerId": MyUserInfo.getInstance().userId };
            SocketCommand.getInstance().send(data);
        }
        else if (evt.currentTarget == this._inviteBtn) {
            var desc = "";
            var payType = this.getPayTypeStr(this._data["payType"]);
            if (this._data.hasOwnProperty("teaHouseNum") && (this._data["teaHouseNum"] != null)) {
                desc += "茶楼编号:" + this._data["teaHouseNum"] + ",第" + this._data["tableNum"] + "桌," + this._data["totalGames"] + "局," + payType + ",速度来玩吧!";
            }
            else
                desc += "房间号：" + this._data["roomId"] + "," + this._data["totalGames"] + "局," + payType + ",速度来玩吧!";
            egret.ExternalInterface.call("shareToFriend", GameGlobal.shareTitle + "|" + desc);
        }
        else if (evt.currentTarget == this._giveUpBtn) {
            var data = {};
            data["msgType"] = NetAction.giveup;
            data["msg"] = { "roomId": GameModel.instance().roomId, "playerId": MyUserInfo.getInstance().userId };
            SocketCommand.getInstance().send(data);
        }
        else if (evt.currentTarget == this._compareBtn) {
            this._compareBtn.visible = false;
            this._cancelCompareBtn.visible = true;
            //其他玩家显示可比牌状态
            var len = this._otherPlayerViews.length;
            var activeList = this.getActivePlayerList();
            var playingCount = activeList.length;
            for (var i = 0; i < len; i++) {
                var playerView = activeList[i];
                playerView.touchEnabled = true;
                if ((playingCount <= 1) || (playerView.isKanpai && (playerView.getStatus() != PlayerView.GIVEUP) && (playerView.getStatus() != PlayerView.GIVEUP2))) {
                    playerView.setCompareFlag(true);
                    playerView.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchOtherPlayer, this);
                }
            }
            if (MyUserInfo.getInstance().gender == 0)
                SoundManager.instance.playSound("vs_mp3");
            else
                SoundManager.instance.playSound("vs2_mp3");
        }
        else if (evt.currentTarget == this._cancelCompareBtn) {
            this._compareBtn.visible = true;
            this._cancelCompareBtn.visible = false;
            var len = this._otherPlayerViews.length;
            for (var i = 0; i < len; i++) {
                var playerView = this._otherPlayerViews[i];
                playerView.touchEnabled = false;
                playerView.setCompareFlag(false);
                playerView.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchOtherPlayer, this);
            }
        }
        else if (evt.currentTarget == this._1fenBtn) {
            var data = {};
            data["msgType"] = NetAction.follow;
            data["msg"] = { "roomId": GameModel.instance().roomId, "playerId": MyUserInfo.getInstance().userId, "curStakeScore": this._1fenBtn["value"] };
            SocketCommand.getInstance().send(data);
        }
        else if (evt.currentTarget == this._2fenBtn) {
            var data = {};
            data["msgType"] = NetAction.follow;
            data["msg"] = { "roomId": GameModel.instance().roomId, "playerId": MyUserInfo.getInstance().userId, "curStakeScore": this._2fenBtn["value"] };
            SocketCommand.getInstance().send(data);
        }
        else if (evt.currentTarget == this._3fenBtn) {
            var data = {};
            data["msgType"] = NetAction.follow;
            data["msg"] = { "roomId": GameModel.instance().roomId, "playerId": MyUserInfo.getInstance().userId, "curStakeScore": this._3fenBtn["value"] };
            SocketCommand.getInstance().send(data);
        }
        else if (evt.currentTarget == this._chatBtn) {
            GameGlobal.iframeLayer.showIFrame(NN_ChatView);
        }
        else if (evt.currentTarget == this._refreshBtn) {
            var data = {};
            data["msgType"] = NetAction.refreshRoom;
            data["msg"] = { "refreshType": 1 };
            data["gameType"] = 0;
            SocketCommand.getInstance().send(data);
        }
        else if (evt.currentTarget == this._setBtn) {
            GameGlobal.iframeLayer.showIFrame(SettingView);
        }
        else if (evt.currentTarget == this._helpBtn) {
            GameGlobal.iframeLayer.showIFrame(RuleView2);
        }
    };
    /**
     *
     */
    ZjhBattleView.prototype.onTouchOtherPlayer = function (evt) {
        var otherPlayerView = evt.currentTarget;
        otherPlayerView.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchOtherPlayer, this);
        var otherPlayerData = otherPlayerView.getData();
        var otherPlayerId = otherPlayerData["playerId"];
        this._cancelCompareBtn.visible = false;
        this._compareBtn.visible = true;
        var minBetValue = this.getCurrentMinBet();
        this.betChip(MyUserInfo.getInstance().userId, minBetValue);
        SoundManager.instance.playSound("send-chip_mp3");
        var data = {};
        data["msgType"] = NetAction.compare;
        data["msg"] = { "roomId": GameModel.instance().roomId, "playerId": MyUserInfo.getInstance().userId, "curStakeScore": 2, "otherPlayerId": otherPlayerId };
        SocketCommand.getInstance().send(data);
    };
    /**
     * 当前最低下注
     */
    ZjhBattleView.prototype.getCurrentMinBet = function () {
        var betValue = 1;
        if (this._1fenBtn.isEnabled)
            betValue = this._1fenBtn["value"];
        else if (this._2fenBtn.isEnabled)
            betValue = this._2fenBtn["value"];
        else
            betValue = this._3fenBtn["value"];
        return betValue;
    };
    // private _isShowOption:boolean = false;
    // private showOrHideOptionView():void
    // {
    // 	this._isShowOption = !this._isShowOption;
    // 	// this._optionBtn.setSkin(this._isShowOption?"game_json.optionBtn":"game_json.optionBtn2");
    // 	this._settingView.visible = this._isShowOption;
    // }
    // 初始化分数按钮信息
    ZjhBattleView.prototype.initFenBtns = function () {
        this._1fenBtn = new DButton("zjhGame_json.1fenBtn", "zjhGame_json.1fenBtn2");
        this.addChild(this._1fenBtn);
        this._1fenBtn.x = 338;
        this._1fenBtn.y = 390;
        this._1fenBtn["value"] = 1;
        this._2fenBtn = new DButton("zjhGame_json.2fenBtn", "zjhGame_json.2fenBtn2");
        this.addChild(this._2fenBtn);
        this._2fenBtn.x = 499;
        this._2fenBtn.y = 390;
        this._2fenBtn["value"] = 2;
        this._3fenBtn = new DButton("zjhGame_json.3fenBtn", "zjhGame_json.3fenBtn2");
        this.addChild(this._3fenBtn);
        this._3fenBtn.x = 660;
        this._3fenBtn.y = 390;
        this._3fenBtn["value"] = 3;
    };
    ZjhBattleView.prototype.resize = function () {
        // this._chatBtn.y = GameGlobal.stageH - 83;
        // this._giveUpBtn.y = GameGlobal.stageH - 97;// 543;
        // this._compareBtn.y = GameGlobal.stageH - 97;// 543;
        // this._cancelCompareBtn.y = GameGlobal.stageH - 97;// 543;
        // this._1fenBtn.y = this._2fenBtn.y = this._3fenBtn.y = GameGlobal.stageH - 97;
    };
    ZjhBattleView.READY_STATUS = 1; //刚开始准备阶段
    ZjhBattleView.GAMEING = 2; //小局游戏中
    ZjhBattleView.ROUND_END = 3; //小局结束
    ZjhBattleView.GAME_END = 4; //大局结束
    return ZjhBattleView;
}(BaseGameView));
__reflect(ZjhBattleView.prototype, "ZjhBattleView");
//# sourceMappingURL=ZjhBattleView.js.map