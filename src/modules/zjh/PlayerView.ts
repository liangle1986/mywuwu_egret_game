/**
 * 牌局玩家
 */
class PlayerView extends BasePlayerView
{
	protected _goldTF:egret.TextField; //投注分数
	protected _scoreTF:egret.TextField; //总分
	protected _cardGroup:CardGroup; // 牌组
	protected _kanpaied:egret.Bitmap; // 看过的牌
	protected _giveuped:egret.Bitmap; // 弃牌
	protected _bipaiFail:egret.Bitmap; // 比牌
	protected _selectImg:egret.Bitmap; 选择

	public static WATCHER:number = 0; //旁观
	public static NOT_READY:number = 1; //1 未准备
	public static READYED:number = 2; //已准备
	public static NOT_LOOK:number = 3; //未看牌
	public static LOOKED:number = 4; //已看牌
	public static GIVEUP:number = 5; //主动弃牌
	public static GIVEUP2:number = 6; //被动弃牌

	protected _chatPaopao:ChatPaopao; //聊天泡泡
	protected _emotionImg:egret.Bitmap; //聊天表情

	public constructor() 
	{
		super();
	}

	private _betNum:number = 0; // 下注数
	public updateBetNum(value:number):void
	{
		this._betNum += value;
		console.log("this._betNum = " + value);
		this._goldTF.text = this._betNum.toString();
	}

	// 取消下注
	public clearBetNum():void
	{
		this._betNum = 0;
		this._goldTF.text = this._betNum.toString();
	}

	// 更新得分
	public updateScore(value:number):void
	{
		if(value == undefined) value = 0;
		this._scoreTF.text = value.toString();
	}

	// 显示聊天信息
	public showChatMsg(chatType:number, chatMsg:string):void
	{
		// 如果有聊天信息，先移除聊天信息
		if(this._chatPaopao && this.contains(this._chatPaopao))
		{
			egret.Tween.removeTweens(this._chatPaopao);
			this.removeChild(this._chatPaopao);
			this._chatPaopao = null;
		}
		egret.Tween.removeTweens(this._emotionImg);
		this._emotionImg.visible = false;

		var direction:number = 0;
		if(this._position == -1 || this._position == -2 || this._position == 0)
			direction = 0;
		else
			direction = 1;

		// 创建聊天信息
		if(chatType == 1 || chatType == 3)
		{
			this._chatPaopao = new ChatPaopao(direction);
			this.addChild(this._chatPaopao);
			this._chatPaopao.show(chatMsg, chatType);

			if(this._position == 1)
			{
				this._chatPaopao.x = 0; this._chatPaopao.y = -57;
			}
			else if(this._position == 2)
			{
				this._chatPaopao.x = 0; this._chatPaopao.y = -57;
			}
			else if(this._position == 3)
			{
				this._chatPaopao.x = 0; this._chatPaopao.y = -36;
			}
			else if(this._position == 4)
			{
				this._chatPaopao.x = 0; this._chatPaopao.y = -57;
			}
			else if(this._position == 5)
			{
				this._chatPaopao.x = 0; this._chatPaopao.y = -71;
			}
			else
			{
				this._chatPaopao.x = 0; this._chatPaopao.y = 32;
			}
			
			this._chatPaopao.alpha = 1;
			egret.Tween.get(this._chatPaopao).wait(2000).to({alpha:0}, 1000).call(()=>{

				this.removeChild(this._chatPaopao);
				this._chatPaopao = null;

			}, this);
		}
		// 录音
		else if(chatType == 6)
		{
			this.showRecord(true);
		}
		else
		{
			// 表情
			this._emotionImg.visible = true;
			this._emotionImg.texture = RES.getRes("emotion_json."+chatMsg);
			this._emotionImg.alpha = 1;
			egret.Tween.get(this._emotionImg).wait(2000).to({alpha:0}, 800).call(()=>{

				this._emotionImg.visible = false;

			}, this);
		}
		
	}

