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
 * 大厅首页排行榜
 */
var RankView = (function (_super) {
    __extends(RankView, _super);
    function RankView() {
        var _this = _super.call(this) || this;
        _this._tabIndex = -1;
        _this._tabSelectPos = [14, 152, 278];
        _this.skinName = "RankSkin";
        _this.name = "RankView";
        return _this;
    }
    RankView.prototype.childrenCreated = function () {
        this.list.itemRenderer = RankItem;
        // var testList:Array<RankVo> = [];
        // var len:number = 3;
        // for(var i:number = 0; i < len; i++)
        // {
        // 	var rankVo:RankVo = new RankVo();
        // 	rankVo.build({"headImg":"", "gold":123.44, "sex":1, "area":"xx地区"});
        // 	testList.push(rankVo);
        // }
        // this.dataList = new eui.ArrayCollection(testList);
        // this.list.dataProvider =  this.dataList;
        this.tab1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.tab2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this.tab3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        this._tabIndex = -1;
        this.showTabView(1);
    };
    RankView.prototype.show = function () {
    };
    RankView.prototype.updateList = function (data) {
        // var len:number = data.length;
        // var rankItem:RankItem;
        // for(var i:number = 0; i < len; i++)
        // {
        // 	rankItem = new RankItem();
        // 	rankItem.setData(data[i]);
        // 	rankItem.y = i * 93;
        // 	this._listContainer.addChild(rankItem);
        // }
        // this._scrollView.setScrollPosition(0, 0);
        this.dataList = new eui.ArrayCollection(data);
        this.list.dataProvider = this.dataList;
    };
    RankView.prototype.initView = function () {
        // this._listContainer = new egret.DisplayObjectContainer();
        // this._scrollView = new egret.ScrollView();
        // this._scrollView.setContent(this._listContainer);
        // this._scrollView.width = this.width;
        // this._scrollView.height = 278;
        // this.addChild(this._scrollView);
        // this._scrollView.horizontalScrollPolicy = "off";
        // this._scrollView.x = 14; this._scrollView.y = 75;
        // this._tabSelectBg = new egret.Bitmap();
        // this._tabSelectBg.texture = RES.getRes("hall_json.rankTab_select");
        // this.addChild(this._tabSelectBg);
        // this._tabSelectBg.y = 3;
        // this._tabButton = new DButton("hall_json.rankTab1");
        // this._tabButton.x = 34; this._tabButton.y = 10;
        // this.addChild(this._tabButton);
        // this._tabButton2 = new DButton("hall_json.rankTab2");
        // this._tabButton2.x = 183; this._tabButton2.y = 10;
        // this.addChild(this._tabButton2);
        // this._tabButton3 = new DButton("hall_json.rankTab3");
        // this._tabButton3.x = 324; this._tabButton3.y = 10;
        // this.addChild(this._tabButton3);
    };
    RankView.prototype.onTouchTap = function (evt) {
        var tabIndex = 1;
        switch (evt.currentTarget) {
            case this.tab1:
                break;
            case this.tab2:
                tabIndex = 2;
                break;
            case this.tab3:
                tabIndex = 3;
                break;
        }
        this.showTabView(tabIndex);
    };
    RankView.prototype.showTabView = function (tabIndex) {
        if (this._tabIndex == tabIndex)
            return;
        this._tabIndex = tabIndex;
        this.tabSelect.x = this._tabSelectPos[this._tabIndex - 1];
        if (this._tabIndex == 1) {
            GameEventManager.addEvent(NetAction.rank_tuhao.toString(), this.onRankResponse, this);
            var data = {};
            data["msgType"] = NetAction.rank_tuhao;
            SocketCommand.getInstance().send(data);
        }
        else if (this._tabIndex == 2) {
            GameEventManager.addEvent(NetAction.rank_paishen.toString(), this.onRankResponse, this);
            var data = {};
            data["msgType"] = NetAction.rank_paishen;
            SocketCommand.getInstance().send(data);
        }
        else {
            GameEventManager.addEvent(NetAction.rank_opened.toString(), this.onRankResponse, this);
            var data = {};
            data["msgType"] = NetAction.rank_opened;
            SocketCommand.getInstance().send(data);
        }
    };
    RankView.prototype.onRankResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        this.updateList(data);
    };
    return RankView;
}(eui.Component));
__reflect(RankView.prototype, "RankView");
var RankItem = (function (_super) {
    __extends(RankItem, _super);
    function RankItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "RankItemSkin";
        return _this;
        // this.initView();
    }
    RankItem.prototype.childrenCreated = function () {
    };
    RankItem.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        LogUtils.log("this.data = " + this.data);
        this.updateView();
    };
    RankItem.prototype.updateView = function () {
    };
    return RankItem;
}(eui.ItemRenderer));
__reflect(RankItem.prototype, "RankItem");
//# sourceMappingURL=RankView.js.map