class GameEventManager extends egret.EventDispatcher
{
	private static _instance:GameEventManager = null;
	public static getInstance():GameEventManager
	{
		return this._instance || (this._instance = new GameEventManager());
	}
	//events define here
	public static COMPLETE:string = "complete";
	public static SELECTED:string = "selected"; // 复选框选中
	public static CONTINUE_GAME:string = "continue_game"; //结算后，继续下一局
	public static START_BATTLE:string = "start_battle"; //开始战斗
	public static END_BATTLE:string = "end_battle"; //结束战斗
	public static UPDATE_RANK:string = "update_rank"; //更新排行榜

	public static UPDATE_USER_GOLD:string = "update_user_gold"; //更新金币
	public static UPDATE_USER_DIAMOND:string = "update_user_diamond"; //更新钻石
	public static UPDATE_USER_LEVEL:string = "update_user_level"; //更新等级

	public static SOCKET_CONNECTED:string = "socket_connected"; //链接后台
	public static LOGIN_SUCCESS:string = "login_success"; // 登录页面

	public static NEXT_ROUND:string = "next_round"; //下一局
	public static QUIT_ROOM:string = "quit_room"; //退出房间

	public static SHOW_LAST_POKER:string = "show_last_poker"; //看牌

	public static addEvent(evtName:string, listener:Function, thisObj:any):void
	{
		GameEventManager.getInstance().addEventListener(evtName, listener, thisObj);
	}

	public static removeEvent(evtName:string, listener:Function, thisObj:any):void
	{
		GameEventManager.getInstance().removeEventListener(evtName, listener, thisObj);
	}

	public static dispatchEvent(evtName:string, data:any = null):void
	{
		GameEventManager.getInstance().dispatchEvent(new DEvent(evtName, data));
	}
}