	// 更新游戏状态
	public updateStatus(status:number):void
	{
		this._status = status;
		this._readyFlag.visible = this._kanpaied.visible = this._giveuped.visible = false;
		this._bipaiFail.visible = false;
		this.isKanpai = false;
		this._cardGroup.alpha = 1; // 牌的透明度

		// 未准备
		if(status == PlayerView.NOT_READY)
		{
			this._readyFlag.visible = false;
			this._betNum = 0;
			this._goldTF.text = this._betNum.toString();
		}
		// 准备
		else if(status == PlayerView.READYED)
		{
			this._readyFlag.visible = true;
			
			this._betNum = 0;
			this._goldTF.text = this._betNum.toString();
		}
		// 未看牌
		else if(status == PlayerView.NOT_LOOK)
		{
			this._cardGroup.visible = true;
		}
		// 已看牌
		else if(status == PlayerView.LOOKED)
		{
			this._kanpaied.visible = true;
			this.isKanpai = true;
			this._cardGroup.visible = true;
		}
		// 主动弃牌
		else if(status == PlayerView.GIVEUP)
		{
			this._giveuped.visible = true;
			this._cardGroup.visible = true;
		}
		// 被动弃牌
		else if(status == PlayerView.GIVEUP2)
		{
			this._bipaiFail.visible = true;
			// 设置半透明
			this._cardGroup.alpha = 0.5;
			// 设置不触发事件
			this._cardGroup.visible = true;
		}
	}

	public isKanpai:boolean = false;

	/**
	 * 看牌/明牌
	 */
	public lookPoker(cardList:Array<any>, showAnimation:boolean = true):void
	{
		if(cardList == undefined || cardList == null)
			return;
			
		this._cardGroup.setPokerData(cardList);
		this._cardGroup.showPokerValue(true, showAnimation);
		if(cardList.length > 0)
			this.isKanpai = true;
	}

	/**
	 * 发牌
	 */
	public sayPoker():void
	{
		this._readyFlag.visible = this._kanpaied.visible = this._giveuped.visible = false;
		this._cardGroup.visible = true;
		this._cardGroup.showPokerValue(false, false);
	}

	public showMyTurn(value:boolean):void
	{
		this._selectImg.visible = value;
	}

	public reset():void
	{
		this.isKanpai = false;
		this._betNum = 0;
		this.isFang = false;
		this.isZhuang = false;
		this._goldTF.text = "0";
		this._nickNameTF.text = "...";
		this._faceImg.clear();
		this._faceImg.touchEnabled = true;
		this._readyFlag.visible = this._kanpaied.visible = this._giveuped.visible = false;
		this._bipaiFail.visible = false;
		this._cardGroup.reset();
		this._cardGroup.showPokerValue(false, false);
		this.updateScore(0);
		this._cardGroup.alpha = 1;
		this.updateStatus(PlayerView.NOT_READY);
		this.showRecord(false);
		this._isZhuang = false;
		this._isFang = false;
	}

	public setData(playerInfo:Object):void
	{
		super.setData(playerInfo);

		this._betNum = 0;
		var order:number = playerInfo["order"];
		this.updateStatus(playerInfo["status"]);
	}

	public getData():Object
	{
		return this._data;
	}

	private onTouchTap(evt:egret.TouchEvent):void
	{
		if(this._data == null)
			return;

		if(this._data["playerId"] == MyUserInfo.getInstance().userId)
		{
			// GameGlobal.iframeLayer.showIFrame(PlayerInfoView);
			// var playerInfoView:PlayerInfoView = GameGlobal.iframeLayer.getIFrame(PlayerInfoView);
			// playerInfoView.setData(this._data, true);
			GameGlobal.iframeLayer.showIFrame(PlayerInfoView, this._data);
		}
		else
		{
			// GameGlobal.iframeLayer.showIFrame(PlayerInfoView2);
			// var playerInfoView2:PlayerInfoView2 = GameGlobal.iframeLayer.getIFrame(PlayerInfoView2);
			// playerInfoView2.setData(this._data);
			GameGlobal.iframeLayer.showIFrame(PlayerInfoView, this._data);
		}
		
	}

	protected _betImg:egret.Bitmap;

	protected initView():void
	{
		super.initView();
		
		this._faceBg = DUtils.createBitmapByName("nnGame2_json.nn_playerBg2");
		this.addChild(this._faceBg);

		this._faceImg = new DImage(98, 94, "game_json.testFace");
		this._faceImg.y = 100;
		this.addChild(this._faceImg);
		this._faceImg.touchEnabled = true;
		this._faceImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);

		this._betImg = DUtils.createBitmapByName("nnGame2_json.n_goldBg");
		this.addChild(this._betImg);
		this._betImg.x = 280; this._betImg.y = 93;

