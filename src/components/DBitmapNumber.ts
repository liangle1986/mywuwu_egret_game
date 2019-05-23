/**
 * 
 */
class DBitmapNumber extends egret.Sprite
{
	private _type:number = 1;
	private _value:number = 1;
	private _xspacing:number = 10; //水平间隔

	public constructor(value:number, xspacing:number = 10, type:number = 1) 
	{
		super();

		this._value = value;
		this._xspacing = xspacing;
		this._type = type;
		
		this.updateView();
	}

	public setValue(value:number):void
	{
		this._value = value;

		this.updateView();
	}

	private updateView():void
	{
		this.removeChildren();
		
		
		var valueStr:string = this._value.toString();
		if(this._value > 0)
			valueStr = "+"+valueStr;
		
		var len:number = valueStr.length;
		var numImg:NumImg;

		for(var i:number = 0; i < len; i++)
		{
			var chatCode:string = valueStr.charAt(i);
			numImg = new NumImg();
			if(chatCode == "-" || chatCode == "+")
				numImg.setNum(this._type, "f");
			else
				numImg.setNum(this._type, Number(chatCode));

			numImg.x = i * this._xspacing;
			this.addChild(numImg);
		}
	}
}