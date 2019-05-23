/**
 * 弹出消息 漂浮消息显示
 */
class MessagePop extends DComponent
{
	private static pool:Array<any> = []; //对象池
	public static show(content:string):void
	{
		var messageItem:MessagePop;
		if(MessagePop.pool.length > 0)
			messageItem = MessagePop.pool.pop();
		else
		{
			messageItem = new MessagePop();
		}
		if(messageItem)
		{
			messageItem.show(content);
			GameGlobal.topLayer.addChild(messageItem);
		}
		
	}

	private show(content:string):void
	{
		this.y = (GameGlobal.stage.stageHeight - this.height) >> 1;
		this.alpha = 1;

		egret.Tween.get(this).wait(1000).to({y:this.y-100,alpha:0},1000,egret.Ease.quadIn).call(this.tweenEnd,this);
	}

	private tweenEnd():void
	{
		if(this.parent)
		{
			this.parent.removeChild(this);
			MessagePop.pool.push(this);
		}
	}

	public constructor() {
		super();

		this.initView();
	}

	private _bg:egret.Bitmap;
	private _contentTF:egret.TextField;
	private initView():void
	{
		this._bg = new egret.Bitmap();
		this._bg.texture = RES.getRes("messageBg_png");
		this.addChild(this._bg);

		this._contentTF = new egret.TextField();
		this._contentTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		this._contentTF.textColor = 0x000000;
		this._contentTF.size =  30;
		this._contentTF.text = "message...";
		this.addChild(this._contentTF);
	}
}