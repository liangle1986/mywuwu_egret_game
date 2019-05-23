/**
 * 聊天界面
 */
class NN_ChatView extends IFrameBase
{
	public constructor() {
		super();

		this.skinName = "ChatSkin";
		this.name = "ChatView";
	}

	public childrenCreated():void
	{
		
	}

	/**
	 * 子类如果有bindButton, click事件覆盖次方法实现
	 */
	protected touchBindButtonHandler(clickTarget: egret.DisplayObject): void 
	{
		super.touchBindButtonHandler(clickTarget);

		if(clickTarget == this.tab1)
		{
			this.showTab(1);
		}
		else if(clickTarget == this.tab2)
		{
			this.showTab(2);
		}
		else if(clickTarget == this.sendBtn)
		{
			var msg:string = this.inputTF.text.trim();
			if(msg == "")
			{
				AlertView.getInstance().show("请输入聊天内容！",AlertView.ALERT_MODE);
				return;
			}
			var data:Object = {};
			data["msgType"] = NetAction.chatMsg;
			data["msg"] = {"chatType":1, "chatMsg":msg};
			SocketCommand.getInstance().send(data);

			this.close();
		}
	}

	public createComplete(event: egret.Event): void 
	{
		super.createComplete(event);

		this.list.itemRenderer = NN_ChatEmotionItem;
		this.dataList = new eui.ArrayCollection(NN_ChatView.emotionConfig);
		this.list.dataProvider =  this.dataList;

		this.list2.itemRenderer = NN_QuickChatItem;
		if(GameGlobal.gameType == GameGlobal.ZJH_TYPE)
			this.dataList2 = new eui.ArrayCollection(NN_ChatView.WORDS2);
		else
			this.dataList2 = new eui.ArrayCollection(NN_ChatView.WORDS);
		this.list2.dataProvider =  this.dataList2;

		this.inputTF.type = egret.TextFieldType.INPUT;
		this.inputTF.addEventListener(egret.TouchEvent.FOCUS_IN, ()=>{

			if(this.inputTF.text == "请输入聊天内容...")
			{
				this.inputTF.text = "";
			}

		}, this);
		this.inputTF.addEventListener(egret.TouchEvent.FOCUS_OUT, ()=>{
			if(this.inputTF.text == "")
			{
				this.inputTF.text = "请输入聊天内容...";
			}
		}, this);
	}

	// private static _instance:NN_ChatView = null;
	// public static getInstance():NN_ChatView
	// {
	// 	if(NN_ChatView._instance == null)
	// 		NN_ChatView._instance = new NN_ChatView();
	// 	return NN_ChatView._instance;
	// }
	private tab1:eui.Image;
	private tab2:eui.Image;

	public list:eui.List;
	public dataList:eui.ArrayCollection;//数据集

	public list2:eui.List;
	public dataList2:eui.ArrayCollection;//数据集

	public show():void
	{
		this._currentTab = -1;
		this.showTab(1);

		this.bindButton(this.sendBtn);
		this.bindButton(this.tab1);
		this.bindButton(this.tab2);

	}

	
	private sendBtn:eui.Button;
	private inputTF:eui.Label;
	private tabContainer1:eui.Scroller;
	private tabContainer2:eui.Scroller;

	private _textConfig:Array<any> = [

		["chat_kjBtn", 1], ["chat_zsBtn", 2], ["chat_wnBtn", 3], ["chat_syBtn", 4],
		["chat_ccBtn", 5], ["chat_hhBtn", 6], ["chat_dyBtn", 7], ["chat_jjBtn", 8], ["chat_zjBtn", 9],
		["chat_tkBtn", 10]

	];

	// public static WORDS:Array<any> = [

	// 	"你的牌打的也太好了！", "和你合作真是太愉快了！", "风水轮流转，底裤都输光了", "快点下注吧，等下就没机会了",
	// 	"快点啊，等到花儿都谢了", "呵呵", "看我通杀全场", "你这样，以后没朋友", "我是庄家，谁敢挑战我", "牌亮出来，绝对吓死你"

	// ];
	public static WORDS2:Array<any> = [

		"别看牌，俺们闷到底", "不要偷鸡，俺的牌很大", "青山不改，绿水长流，后会有期", "不要走，决战到天亮",
		"冲动是魔鬼，冷静"

	];
	public static WORDS:Array<any> = [

		"初来乍到，请大家手下留情", "别拼啦，没牛就是没牛", "快点吧，花开花谢好几回啦", "底裤都要输光啦",
		"我先走啦，后会有期"

	];

