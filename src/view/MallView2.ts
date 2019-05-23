class MallView2 extends IFrameBase
{
	public constructor() {
		super();

		this.skinName = "MallSkin";
		this.name = "MallView";
	}

	private copyBtn1:eui.Button;
	private copyBtn2:eui.Button;

	private static WECHAT_NUM:string = "mywuwu";
	private static PHONE_NUM:string = "杏趣社区";

	public tweenShow(): void
	{
		super.tweenShow();

		this.bindButton(this.copyBtn1);
		this.bindButton(this.copyBtn2);
	}

	/**
	 * 子类如果有bindButton, click事件覆盖次方法实现
	 */
	protected touchBindButtonHandler(clickTarget: egret.DisplayObject): void 
	{
		super.touchBindButtonHandler(clickTarget);

		if(clickTarget == this.copyBtn1)
		{
			 egret.ExternalInterface.call("copyToclipboard", MallView2.WECHAT_NUM);
		}
		else if(clickTarget == this.copyBtn2)
		{
			egret.ExternalInterface.call("copyToclipboard", MallView2.PHONE_NUM);
		}

	}

}