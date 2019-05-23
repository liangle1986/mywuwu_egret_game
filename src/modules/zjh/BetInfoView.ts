/**
 * 游戏内信息
 */
class BetInfoView extends BaseBattleUIView
{
	private _dizhuTF:egret.TextField; //底注
	private _chipTF:egret.TextField; //当前筹码

	private _teahouseNum:number = 0;
	private _tableNum:number = 0;

	public constructor() {
		super();
	}

	public updateRound(curRound:number, totalRound:number):void
	{
		this._curRound = curRound;
		this._curRound = Math.max(1, this._curRound);
		
		this._totalRound = totalRound;

		if(this._teahouseNum != null && this._teahouseNum != 0)
		{
			this._roomNumTF.text = "茶楼号："+this._teahouseNum+ " 第"+this._tableNum+"桌"+ " 局数："+this._curRound+"/"+this._totalRound;
		}
		else
		{
			this._roomNumTF.text = "房号："+this._roomId + "  局数："+this._curRound+"/"+this._totalRound;
		}
		
		// this._roomNumTF.text = "房号："+this._roomId + "  第"+this._curRound+"/"+this._totalRound+"局";
		this._chip = 0;
		this._chipTF.text = this._chip.toString();
	}

	private _dizhu:number = 10;
	private _danzhuLimit:number = 10;
	private _roomId:number = 1;
	private static MAXROUND:number = 30;

	public init(data:Object):void
	{
		var roomId:number = data["roomId"];
		var maxRound:number = data["totalGames"];
		this._roomId = roomId;
		this._curRound = 1;
		this._totalRound = maxRound;

		this._chip = 0;
		this._chipTF.text = this._chip.toString();

		this._teahouseNum = 0;
		this._tableNum = 0;
		var teaHouseNum:number = data["teaHouseNum"];
		this._teahouseNum = teaHouseNum;
		
		if(teaHouseNum != null && teaHouseNum != 0)
		{
			this._teahouseNum = teaHouseNum;
			this._tableNum = data["tableNum"];
			this._roomNumTF.text = "茶楼号："+data["teaHouseNum"]+ " 第"+this._tableNum+"桌" +" 局数："+this._curRound+"/"+this._totalRound;
		}
		else
		{
			this._roomNumTF.text = "房号："+this._roomId + "  局数："+this._curRound+"/"+this._totalRound;
		}

		
		
		this.updateCurrentRound(1);
	}
	
	public updateCurrentRound(value:number):void
	{
		this._dizhuTF.text = "当局押注轮次 " + value + "/"+BetInfoView.MAXROUND;
	}

	private _chip:number = 0;
	public addChip(value:number):void
	{
		this._chip += value;
		console.log("current chip = "+this._chip);
		this._chipTF.text = this._chip.toString();
	}

	protected initView():void
	{
		this._roomNumTF = new egret.TextField();
		this._roomNumTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		this._roomNumTF.textColor = 0xffffff;
		this._roomNumTF.size = 25;
		this._roomNumTF.bold = true;
		this._roomNumTF.textAlign = egret.HorizontalAlign.CENTER;
		
		this.addChild(this._roomNumTF);
		this._roomNumTF.x = 376;
		this._roomNumTF.text = "房号：0  第1/1局";

		this._dizhuTF = new egret.TextField();
		this._dizhuTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		this._dizhuTF.textColor = 0xffffff;
		this._dizhuTF.bold = true;
		this._dizhuTF.size = 25;
		this._dizhuTF.textAlign = egret.HorizontalAlign.LEFT;
		this.addChild(this._dizhuTF);
		this._dizhuTF.text = "当局押注轮次 1/"+BetInfoView.MAXROUND;

		var chipBg:egret.Bitmap = new egret.Bitmap();
		chipBg.texture = RES.getRes("game_json.xiazhujineBg");
		this.addChild(chipBg);
		chipBg.x = 340; chipBg.y = 149;

		this._chipTF = new egret.TextField();
		this._chipTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		this._chipTF.textColor = 0xffffff;
		this._chipTF.size = 17;
		this._chipTF.textAlign = egret.HorizontalAlign.LEFT;
		this._chipTF.x = 390; this._chipTF.y = 155;
		
		this.addChild(this._chipTF);
		this._chipTF.text = "0";
	}
}