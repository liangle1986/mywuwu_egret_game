/**
 * 茶楼设置界面
 */
class TeahouseSetView extends IFrameBase
{
	public constructor() {
		super();

		this.skinName = "TeahouseSetSkin";
		this.name = "TeahouseSetView";
	}

	private inputTF:egret.TextField;
	private confirmBtn:eui.Button;
	private toggle:eui.Image;

	private _isNeedAudit:boolean = false;

	public childrenCreated():void
	{
		this.inputTF.type = egret.TextFieldType.INPUT;
		this.inputTF.addEventListener(egret.TouchEvent.FOCUS_IN, ()=>{

			if(this.inputTF.text == "请输入公告，例如：您邀请玩家加入您的微信群消息...")
			{
				this.inputTF.text = "";
			}

		}, this);
		this.inputTF.addEventListener(egret.TouchEvent.FOCUS_OUT, ()=>{
			if(this.inputTF.text == "")
			{
				this.inputTF.text = "请输入公告，例如：您邀请玩家加入您的微信群消息...";
			}
		}, this);
	}

	public show():void
	{
		this.inputTF.text = "请输入公告，例如：您邀请玩家加入您的微信群消息...";
		this.bindButton(this.toggle);
		this.bindButton(this.confirmBtn);

		
	}

	protected touchBindButtonHandler(clickTarget: egret.DisplayObject): void 
	{
		super.touchBindButtonHandler(clickTarget);

		if(clickTarget == this.confirmBtn)
		{
			var message:string = this.inputTF.text.trim();
			if(message == "请输入公告，例如：您邀请玩家加入您的微信群消息...")
				message = "";
			
			if(message == "")
			{
				this.close();
			}
			else
			{
				


				var data:Object = {};
				data["msgType"] = NetAction.teahouse_set;
				data["gameType"] = 0;
				var isNeedAudit:number = this._isNeedAudit?1:0;
				data["msg"] = {"teaHouseNum":GameModel.instance().teaHouseNum, "teaHouseOwnerWord": message, "isNeedAudit": isNeedAudit};
				SocketCommand.getInstance().send(data);
			}
			
		}
		else if(clickTarget == this.toggle)
		{
			this._isNeedAudit = !this._isNeedAudit;

			this.toggle.texture = this._isNeedAudit?RES.getRes("teahouse_json.t_toggleOn"):RES.getRes("teahouse_json.t_toggleOff");
		}
	}
}