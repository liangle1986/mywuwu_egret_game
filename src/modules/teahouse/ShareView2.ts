/**
 * 分享界面
 */
class ShareView2 extends IFrameBase
{
	public constructor() {
		super();

		this.skinName = "ShareSkin";
	}
	
	private shareWechatBtn:eui.Button;
	private sharePublicBtn:eui.Button;

	public childrenCreated():void
	{
		
	}

	public createComplete(event: egret.Event): void 
	{
		super.createComplete(event);
		
	}

	public show():void
	{
		this.bindButton(this.sharePublicBtn);
		this.bindButton(this.shareWechatBtn);
	}

	protected touchBindButtonHandler(clickTarget: egret.DisplayObject): void 
	{
		super.touchBindButtonHandler(clickTarget);

		var shareDes:string = "我在楚风鱼乐棋牌,"+MyUserInfo.getInstance().userName+"[茶楼号:"+ GameModel.instance().teaHouseNum+"],赶紧加...";
		if(clickTarget == this.shareWechatBtn)
		{
			egret.ExternalInterface.call("shareToFriend", GameGlobal.shareTitle+"|"+shareDes);
		}
		else if(clickTarget == this.sharePublicBtn)
		{
			egret.ExternalInterface.call("share", GameGlobal.shareTitle+"|"+shareDes);
		}
	}

}