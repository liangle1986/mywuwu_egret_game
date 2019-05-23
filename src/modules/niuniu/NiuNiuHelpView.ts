class NiuNiuHelpView extends IFrameBase
{
	public constructor() {
		super();

		this.skinName = "NiuNiuHelpSkin";
		this.name = "NiuNiuHelpView";
	}

	private wanfaTF:eui.Label;
	private difenTF:eui.Label;
	private fanbeiTF:eui.Label;
	private fangjianTF:eui.Label;
	private teshuTF:eui.Label;

	public tweenShow(): void
	{
		super.tweenShow();

		if(this.uiOpenData != null)
		{
			var roomBankerType:number = this.uiOpenData["roomBankerType"];
			this.wanfaTF.text = this.getZhuangTypeStr(roomBankerType);
			var payType:number = this.uiOpenData["payType"];
			var difen:number = this.uiOpenData["buttomScoreType"];
			this.difenTF.text = "1/2/3/4分";
			if(difen == 1)
			{
				this.difenTF.text = "1/2/3/4分";
			}
			else if(difen == 2)
			{
				this.difenTF.text = "2/4/6/8分";
			}
			else if(difen == 3)
			{
				this.difenTF.text = "3/9/9/12分";
			}

			this.fanbeiTF.text = "牛牛X4牛九X3牛八X2牛七X2";
			if(payType == 2)
			{
				if(this.uiOpenData["totalGames"] == 10)
					this.fangjianTF.text = "AA支付（房卡*1）";
				else
					this.fangjianTF.text = "AA支付（房卡*2）";
			}
			else
			{
				if(this.uiOpenData["totalGames"] == 10)
					this.fangjianTF.text = "房主支付（房卡*4）";
				else
					this.fangjianTF.text = "房主支付（房卡*7）";
			}

			this.teshuTF.text = "五花牛x5五小牛X6炸弹牛X7";
		}
	}

	public getZhuangTypeStr(type:number):string
	{
		var typeStr:string = "轮流坐庄";
		switch(type)
		{
			case 1:
				break;
			case 2:
				typeStr = "霸王庄";
				break;
			case 3:
				typeStr = "看牌抢庄";
				break;
			case 4:
				typeStr = "赢家当庄";
				break;
			
		}
		return typeStr;
	}
}