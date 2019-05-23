/**
 * 牌组
 */
class CardGroup extends egret.Sprite
{
	public constructor() {
		super();

		this.initView();
	}

	private _isMySelf:boolean = true;
	public set isMySelf(value:boolean)
	{
		this._isMySelf = value;
		if(value)
		{
			// this.setPokerSize(80 / 120, 82);
		}
		else
		{
			this.setPokerSize(56 / 99, 20);
		}
	}

	// 从来一局
	public reset():void
	{
		var len:number = this._cardViews.length;
		for(var i:number = 0; i < len; i++)
		{
			var cardView:CardView = this._cardViews[i];
			cardView.showValue(false);
			cardView.data = null;
		}
	}

	// 设置直接牌的位置
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

	// 展示扑克信息（可优化只循环一次就可以了，等我熟悉项目后在做调整TODO）
	public setPokerData(data:Array<any>):void
	{
		// 单张牌信息
		var len:number = data.length;
		var cardDataList:Array<Card> = [];
		for(var i:number = 0; i < len; i++)
		{	
			var card:Card = new Card(data[i].cardValue, data[i].cardSuit);
			cardDataList.push(card);
		}

		// 牌视图组装
		var len:number = cardDataList.length;
		for(var i:number = 0; i < len; i++)
		{
			var cardView:CardView = this._cardViews[i];
			cardView.data = cardDataList[i];
		}
	}

	// 展示扑克的信息
	public showPokerValue(value:boolean, showAnimation:boolean = false):void
	{
		var len:number = this._cardViews.length;
		for(var i:number = 0; i < len; i++)
		{
			var cardView:CardView = this._cardViews[i];
			cardView.showValue(value, showAnimation);

			//设置牌的位置一致排开
			if(this._isMySelf)
			{
				// cardView.scaleX = 80 / 120; cardView.scaleY = 80 / 120;
				cardView.x = i * 108;
			}
			else
			{
				// 一张压一张
				cardView.scaleX = 56 / 99; cardView.scaleY = 56 / 99;
				cardView.x = i * 20;
			}			
		}
	}

	// 初始化牌组
	private initView():void
	{
		this.resetCards();
	}

	private _cardViews:Array<CardView> = [];
	// 创建牌组
	private resetCards():void
	{
		// 先移除当前组下的所有节点
		while(this.numChildren > 0)
			this.removeChildAt(0);
		this._cardViews = [];
		var num:number = 3;
		// 加入默认的牌视图
		var cardView:CardView;
		for(var i:number = 0; i < num; i++)
		{
			cardView = new CardView();
			cardView.x = i * 108;
			// cardView.width = 57; cardView.height = 79;
			this.addChild(cardView);
			this._cardViews.push(cardView);
		}
	}
}