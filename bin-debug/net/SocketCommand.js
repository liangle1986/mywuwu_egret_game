var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * socket网络通信
 * @author daylyn
 */
var SocketCommand = (function () {
    function SocketCommand() {
        this._reConnectTime = -1;
        this._isConnected = false;
        this._isReconnect = false;
        this._lockReconnect = false; //避免重复连接
        this._hearBeatTime = -1;
    }
    SocketCommand.getInstance = function () {
        return this._instance || (this._instance = new SocketCommand());
    };
    SocketCommand.prototype.onHearBeatTimer = function () {
        var _this = this;
        var data = {};
        data["msgType"] = NetAction.hearBeat;
        data["gameType"] = 0;
        SocketCommand.getInstance().send(data);
        egret.clearTimeout(this._reConnectTime);
        this._reConnectTime = egret.setTimeout(function () {
            egret.clearTimeout(_this._reConnectTime);
            _this._socket.close();
        }, this, 6000);
    };
    Object.defineProperty(SocketCommand.prototype, "isConnected", {
        get: function () { return this._isConnected; },
        enumerable: true,
        configurable: true
    });
    SocketCommand.prototype.connect = function () {
        if (this._socket) {
            this._socket.removeEventListener(egret.Event.CONNECT, this.onSocketConnected, this);
            this._socket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onSocketData, this);
            this._socket.removeEventListener(egret.Event.CLOSE, this.onSocketClosed, this);
            this._socket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketIOError, this);
        }
        this._socket = new egret.WebSocket();
        this._socket.addEventListener(egret.Event.CONNECT, this.onSocketConnected, this);
        this._socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onSocketData, this);
        this._socket.addEventListener(egret.Event.CLOSE, this.onSocketClosed, this);
        this._socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketIOError, this);
        var socket_ip = GameGlobal.SOCKET_IP;
        var socket_port = GameGlobal.SOCKET_PORT;
        // //测试切换
        // if (true) {
        // 	socket_ip = 'ws://127.0.0.1';
        // 	socket_port = 8081;
        // }
        // this._socket.connectByUrl(socket_ip + ":" + socket_port + "/mywuwu/websocket/"+  GameModel.instance().token);
        this._socket.connect('127.0.0.1', 8083);
    };
    SocketCommand.prototype.onSocketIOError = function (evt) {
        this.onSocketClosed(null);
    };
    /**
     * 发送数据
     */
    SocketCommand.prototype.send = function (data) {
        if (!this.isConnected)
            return;
        data["token"] = GameModel.instance().token;
        if (data["gameType"] == undefined || data["gameType"] == null)
            data["gameType"] = GameGlobal.gameType;
        LogUtils.log("send socket message::" + JSON.stringify(data));
        var message = JSON.stringify(data);
        this._socket.writeUTF(message);
    };
    SocketCommand.prototype.onSocketConnected = function (evt) {
        this._isConnected = true;
        egret.clearTimeout(this._reConnectTime);
        egret.clearTimeout(this._hearBeatTime);
        this._hearBeatTime = egret.setTimeout(this.onHearBeatTimer, this, 10000);
        GameEventManager.dispatchEvent(GameEventManager.SOCKET_CONNECTED);
    };
    // 接收数据
    SocketCommand.prototype.onSocketData = function (evt) {
        DataLoading.getInstance().hide();
        var msg = this._socket.readUTF();
        LogUtils.log("receive socket message::" + msg);
        var obj = JSON.parse(msg);
        var code = obj["code"];
        if (obj.hasOwnProperty("gameType") && (obj["gameType"] != null)) {
            var gameType = obj["gameType"];
            if (gameType != 0)
                GameGlobal.gameType = gameType;
        }
        // 设置类型
        if (obj["data"] && obj["data"].hasOwnProperty("gameType") && (obj["data"]["gameType"] != null)) {
            var gameType = obj["data"]["gameType"];
            if (gameType != 0)
                GameGlobal.gameType = gameType;
        }
        // 如code为0说明返回正确
        if (code == NetAction.NORMAL) {
            GameEventManager.dispatchEvent(obj["msgType"].toString(), obj);
        }
        else {
            console.log(obj["desc"], '111111111111111111111111111111');
            // 弹出框
            AlertView.getInstance().show(obj["desc"]);
        }
        egret.clearTimeout(this._reConnectTime);
        egret.clearTimeout(this._hearBeatTime);
        this._hearBeatTime = egret.setTimeout(this.onHearBeatTimer, this, 10000);
    };
    // 关闭scoket
    SocketCommand.prototype.onSocketClosed = function (evt) {
        this._isConnected = false;
        this.reconnect();
    };
    SocketCommand.prototype.reconnect = function () {
        var _this = this;
        DataLoading.getInstance().show();
        egret.clearTimeout(this._reConnectTime);
        this._reConnectTime = egret.setTimeout(function () {
            _this.connect();
        }, this, 3000); //每隔3秒重新连接
        this.connect();
    };
    SocketCommand._instance = null;
    return SocketCommand;
}());
__reflect(SocketCommand.prototype, "SocketCommand");
//# sourceMappingURL=SocketCommand.js.map