		this._goldTF = new egret.TextField();
		this._goldTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		this._goldTF.size = 16;
		this._goldTF.textColor = 0xffdb56;
		this._goldTF.textAlign = egret.HorizontalAlign.CENTER;
		this._goldTF.width = 68;
		this._goldTF.x = this._betImg.x+34; this._goldTF.y = this._betImg.y+10;
		this.addChild(this._goldTF);
		this._goldTF.text = "0";

		this._emotionImg = new egret.Bitmap();
		this.addChild(this._emotionImg);
		this._emotionImg.anchorOffsetX = 25;
		this._emotionImg.anchorOffsetY = 26;
		this._emotionImg.x = this.x+this._faceImg.x+this._faceImg.width*0.5, 
		this._emotionImg.y = this.y+this._faceImg.y+this._faceImg.height*0.5;
		this._emotionImg.touchEnabled = false;

		// this._fangFlag = new egret.Bitmap();
		// this._fangFlag.texture = RES.getRes("game_json.fangka2");
		// this.addChild(this._fangFlag);
		// this._fangFlag.visible = false;

		this._zhuangFlag = new egret.Bitmap();
		this._zhuangFlag.texture = RES.getRes("nnGame2_json.n_zhuangKuang");
		this.addChild(this._zhuangFlag);
		this._zhuangFlag.x = 0; this._zhuangFlag.y = 62;
		this._zhuangFlag.visible = false;

		// this._fangFlag.x = 90; this._fangFlag.y = -24;

		this._selectImg = new egret.Bitmap();
		this.addChild(this._selectImg);
		this._selectImg.texture = RES.getRes("nnGame2_json.n_arrow");
		this._selectImg.x = 6; this._selectImg.y = 10;
		this._selectImg.visible = false;
		egret.Tween.get(this._selectImg, {loop:true}).to({y:30}, 800).to({y:-10}, 800);
		this._selectImg.touchEnabled = false;

		

		this._cardGroup = new CardGroup();
		this.addChild(this._cardGroup);
		this._cardGroup.x = 388; this._cardGroup.y = 0;
		this._cardGroup.visible = false;

		this._readyFlag = new egret.Bitmap();
		this._readyFlag.texture = RES.getRes("nnGame2_json.n_readyed");
		this._readyFlag.x = 518; this._readyFlag.y = 54;
		this.addChild(this._readyFlag);
		this._readyFlag.visible = false;
		
		this.addChild(this._faceImg);
		this.addChild(this._emotionImg);
		// this.addChild(this._nickNameTF);
		this.addChild(this._zhuangFlag);
		// this.addChild(this._fangFlag);
		this.addChild(this._selectImg);

		this._kanpaied = new egret.Bitmap();
		this.addChild(this._kanpaied);
		this._kanpaied.texture = RES.getRes("zjhGame_json.kanpaied");

		this._giveuped = new egret.Bitmap();
		this.addChild(this._giveuped);
		this._giveuped.texture = RES.getRes("zjhGame_json.giveuped");

		this._bipaiFail = new egret.Bitmap();
		this.addChild(this._bipaiFail);
		this._bipaiFail.texture = RES.getRes("zjhGame_json.bipaiFail");

		this._offlineFlagIcon = new egret.Bitmap();
		this.addChild(this._offlineFlagIcon);
		this._offlineFlagIcon.texture = RES.getRes("nnGame2_json.offline");
		this._offlineFlagIcon.visible = false;
		this._offlineFlagIcon.x = 10; this._offlineFlagIcon.y = 54;

		this._recordIcon = new egret.Bitmap();
		this._recordIcon.texture = RES.getRes("common_json.yuyinIcon");
		this.addChild(this._recordIcon);
		this._recordIcon.x = this._faceImg.x+10+this._faceImg.width;
		this._recordIcon.y = this._faceImg.y+this._faceImg.height-10;
		this._recordIcon.visible = false;

		this._kanpaied.x = this._cardGroup.x+((this._cardGroup.width - this._kanpaied.width) >> 1);
		 this._kanpaied.y = 53;
		this._giveuped.x = this._cardGroup.x+((this._cardGroup.width - this._giveuped.width) >> 1); 
		this._giveuped.y = 53;
		this._bipaiFail.x = this._cardGroup.x+((this._cardGroup.width - this._bipaiFail.width) >> 1);
		this._bipaiFail.y = 53;
		 
		this._kanpaied.visible = this._bipaiFail.visible = this._giveuped.visible = false;
	}
}