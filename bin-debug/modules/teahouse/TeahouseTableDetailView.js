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
var TeahouseTableDetailView = (function (_super) {
    __extends(TeahouseTableDetailView, _super);
    function TeahouseTableDetailView() {
        var _this = _super.call(this) || this;
        _this.skinName = "TeahouseTableDetailSkin";
        _this.name = "TeahouseTableDetailView";
        return _this;
    }
    TeahouseTableDetailView.prototype.setData = function (data) {
        // this.dataList = new eui.ArrayCollection(data);
        // this.list.dataProvider =  this.dataList;
    };
    TeahouseTableDetailView.prototype.childrenCreated = function () {
        // this.iframeWidth = this.width;
        // this.iframeHeight = this.height;
        //this.childrenCreated();
        //this._bg.visible = false;
    };
    TeahouseTableDetailView.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        GameEventManager.removeEvent(NetAction.teahouse_table_memberList2.toString(), this.onTableMemberList2, this);
    };
    TeahouseTableDetailView.prototype.onTableMemberList2 = function (evt) {
        GameEventManager.removeEvent(NetAction.teahouse_table_memberList2.toString(), this.onTableMemberList2, this);
        var result = evt.data;
        var data = result["data"];
        this.dataList = new eui.ArrayCollection(data);
        this.list.dataProvider = this.dataList;
    };
    TeahouseTableDetailView.prototype.tweenShow = function () {
        _super.prototype.tweenShow.call(this);
        if (this.uiOpenData != null) {
            this.setData(this.uiOpenData);
        }
        GameEventManager.addEvent(NetAction.teahouse_table_memberList2.toString(), this.onTableMemberList2, this);
        var data = {};
        data["msgType"] = NetAction.teahouse_table_memberList2;
        data["gameType"] = 0;
        data["msg"] = { "teaHouseNum": GameModel.instance().teaHouseNum, "tableNum": this.uiOpenData };
        SocketCommand.getInstance().send(data);
    };
    TeahouseTableDetailView.prototype.createComplete = function (event) {
        _super.prototype.createComplete.call(this, event);
        this.list.itemRenderer = TeahouseTableDetailItem;
    };
    return TeahouseTableDetailView;
}(IFrameBase));
__reflect(TeahouseTableDetailView.prototype, "TeahouseTableDetailView");
var TeahouseTableDetailItem = (function (_super) {
    __extends(TeahouseTableDetailItem, _super);
    function TeahouseTableDetailItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "TeahouseTableDetailItemSkin";
        return _this;
    }
    TeahouseTableDetailItem.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        LogUtils.log("this.data = " + this.data);
        this.updateView();
    };
    TeahouseTableDetailItem.prototype.updateView = function () {
        if (this.data != null) {
            this.nickNameTF.text = this.data["nickName"];
            this.idTF.text = this.data["playerId"];
            this.ipTF.text = this.data["ip"];
        }
    };
    return TeahouseTableDetailItem;
}(eui.ItemRenderer));
__reflect(TeahouseTableDetailItem.prototype, "TeahouseTableDetailItem");
//# sourceMappingURL=TeahouseTableDetailView.js.map