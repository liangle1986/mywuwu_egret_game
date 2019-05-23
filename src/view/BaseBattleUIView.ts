/**
 * 
 */
class BaseBattleUIView extends egret.Sprite
{
	protected _curRound:number = 1;
	protected _totalRound:number = 1;

	protected _roundTF:egret.TextField;
	protected _roomNumTF:egret.TextField;

	public constructor() {
		super();

		this.initView();
	}

	protected initView():void
	{

	}
}