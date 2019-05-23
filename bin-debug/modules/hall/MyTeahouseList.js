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
 * 我的茶楼列表
 */
var MyTeahouseList = (function () {
    function MyTeahouseList(ui) {
        this._isTweening = false;
        this._isShow = false;
        this._ui = ui;
        this.initView();
    }
    MyTeahouseList.prototype.initView = function () {
        this._btn = this._ui["btn"];
        this._list = this._ui["list"];
        this._list.itemRenderer = MyTeahouseTile;
        // this._listContainer = new egret.DisplayObjectContainer();
        // this._scrollView = new egret.ScrollView();
        // this._scrollView.setContent(this._listContainer);
        // this._scrollView.width = this._ui.width;
        // this._scrollView.height = 400;
        // this._ui.addChild(this._scrollView);
        // this._scrollView.horizontalScrollPolicy = "off";
        // this._scrollView.x = 10; this._scrollView.y = 18;
        this._btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap2, this);
    };
    MyTeahouseList.prototype.onTouchTap2 = function (evt) {
        if (this._isShow)
            this.hide();
        else
            this.show();
    };
    MyTeahouseList.prototype.show = function () {
        var _this = this;
        if (this._isTweening)
            return;
        this._ui.x = -270;
        egret.Tween.removeTweens(this._ui);
        this._isTweening = true;
        this._isShow = true;
        egret.Tween.get(this._ui).to({ x: 0 }, 300).call(function () {
            _this._isTweening = false;
        }, this);
        GameEventManager.addEvent(NetAction.teahouse_list2.toString(), this.onTeahouseListResponse, this);
        var data = {};
        data["msgType"] = NetAction.teahouse_list2;
        data["gameType"] = 0;
        SocketCommand.getInstance().send(data);
    };
    MyTeahouseList.prototype.onTeahouseListResponse = function (evt) {
        GameEventManager.removeEvent(NetAction.teahouse_list.toString(), this.onTeahouseListResponse, this);
        var result = evt.data;
        var data = result["data"];
        this.updateList(data);
    };
    MyTeahouseList.prototype.updateList = function (list) {
        this.dataList = new eui.ArrayCollection(list);
        this._list.dataProvider = this.dataList;
        // this._listContainer.removeChildren();
        // var len:number = list.length;
        // var tile:MyTeahouseTile;
        // for(var i:number = 0; i < len; i++)
        // {
        // 	tile = new MyTeahouseTile();
        // 	tile.setData(list[i]);
        // 	this._listContainer.addChild(tile);
        // 	tile.y = i * 83;
        // 	tile.touchEnabled = true;
        // 	tile.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        // }
        // this._scrollView.setScrollPosition(0, 0);
    };
    MyTeahouseList.prototype.onTouchTap = function (evt) {
        var tile = evt.currentTarget;
        var teahouseData = tile.data;
        var data = {};
        data["msgType"] = NetAction.teahouse_enter;
        data["gameType"] = 0;
        data["msg"] = { "teaHouseNum": teahouseData["teaHouseNum"] };
        SocketCommand.getInstance().send(data);
    };
    MyTeahouseList.prototype.hide = function () {
        var _this = this;
        if (this._isTweening)
            return;
        GameEventManager.removeEvent(NetAction.teahouse_list.toString(), this.onTeahouseListResponse, this);
        this._isShow = false;
        egret.Tween.removeTweens(this._ui);
        this._isTweening = true;
        egret.Tween.get(this._ui).to({ x: -270 }, 300).call(function () {
            _this._isTweening = false;
        }, this);
    };
    return MyTeahouseList;
}());
__reflect(MyTeahouseList.prototype, "MyTeahouseList");
var MyTeahouseTile = (function (_super) {
    __extends(MyTeahouseTile, _super);
    function MyTeahouseTile() {
        var _this = _super.call(this) || this;
        _this.skinName = "MyTeahouseListItemSkin";
        _this.name = "MyTeahouseTile";
        return _this;
    }
    MyTeahouseTile.prototype.childrenCreated = function () {
        this._faceImg = new DImage(66, 66);
        this._faceImg.x = 8;
        this._faceImg.y = 7;
        this.addChild(this._faceImg);
        if (this.data) {
            this.updateView();
        }
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
    };
    MyTeahouseTile.prototype.onTouchTapHandle = function (evt) {
        var teahouseData = this.data;
        var data = {};
        data["msgType"] = NetAction.teahouse_enter;
        data["gameType"] = 0;
        data["msg"] = { "teaHouseNum": teahouseData["teaHouseNum"] };
        SocketCommand.getInstance().send(data);
    };
    MyTeahouseTile.prototype.updateView = function () {
        var gameName = GameGlobal.getGameName(this.data["gameType"]) + "（" + this.data["teaHouseNum"] + "）";
        this.gameNameTF.text = gameName;
        this.bossTF.text = "老板：" + this.data["nickName"];
        this._faceImg.load(this.data["headImgUrl"]);
    };
    MyTeahouseTile.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        LogUtils.log("this.data = " + this.data);
        if (this.data && this.gameNameTF) {
            this.updateView();
        }
    };
    return MyTeahouseTile;
}(eui.ItemRenderer));
__reflect(MyTeahouseTile.prototype, "MyTeahouseTile");
//# sourceMappingURL=MyTeahouseList.js.map