	public static emotionConfig:Array<any> = [

		["bq1", 1],
		 ["bq2", 2],
		  ["bq3", 3],
		   ["bq4", 4],
		["bq5", 5], ["bq6", 6], ["bq7", 7], ["bq8", 8], ["bq9", 9],
		["bq10", 10], ["bq11", 11], ["bq12", 12],["bq13", 13], ["bq14", 14], ["bq15", 15]
	];

	private _currentTab:number = -1;
	private showTab(index:number):void
	{
		if(this._currentTab == index) return;

		this._currentTab = index;
		if(this._currentTab == 1)
		{
			this.tab1.texture = RES.getRes("common_json.chatTab2_select");
			this.tab2.texture = RES.getRes("common_json.chatTab1");

			this.tabContainer1.visible = true; this.tabContainer2.visible = false;
		}
		else
		{
			this.tab1.texture = RES.getRes("common_json.chatTab2");
			this.tab2.texture = RES.getRes("common_json.chatTab1_select");

			this.tabContainer1.visible = false; this.tabContainer2.visible = true;
		}
	}

	// private onTouchTap(evt:egret.TouchEvent):void
	// {
	// 	if(evt.currentTarget == this._tab)
	// 	{
	// 		this.showTab(1);
	// 	}
	// 	else if(evt.currentTarget == this._tab2)
	// 	{
	// 		this.showTab(2);
	// 	}
	// 	else if(evt.currentTarget == this._submitBtn)
	// 	{
	// 		var msg:string = this._inputTF.text.trim();
	// 		if(msg == "")
	// 		{
	// 			AlertView.getInstance().show("请输入聊天内容！",AlertView.ALERT_MODE);
	// 			return;
	// 		}
	// 		var data:Object = {};
	// 		data["msgType"] = NetAction.chatMsg;
	// 		data["msg"] = {"chatType":1, "chatMsg":msg};
	// 		SocketCommand.getInstance().send(data);

	// 		this.hide();
	// 	}
	// }

	// private initView():void
	// {
	// 	this.touchEnabled = true;
	// 	this._bg = new egret.Bitmap();
	// 	this._bg.texture = RES.getRes("chatBg_png");
	// 	this.addChild(this._bg);

	// 	this._tab = new egret.Bitmap();
	// 	this._tab.texture = RES.getRes("nnGame_json.quickChatTab");
	// 	this.addChild(this._tab);

	// 	this._tab2 = new egret.Bitmap();
	// 	this._tab2.texture = RES.getRes("nnGame_json.emotionTab");
	// 	this.addChild(this._tab2);

	// 	this._tab.touchEnabled = this._tab2.touchEnabled = true;
	// 	this._tab.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
	// 	this._tab2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);

	// 	// this._tabText = new egret.Bitmap();
	// 	// this._tabText.texture = RES.getRes("game_json.fayan-text");
	// 	// this.addChild(this._tabText);
		
	// 	// this._tabText2 = new egret.Bitmap();
	// 	// this._tabText2.texture = RES.getRes("game_json.biaoqing-text");
	// 	// this.addChild(this._tabText2);

	// 	this._inputBg = new egret.Bitmap();
	// 	this._inputBg.texture = RES.getRes("nnGame_json.chatInputBg");
	// 	this.addChild(this._inputBg);

	// 	this._inputTF = new egret.TextField();
	// 	this._inputTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
	// 	this._inputTF.type = egret.TextFieldType.INPUT;
	// 	this._inputTF.textColor = 0x734111;
	// 	this._inputTF.size = 20;
	// 	this._inputTF.textAlign = egret.HorizontalAlign.LEFT;
	// 	this._inputTF.width = 306;
	// 	this.addChild(this._inputTF);
	// 	this._inputTF.x = 29; this._inputTF.y = 318;
	// 	// this._inputTF.border = true;

	// 	this._submitBtn = new DButton("nnGame_json.sendBtn");
	// 	this.addChild(this._submitBtn);

	// 	this._textContainer = new egret.DisplayObjectContainer();
	// 	this.addChild(this._textContainer);
	// 	this._textContainer.x = 22; this._textContainer.y = 82;

	// 	this._emotionContainer = new egret.DisplayObjectContainer();
	// 	this.addChild(this._emotionContainer);
	// 	this._emotionContainer.x = 31; this._emotionContainer.y = 94;

