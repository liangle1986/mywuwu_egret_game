/**
 * 推广界面
 */
class TuiGuangView extends IFrameBase
{
	public constructor() {
		super();

		this.skinName = "TuiGuangSkin";
	}

	private inputTF:eui.Label;
	private bindBtn:eui.Button;

	public createComplete(event: egret.Event): void {
		
		super.createComplete(event);

		this.inputTF.type = egret.TextFieldType.INPUT;
		this.inputTF.addEventListener(egret.FocusEvent.FOCUS_IN, ()=>{

			if(this.inputTF.text == "请输入推荐码")
				this.inputTF.text = "";

		}, this);
		this.inputTF.addEventListener(egret.FocusEvent.FOCUS_OUT, ()=>{

			if(this.inputTF.text == "")
				this.inputTF.text = "请输入推荐码";

		}, this);
		
	}

	public show():void
	{
		this.inputTF.text = "请输入推荐码";
		this.bindButton(this.bindBtn);
	}

	protected touchBindButtonHandler(clickTarget: egret.DisplayObject): void 
	{
		super.touchBindButtonHandler(clickTarget);

		if(clickTarget == this.bindBtn)
		{
			var inputStr:string = this.inputTF.text.trim();
			if(inputStr == "")
			{
				AlertView.getInstance().show("请输入推荐码！", AlertView.ALERT_MODE);
				return;
			}
			GameEventManager.addEvent(NetAction.bind.toString(), this.onBindResponse, this);
			var data:Object = {};
			data["msgType"] = NetAction.bind;
			data["gameType"] = 0;
			data["msg"] = {"proxyId":inputStr};
			SocketCommand.getInstance().send(data);
		}
	}

	private onBindResponse(evt:DEvent):void
	{
		AlertView.getInstance().show("恭喜，绑定成功！", AlertView.ALERT_MODE);
		
		this.close();
	}
}