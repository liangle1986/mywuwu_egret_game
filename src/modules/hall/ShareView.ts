/**
 * 分享界面
 */
class ShareView extends IFrameBase
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

		if(clickTarget == this.shareWechatBtn)
		{
			egret.ExternalInterface.call("shareToFriend", GameGlobal.shareTitle+"|"+GameGlobal.shareDesc);
		}
		else if(clickTarget == this.sharePublicBtn)
		{
			egret.ExternalInterface.call("share", GameGlobal.shareTitle+"|"+GameGlobal.shareDesc);
		}
	}

}