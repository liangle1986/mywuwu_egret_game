class OtherPlayerView extends PlayerView
{
	private _compareFlag:egret.Bitmap;

	public setCompareFlag(value:boolean):void
	{
		this._compareFlag.visible = value;
		if(this._compareFlag.visible)
		{
			this._faceImg.touchEnabled = false;
		}
		else
		{
			this._faceImg.touchEnabled = true;
		}
	}

	public constructor() {
		super();
	}

	public setPosition(position:number):void
	{
		this._position = position;

		if(position == 5)
		{
			this._cardGroup.x = 216; this._cardGroup.y = 0;
			this._readyFlag.x = 222; this._readyFlag.y = 30;
			this._betImg.x = -1; this._betImg.y = 83;
		}
		else if(position == 1)
		{
			this._cardGroup.x = -124; this._cardGroup.y = 0;
			this._betImg.x = 78; this._betImg.y = 88;
			this._readyFlag.x = -38; this._readyFlag.y = 115;
		}
		else if(position == 2)
		{
			this._cardGroup.x = -54; this._cardGroup.y = 83;
			this._betImg.x = 77; this._betImg.y = 88;
			this._readyFlag.x = -38; this._readyFlag.y = 115;
		}
		else if(position == 3)
		{
			this._cardGroup.x = 46; this._cardGroup.y = 84;
			this._betImg.x = -116; this._betImg.y = 29;
			this._readyFlag.x = 65; this._readyFlag.y = 114;
		}
		else
		{
			this._cardGroup.x = 162; this._cardGroup.y = 84;
			this._betImg.x = -2; this._betImg.y = 86;
			this._readyFlag.x = 222; this._readyFlag.y = 30;
		}

		this._goldTF.x = this._betImg.x+34; this._goldTF.y = this._betImg.y+10;

		this._kanpaied.x = this._cardGroup.x - 12;
		this._kanpaied.y = this._cardGroup.y+23;
		this._giveuped.x = this._cardGroup.x - 12; 
		this._giveuped.y = this._cardGroup.y+23;
		this._bipaiFail.x = this._cardGroup.x - 12; 
		this._bipaiFail.y = this._cardGroup.y+23;
	}

	public setData(data:Object):void
	{
		super.setData(data);

	}

	public reset():void
	{
		super.reset();
		
	}

	protected initView():void
	{
		super.initView();

		this._faceImg.setWidth(54);
		this._faceImg.setHeight(54);
		this._faceImg.x = 12; this._faceImg.y = 12;

		this._selectImg.y = -90;
		egret.Tween.removeTweens(this._selectImg);
		egret.Tween.get(this._selectImg, {loop:true}).to({y:-70}, 800).to({y:-110}, 800);

		this._zhuangFlag.texture = RES.getRes("nnGame2_json.n_zhuangKuang2");
		this._zhuangFlag.x = 12; this._zhuangFlag.y = -8;

		this._nickNameTF = new egret.TextField();
		this._nickNameTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		this._nickNameTF.size = 16;
		this._nickNameTF.textColor = 0xffffff;
		this._nickNameTF.textAlign = egret.HorizontalAlign.CENTER;
		this._nickNameTF.width = 100;
		this._nickNameTF.x = 78; this._nickNameTF.y = 12;
		this.addChild(this._nickNameTF);
		this._nickNameTF.text = "...";

		this._scoreTF = new egret.TextField();
		this._scoreTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		this._scoreTF.size = 16;
		this._scoreTF.textColor = 0xffdb56;
		this._scoreTF.textAlign = egret.HorizontalAlign.CENTER;
		this._scoreTF.width = 62;
		this._scoreTF.x = 91; this._scoreTF.y = 45;
		this.addChild(this._scoreTF);
		this._scoreTF.text = "0";
		// this._scoreTF.visible = false;

		this._cardGroup.isMySelf = false;

		this._kanpaied.x = this._cardGroup.x+6; this._kanpaied.y = this._cardGroup.y+50;
		this._giveuped.x = this._cardGroup.x+6; this._giveuped.y = this._cardGroup.y+50;
		this._bipaiFail.x = this._cardGroup.x+6; this._bipaiFail.y = this._cardGroup.y+50;

		this._compareFlag = new egret.Bitmap();
		this._compareFlag.texture = RES.getRes("zjhGame_json.bipaiFlag");
		this.addChild(this._compareFlag);
		this._compareFlag.anchorOffsetX = this._compareFlag.width * 0.5;
		this._compareFlag.anchorOffsetY = this._compareFlag.height * 0.5;
		
		this._compareFlag.x = this._faceImg.x+54*0.5;
		this._compareFlag.y = this._faceImg.y+54*0.5;
		this._compareFlag.visible = false;
	}
}