class RuleView2 extends IFrameBase
{
	private ruleTF:eui.Label;
	private scroller:eui.Scroller;

	public constructor() {
		super();

		this.skinName = "RuleSkin2";
		this.name = "RuleView2";
	}

	private closeBtn:eui.Button;

	public show():void
	{
		this.bindButton(this.closeBtn);
	}

	public childrenCreated():void
	{
		
	}

	public createComplete(event: egret.Event): void 
	{
		super.createComplete(event);

		// this.ruleTF.text = "";
		// var ruleLen:number = this._ruleArr.length;
		// for(var i:number = 0; i < ruleLen; i++)
		// {
		// 	this.ruleTF.appendText(this._ruleArr[i]+"\n\n");
		// }
		// this.ruleTF.height = this.ruleTF.textHeight + 10;
		// this.scroller.percentHeight = 0
	}

	protected touchBindButtonHandler(clickTarget: egret.DisplayObject): void 
	{
		super.touchBindButtonHandler(clickTarget);

		if(clickTarget == this.closeBtn)
		{
			this.close();
		}
	}
}