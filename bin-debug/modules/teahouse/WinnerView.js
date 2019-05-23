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
 * 大赢家
 */
var WinnerView = (function (_super) {
    __extends(WinnerView, _super);
    function WinnerView() {
        var _this = _super.call(this) || this;
        _this.skinName = "TeahouseWinnerSkin";
        return _this;
    }
    WinnerView.prototype.childrenCreated = function () {
    };
    /*该模块被创建完成后的回调函数*/
    WinnerView.prototype.createComplete = function (event) {
        _super.prototype.createComplete.call(this, event);
        this.list.itemRenderer = WinnerTile;
    };
    WinnerView.prototype.onWinListResponse = function (evt) {
        var result = evt.data;
        var data = result["data"];
        this.dataList = new eui.ArrayCollection(data);
        this.list.dataProvider = this.dataList;
        // this._listContainer.removeChildren();
        // var len:number = data.length;
        // var tile:WinnerTile;
        // for(var i:number = 0; i < len; i++)
        // {
        // 	tile = new WinnerTile();
        // 	tile.setData(data[i], i+1);
        // 	tile.y = i * 100;
        // 	this._listContainer.addChild(tile);
        // }
        // this._scrollView.setScrollPosition(0, 0);
    };
    WinnerView.prototype.dispose = function () {
        GameEventManager.removeEvent(NetAction.teahouse_winList.toString(), this.onWinListResponse, this);
    };
    WinnerView.prototype.show = function () {
        GameEventManager.addEvent(NetAction.teahouse_winList.toString(), this.onWinListResponse, this);
        var data = {};
        data["msgType"] = NetAction.teahouse_winList;
        data["gameType"] = 0;
        data["msg"] = { "teaHouseNum": GameModel.instance().teaHouseNum };
        SocketCommand.getInstance().send(data);
    };
    WinnerView.prototype.touchBindButtonHandler = function (clickTarget) {
        _super.prototype.touchBindButtonHandler.call(this, clickTarget);
        if (clickTarget == this.clearAllBtn) {
            this.dataList = new eui.ArrayCollection([]);
            this.list.dataProvider = this.dataList;
        }
    };
    return WinnerView;
}(IFrameBase));
__reflect(WinnerView.prototype, "WinnerView");
var WinnerTile = (function (_super) {
    __extends(WinnerTile, _super);
    function WinnerTile() {
        var _this = _super.call(this) || this;
        _this.skinName = "TeahouseWinnerItemSkin";
        return _this;
    }
    WinnerTile.prototype.childrenCreated = function () {
        this._faceImg = new DImage(52, 52);
        this._faceImg.x = 11;
        this._faceImg.y = 2;
        this.addChild(this._faceImg);
    };
    WinnerTile.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        LogUtils.log("this.data = " + this.data);
        this.updateView();
    };
    WinnerTile.prototype.updateView = function () {
        this.winCountTF.text = this.data["winCount"];
        this.nickNameTF.text = this.data["nickName"];
        this.idTF.text = this.data["playerId"];
        this._faceImg.load(this.data["headImgUrl"]);
    };
    return WinnerTile;
}(eui.ItemRenderer));
__reflect(WinnerTile.prototype, "WinnerTile");
//# sourceMappingURL=WinnerView.js.map