/**
 * 扎金花游戏界面
 */
class ZjhBattleView extends BaseGameView
{
	//ui
	private _bg:egret.Bitmap;
	private _bottomBg:egret.Bitmap;

	//btns
	private _giveUpBtn:DButton;
	private _compareBtn:DButton;
	private _cancelCompareBtn:DButton;

	private _1fenBtn:DButton;
	private _2fenBtn:DButton;
	private _3fenBtn:DButton;
	private _4fenBtn:DButton;
	private _6fenBtn:DButton;
	// //other views
	private _settingView:GameSettingView;
	private _myPlayerView:MyPlayerView;
	private _betInfoView:BetInfoView;

	private _otherPlayerViews:Array<any> = []; //其他玩家
	
	private _chipContainer:egret.DisplayObjectContainer; //桌上筹码

	public static READY_STATUS:number = 1; //刚开始准备阶段
	public static GAMEING:number = 2; //小局游戏中
	public static ROUND_END:number = 3; //小局结束
	public static GAME_END:number = 4; //大局结束

	private countDown:egret.DisplayObjectContainer;
	private countDownTF:egret.TextField;
	private _countDownTimer:egret.Timer;
	private _countDownTime:number = 10; //倒计时

	public constructor() 
	{
		super();
	}

	public init(roomInfo:Object = null):void
	{
		this.dispose();
		this._data = roomInfo;

		if(this._data == null)
		{
			throw new Error("battle data is null!!!");
		}

		GameModel.instance().roomId = this._data["roomId"];
		var roomOwnerId:string = this._data["roomOwnerId"]; //房主
		var roomBankerId:string = this._data["roomBankerId"]; //庄家
		var stakeButtom:number = this._data["stakeButtom"]; //底分
		var gameStatus:number = -1;

		if(this._data.hasOwnProperty("status"))
			gameStatus = this._data["status"];
		
		this._betInfoView.init(this._data);
		if(this._data.hasOwnProperty("curGame"))
			this._betInfoView.updateRound(this._data["curGame"], this._data["totalGames"]);

		this._playerDataHash = new HashMap();
		var playerList:Array<any> = this._data["playerList"];
		var len:number = playerList.length;
		var myOrder:number = 1; //1-5
		var myStatus:number = PlayerView.NOT_READY;
		var otherPlayList:Array<any> = [];

		for(var i:number = 0; i < len; i++)
		{
			var playerData:Object = playerList[i];
			var playerId:string = playerData["playerId"];
			this._playerDataHash.put(playerId, playerData);

			if(playerId == MyUserInfo.getInstance().userId)
			{
				this._myPlayerView.setData(playerData);
				this._myPlayerView.updateScore(playerData["totalScore"]);
				myOrder = playerData["order"];
				myStatus = playerData["status"];
				this._readyBtn.visible = false;
				this._myPlayerView.updateStatus(myStatus);

				if(myStatus == PlayerView.READYED)
				{
					this._readyBtn.visible = false;
				}
				else if(myStatus == PlayerView.NOT_READY)
				{
					this._readyBtn.visible = true;
				}
				else if(myStatus == PlayerView.WATCHER)
				{
					this._myPlayerView.canLook = false;
					this._myPlayerView.lookPoker([], false);
				}
				else if(myStatus == PlayerView.LOOKED)
				{
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
				else
				{
					this._myPlayerView.canLook = true;
					this._myPlayerView.lookPoker([], false);	
				}
				
				if(playerData.hasOwnProperty("onlineStatus") && (playerData["onlineStatus"] != null))
					this._myPlayerView.setOffline(playerData["onlineStatus"] != 1);

				if(gameStatus == ZjhBattleView.GAMEING)
				{
					if(myStatus != 0)
					{
						//底分筹码
						this.betChip(MyUserInfo.getInstance().userId, stakeButtom);
					}
					//压住筹码
					var  betScores:Array<any> = playerData["stakeScoreList"];
					if(betScores != null && betScores.length > 0)
					{
						var betScoreLen:number = betScores.length;
						for(var j:number = 0; j < betScoreLen; j++)
						{
							this.betChip(MyUserInfo.getInstance().userId, betScores[j]);
						}
					}
					
				}
			}
			else
			{
				otherPlayList.push(playerList[i]);
			}
		}

		GameModel.instance().myOrder = myOrder;

		this._otherPlayerViews = [];

		len = otherPlayList.length;
		var playerView:OtherPlayerView;
		for(var i:number = 0; i < len; i++)
		{
			playerView = new OtherPlayerView();
			var otherPlayerData:Object = otherPlayList[i];
			var order:number = otherPlayerData["order"];
			var status:number = otherPlayerData["status"];
			var otherOrder:number = GameUtls.sitId2LR(myOrder, order);
			playerView.x = GameUtls.PLAYER_SEAT_POS[otherOrder - 1][0];
			playerView.y = GameUtls.PLAYER_SEAT_POS[otherOrder - 1][1];

			playerView.setPosition(otherOrder);
			playerView.setData(otherPlayerData);
			this.addChild(playerView);
			playerView.updateScore(otherPlayerData["totalScore"]);
			this._otherPlayerViews.push(playerView);
			playerView.updateStatus(otherPlayerData["status"]);

			if(otherPlayerData["status"] == 4)
				playerView.lookPoker(otherPlayerData["cardList"], false);
			else
				playerView.lookPoker([], false);

			if(otherPlayerData.hasOwnProperty("onlineStatus") && (otherPlayerData["onlineStatus"] != null))
				playerView.setOffline(otherPlayerData["onlineStatus"] != 1);

			if(gameStatus == ZjhBattleView.GAMEING)
			{
				GameGlobal.iframeLayer.hideIFrame2(GameResult);
				if(status != 0)
					this.betChip(otherPlayerData["playerId"], stakeButtom);
				//压住筹码
				var  betScores:Array<any> = otherPlayerData["stakeScoreList"];

				if(betScores != null && betScores.length > 0)
				{
					this._lastPlayerId = otherPlayerData["playerId"];
					var betScoreLen:number = betScores.length;
					for(var j:number = 0; j < betScoreLen; j++)
					{
						this.betChip(otherPlayerData["playerId"], betScores[j]);
					}
					
				}

				SoundManager.instance.playSound("send-chip_mp3");
			}
			
		}

		this.addChild(this._emotionContainer);
		

		if(roomOwnerId == MyUserInfo.getInstance().userId)
		{
			this._myPlayerView.isFang = true;
		}
		else
		{
			playerView = this.getPlayerView(roomOwnerId);
			if(playerView)
				playerView.isFang = true;
		}

		if(roomBankerId != null && roomBankerId != "")
		{
			if(roomBankerId == MyUserInfo.getInstance().userId)
			{
				this._myPlayerView.isZhuang = true;
			}
			else
			{
				playerView = this.getPlayerView(roomBankerId);
				playerView.isZhuang = true;
			}
		}

		//小结算
		if(gameStatus == ZjhBattleView.ROUND_END)
		{
			this._inviteBtn.visible = false;
			GameGlobal.iframeLayer.showIFrame(GameResult);
			var resultView:GameResult = GameGlobal.iframeLayer.getIFrame(GameResult) as GameResult;
			resultView.setData(this._data);
			resultView.updateBtn(0);
		}
		else if(gameStatus == ZjhBattleView.GAME_END)
		{
			this._inviteBtn.visible = false;
			GameGlobal.iframeLayer.showIFrame(GameResult);
			var resultView:GameResult = GameGlobal.iframeLayer.getIFrame(GameResult) as GameResult;
			resultView.setData(this._data);
			resultView.updateBtn(1);
		}
		else if(gameStatus == ZjhBattleView.GAMEING)
		{
			this._inviteBtn.visible = false;
			if(this._data.hasOwnProperty("curPlayerId"))
			{
				var curPlayerId:string = this._data["curPlayerId"];
				this.updatePlayerTurn(curPlayerId);
			}
		}

		this.addNetEvents();

		SoundManager.instance.playMusic("table_mp3");
	}

	public clearTable():void
	{
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

		var len:number = this._otherPlayerViews.length;
		for(var i:number = 0; i < len; i++)
		{
			var otherPlayerView:OtherPlayerView = this._otherPlayerViews[i];
			otherPlayerView.reset();
			otherPlayerView.visible = false;
			if(otherPlayerView.stage)
				this.removeChild(otherPlayerView);
		}
		this._otherPlayerViews = [];
		this._playerDataHash = new HashMap();
		this._myPlayerView.reset();
		this._myPlayerView.visible = true;
		this._lastPlayerId = "";
		this._currentPlayerId = "";
		while(this._chipContainer.numChildren > 0)
			this._chipContainer.removeChildAt(0);
		while(this._emotionContainer.numChildren > 0)
		{
			var childObj:egret.DisplayObject = this._emotionContainer.removeChildAt(0);
			if(childObj instanceof egret.Bitmap)
			{
				egret.Tween.removeTweens(childObj);
			}
		}
	}

	// 移除所有舞台信息
	public dispose():void
	{
		this.removeEvents();
		this.clearTable();
		GameGlobal.iframeLayer.hideIFrame2(NN_ChatView);
		GameModel.instance().roomId = 0;
		this._countDownTimer.stop();
		this._countDownTimer.reset();
		this.countDown.visible = false;
		
	}

	// 初始化游戏界面
	protected initView():void
	{
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
		this._betInfoView.x = 177; this._betInfoView.y = 12;

		// this._optionBtn = new DButton("game_json.optionBtn2");
		// this._optionBtn.x = 13; this._optionBtn.y = 7;
		// this.addChild(this._optionBtn);

		// 录音
		this._recordBtn = new DButton("nnGame2_json.n_recordBtn");
		this.addChild(this._recordBtn);
		this._recordBtn.x = 1068; this._recordBtn.y = 595;

		//消息
		this._chatBtn = new DButton("nnGame2_json.n_chatBtn");
		this.addChild(this._chatBtn);
		this._chatBtn.x = 962; this._chatBtn.y = 596;

		// 弃牌
		this._giveUpBtn = new DButton("zjhGame_json.giveUpBtn", "zjhGame_json.giveUpBtn2");
		this._giveUpBtn.x = 925; this._giveUpBtn.y = 510;
		this.addChild(this._giveUpBtn);

		// 比牌
		this._compareBtn = new DButton("zjhGame_json.bipaiBtn", "zjhGame_json.bipaiBtn2");
		this._compareBtn.x = 738; this._compareBtn.y = 510;
		this.addChild(this._compareBtn);
		this._compareBtn.setEnabled(false);

		// 取消比牌
		this._cancelCompareBtn = new DButton("zjhGame_json.cancelBipaiBtn");
		this._cancelCompareBtn.x = 738; this._cancelCompareBtn.y = 510;
		this.addChild(this._cancelCompareBtn);
		this._cancelCompareBtn.visible = false;

		// 设置
		this._setBtn = new DButton("nnGame2_json.n_setBtn");
		this.addChild(this._setBtn);
		this._setBtn.x = 866; this._setBtn.y = 596;

		// 退出
		this._quitBtn = new DButton("nnGame2_json.n_quitBtn");
		this.addChild(this._quitBtn);
		this._quitBtn.x = 1049; this._quitBtn.y = 25;

		// 帮助
		this._helpBtn = new DButton("nnGame2_json.n_helpBtn");
		this.addChild(this._helpBtn);
		this._helpBtn.x = 1048; this._helpBtn.y = 108;
		

		// 准备
		this._readyBtn = new DButton("nnGame2_json.n_readyBtn");
		this._readyBtn.x = 484; this._readyBtn.y = 324;
		this.addChild(this._readyBtn);

		// 邀请按钮
		this._inviteBtn = new DButton("nnGame2_json.n_inviteBtn");
		this._inviteBtn.x = 472; this._inviteBtn.y = 241;
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
		this._myPlayerView.x = 37; this._myPlayerView.y = 444;
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
		this.countDown.x = 176; this.countDown.y = 60;
		this.countDown.visible = false;

		var countDownImg:egret.Bitmap = DUtils.createBitmapByName("nnGame2_json.clockBg");
		this.countDown.addChild(countDownImg);

		this.countDownTF = new egret.TextField();
		this.countDownTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		this.countDownTF.textColor = 0xffffff;
		this.countDownTF.size = 30;
		this.countDown.addChild(this.countDownTF);
		this.countDownTF.x = 10; this.countDownTF.y = 32;
		this.countDownTF.text = "0";
		this.countDownTF.width = 59;
		this.countDownTF.textAlign = egret.HorizontalAlign.CENTER;

		this._countDownTimer = new egret.Timer(1000);
		this._countDownTimer.addEventListener(egret.TimerEvent.TIMER, this.onTimerHandle, this);

		this.addEvents();
		this.resize();
	}

	private onTimerHandle(evt:egret.TimerEvent):void
	{
		this._countDownTime--;
		this._countDownTime = Math.max(this._countDownTime, 0);
		if(this._countDownTime <=0)
		{
			this._countDownTimer.stop();
			this._countDownTimer.reset();
			this.countDown.visible = false;
		}
		this.countDownTF.text = this._countDownTime.toString();
	}

	private removeEvents():void
	{
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
		
	}

	private onCountDownResponse(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Object = result["data"];

		this.countDown.visible = true;
		this.countDownTF.text = "10";

		this._countDownTimer.reset();
		this._countDownTimer.start();
	}

	private addNetEvents():void
	{
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
	}

	private addEvents():void
	{
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
		 egret.ExternalInterface.addCallback("recordEndPlay", function (message:string) {
			 LogUtils.log("recordEndPlay");
			 self._myPlayerView.showRecord(true);
			 SoundManager.instance.isMusicOn = false;
         });

		 egret.ExternalInterface.addCallback("playMyRecordEnd", function (message:string) {
			 LogUtils.log("playMyRecordEnd");
			 self._myPlayerView.showRecord(false);
			 SoundManager.instance.isMusicOn = true;
         });
		 //收到上传成功，发送聊天消息
		 egret.ExternalInterface.addCallback("uploadRecordComplete", function(message:string){
			LogUtils.log("uploadRecordComplete::send record chat message");

			var data:Object = {};
			data["msgType"] = NetAction.chatMsg;
			data["msg"] = {"chatType":6, "chatMsg":message};
			SocketCommand.getInstance().send(data);
		 });
	}

	// private onCountDownResponse(evt:DEvent):void
	// {
	// 	var result:Object = evt.data;
	// 	var data:Object = result["data"];
	// 	// var time:number = data["time"];
	// 	this._countDownView.start();
	// }


	private _isRecording:boolean = false; //是否正在录音
	private onTouchBegin(evt:egret.TouchEvent):void
	{
		if(this._recordMc == null)
			this._recordMc = DUtils.createMovieClipByName("record");
		this._recordMc.frameRate = 12;
		this._recordMc.play(-1);
		this.addChild(this._recordMc);

		this._recordMc.x = (GameGlobal.stageW - this._recordMc.width) >> 1;
		this._recordMc.y = (GameGlobal.stageH - this._recordMc.height) >> 1;
		this._isRecording = true;

		egret.ExternalInterface.call("recordBegin", "recordBegin");
	}

	private onTouchEnd(evt:egret.TouchEvent):void
	{
		if(this._recordMc && this.contains(this._recordMc))
			this.removeChild(this._recordMc);
		this._isRecording = false;

		egret.ExternalInterface.call("recordEnd", "recordEnd");
	}

	private onTouchRelease(evt:egret.TouchEvent):void
	{
		LogUtils.log("onTouchReleaseOutSize");
		if(this._recordMc && this.contains(this._recordMc))
			this.removeChild(this._recordMc);
		this._isRecording = false;

		this._myPlayerView.showRecord(false);
		egret.ExternalInterface.call("recordCancel", "recordCancel");
	}

	private onOfflineResponse(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Object = result["data"];
		var playerId:string = data["playerId"];
		if(playerId != MyUserInfo.getInstance().userId)
		{
			var playerView:OtherPlayerView = this.getPlayerView(playerId);
			if(playerView)
				playerView.setOffline(true);
		}
	}

	private onOnlineResponse(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Object = result["data"];
		var playerId:string = data["playerId"];
		if(playerId != MyUserInfo.getInstance().userId)
		{
			var playerView:OtherPlayerView = this.getPlayerView(playerId);
			playerView.setOffline(false);
		}
	}
	/**
	 * 给玩家发送表情
	 */
	private sendEmotionToPlayer(emotion:string, playerId:string, toPlayerId:string):void
	{
		
		var emotionImg:egret.Bitmap = new egret.Bitmap();
		emotionImg.texture = RES.getRes("emotion_json." + emotion);
		emotionImg.anchorOffsetX = emotionImg.width * 0.5;
		emotionImg.anchorOffsetY = emotionImg.height * 0.5;
		var centerPos:Array<any> =  this._myPlayerView.getChipBornPos();
		
		if(playerId != MyUserInfo.getInstance().userId)
		{
			var playerView:OtherPlayerView = this.getPlayerView(playerId);
			centerPos = playerView.getChipBornPos();
		}
		emotionImg.x = centerPos[0];
		emotionImg.y = centerPos[1];
		
		this._emotionContainer.addChild(emotionImg);
		var toPos:Array<any> = [0, 0];
		if(toPlayerId != MyUserInfo.getInstance().userId)
		{
			var playerView:OtherPlayerView = this.getPlayerView(toPlayerId);
			toPos = playerView.getChipBornPos();
		}
		else
		{
			toPos = this._myPlayerView.getChipBornPos();
		}
		//todo 动态计算飞入时间
		egret.Tween.get(emotionImg).to({x:toPos[0], y:toPos[1]}, 800).call((img:egret.Bitmap)=>{

			egret.Tween.removeTweens(img);
			if(this._emotionContainer.contains(img))
				this._emotionContainer.removeChild(img);
				
			var emotionMc:egret.MovieClip = DUtils.createMovieClipByName(emotion);
			emotionMc.frameRate = 12;
			emotionMc.anchorOffsetX = emotionMc.width * 0.5;
			emotionMc.anchorOffsetY = emotionMc.height * 0.5;
			emotionMc.x = emotionImg.x; emotionMc.y = emotionImg.y;

			if(emotion == "jd")
			{
				emotionMc.x = emotionImg.x - 140; emotionMc.y = emotionImg.y - 110;
			}
			else if(emotion == "dzh")
			{
				emotionMc.y = emotionImg.y - 20;
			}
			else if(emotion == "pj")
			{
				emotionMc.x = emotionImg.x - 10;
			}

			this._emotionContainer.addChild(emotionMc);
			MovieClipUtils.playOnce(emotionMc, null);
		}, this, [emotionImg]);
	}

	private onChatMsgResponse(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Object = result["data"];
		var playerId:string = data["playerId"];
		var chatType:number = data["chatType"];
		var chatMsg:string = data["chatMsg"];
		var otherPlayerId:string = data["otherPlayerId"];

		//给特定玩家的表情消息
		if(chatType == 5)
		{
			this.sendEmotionToPlayer(chatMsg, playerId, otherPlayerId);
			return;
		}

		//录制
		if(chatType == 6)
		{
			if(otherPlayerId == MyUserInfo.getInstance().userId)
				return;
			
			var self = this;
			egret.ExternalInterface.addCallback("playRecordEnd", function (message:string) {

					var playerView:OtherPlayerView = self.getPlayerView(message);
					if(playerView)
						playerView.showRecord(false);

					SoundManager.instance.isMusicOn = true;
        	 });
			SoundManager.instance.isMusicOn = false;
			var playerView:OtherPlayerView = self.getPlayerView(otherPlayerId);
			playerView.showRecord(true);
			egret.ExternalInterface.call("playRecord", otherPlayerId+"|"+chatMsg);
		}

		if(playerId == MyUserInfo.getInstance().userId)
		{
			this._myPlayerView.showChatMsg(chatType, chatMsg);
		}
		else
		{
			var playerView:OtherPlayerView = this.getPlayerView(playerId);
			playerView.showChatMsg(chatType, chatMsg);
		}
	}

	private autodissolveRoomResponse(evt:DEvent):void
	{
		var data:Object = evt.data;
		var playerId:string = data["playerId"];

		AlertView.getInstance().setConfirmCallBack(this.autodissolveRoomConfirm, this);
		AlertView.getInstance().show("由于玩家离开时间较长，房间自动解散，是否返回大厅？", AlertView.CONFIRM_MODE);
	}

	private autodissolveRoomConfirm():void
	{
		GameEventManager.dispatchEvent(GameEventManager.QUIT_ROOM);
	}

	private onCompareComplete(evt:DEvent):void
	{
		var data:Object = evt.data;

		this.playerGetChip(data["winnerId"]);
	}

	private onNextRound():void
	{
		var len:number = this._otherPlayerViews.length;
		for(var i:number = 0; i < len; i++)
		{
			var otherPlayerView:OtherPlayerView = this._otherPlayerViews[i];
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

		var data:Object = {};
		data["msgType"] = NetAction.ready;
		data["msg"] = {"roomId":GameModel.instance().roomId};
		SocketCommand.getInstance().send(data);
		
		GameGlobal.iframeLayer.hideIFrame2(GameResult);
	}

	private onJiesuanResponse(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Object = result["data"];

		GameGlobal.iframeLayer.showIFrame(JieSuanView, data);
	}

	private onAutoCompareResponse(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Object = result["data"];
		var playerList:Array<any> = data["playerList"];
		var len:number = playerList.length;

		for(var i:number = 0; i < len; i++)
		{
			var playerId:string = playerList[i].playerId;
			var status:number = playerList[i].status;

			if(playerId == MyUserInfo.getInstance().userId)
			{
				this._myPlayerView.updateStatus(status);
				this._myPlayerView.updateScore(playerList[i].totalScore);
				this._myPlayerView.lookPoker(playerList[i].cardList);
			}
			else
			{
				var playerView:OtherPlayerView = this.getPlayerView(playerId);
				playerView.updateStatus(status);
				playerView.updateScore(playerList[i].totalScore);
				playerView.lookPoker(playerList[i].cardList);
			}
		}

		var curWinnerId:string = data["curWinnerId"];
		this.playerGetChip(curWinnerId);

		this._cancelCompareBtn.visible = false;
		this._compareBtn.visible = true;
		
		//弹出小结算
		GameGlobal.iframeLayer.showIFrame(GameResult);
		var resultView:GameResult = GameGlobal.iframeLayer.getIFrame(GameResult) as GameResult;
		resultView.setData(data);
		var status:number = data["status"];
		//大结算
		if(status == 4)
		{
			resultView.updateBtn(1);
		}
		else
		{
			resultView.updateBtn(0);
		}
		
	}

	private playerGetChip(playerId:string):void
	{
		var len:number = this._chipContainer.numChildren;

		var moveToPos:Array<any> = [];
		if(playerId == MyUserInfo.getInstance().userId)
		{
			moveToPos = this._myPlayerView.getChipBornPos();
		}
		else
		{	
			var playerView:OtherPlayerView = this.getPlayerView(playerId);
			moveToPos = playerView.getChipBornPos();
		}
		var chipView:ChipView;
		for(var i:number = 0;  i< len; i++)
		{
			chipView = this._chipContainer.getChildAt(i) as ChipView;
			egret.Tween.get(chipView).to({x:moveToPos[0], y:moveToPos[1]}, 500).to({alpha:0}, 100).call(()=>{

				if(chipView && this._chipContainer.contains(chipView))
					this._chipContainer.removeChild(chipView);
			}, this);
		}

		SoundManager.instance.playSound("get-chip_mp3");
	}

	private _lastStakeScore:number = 1; //上个玩家下注
	private _lastPlayerId:string = ""; //上个玩家uid
	private _currentPlayerId:string = ""; //当前玩家id
	/**
	 * 比牌
	 */
	private onCompareResponse(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Object = result["data"];
		var curStakeScore:number = data["stakeScore"];
		var curPlayerId:string = data["curPlayerId"];
		var winnerId:string = data["winnerId"];
		var loserId:string = data["loserId"];

		this._lastStakeScore = curStakeScore;

		var len:number = this._otherPlayerViews.length;
		for(var i:number = 0; i < len; i++)
		{
			var playerView:OtherPlayerView = this._otherPlayerViews[i];
			playerView.touchEnabled = false;
			playerView.setCompareFlag(false);
		}

		if(loserId == MyUserInfo.getInstance().userId)
		{
			this._myPlayerView.updateStatus(PlayerView.GIVEUP2);
		}
		else
		{
			var playerView:OtherPlayerView = this.getPlayerView(loserId);
			if(playerView)
				playerView.updateStatus(PlayerView.GIVEUP2);
		}
		
		BiPaiView.getInstance().show(data);
		this.updatePlayerTurn(curPlayerId);
	}

	private updatePlayerTurn(playerId:string, curStakeScore:number = 1):void
	{
		var len:number = this._otherPlayerViews.length;
		for(var i:number = 0; i < len; i++)
		{
			var playerView:OtherPlayerView = this._otherPlayerViews[i];
			playerView.showMyTurn(false);
		}
		this._myPlayerView.showMyTurn(false);

		this._giveUpBtn.setEnabled(false);
		this._compareBtn.setEnabled(false);
		this._1fenBtn.setEnabled(false);
		this._2fenBtn.setEnabled(false);
		this._3fenBtn.setEnabled(false);

		this._currentPlayerId = playerId;

		if(playerId != MyUserInfo.getInstance().userId)
		{
			var playerView:OtherPlayerView = this.getPlayerView(playerId);
			if(playerView)
				playerView.showMyTurn(true);
		}
		else
		{
			this._myPlayerView.showMyTurn(true);
			this._giveUpBtn.setEnabled(true);

			var activeList:Array<OtherPlayerView> = this.getActivePlayerList();
			var playerCount:number = activeList.length;
			
			if(playerCount <=1)
				this._compareBtn.setEnabled(true);
			else
				this._compareBtn.setEnabled(this._myPlayerView.isKanpai);

			this.updateBetRule();
		}

		
	}
	/**
	 * 更新下注规则
	 */
	private updateBetRule():void
	{
		
		LogUtils.log("this._lastPlayerId = " + this._lastPlayerId+",lastStakeScoe = "+this._lastStakeScore);

		//上家有下注
		if(this._lastPlayerId != "" && this._lastPlayerId != MyUserInfo.getInstance().userId)
		{
			this._1fenBtn.setEnabled(true);
			this._2fenBtn.setEnabled(true);
			this._3fenBtn.setEnabled(true);

			var playerView:OtherPlayerView = this.getPlayerView(this._lastPlayerId);
			if(playerView != null)
			{
				LogUtils.log("playerView.isKanpai = " + playerView.isKanpai);
				LogUtils.log("_myPlayerView.isKanpai = " + this._myPlayerView.isKanpai);

				if(playerView.isKanpai)
				{
					if(this._myPlayerView.isKanpai)
					{
						if(this._1fenBtn["value"] < this._lastStakeScore)
							this._1fenBtn.setEnabled(false);
						if(this._2fenBtn["value"] < this._lastStakeScore)
							this._2fenBtn.setEnabled(false);
						if(this._3fenBtn["value"] < this._lastStakeScore)
							this._3fenBtn.setEnabled(false);
					}
					else
					{
						var stakeScore:number = this._lastStakeScore;
						if(stakeScore >3)
							stakeScore = stakeScore / 2;
						
						if(this._1fenBtn["value"] <  stakeScore)
							this._1fenBtn.setEnabled(false);
						if(this._2fenBtn["value"] < stakeScore)
							this._2fenBtn.setEnabled(false);
						if(this._3fenBtn["value"] < stakeScore)
							this._3fenBtn.setEnabled(false);
					}
				}
				else
				{
					if(this._myPlayerView.isKanpai)
					{
						if(this._1fenBtn["value"] < this._lastStakeScore*2)
							this._1fenBtn.setEnabled(false);
						if(this._2fenBtn["value"] < this._lastStakeScore*2)
							this._2fenBtn.setEnabled(false);
						if(this._3fenBtn["value"] < this._lastStakeScore*2)
							this._3fenBtn.setEnabled(false);
					}
					else
					{
						if(this._1fenBtn["value"] < this._lastStakeScore)
							this._1fenBtn.setEnabled(false);
						if(this._2fenBtn["value"] < this._lastStakeScore)
							this._2fenBtn.setEnabled(false);
						if(this._3fenBtn["value"] < this._lastStakeScore)
							this._3fenBtn.setEnabled(false);
					}
					
				}
			}
		}
		else
		{
			this._1fenBtn.setEnabled(true);
			this._2fenBtn.setEnabled(true);
			this._3fenBtn.setEnabled(true);
		}
	}

	private onFollowResponse(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Object = result["data"];
		var playerId:string = data["playerId"];
		var curStakeScore:number = data["stakeScore"];
		var stakeTimes:number = data["stakeTimes"]; //玩家跟注次数
		var curPlayerId:string = data["curPlayerId"];
		var totalStakeTimes:number = data["totalStakeTimes"];

		if(totalStakeTimes != undefined && totalStakeTimes != null)
		{
			this._betInfoView.updateCurrentRound(totalStakeTimes);
		}

		this._lastStakeScore = curStakeScore;
		this._lastPlayerId = playerId;

		this.betChip(playerId, curStakeScore);
		SoundManager.instance.playSound("send-chip_mp3");
		this.updatePlayerTurn(curPlayerId, curStakeScore);
	}

	private onGiveupPokerResponse(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Object = result["data"];
		var playerId:string = data["playerId"];
		// var cardType:number = data["cardType"];
		// var cardList:Array<any> = data["cards"];

		if(playerId == MyUserInfo.getInstance().userId)
		{
			this._myPlayerView.updateStatus(PlayerView.GIVEUP);
		}
		else
		{
			var playerView:OtherPlayerView = this.getPlayerView(playerId);
			playerView.updateStatus(PlayerView.GIVEUP);
		}
		//下一个操作玩家
		var curPlayerId:string = data["curPlayerId"];
		this.updatePlayerTurn(curPlayerId);

		SoundManager.instance.playSound("fold_mp3");
	}

	private onLookPokerResponse(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Object = result["data"];
		var playerId:string = data["playerId"];
		var cardType:number = data["cardType"];
		var cardList:Array<any> = data["cardList"];

		if(playerId == MyUserInfo.getInstance().userId)
		{
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
		else
		{
			var playerView:OtherPlayerView = this.getPlayerView(playerId);
			playerView.updateStatus(PlayerView.LOOKED);

			if(this._cancelCompareBtn.visible)
			{
				playerView.setCompareFlag(true);
				playerView.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchOtherPlayer, this);
			}
		}

		//当前轮到自己操作
		if(this._currentPlayerId == MyUserInfo.getInstance().userId)
			this.updateBetRule();

		SoundManager.instance.playSound("check_mp3");
	}

	private onReadyResponse(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Object = result["data"];
		var playerId:string = data["playerId"];

		if(playerId == MyUserInfo.getInstance().userId)
		{
			this._readyBtn.visible = false;

			this._1fenBtn.setSkin("zjhGame_json.1fenBtn", "zjhGame_json.1fenBtn2");
			this._1fenBtn["value"] = 1;

			this._2fenBtn.setSkin("zjhGame_json.2fenBtn", "zjhGame_json.2fenBtn2");
			this._2fenBtn["value"] = 2;

			this._3fenBtn.setSkin("zjhGame_json.3fenBtn", "zjhGame_json.3fenBtn2");
			this._3fenBtn["value"] = 3;

			this._myPlayerView.updateStatus(PlayerView.READYED);
			
		}
		else
		{
			var playerView:OtherPlayerView = this.getPlayerView(playerId);
			playerView.updateStatus(PlayerView.READYED);
		}

		this._myPlayerView.hidePoker();
	}
	/**
	 * 发牌
	 */
	private onSayPokerResponse(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Object = result["data"];
		var roomBankerId:string = data["roomBankerId"];

		this._betInfoView.updateRound(data["curGame"], data["totalGames"]);
		

		this._inviteBtn.visible = false;
		this._readyBtn.visible = false;

		this._betInfoView.updateRound(data["curGame"], data["totalGames"]);
		// this._myPlayerView.updateStatus(PlayerView.READYED);
		//下注筹码
		var playerList:Array<any> = this._data["playerList"];
		for(var i:number = 0; i < playerList.length; i++)
		{
			if(playerList[i].playerId == MyUserInfo.getInstance().userId)
			{
				this._myPlayerView.updateStatus(PlayerView.NOT_READY);
				this._myPlayerView.isZhuang = false;
			}
			else
			{
				var playerView:OtherPlayerView = this.getPlayerView(playerList[i].playerId);
				playerView.updateStatus(PlayerView.NOT_READY);
				playerView.isZhuang = false;
			}
			this.betChip(playerList[i].playerId);
		}
		SoundManager.instance.playSound("send-chip_mp3");

		if(roomBankerId == MyUserInfo.getInstance().userId)
		{
			this._myPlayerView.isZhuang = true;
		}
		else
		{
			var playerView:OtherPlayerView = this.getPlayerView(roomBankerId);
			playerView.isZhuang = true;
		}

		this._lastStakeScore = 0;
		this._lastPlayerId = "";
		this._currentPlayerId = "";

		var curPlayerId:string = data["curPlayerId"];
		this.updatePlayerTurn(curPlayerId);

		if(curPlayerId == MyUserInfo.getInstance().userId)
		{
			this._giveUpBtn.setEnabled(true);
			this._1fenBtn.setEnabled(true);
			this._2fenBtn.setEnabled(true);
			this._3fenBtn.setEnabled(true);
		}
		else
		{
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
	}

	private _fapaiTimerId:number = -1;

	private fapai():void
	{
		this._myPlayerView.sayPoker();
		this._myPlayerView.canLook = true;

		var len:number = this._otherPlayerViews.length;
		for(var i:number = 0; i < len; i++)
		{
			var otherPlayerView:OtherPlayerView = this._otherPlayerViews[i];
			otherPlayerView.sayPoker();
		}		

		SoundManager.instance.playSound("start_mp3");
	}

	private betChip(playerId:string, chipValue:number = 1):void
	{
		var chipView:ChipView = new ChipView();
		var chipFrom:Array<any> = this._myPlayerView.getChipBornPos();
		if(playerId != MyUserInfo.getInstance().userId)
		{
			var otherPlayerView:OtherPlayerView = this.getPlayerView(playerId);
			otherPlayerView.updateBetNum(chipValue);
			chipFrom = otherPlayerView.getChipBornPos();
		}
		else
		{
			this._myPlayerView.updateBetNum(chipValue);
		}
		chipView.x = chipFrom[0]; chipView.y = chipFrom[1];
		this._chipContainer.addChild(chipView);

		var toPos:Array<any> = this.getRandomChipPos();
		egret.Tween.get(chipView).to({x:toPos[0], y:toPos[1]}, 300);
		chipView.setValue(chipValue);

		this._betInfoView.addChip(chipValue);

		
	}

	private getActivePlayerList():Array<OtherPlayerView>
	{
		var len:number = this._otherPlayerViews.length;
		var playingCount:number = 0;
		var resultList:Array<OtherPlayerView> = [];

		for(var i:number = 0; i < len; i++)
		{
			var playerView:OtherPlayerView = this._otherPlayerViews[i];
			if(playerView.isOffline())
				continue;
			if((playerView.getStatus() != PlayerView.GIVEUP) && (playerView.getStatus() != PlayerView.GIVEUP2) && (playerView.getStatus() != PlayerView.WATCHER))
			{
				resultList.push(playerView);
			}
		}
		return resultList;
	}

	private getRandomChipPos():Array<any>
	{
		var centerX:number = GameGlobal.stage.stageWidth * 0.5;
		var centerY:number = GameGlobal.stage.stageHeight * 0.5;
		return [centerX+DUtils.createRandomNum(-30, 30), centerY+DUtils.createRandomNum(-30, 30)];
	}

	private getPlayerView(playerId:string):OtherPlayerView
	{
		var len:number = this._otherPlayerViews.length;
		for(var i:number = 0; i < len; i++)
		{
			var playerView:OtherPlayerView = this._otherPlayerViews[i];
			var data:Object = playerView.getData();
			if(data["playerId"].toString() == playerId.toString())
				return this._otherPlayerViews[i];
		}
		return null;
	}

	private quitConfirm():void
	{
		var data:Object = {};
        data["msgType"] = NetAction.dissolveRoom;
        data["token"] = GameModel.instance().token;
		data["gameType"] = GameGlobal.gameType;
        data["msg"] = {"roomId":GameModel.instance().roomId, "playerId":MyUserInfo.getInstance().userId};
		
        SocketCommand.getInstance().send(data);
	}

	public getPayTypeStr(type:number):string
	{
		var payStr:string = "房主支付";
		switch(type)
		{
			case 1:
				payStr = "房主支付";
				break;
			case 2:
				payStr = "AA支付";
				break;
				
		}
		return payStr;
	}

	private onTouchTap(evt:egret.TouchEvent):void
	{
		if(evt.currentTarget == this._quitBtn)
		{
			AlertView.getInstance().setConfirmCallBack(this.quitConfirm, this);
			AlertView.getInstance().show("是否确定解散房间？", AlertView.CONFIRM_MODE);
		}
		else if(evt.currentTarget == this._readyBtn)
		{
			var data:Object = {};
			data["msgType"] = NetAction.ready;
			data["msg"] = {"roomId":GameModel.instance().roomId, "playerId":MyUserInfo.getInstance().userId};

			SocketCommand.getInstance().send(data);
		}
		else if(evt.currentTarget == this._inviteBtn)
		{
			var desc:string = "";
			var payType:string = this.getPayTypeStr(this._data["payType"]);
			if(this._data.hasOwnProperty("teaHouseNum") && (this._data["teaHouseNum"] != null))
			{
				desc += "茶楼编号:"+this._data["teaHouseNum"] + ",第"+this._data["tableNum"]+"桌,"+this._data["totalGames"]+"局,"+payType+",速度来玩吧!";
			}
			else
				desc += "房间号：" +this._data["roomId"]+ "," + this._data["totalGames"]+"局,"+payType+",速度来玩吧!";

			egret.ExternalInterface.call("shareToFriend", GameGlobal.shareTitle+"|"+desc);
		}
		else if(evt.currentTarget == this._giveUpBtn)
		{
			var data:Object = {};
			data["msgType"] = NetAction.giveup;
			data["msg"] = {"roomId":GameModel.instance().roomId, "playerId":MyUserInfo.getInstance().userId};

			SocketCommand.getInstance().send(data);
		}
		else if(evt.currentTarget == this._compareBtn)
		{
			this._compareBtn.visible = false;
			this._cancelCompareBtn.visible = true;
			//其他玩家显示可比牌状态
			var len:number = this._otherPlayerViews.length;
			var activeList:Array<OtherPlayerView> = this.getActivePlayerList();
			var playingCount:number = activeList.length;

			for(var i:number = 0; i < len; i++)
			{
				var playerView:OtherPlayerView = activeList[i];
				playerView.touchEnabled = true;

				if((playingCount <=1) || (playerView.isKanpai && (playerView.getStatus() != PlayerView.GIVEUP) && (playerView.getStatus() != PlayerView.GIVEUP2)))
				{
					playerView.setCompareFlag(true);
					playerView.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchOtherPlayer, this);
				}
			}
			if(MyUserInfo.getInstance().gender == 0)
				SoundManager.instance.playSound("vs_mp3");
			else
				SoundManager.instance.playSound("vs2_mp3");
		}
		else if(evt.currentTarget == this._cancelCompareBtn)
		{
			this._compareBtn.visible = true;
			this._cancelCompareBtn.visible = false;
			var len:number = this._otherPlayerViews.length;
			for(var i:number = 0; i < len; i++)
			{
				var playerView:OtherPlayerView = this._otherPlayerViews[i];
				playerView.touchEnabled = false;
				playerView.setCompareFlag(false);
				playerView.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchOtherPlayer, this);
			}
		}
		else if(evt.currentTarget == this._1fenBtn)
		{
			var data:Object = {};
			data["msgType"] = NetAction.follow;
			data["msg"] = {"roomId":GameModel.instance().roomId, "playerId":MyUserInfo.getInstance().userId, "curStakeScore":this._1fenBtn["value"]};

			SocketCommand.getInstance().send(data);
		}
		else if(evt.currentTarget == this._2fenBtn)
		{
			var data:Object = {};
			data["msgType"] = NetAction.follow;
			data["msg"] = {"roomId":GameModel.instance().roomId, "playerId":MyUserInfo.getInstance().userId, "curStakeScore":this._2fenBtn["value"]};

			SocketCommand.getInstance().send(data);
		}
		else if(evt.currentTarget == this._3fenBtn)
		{
			var data:Object = {};
			data["msgType"] = NetAction.follow;
			data["msg"] = {"roomId":GameModel.instance().roomId, "playerId":MyUserInfo.getInstance().userId, "curStakeScore":this._3fenBtn["value"]};

			SocketCommand.getInstance().send(data);
		}
		else if(evt.currentTarget == this._chatBtn)
		{
			GameGlobal.iframeLayer.showIFrame(NN_ChatView);
		}
		else if(evt.currentTarget == this._refreshBtn)
		{
			var data:Object = {};
			data["msgType"] = NetAction.refreshRoom;
			data["msg"] = {"refreshType":1};
			data["gameType"] = 0;
			SocketCommand.getInstance().send(data);
		}
		else if(evt.currentTarget == this._setBtn)
		{
			GameGlobal.iframeLayer.showIFrame(SettingView);
		}
		else if(evt.currentTarget == this._helpBtn)
		{
			GameGlobal.iframeLayer.showIFrame(RuleView2);
		}
	}
	
	/**
	 * 
	 */
	private onTouchOtherPlayer(evt:egret.TouchEvent):void
	{
		var otherPlayerView:OtherPlayerView = evt.currentTarget as OtherPlayerView;
		otherPlayerView.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchOtherPlayer, this);

		var otherPlayerData:Object = otherPlayerView.getData();
		var otherPlayerId:string = otherPlayerData["playerId"];

		this._cancelCompareBtn.visible = false;
		this._compareBtn.visible = true;

		var minBetValue:number = this.getCurrentMinBet();
		this.betChip(MyUserInfo.getInstance().userId, minBetValue);
		SoundManager.instance.playSound("send-chip_mp3");

		var data:Object = {};
		data["msgType"] = NetAction.compare;
		data["msg"] = {"roomId":GameModel.instance().roomId, "playerId":MyUserInfo.getInstance().userId, "curStakeScore":2, "otherPlayerId":otherPlayerId};
		SocketCommand.getInstance().send(data);
	}
	/**
	 * 当前最低下注
	 */
	private getCurrentMinBet():number
	{
		var betValue:number = 1;
		if(this._1fenBtn.isEnabled)
			betValue = this._1fenBtn["value"];
		else if(this._2fenBtn.isEnabled)
			betValue = this._2fenBtn["value"];
		else
			betValue = this._3fenBtn["value"];
		return betValue;
	}

