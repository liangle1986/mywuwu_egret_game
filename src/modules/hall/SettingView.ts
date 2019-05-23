/**
 * 游戏设置
 */
class SettingView extends IFrameBase
{
	public constructor() {
		super();

		this.skinName = "SettingSkin";
		this.name = "SettingView";
	}
	
	private musicToggle:eui.Image;
	private soundToggle:eui.Image;

	private _isMusicOn:boolean = true;
	private _isSoundOn:boolean = true;

	public createComplete(event: egret.Event): void {
		super.createComplete(event);

		
	}

	protected touchBindButtonHandler(clickTarget: egret.DisplayObject): void 
	{
		super.touchBindButtonHandler(clickTarget);

		switch(clickTarget)
		{
			case this.musicToggle:
				this._isMusicOn = !this._isMusicOn;
				this.musicToggle.texture = this._isMusicOn?RES.getRes("teahouse_json.t_toggleOn2"):RES.getRes("teahouse_json.t_toggleOff2");
				SoundManager.instance.isMusicOn = this._isMusicOn;
				break;
			case this.soundToggle:
				this._isSoundOn = !this._isSoundOn;
				this.soundToggle.texture = this._isSoundOn?RES.getRes("teahouse_json.t_toggleOn2"):RES.getRes("teahouse_json.t_toggleOff2");
				SoundManager.instance.isSoundOn = this._isSoundOn;
				break;
		}
	}

	public childrenCreated():void
	{
		
	}

	public show():void
	{
		this.bindButton(this.musicToggle);
		this.bindButton(this.soundToggle);
	}
}