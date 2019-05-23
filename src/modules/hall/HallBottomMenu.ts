/**
 * 大厅底部菜单
 */
class HallBottomMenu
{
	private _ui:any;

	public constructor(ui:any) {
		
		this._ui = ui;

		this.initView();
	}

	private _buttons:Array<DButton> = [];

	private initView():void
	{
		var buttonNames:Array<any> = ["shareBtn", "tuiguangBtn", "choujiangBtn", "activityBtn", "mallBtn"];
		var len:number = buttonNames.length;
		this._buttons = [];
		for(var i:number = 0; i < len; i++)
		{
			var button:DButton = this._ui[buttonNames[i]];//new DButton("hall_json."+buttonNames[i]);
			// button.x = 164 * i;
			button.name = buttonNames[i];
			// this.addChild(button);
			button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle,this);

			// if(i == len - 1)
			// {
			// 	button.x = 627;
			// 	button.y = 24;
			// }
		}
	}

	private onTouchTapHandle(evt:egret.TouchEvent):void
	{
		SoundManager.instance.playSound("button_mp3");

		switch(evt.currentTarget.name)
		{
			case "shareBtn":
				GameGlobal.iframeLayer.showIFrame(ShareView);
				break;
			case "tuiguangBtn":
				GameGlobal.iframeLayer.showIFrame(TuiGuangView);
				// egret.ExternalInterface.call("openUrl", GameGlobal.TUIGUANG_URL);
				break;
			case "choujiangBtn":
				AlertView.getInstance().show("功能暂未开放，敬请期待！");
				break;
			case "activityBtn":
				AlertView.getInstance().show("功能暂未开放，敬请期待！");
				break;
			case "mallBtn":
				GameGlobal.iframeLayer.showIFrame(MallView2);
				break;
		}
	}
}