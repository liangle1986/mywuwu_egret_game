class MallView extends IFrameBase
{
	public constructor() {
		super();
		this.init();
	}

	public show():void
	{
		// GameEventManager.addEvent(NetAction.mallList.toString(), this.onMallListResponse, this);
		
		// var data:Object = {};
		// data["msgType"] = NetAction.mallList;
		// data["gameType"] = 0;
		// SocketCommand.getInstance().send(data);


		var len:number = 12;
		var tile:MallItemTile;
		for(var i:number = 0; i < len; i++)
		{
			tile = new MallItemTile();
			// tile.setData(data[i]);
			tile.x = (i % 3) * 161;
			tile.y = Math.floor(i / 3) * 175;
			this._listContainer.addChild(tile);

			tile.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTile, this);
		}

		this._scrollView.setScrollPosition(0, 0);
		
	}

	public hide():void
	{
		GameEventManager.removeEvent(NetAction.mallList.toString(), this.onMallListResponse, this);
	}

	private onMallListResponse(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Array<any> = result["data"];

		this.updateMallList(data);
	}

	private updateMallList(data:Array<any>):void
	{
		while(this._listContainer.numChildren > 0)
			this._listContainer.removeChildAt(0);

		var len:number = data.length;
		var tile:MallItemTile;
		for(var i:number = 0; i < len; i++)
		{
			tile = new MallItemTile();
			tile.setData(data[i]);
			tile.x = (i % 3) * 161;
			tile.y = Math.floor(i / 3) * 175;
			this._listContainer.addChild(tile);

			tile.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTile, this);
		}

		this._scrollView.setScrollPosition(0, 0);
	}

	private _data:Object = null;
	private onTouchTile(evt:egret.TouchEvent):void
	{
		var tile:MallItemTile = evt.currentTarget as MallItemTile;
		this._data = tile.getData();

		GameEventManager.addEvent(NetAction.checkBind.toString(), this.onCheckBindResponse, this);
		var data:Object = {};
		data["msgType"] = NetAction.checkBind;
		data["gameType"] = 0;
		SocketCommand.getInstance().send(data);

		

	}

	private onCheckBindResponse(evt:DEvent):void
	{
		GameEventManager.removeEvent(NetAction.checkBind.toString(), this.onCheckBindResponse, this);
		GameEventManager.addEvent(NetAction.buy.toString(), this.onBuyResponse, this);
		var data:Object = {};
		data["msgType"] = NetAction.buy;
		data["gameType"] = 0;
		data["msg"] = {"productId": this._data["productId"]};
		SocketCommand.getInstance().send(data);
		// var result:Object = evt.data;
		// var data:Array<any> = result["data"];
		
		// var command:CommandVo = new CommandVo();
		// command.action = HttpCommand.unifiedOrder;
		// command.params = {"token":GameModel.instance().token, "productId": this._data["productId"]};
		// HttpCommand.send(command, this, this.unifiedOrderResponse);
	}

	private onBuyResponse(evt:DEvent):void
	{
		var result:Object = evt.data;
		var data:Object = result["data"];
		
		var payParam:string = JSON.stringify(data);
		egret.ExternalInterface.call("pay", payParam);
	}
	
	private unifiedOrderResponse(result:Object):void
	{
		var data:Object = result["data"];
		var payParam:string = JSON.stringify(data);
		egret.ExternalInterface.call("pay", payParam);
	}

	private onTouchTap(evt:egret.TouchEvent):void
	{
		GameGlobal.iframeLayer.hideIFrame2(MallView);
	}

	private _scrollView:egret.ScrollView;
	private _listContainer:egret.DisplayObjectContainer;

	protected showComplete():void
	{
		this._bg = new egret.Bitmap();
		this._bg.texture = RES.getRes("hall_json.panel_bg");
		this.addChild(this._bg);
		this._bg.scale9Grid = new egret.Rectangle(20, 66, 120, 70);
		this._bg.width = 684; this._bg.height = 431;
		this._bg.x = 266; this._bg.y = 46;

		this._titleImg = new egret.Bitmap();
		this._titleImg.texture = RES.getRes("ui_json.mall_title");
		this.addChild(this._titleImg);
		this._titleImg.x = (this._bg.width - this._titleImg.width ) >>1;
		this._titleImg.x += 266; this._titleImg.y += 46;

		var roleBg:egret.Bitmap = DUtils.createBitmapByName("role4_png");
		this.addChild(roleBg);
		// roleBg.x = -266; roleBg.y = -46;


		this._listContainer = new egret.DisplayObjectContainer();

		this._scrollView = new egret.ScrollView();
		this._scrollView.setContent(this._listContainer);
		this._scrollView.width = this.width;
		this._scrollView.height = 336;
		this.addChild(this._scrollView);
		this._scrollView.horizontalScrollPolicy = "off";
		this._scrollView.x = 166+266; this._scrollView.y = 69+46;

		this._closeBtn = new DButton("hall_json.closeBtn");
		this.addChild(this._closeBtn);
		this._closeBtn.x = 637+266; this._closeBtn.y = -16+46;

		this.iframeWidth = this._bg.width+266;
		// this.iframeHeight = this._bg.height;
		this.iframeHeight = 478;

		var bg:egret.Shape = new egret.Shape();
		bg.graphics.beginFill(0, 0.5);
		bg.graphics.drawRect(0, 0, GameGlobal.stage.stageWidth, GameGlobal.stage.stageHeight);
		bg.graphics.endFill();
		this.addChildAt(bg, 0);
		bg.x = -(GameGlobal.stage.stageWidth - this.iframeWidth) >> 1;
		bg.y = -(GameGlobal.stage.stageHeight - this.iframeHeight) >> 1;

		this._closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
	}
}
class MallItemTile extends egret.Sprite
{
	public constructor()
	public constructor()
	{
		super();

		this.initView();
	}

