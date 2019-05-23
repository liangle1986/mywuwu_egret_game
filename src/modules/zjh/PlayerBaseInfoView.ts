/**
 * 玩家基本信息界面， 头像，昵称等
 */
class PlayerBaseInfoView extends egret.Sprite
{
	protected _faceBg:egret.Bitmap;
	protected _faceImg:DImage;
	protected _nickNameTF:egret.TextField;
	protected _goldTF:egret.TextField;

	private _data:Object;
	public setPlayerInfo(data:Object):void
	{
		if(data == null) return;
		this._data = data;

		this._nickNameTF.text = data["nickName"];
		var headImgUrl:string = data["headImgUrl"];
		if(headImgUrl != null)
			this._faceImg.load(data["headImgUrl"]);
	}

	public constructor() {
		super();
		
		this.initView();
	}

	private initView():void
	{
		this._faceBg = new egret.Bitmap();
		this._faceBg.texture = RES.getRes("game_json.faceBg");
		this.addChild(this._faceBg);

		this._faceImg = new DImage(101, 96);
		this._faceImg.x = 7; this._faceImg.y = 28;
		this.addChild(this._faceImg);

		this._nickNameTF = new egret.TextField();
		this._nickNameTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		this._nickNameTF.size = 16;
		this._nickNameTF.textColor = 0xffffff;
		this._nickNameTF.textAlign = egret.HorizontalAlign.CENTER;
		this._nickNameTF.width = 104;
		this._nickNameTF.x = 6; this._nickNameTF.y = 4;
		this.addChild(this._nickNameTF);
		this._nickNameTF.text = "...";

		this._goldTF = new egret.TextField();
		this._goldTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		this._goldTF.size = 20;
		this._goldTF.textColor = 0xffdb56;
		this._goldTF.textAlign = egret.HorizontalAlign.CENTER;
		this._goldTF.width = 104;
		this._goldTF.x = 6; this._goldTF.y = 131;
		this.addChild(this._goldTF);
		this._goldTF.text = "0";
	}
}