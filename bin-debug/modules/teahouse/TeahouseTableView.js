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
var TeahouseTableView = (function (_super) {
    __extends(TeahouseTableView, _super);
    function TeahouseTableView() {
        var _this = _super.call(this) || this;
        _this._tableCount = 8;
        _this.initView();
        return _this;
    }
    TeahouseTableView.prototype.initView = function () {
        this._tableItemHash = new HashMap();
        for (var i = 0; i < this._tableCount; i++) {
            var tableItem = new TableItem();
            this.addChild(tableItem);
            tableItem.setIndex(i + 1);
            tableItem.x = (i % 4) * 276;
            tableItem.y = Math.floor(i / 4) * 167;
            tableItem.touchEnabled = true;
            this._tableItemHash.put(i + 1, tableItem);
        }
    };
    /**
     *
     */
    TeahouseTableView.prototype.updatePlayerList = function (playerData) {
        var len = playerData.length;
        for (var i = 0; i < len; i++) {
            var tableItem = this._tableItemHash.get(i + 1);
            tableItem.updatePlayerList(playerData[i]);
        }
    };
    TeahouseTableView.prototype.onTouchTable = function (evt) {
        var item = evt.currentTarget;
        var index = item.getIndex();
        var data = {};
        data["msgType"] = NetAction.teahouse_enterTable;
        data["gameType"] = 0;
        data["msg"] = { "teaHouseNum": GameModel.instance().teaHouseNum, "tableNum": index };
        SocketCommand.getInstance().send(data);
    };
    TeahouseTableView.prototype.init = function () {
        var data = {};
        data["msgType"] = NetAction.teahouse_table_memberList;
        data["gameType"] = 0;
        data["msg"] = { "teaHouseNum": GameModel.instance().teaHouseNum };
        SocketCommand.getInstance().send(data);
    };
    return TeahouseTableView;
}(egret.DisplayObjectContainer));
__reflect(TeahouseTableView.prototype, "TeahouseTableView");
var TableItem = (function (_super) {
    __extends(TableItem, _super);
    function TableItem() {
        var _this = _super.call(this) || this;
        _this._list = [];
        _this._index = 0;
        _this._seatImgs = [];
        _this.initView();
        return _this;
    }
    /**
     *
     */
    TableItem.prototype.updatePlayerList = function (count) {
        // this._list = list;
        // var len:number = list.length;
        this._tableImg.texture = RES.getRes("teahouse_json.t_table_bg" + count);
        // this._seatImgs.forEach(function(value:any, index:any):void{
        // 	if((index+1) <= list.length)
        // 		value.visible = true;
        // }, this);
    };
    TableItem.prototype.getIndex = function () {
        return this._index;
    };
    TableItem.prototype.setIndex = function (index) {
        this._index = index;
        this._titleTF.text = index.toString();
        if (index >= 4) {
            // this._tableImg.y = 33;
            // this._seatImgs.forEach(function(value:any, index:any):void{
            // 	value.y -= 13;
            // }, this)
        }
    };
    TableItem.prototype.initView = function () {
        this._detailBtn = new DButton("teahouse_json.t_tableDetailBtn");
        this.addChild(this._detailBtn);
        this._detailBtn.x = 60;
        this._titleTF = new egret.TextField();
        this._titleTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
        this._titleTF.textColor = 0xffffff;
        this._titleTF.size = 21;
        this._titleTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this._titleTF);
        this._titleTF.x = 114;
        this._titleTF.y = 8;
        this._titleTF.text = "1";
        this._titleTF.bold = true;
        this._titleTF.width = 42;
        this._tableImg = new egret.Bitmap();
        this._tableImg.texture = RES.getRes("teahouse_json.t_table_bg0");
        this.addChild(this._tableImg);
        this._tableImg.y = 60;
        this._tableImg.touchEnabled = true;
        this._detailBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
        this._tableImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandle, this);
        // var seatImgs:Array<any> = ["t_table_bg", "seat_player_1", "seat_player_2", "seat_player_3"];
        // var seatPosArr:Array<any> = [[48, 42], [123, 80], [37, 80], [140, 45]];
        // var len:number = seatImgs.length;
        // for(var i:number = 0; i < seatImgs.length; i++)
        // {
        // 	var seatImg:egret.Bitmap = DUtils.createBitmapByName("ui_json."+seatImgs[i]);
        // 	this.addChild(seatImg);
        // 	seatImg.x = seatPosArr[i][0];
        // 	seatImg.y = seatPosArr[i][1];
        // 	seatImg.visible = false;
        // 	this._seatImgs.push(seatImg);
        // }
    };
    TableItem.prototype.onTouchTapHandle = function (evt) {
        if (evt.currentTarget == this._detailBtn)
            GameGlobal.iframeLayer.showIFrame(TeahouseTableDetailView, this._index);
        else {
            var data = {};
            data["msgType"] = NetAction.teahouse_enterTable;
            data["gameType"] = 0;
            data["msg"] = { "teaHouseNum": GameModel.instance().teaHouseNum, "tableNum": this._index };
            SocketCommand.getInstance().send(data);
        }
    };
    return TableItem;
}(egret.Sprite));
__reflect(TableItem.prototype, "TableItem");
//# sourceMappingURL=TeahouseTableView.js.map