	private _isTweening:boolean = false;
	// private _isShowOption:boolean = false;
	// private showOrHideOptionView():void
	// {
	// 	this._isShowOption = !this._isShowOption;
	// 	// this._optionBtn.setSkin(this._isShowOption?"game_json.optionBtn":"game_json.optionBtn2");
	// 	this._settingView.visible = this._isShowOption;
	// }

	// 初始化分数按钮信息
	private initFenBtns():void
	{
		this._1fenBtn = new DButton("zjhGame_json.1fenBtn", "zjhGame_json.1fenBtn2");
		this.addChild(this._1fenBtn);
		this._1fenBtn.x = 338; this._1fenBtn.y = 390;
		this._1fenBtn["value"] = 1;

		this._2fenBtn = new DButton("zjhGame_json.2fenBtn", "zjhGame_json.2fenBtn2");
		this.addChild(this._2fenBtn);
		this._2fenBtn.x = 499; this._2fenBtn.y = 390;
		this._2fenBtn["value"] = 2;

		this._3fenBtn = new DButton("zjhGame_json.3fenBtn", "zjhGame_json.3fenBtn2");
		this.addChild(this._3fenBtn);
		this._3fenBtn.x = 660; this._3fenBtn.y = 390;
		this._3fenBtn["value"] = 3;
	}

	private resize():void
	{
		// this._chatBtn.y = GameGlobal.stageH - 83;
		// this._giveUpBtn.y = GameGlobal.stageH - 97;// 543;
		// this._compareBtn.y = GameGlobal.stageH - 97;// 543;
		// this._cancelCompareBtn.y = GameGlobal.stageH - 97;// 543;
		// this._1fenBtn.y = this._2fenBtn.y = this._3fenBtn.y = GameGlobal.stageH - 97;

	}
}