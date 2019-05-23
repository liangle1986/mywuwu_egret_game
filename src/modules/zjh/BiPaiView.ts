/**
 *  比牌舞台
 */
class BiPaiView extends egret.Sprite {
	private static _instance: BiPaiView;
	public static getInstance(): BiPaiView {
		if (BiPaiView._instance == null)
			BiPaiView._instance = new BiPaiView();
		return BiPaiView._instance;
	}

	// 是否显示比牌舞台
	public static isShow: boolean = false;

	public constructor() {
		super();

		this.initView();
	}

	private _data: Object;
	public show(data: Object): void {
		this._data = data;

		// 把比牌动画添加到舞台
		BiPaiView.isShow = true;
		GameGlobal.stage.addChild(this);
		// 设置比牌玩家的基本信息
		var myData: Object = { "nickName": MyUserInfo.getInstance().userName, "headImgUrl": MyUserInfo.getInstance().faceUrl };
		this._leftPlayerView.setPlayerInfo(myData);

		// 失败方标识
		var loserId: string = data["loserId"];
		// 获胜方标识
		var winId: string = data["winnerId"];

		// 获取对方游戏舞台
		var otherPlayerData: Object = {};
		if (this._data["winnerId"] == MyUserInfo.getInstance().userId) {
			otherPlayerData = GameGlobal.mapLayer.getBattle().getPlayerInfoById(loserId);
		}
		else {
			otherPlayerData = GameGlobal.mapLayer.getBattle().getPlayerInfoById(winId);
		}
		this._rightPlayerView.setPlayerInfo(otherPlayerData);

		// 播放VS音乐
		SoundManager.instance.playSound("vs3_mp3");

		// 设置延时事件
		egret.clearTimeout(this._timeoutId);
		this._timeoutId = egret.setTimeout(this.timeoutHandle, this, 3000);

		// vs 动画效果
		this._vsImg.y = -100;
		egret.Tween.get(this._vsImg).to({ y: 49 }, 100, egret.Ease.backIn).call(() => {

			// 炸弹图
			if (this._zhadanMc == null)
				this._zhadanMc = DUtils.createMovieClipByName("zhadan");
			this._zhadanMc.frameRate = 12;
			// 移动到指定位置
			this._zhadanMc.gotoAndStop(1);
			SoundManager.instance.playSound("bomb_mp3");
			// 赢放位置
			if (this._data["winnerId"] == MyUserInfo.getInstance().userId) {
				this._zhadanMc.x = 215; this._zhadanMc.y = -64;
			}
			else {
				this._zhadanMc.x = 675; this._zhadanMc.y = -64;
			}
			this.addChild(this._zhadanMc);

			MovieClipUtils.playOnce(this._zhadanMc, () => {
				// 添加监听发送数据
				GameEventManager.dispatchEvent("compareComplete", this._data);
			});

		}, this);
	}

	// 延时移除
	private timeoutHandle(): void {
		egret.clearTimeout(this._timeoutId);
		this.hide();
	}

	private _timeoutId: number = -1;

	// 移除舞台
	public hide(): void {
		BiPaiView.isShow = false;
		if (GameGlobal.stage.contains(this))
			GameGlobal.stage.removeChild(this);

	}

	private _bg: egret.Bitmap;
	private _leftPlayerView: PlayerBaseInfoView;
	private _rightPlayerView: PlayerBaseInfoView;

	private _vsMc: egret.MovieClip;
	private _win: egret.MovieClip;
	private _vsImg: egret.Bitmap; // vs图形

	private _leftCardGoup: CardGroup;
	private _rightCardGoup: CardGroup;

	private _zhadanMc: egret.MovieClip;

	// 初始化比牌舞台信息
	private initView(): void {
		// 背景
		this._bg = new egret.Bitmap();
		this._bg.texture = RES.getRes("bipaiBg_png");
		this.addChild(this._bg);

		// 左玩家信息
		this._leftPlayerView = new PlayerBaseInfoView();
		this.addChild(this._leftPlayerView);
		this._leftPlayerView.x = 55; this._leftPlayerView.y = 20;

		// 右侧牌数组
		this._rightCardGoup = new CardGroup();
		this._rightCardGoup.x = 676; this._rightCardGoup.y = 40;
		this.addChild(this._rightCardGoup);

		// 左侧牌数组
		this._leftCardGoup = new CardGroup();
		this._leftCardGoup.x = 216; this._leftCardGoup.y = 40;
		this.addChild(this._leftCardGoup);

		// 右侧玩家信息
		this._rightPlayerView = new PlayerBaseInfoView();
		this.addChild(this._rightPlayerView);
		this._rightPlayerView.x = 966; this._rightPlayerView.y = 20;

		// this._vsMc = DUtils.createMovieClipByName("vs");
		// this._vsMc.frameRate = 24;
		// this._vsMc.gotoAndPlay(1, -1);
		// this.addChild(this._vsMc);
		// this._vsMc.x = 472; this._vsMc.y = 19;

		// VS图片
		this._vsImg = new egret.Bitmap();
		this._vsImg.texture = RES.getRes("game_json.vs");
		this.addChild(this._vsImg);
		this._vsImg.x = 485; this._vsImg.y = 49;

		this.touchEnabled = true;

		this.y = 168;
	}
}