	public setData(data:Object):void
	{
		this._data = data;

		this._countTF.text = "房卡"+data["roomCardNum"]+"张";
		this._priceTF.text = "￥"+data["showPrice"]+"元";
	}
	private _data:Object;
	public getData():Object
	{
		return this._data;
	}

	private onTouchTap(evt:egret.TouchEvent):void
	{
		this.dispatchEvent(new DEvent("buyGoods"));
	}

	private _bg:egret.Bitmap;
	private _priceTF:egret.TextField;
	private _buyBtn:DButton;
	private _countTF:egret.TextField;

	private initView():void
	{
		this._bg = new egret.Bitmap();
		this._bg.texture = RES.getRes("hall_json.mallItemBg");
		this.addChild(this._bg);

		this._countTF = new egret.TextField();
		this._countTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		this._countTF.textColor = 0xffffff;
		this._countTF.size = 16;
		this.addChild(this._countTF);
		this._countTF.textAlign = egret.HorizontalAlign.CENTER;
		this._countTF.width = 112; 
		this._countTF.text = "房卡10张";
		this._countTF.x = 3; this._countTF.y = 3;

		this._buyBtn = new DButton("hall_json.button-yellow");
		this.addChild(this._buyBtn);
		this._buyBtn.x = 3; this._buyBtn.y = 115;

		this._priceTF = new egret.TextField();
		this._priceTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
		this._priceTF.textColor = 0xffffff;
		this._priceTF.size = 26;
		this._priceTF.bold = true;
		this.addChild(this._priceTF);
		this._priceTF.textAlign = egret.HorizontalAlign.CENTER;
		this._priceTF.width = 104; this._priceTF.height = 42;
		this._priceTF.text = "10元";
		this._priceTF.x = 3; this._priceTF.y = 123;

		this.touchChildren = false; this.touchEnabled = true;
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
		
	}
}