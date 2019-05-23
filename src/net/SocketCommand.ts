/**
 * socket网络通信
 * @author daylyn
 */
class SocketCommand {
	private static _instance: SocketCommand = null;
	public static getInstance(): SocketCommand {
		return this._instance || (this._instance = new SocketCommand());
	}

	public constructor() {

	}

	private _reConnectTime: number = -1;
	private onHearBeatTimer(): void {
		var data: Object = {};
		data["msgType"] = NetAction.hearBeat;
		data["gameType"] = 0;
		SocketCommand.getInstance().send(data);

		egret.clearTimeout(this._reConnectTime);
		this._reConnectTime = egret.setTimeout(() => {

			egret.clearTimeout(this._reConnectTime);
			this._socket.close();
		}, this, 6000);
	}

	private _socket: egret.WebSocket;
	private _isConnected: boolean = false;
	public get isConnected(): boolean { return this._isConnected; }

	private _isReconnect: boolean = false;
	private _lockReconnect = false;//避免重复连接

	private _hearBeatTime: number = -1;

	public connect(): void {
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

		let socket_ip: string = GameGlobal.SOCKET_IP;
		let socket_port: number = GameGlobal.SOCKET_PORT;

		// //测试切换
		// if (true) {
		// 	socket_ip = 'ws://127.0.0.1';
		// 	socket_port = 8081;
		// }
		// this._socket.connectByUrl(socket_ip + ":" + socket_port + "/mywuwu/websocket/"+  GameModel.instance().token);
		this._socket.connect('127.0.0.1', 8083);
	}

	private onSocketIOError(evt: egret.IOErrorEvent): void {
		this.onSocketClosed(null);
	}

	/**
	 * 发送数据
	 */
	public send(data: any): void {
		if (!this.isConnected)
			return;

		data["token"] = GameModel.instance().token;

		if (data["gameType"] == undefined || data["gameType"] == null)
			data["gameType"] = GameGlobal.gameType;

		LogUtils.log("send socket message::" + JSON.stringify(data));
		var message: string = JSON.stringify(data);
		this._socket.writeUTF(message);
	}

	private onSocketConnected(evt: egret.Event): void {
		this._isConnected = true;

		egret.clearTimeout(this._reConnectTime);
		egret.clearTimeout(this._hearBeatTime);
		this._hearBeatTime = egret.setTimeout(this.onHearBeatTimer, this, 10000);

		GameEventManager.dispatchEvent(GameEventManager.SOCKET_CONNECTED);
	}

	// 接收数据
	private onSocketData(evt: egret.Event): void {
		DataLoading.getInstance().hide();
		var msg: string = this._socket.readUTF();

		LogUtils.log("receive socket message::" + msg);

		var obj: Object = JSON.parse(msg);
		var code: number = obj["code"];
		if (obj.hasOwnProperty("gameType") && (obj["gameType"] != null)) {
			var gameType: number = obj["gameType"];
			if (gameType != 0)
				GameGlobal.gameType = gameType;
		}


		// 设置类型
		if (obj["data"] && obj["data"].hasOwnProperty("gameType") && (obj["data"]["gameType"] != null)) {
			var gameType: number = obj["data"]["gameType"];
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
	}

	// 关闭scoket
	private onSocketClosed(evt: egret.Event): void {
		this._isConnected = false;
		this.reconnect();
	}

	private reconnect(): void {
		DataLoading.getInstance().show();
		egret.clearTimeout(this._reConnectTime);
		this._reConnectTime = egret.setTimeout(() => {
			this.connect();
		}, this, 3000); //每隔3秒重新连接
		this.connect();
	}

}