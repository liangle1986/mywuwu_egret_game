/**
 * 记录游戏公共信息
 */
class GameModel extends egret.EventDispatcher
{
	private static _instance:GameModel = null;
	public static instance():GameModel
	{
		return (GameModel._instance || (GameModel._instance = new GameModel()));
	}
	public constructor()
	{
		super();
	}
	public fromUserId:string = ""; //从别人的分享链接进入时用
	public fromRoomId:string = ""; //从别人的分享房间号
	public token:string = ""; //登陆token
	public code:string = "0116zWq81mjA1Q19fAr81nz8r816zWqx";// 登陆code
	public deviceType:string = "android"; //设备类型
	public roomId:number = 0; //当前创建的房间id
	public myOrder:number = 1; //我的顺序号
	//茶楼
	public teaHouseNum:number = 0; //当前进入茶楼id
	
}