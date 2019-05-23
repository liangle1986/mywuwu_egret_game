/**
 * 牌的视图
 */
class CardView extends egret.Sprite
{
	private _data:Card;
	public get data():Card
	{
		return this._data;
	}

	private _view:egret.Bitmap;

	public set data(value:Card)
	{
		this._data = value;
		if(this._data == null)
			this._view.texture = RES.getRes("poker5_json.cardBg");
	}

	// 发牌
	public showValue(value:boolean, showAnimation:boolean = false):void
	{
		if(this._data == null)
			return;

		egret.Tween.removeTweens(this._view);
		// 是否展示背景 false 是 true 否
		if(value)
		{
			// 是否动画展示 true 是 false 不是
			if(showAnimation)
			{
				// 牌的动作
				this._view.scaleX = -1;
				egret.Tween.get(this._view).to({scaleX:1}, 500).call(()=>
				{
					var prefix:string = this.getPokerResName(this._data.getNum(), this._data.getColor());
					this._view.texture = RES.getRes(prefix+".card"+this._data.getNum()+"_"+this._data.getColor());

				}, this);
			}
			else
			{
				var prefix:string = this.getPokerResName(this._data.getNum(), this._data.getColor());
				this._view.texture = RES.getRes(prefix+".card"+this._data.getNum()+"_"+this._data.getColor());
			}
		}
		else
		{
			this._view.texture = RES.getRes("poker5_json.cardBg");
		}
	}

	// 根据牌的数和颜色值获取对应图片前缀
	private getPokerResName(num:number, color:number):string
	{
		var prefix:string = "poker1_json";
		if(num <=3)
			prefix = "poker1_json";
		else if(num <=6)
		{
			prefix = "poker2_json";
		}
		else if(num <=9)
		{
			prefix = "poker3_json";
		}
		else if(num <=12)
		{
			prefix = "poker4_json";
		}
		else
		{
			prefix = "poker5_json";
		}

		return prefix;
	}

	public constructor() {
		super();

		//初始化背景 位置
		this._view = new egret.Bitmap();
		this._view.texture = RES.getRes("poker5_json.cardBg");
		this.addChild(this._view);

		// 为什么要设置绝对锚点？？？
		this._view.anchorOffsetX = this._view.width*0.5;
		this._view.anchorOffsetY = this._view.height*0.5;
		this._view.x = this._view.width*0.5;
		this._view.y = this._view.height*0.5;

		this.touchEnabled = true;
	}
}