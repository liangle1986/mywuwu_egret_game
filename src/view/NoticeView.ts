/**
 * 公告信息
 */
class NoticeView extends egret.Sprite
{
	private _bg:egret.Bitmap;
	private _noticeTF:egret.TextField;

	public constructor() {
		super();

		this.initView();
	}

	private _notices:Array<any> = [];
	private _noticeIndex:number = 0;

	// 添加公告
	public addNotice(data:string):void
	{
		this._notices.push(data);

		if(this._notices.length == 1)
		{
			this.nextNotice();
		}

		this.visible = true;
	}

	public init():void
	{
		this.visible = false;
		this._noticeIndex = 0;
		this._notices = [];
		egret.Tween.removeTweens(this._noticeTF);
		this._noticeTF.x = this._bg.width+5;
	}

	// 公告轮播动画
	private nextNotice():void
	{
		if(this._noticeIndex >= this._notices.length) this._noticeIndex = 0;

		var notice:string = this._notices[this._noticeIndex];
		var tweenTime:number = 20000;
		this._noticeTF.text = notice;
		egret.Tween.removeTweens(this._noticeTF);
		egret.Tween.get(this._noticeTF).to({ x: 47 - this._noticeTF.textWidth },tweenTime).call(() => {
			this._noticeTF.x = this._bg.width+5;
			this._noticeIndex++;
			this.nextNotice();
		},this);
	}

	// 初始化公告
	private initView():void
	{
		// 背景
		this._bg = new egret.Bitmap();
		this._bg.texture = RES.getRes("notice_bg2_png");
		this.addChild(this._bg);

		// 公告动画
		var maskShape:egret.Shape = new egret.Shape();
		maskShape.graphics.beginFill(0);
		maskShape.graphics.drawRect(0, 0, 1096, this._bg.height);
		this.addChild(maskShape);
		maskShape.x = 50;

		// 公告信息
		this._noticeTF = new egret.TextField();
		this._noticeTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		this._noticeTF.textColor = 0xffffff;
		this._noticeTF.size = 21;
		this._noticeTF.textAlign = egret.HorizontalAlign.LEFT;
		this.addChild(this._noticeTF);
		this._noticeTF.text = "";
		this._noticeTF.x = this._bg.width+5;
		this._noticeTF.y = 11;
		this._noticeTF.mask = maskShape;

		this.visible = false;
		// this.addNotice("系统公告测试！！！");
	}
}