	// 	this._tab.x = 43; this._tab.y = 12;
	// 	this._tab2.x = 232; this._tab2.y = 12;
		
	// 	this._inputBg.x = 22; this._inputBg.y = 310;
	// 	this._submitBtn.x = 346; this._submitBtn.y = 316;

	// 	var len:number = ChatView.WORDS.length;
	// 	for(var i:number = 0; i < len; i++)
	// 	{
	// 		var chatItem:NN_QuickChatItem = new NN_QuickChatItem();
	// 		chatItem.setData(ChatView.WORDS[i]);
	// 		chatItem.y = i * 46;
	// 		this._textContainer.addChild(chatItem);
	// 		chatItem.touchEnabled = true;
	// 		chatItem.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchText, this);
	// 	}

	// 	len = ChatView.emotionConfig.length;
	// 	for(var i:number = 0; i < len; i++)
	// 	{
	// 		var emotionButton:DButton = new DButton("emotion_json."+ChatView.emotionConfig[i][0]);
	// 		this._emotionContainer.addChild(emotionButton);
	// 		emotionButton.x = 84 * (i % 5);
	// 		emotionButton.y = 88 * Math.floor(i / 5);
	// 		emotionButton["id"] = ChatView.emotionConfig[i][0];
	// 		emotionButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchEmotion, this);

	// 	}
	// 	this._emotionContainer.visible = false;
	// 	this._submitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
	// }

	// private onTouchText(evt:egret.TouchEvent):void
	// {
	// 	var button:NN_QuickChatItem = evt.currentTarget as NN_QuickChatItem;
	// 	var msg:string = button.getData();//ChatView.WORDS[button["id"] - 1];

	// 	var data:Object = {};
	// 	data["msgType"] = NetAction.chatMsg;
	// 	data["msg"] = {"chatType":3, "chatMsg":msg};
	// 	SocketCommand.getInstance().send(data);

	// 	this.hide();
	// }

	// private onTouchEmotion(evt:egret.TouchEvent):void
	// {
	// 	var button:DButton = evt.currentTarget as DButton;
	// 	var msg:string = button["id"];
		
	// 	var data:Object = {};
	// 	data["msgType"] = NetAction.chatMsg;
	// 	data["msg"] = {"chatType":2, "chatMsg":msg};
	// 	SocketCommand.getInstance().send(data);

	// 	this.hide();
	// }
}
class NN_ChatEmotionItem extends eui.ItemRenderer
{
	public constructor()
	{
		super();

		this.skinName = "ChatEmotionItemSkin";
		this.name = "NN_ChatEmotionItem";
	}

	protected childrenCreated():void
	{
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
	}

	private onTouchTapHandle(evt:egret.TouchEvent):void
	{
		var msg:string = this.data[0];
		var data:Object = {};
		data["msgType"] = NetAction.chatMsg;
		data["msg"] = {"chatType":2, "chatMsg":msg};
		SocketCommand.getInstance().send(data);

		GameGlobal.iframeLayer.hideIFrame2(NN_ChatView);
	}

	private bq:eui.Image;

	protected dataChanged(): void 
	{
		super.dataChanged();

		// LogUtils.log("this.data = " + this.data);

		this.updateView();
	}

	private updateView():void
	{
		if(this.data != null)
		{
			this.bq.texture = RES.getRes("emotion_json."+this.data[0]);
		}
	}
}
class NN_QuickChatItem extends eui.ItemRenderer
{
	public constructor()
	{
		super();

		this.skinName = "ChatTextItemSkin";
		this.name = "NN_QuickChatItem";
	}

	

	private titleTF:eui.Label;
	protected childrenCreated():void
	{
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
	}

	private onTouchTapHandle(evt:egret.TouchEvent):void
	{
		var msg:string = this.data;

		var data:Object = {};
		data["msgType"] = NetAction.chatMsg;
		data["msg"] = {"chatType":3, "chatMsg":msg};
		SocketCommand.getInstance().send(data);

		GameGlobal.iframeLayer.hideIFrame2(NN_ChatView);
	}

	protected dataChanged(): void 
	{
		super.dataChanged();

		LogUtils.log("this.data = " + this.data);

		this.updateView();
	}

	private updateView():void
	{
		if(this.data != null)
		{
			this.titleTF.text = this.data;
		}
	}
}
