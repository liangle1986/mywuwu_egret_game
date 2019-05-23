var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 聊天界面
 */
var NN_ChatView = (function (_super) {
    __extends(NN_ChatView, _super);
    function NN_ChatView() {
        var _this = _super.call(this) || this;
        _this._textConfig = [
            ["chat_kjBtn", 1], ["chat_zsBtn", 2], ["chat_wnBtn", 3], ["chat_syBtn", 4],
            ["chat_ccBtn", 5], ["chat_hhBtn", 6], ["chat_dyBtn", 7], ["chat_jjBtn", 8], ["chat_zjBtn", 9],
            ["chat_tkBtn", 10]
        ];
        _this._currentTab = -1;
        _this.skinName = "ChatSkin";
        _this.name = "ChatView";
        return _this;
    }
    NN_ChatView.prototype.childrenCreated = function () {
    };
    /**
     * 子类如果有bindButton, click事件覆盖次方法实现
     */
    NN_ChatView.prototype.touchBindButtonHandler = function (clickTarget) {
        _super.prototype.touchBindButtonHandler.call(this, clickTarget);
        if (clickTarget == this.tab1) {
            this.showTab(1);
        }
        else if (clickTarget == this.tab2) {
            this.showTab(2);
        }
        else if (clickTarget == this.sendBtn) {
            var msg = this.inputTF.text.trim();
            if (msg == "") {
                AlertView.getInstance().show("请输入聊天内容！", AlertView.ALERT_MODE);
                return;
            }
            var data = {};
            data["msgType"] = NetAction.chatMsg;
            data["msg"] = { "chatType": 1, "chatMsg": msg };
            SocketCommand.getInstance().send(data);
            this.close();
        }
    };
    NN_ChatView.prototype.createComplete = function (event) {
        var _this = this;
        _super.prototype.createComplete.call(this, event);
        this.list.itemRenderer = NN_ChatEmotionItem;
        this.dataList = new eui.ArrayCollection(NN_ChatView.emotionConfig);
        this.list.dataProvider = this.dataList;
        this.list2.itemRenderer = NN_QuickChatItem;
        if (GameGlobal.gameType == GameGlobal.ZJH_TYPE)
            this.dataList2 = new eui.ArrayCollection(NN_ChatView.WORDS2);
        else
            this.dataList2 = new eui.ArrayCollection(NN_ChatView.WORDS);
        this.list2.dataProvider = this.dataList2;
        this.inputTF.type = egret.TextFieldType.INPUT;
        this.inputTF.addEventListener(egret.TouchEvent.FOCUS_IN, function () {
            if (_this.inputTF.text == "请输入聊天内容...") {
                _this.inputTF.text = "";
            }
        }, this);
        this.inputTF.addEventListener(egret.TouchEvent.FOCUS_OUT, function () {
            if (_this.inputTF.text == "") {
                _this.inputTF.text = "请输入聊天内容...";
            }
        }, this);
    };
    NN_ChatView.prototype.show = function () {
        this._currentTab = -1;
        this.showTab(1);
        this.bindButton(this.sendBtn);
        this.bindButton(this.tab1);
        this.bindButton(this.tab2);
    };
    NN_ChatView.prototype.showTab = function (index) {
        if (this._currentTab == index)
            return;
        this._currentTab = index;
        if (this._currentTab == 1) {
            this.tab1.texture = RES.getRes("common_json.chatTab2_select");
            this.tab2.texture = RES.getRes("common_json.chatTab1");
            this.tabContainer1.visible = true;
            this.tabContainer2.visible = false;
        }
        else {
            this.tab1.texture = RES.getRes("common_json.chatTab2");
            this.tab2.texture = RES.getRes("common_json.chatTab1_select");
            this.tabContainer1.visible = false;
            this.tabContainer2.visible = true;
        }
    };
    // public static WORDS:Array<any> = [
    // 	"你的牌打的也太好了！", "和你合作真是太愉快了！", "风水轮流转，底裤都输光了", "快点下注吧，等下就没机会了",
    // 	"快点啊，等到花儿都谢了", "呵呵", "看我通杀全场", "你这样，以后没朋友", "我是庄家，谁敢挑战我", "牌亮出来，绝对吓死你"
    // ];
    NN_ChatView.WORDS2 = [
        "别看牌，俺们闷到底", "不要偷鸡，俺的牌很大", "青山不改，绿水长流，后会有期", "不要走，决战到天亮",
        "冲动是魔鬼，冷静"
    ];
    NN_ChatView.WORDS = [
        "初来乍到，请大家手下留情", "别拼啦，没牛就是没牛", "快点吧，花开花谢好几回啦", "底裤都要输光啦",
        "我先走啦，后会有期"
    ];
    NN_ChatView.emotionConfig = [
        ["bq1", 1],
        ["bq2", 2],
        ["bq3", 3],
        ["bq4", 4],
        ["bq5", 5], ["bq6", 6], ["bq7", 7], ["bq8", 8], ["bq9", 9],
        ["bq10", 10], ["bq11", 11], ["bq12", 12], ["bq13", 13], ["bq14", 14], ["bq15", 15]
    ];
    return NN_ChatView;
}(IFrameBase));
__reflect(NN_ChatView.prototype, "NN_ChatView");
var NN_ChatEmotionItem = (function (_super) {
    __extends(NN_ChatEmotionItem, _super);
    function NN_ChatEmotionItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "ChatEmotionItemSkin";
        _this.name = "NN_ChatEmotionItem";
        return _this;
    }
    NN_ChatEmotionItem.prototype.childrenCreated = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
    };
    NN_ChatEmotionItem.prototype.onTouchTapHandle = function (evt) {
        var msg = this.data[0];
        var data = {};
        data["msgType"] = NetAction.chatMsg;
        data["msg"] = { "chatType": 2, "chatMsg": msg };
        SocketCommand.getInstance().send(data);
        GameGlobal.iframeLayer.hideIFrame2(NN_ChatView);
    };
    NN_ChatEmotionItem.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        // LogUtils.log("this.data = " + this.data);
        this.updateView();
    };
    NN_ChatEmotionItem.prototype.updateView = function () {
        if (this.data != null) {
            this.bq.texture = RES.getRes("emotion_json." + this.data[0]);
        }
    };
    return NN_ChatEmotionItem;
}(eui.ItemRenderer));
__reflect(NN_ChatEmotionItem.prototype, "NN_ChatEmotionItem");
var NN_QuickChatItem = (function (_super) {
    __extends(NN_QuickChatItem, _super);
    function NN_QuickChatItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "ChatTextItemSkin";
        _this.name = "NN_QuickChatItem";
        return _this;
    }
    NN_QuickChatItem.prototype.childrenCreated = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
    };
    NN_QuickChatItem.prototype.onTouchTapHandle = function (evt) {
        var msg = this.data;
        var data = {};
        data["msgType"] = NetAction.chatMsg;
        data["msg"] = { "chatType": 3, "chatMsg": msg };
        SocketCommand.getInstance().send(data);
        GameGlobal.iframeLayer.hideIFrame2(NN_ChatView);
    };
    NN_QuickChatItem.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        LogUtils.log("this.data = " + this.data);
        this.updateView();
    };
    NN_QuickChatItem.prototype.updateView = function () {
        if (this.data != null) {
            this.titleTF.text = this.data;
        }
    };
    return NN_QuickChatItem;
}(eui.ItemRenderer));
__reflect(NN_QuickChatItem.prototype, "NN_QuickChatItem");
//# sourceMappingURL=NN_ChatView.js.map