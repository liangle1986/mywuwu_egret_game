class BaseCardGroup extends egret.Sprite
{
	protected _cardViews:Array<CardView> = [];
	protected _cardNum:number = 5;

	public constructor() {
		super();

		this.initView();
	}

	public setPokerData(data:Array<any>, cardType:number = -1):void
	{
		if(data == null) return;
		
		var len:number = data.length;
		var cardDataList:Array<Card> = [];
		for(var i:number = 0; i < len; i++)
		{	
			var card:Card = new Card(data[i].cardValue, data[i].cardSuit);
			cardDataList.push(card);
		}
		len = this._cardViews.length;
		for(var i:number = 0; i < len; i++)
		{
			var cardView:CardView = this._cardViews[i];
			cardView.data = null;
			if(i < cardDataList.length)
				cardView.data = cardDataList[i];
		}
	}

	public setPokerSize(scale:number, xSpacing:number = 82):void
	{
		var len:number = this._cardViews.length;
		for(var i:number = 0; i < len; i++)
		{
			var cardView:CardView = this._cardViews[i];
			cardView.scaleX = cardView.scaleY = scale;
			cardView.x = i * xSpacing;
		}
	}

	public showPokerValue(value:boolean, showAnimation:boolean = false):void
	{
		var len:number = this._cardViews.length;
		for(var i:number = 0; i < len; i++)
		{
			var cardView:CardView = this._cardViews[i];
			cardView.showValue(value, showAnimation);
		}
	}

	protected resetCards():void
	{
		while(this.numChildren > 0)
			this.removeChildAt(0);
		this._cardViews = [];
		var cardView:CardView;
		for(var i:number = 0; i < this._cardNum; i++)
		{
			cardView = new CardView();
			cardView.x = i * 124;
			this.addChild(cardView);
			this._cardViews.push(cardView);
		}
	}

	protected initView():void
	{

	}
}