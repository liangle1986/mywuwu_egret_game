class HallRightMenu
{

	public constructor(ui:any) {
		
		this._ui = ui;

		this.initView();
	}

	private _ui:any;
	private _buttons:Array<DButton> = [];

	private initView():void
	{
		var buttonNames:Array<any> = ["createTeahouseBtn", "joinTeahouseBtn", "createRoomBtn", "joinRoomBtn"];
		var len:number = buttonNames.length;
		this._buttons = [];
		for(var i:number = 0; i < len; i++)
		{
			var button:eui.Button = this._ui[buttonNames[i]];//new DButton("hall_json."+buttonNames[i]);
			// button.y = 106 * i;
			button.name = buttonNames[i];
			// this.addChild(button);
			button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle,this);
		}
	}

	private onTouchTapHandle(evt:egret.TouchEvent):void
	{
		SoundManager.instance.playSound("button_mp3");
		switch(evt.currentTarget.name)
		{
			//创建茶楼
			case "createTeahouseBtn":
				GameGlobal.iframeLayer.showIFrame(CreateTeahouseView);
				break;
			//创建房间
			case "createRoomBtn":
				GameGlobal.iframeLayer.showIFrame(CreateRoomView2);
				break;
			case "joinTeahouseBtn":
				GameGlobal.iframeLayer.showIFrame(JoinTeahouseView);
				break;
			case "joinRoomBtn":
				GameGlobal.iframeLayer.showIFrame(JoinRoomView);
				break;
		}
	}

}