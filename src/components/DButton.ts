class DButton extends DComponent{

	private _skin:egret.Bitmap;
	private _disableSkinName:string = "";
	private _defaultSkinName:string = "";

	public constructor(skinResName:string, disableResName:string = "") {
		super();

		this._defaultSkinName = skinResName;
		this._disableSkinName = disableResName;

		this._skin = new egret.Bitmap(RES.getRes(skinResName));
        this.addChild(this._skin);
		
        this.touchEnabled = true;
        this.touchChildren = false;

		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
	}

	private onTouchTap(evt:egret.TouchEvent):void
	{
		SoundManager.instance.playSound("button_mp3");
	}

	public setEnabled(value:boolean):void
	{
		this._isEnabled = value;
		if(this._isEnabled)
		{
			this._skin.texture = RES.getRes(this._defaultSkinName);
			
		}
		else
		{
			this._skin.texture = RES.getRes(this._disableSkinName);
		}
		
		this.touchEnabled = this.touchChildren = value;
	}
	private _isEnabled:boolean = true;
	public isEnabled():boolean
	{
		return this._isEnabled;
	}
	/**
	 * 
	 */
	public setSkin(skinResName:string, disableSkinName:string = ""):void
	{
		this._defaultSkinName = skinResName;
		this._disableSkinName = disableSkinName;
		this._skin.texture = RES.getRes(skinResName);

		this.setEnabled(this._isEnabled);
	}
}