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
 * 茶楼战绩
 */
var TeahouseScoreView = (function (_super) {
    __extends(TeahouseScoreView, _super);
    function TeahouseScoreView() {
        var _this = _super.call(this) || this;
        _this._tabIndex = -1;
        _this.skinName = "TeahouseZhanjiSkin";
        return _this;
    }
    TeahouseScoreView.prototype.show = function () {
        this.bindButton(this.tab1);
        this.bindButton(this.tab2);
        this._tabIndex = -1;
        this.showTabView(1);
    };
    TeahouseScoreView.prototype.childrenCreated = function () {
        this.list.itemRenderer = TeahouseScoreTile;
    };
    TeahouseScoreView.prototype.showTabView = function (tabIndex) {
        if (tabIndex == this._tabIndex)
            return;
        this._tabIndex = tabIndex;
        if (this._tabIndex == 1) {
            this.tab1.texture = RES.getRes("teahouse_json.t_zhanjiTab1_select");
            this.tab2.texture = RES.getRes("teahouse_json.t_zhanjiTab2_default");
            GameEventManager.addEvent(NetAction.teahouse_myScoreList.toString(), this.onTeahouseMyScoreListResponse, this);
            var data = {};
            data["msgType"] = NetAction.teahouse_myScoreList;
            data["gameType"] = 0;
            SocketCommand.getInstance().send(data);
        }
        else {
            this.tab1.texture = RES.getRes("teahouse_json.t_zhanjiTab1_default");
            this.tab2.texture = RES.getRes("teahouse_json.t_zhanjiTab2_select");
            GameEventManager.addEvent(NetAction.teahouse_scoreList.toString(), this.onTeahouseScoreListResponse, this);
            var data = {};
            data["msgType"] = NetAction.teahouse_scoreList;
            data["gameType"] = 0;
            SocketCommand.getInstance().send(data);
        }
    };
    TeahouseScoreView.prototype.onTeahouseMyScoreListResponse = function (evt) {
        GameEventManager.removeEvent(NetAction.teahouse_myScoreList.toString(), this.onTeahouseMyScoreListResponse, this);
        var result = evt.data;
        var data = result["data"];
        // var len:number = data.length;
        // var tile:TeahouseScoreTile;
        // for(var i:number = 0; i < len; i++)
        // {
        // 	tile = new TeahouseScoreTile();
        // 	tile.setData(data[i]);
        // 	tile.y = 88 * i;
        // 	this._listContainer.addChild(tile);
        // }
        data.forEach(function (value, index) {
            data[index]["rank"] = index + 1;
        }, this);
        // this._scrollView.setScrollPosition(0, 0);
        this.dataList = new eui.ArrayCollection(data);
        this.list.dataProvider = this.dataList;
    };
    TeahouseScoreView.prototype.onTeahouseScoreListResponse = function (evt) {
        GameEventManager.removeEvent(NetAction.teahouse_scoreList.toString(), this.onTeahouseScoreListResponse, this);
        var result = evt.data;
        var data = result["data"];
        data.forEach(function (value, index) {
            data[index]["rank"] = index + 1;
        }, this);
        this.dataList = new eui.ArrayCollection(data);
        this.list.dataProvider = this.dataList;
    };
    TeahouseScoreView.prototype.touchBindButtonHandler = function (clickTarget) {
        _super.prototype.touchBindButtonHandler.call(this, clickTarget);
        if (clickTarget == this.tab1) {
            this.showTabView(1);
        }
        else if (clickTarget == this.tab2) {
            this.showTabView(2);
        }
    };
    return TeahouseScoreView;
}(IFrameBase));
__reflect(TeahouseScoreView.prototype, "TeahouseScoreView");
var TeahouseScoreTile = (function (_super) {
    __extends(TeahouseScoreTile, _super);
    function TeahouseScoreTile() {
        var _this = _super.call(this) || this;
        _this.skinName = "TeahouseZhanjiTileSkin";
        return _this;
    }
    TeahouseScoreTile.prototype.childrenCreated = function () {
    };
    TeahouseScoreTile.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        LogUtils.log("this.data = " + this.data);
        this.updateView();
    };
    TeahouseScoreTile.prototype.updateView = function () {
        var roomId = this.data["roomId"];
        this.roomNumTF.text = "房间号：" + roomId.toString();
        var createTime = this.data["createTime"];
        var date = new Date(createTime);
        var createTimeStr = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("/");
        createTimeStr += " " + date.toTimeString().substr(0, 8);
        ;
        this.timeTF.text = createTimeStr;
        this.rankTF.text = this.data["rank"];
        var recordList = this.data["recordList"];
        // var len:number = recordList.length;
        // var recordStr:string  ="";
        // for(var i:number = 0; i < len; i++)
        // {
        // 	recordStr += recordList[i].nickName+" "+recordList[i].score+"\n";
        // }
        var recordList = this.data["recordList"];
        var len = recordList.length;
        this.detailTF.text = "";
        var recordStr = "";
        for (var i = 0; i < len; i++) {
            var score = recordList[i].score;
            var scoreStr = score > 0 ? "+" + score : score.toString();
            if ((i + 1) % 2 == 0)
                recordStr = recordStr + (recordList[i].nickName + "  " + scoreStr + "    ") + "\n";
            else
                recordStr = recordStr + (recordList[i].nickName + "  " + scoreStr + "    ");
        }
        this.detailTF.text = recordStr;
    };
    return TeahouseScoreTile;
}(eui.ItemRenderer));
__reflect(TeahouseScoreTile.prototype, "TeahouseScoreTile");
//# sourceMappingURL=TeahouseScoreView.js.map