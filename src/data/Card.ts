/**
 * 单张牌
 */
class Card 
{
	public static HEITAO:number = 4; //黑桃
	public static HONGTAO:number = 3; //红桃
	public static MEIHUA:number = 2; //梅花
	public static FANGKUAI:number = 1; //方块

	public static NUM_A:number = 14;
	public static NUM_K:number = 13;
	public static NUM_Q:number = 12;
	public static NUM_J:number = 11;
	public static NUM_10:number = 10;
	public static NUM_9:number = 9;
	public static NUM_8:number = 8;
	public static NUM_7:number = 7;
	public static NUM_6:number = 6;
	public static NUM_5:number = 5;
	public static NUM_4:number = 4;
	public static NUM_3:number = 3;
	public static NUM_2:number = 2;

	private _num:number = 0;
	private _color:number = 0;

	public setNum(value:number):void
	{
		this._num = value;
	}

	public getNum():number
	{
		return this._num;
	}

	public setColor(value:number):void
	{
		this._color = value;
	}

	public getColor():number
	{
		return this._color;
	}

	/**
	 * 设置牌
	 * @param num 牌值
	 * @param color 颜色
	 */
	public constructor(num:number, color:number) {
		this._num = num;
		this._color = color;	
	}
}