/**
 * 聊天泡泡框
 */
class ChatPaopao extends egret.Sprite
{
	/**
	 * 0 左边玩家 1右边玩家
	 */
	public constructor(direction:number = 0) {
		super();

		this._direction = direction;
		this.initView();
	}

	private _direction:number = 0;
	public show(msg:string, type:number = 1):void
	{
		this._contentTF.text = msg;
		
		if(type == 3)
		{
			var chatIndex:number = NN_ChatView.WORDS2.indexOf(msg);
			if(MyUserInfo.getInstance().gender == 0)
				SoundManager.instance.playSound("word1-" + chatIndex + "_mp3");
			else
				SoundManager.instance.playSound("word1-" + chatIndex + "2_mp3");
		}
	}

	private _bg:egret.Bitmap;
	private _contentTF:egret.TextField;

	private initView():void
	{
		this._bg = new egret.Bitmap();
		this.addChild(this._bg);

		this._contentTF = new egret.TextField();
		this._contentTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		this._contentTF.size = 18;
		this._contentTF.textColor = 0xffffff;
		this._contentTF.textAlign = egret.HorizontalAlign.LEFT;
		this._contentTF.multiline = true; this._contentTF.wordWrap = true;
		this._contentTF.width = 184; this._contentTF.height = 60;
		// this._contentTF.border = true;
		this._contentTF.text = "";
		this._contentTF.x = 5; this._contentTF.y = 0;
		this.addChild(this._contentTF);

		if(this._direction == 0)
		{
			this._bg.texture = RES.getRes("common_json.chatpaopao");
			this._contentTF.x = 15; this._contentTF.y = 10;
		}
		else
		{
			this._bg.texture = RES.getRes("common_json.chatpaopao");
			this._contentTF.x = 15; this._contentTF.y = 10;
		}
	}
}