/**
 * 加入房间
 */
class JoinRoomView extends IFrameBase
{
	private numTF:eui.Label;
	private static DEFAULT_TIP_STR:string = "请输入房间ID";

	public constructor() {
		super();

		this.skinName = "JoinRoomSkin";
	}

	public show():void
	{
		this.numTF.text = JoinRoomView.DEFAULT_TIP_STR;
	}

	public childrenCreated():void
	{

	}

	public createComplete(event: egret.Event): void {
		
		super.createComplete(event);

		this.initButtons();
	}

	protected touchBindButtonHandler(clickTarget: egret.DisplayObject): void 
	{
		super.touchBindButtonHandler(clickTarget);


	}

	// 初始化输入按钮
	private initButtons():void
	{
		var len:number = 12;
		var btn:DButton;

		for(var i:number = 0; i < len; i++)
		{
			// if(i == 9)
			// 	btn = new DButton("hall_json.delNumBtn");
			// else if(i == 10)
			// 	btn = new DButton("hall_json.data0");
			// else if(i == 11)
			// 	btn = new DButton("hall_json.resetBtn");
			// else
			// 	btn = new DButton("hall_json.data"+(i+1));
			btn = this["btn"+i];
			btn["index"] = i;
			// btn.x = 28 + (i  % 3)* 175; //348
			// if(i == 2 || i == 5 || i == 8 || i == 11)
				// btn.x = 28 + 348;
			
			

			// btn.y = 223 + Math.floor(i / 3) * 66;
			// if(i >= 6  && i<= 8)
				// btn.y = 223+130;
			// else if(i >=9 && i <=11)
			// {
				// btn.y = 223+194;
			// }
			// this.addChild(btn);

			btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		}
	}

	private onTouchTap(evt:egret.TouchEvent):void
	{
		var button:DButton = evt.currentTarget  as DButton;
		var index:number = button["index"];

		if(index == 10)
		{
			this.clearNumTF();
		}
		else if(index == 11)
		{
			this.removeNum();
		}
		else
		{
			this.addNum(index);
		}

		
		var curStr:string = this.numTF.text.trim();
		
		if(curStr.length >= 6)
		{
			var roomId:string = this.getRoomId();
			if(this.numTF.text.trim() == JoinRoomView.DEFAULT_TIP_STR)
			{
				AlertView.getInstance().show(JoinRoomView.DEFAULT_TIP_STR);
				this.numTF.text = "";
				return;
			}
			LogUtils.log("roomId = "+ roomId);
			var data:Object = {};
			data["msgType"] = NetAction.enterRoom;
			data["gameType"] = 0;
			data["msg"] = {"roomId":roomId, "playerId":MyUserInfo.getInstance().userId};
			SocketCommand.getInstance().send(data);
		}
	}

	private getRoomId():string
	{
		return this.numTF.text.trim();
	}

	// private _tfIndex:number = -1;
	private addNum(index:number):void
	{
		// this._tfIndex++;
		// this._tfIndex = Math.min(this._numTFs.length - 1, this._tfIndex);
		// var tf:egret.TextField = this._numTFs[this._tfIndex];
		// tf.text = (index+1).toString();
		if(this.numTF.text.trim() == JoinRoomView.DEFAULT_TIP_STR)
			this.numTF.text = "";

		this.numTF.appendText(index.toString());
	}

	private clearNumTF():void
	{
		// this._tfIndex = -1;
		// var len:number = this._numTFs.length;
		// for(var i:number = 0; i < len; i++)
		// {
		// 	this._numTFs[i].text = "";
		// }
		this.numTF.text = JoinRoomView.DEFAULT_TIP_STR;
	}

	private removeNum():void
	{

		var curStr:string = this.numTF.text.trim();
		if(curStr == "" || curStr == JoinRoomView.DEFAULT_TIP_STR)
			return;
		
		this.numTF.text = curStr.substr(0, curStr.length - 1);
		if(this.numTF.text == "")
			this.numTF.text = JoinRoomView.DEFAULT_TIP_STR;
		// if(this._tfIndex == -1) return;
		
		// var tf:egret.TextField = this._numTFs[this._tfIndex];
		// tf.text = "";

		// this._tfIndex--;
		// this._tfIndex = Math.max(-1, this._tfIndex);
	}

	

	
}