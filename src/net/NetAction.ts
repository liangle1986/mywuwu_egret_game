class NetAction 
{
	/** 错误 */
	public static NORMAL:number = 0;
	/** 进入大厅 */
	public static enterHall:number = 1;
	/** 解散房间成功 */
	public static dissolveRoomSuccess:number = 12;
	/**创建房间 */
	public static createRoom:number = 5;
	/** 进入房间 */
	public static enterRoom:number = 6;
	/** 点击准备 */
	public static ready:number = 7;
	/** 发牌消息 */
	public static sayPoker:number = 8;
	/** 小结算 */
	public static jiesuan:number = 24;
	/** 大结算 */
	public static jiesuan2:number = 25;
	/** 解散房间 */
	public static dissolveRoom:number = 9;
	/** 同意解散房间 */
	public static agreeDissolveRoom:number = 10;
	/** 不同意解散房间 */
	public static disagreeDissolveRoom:number = 11;
	/** 刷新房间 */
	public static refreshRoom:number = 13;
	/** 返回大厅 */
	public static backToHall:number = 16;
	/** 玩家离开20分钟，房间解散 */
	public static autodissolveRoom:number = 18;
	/**聊天消息 */
	public static chatMsg:number = 19;
	/**心跳包 */
	public static hearBeat:number = 20;
	/** 离线 */
	public static offline:number = 14;
	/** 上线 */
	public static online:number = 15;
	/** 战绩 */
	public static zhanji:number = 2;
	/** 用户反馈 */
	public static feedback:number = 3;
	/** 公告通知 */
	public static notice:number = 4;
	/** 房卡更新 */
	public static updateFangKa:number = 21;
	/**地理位置信息同步到服务端 */
	public static updatePosition:number = 23;
	/** 查询玩家信息 */
	public static playerInfo:number = 17;
	/** 商城列表 */
	public static mallList:number = 26;
	/** 绑定推荐码 */
	public static bind:number = 27;
	/** 确认是否绑定 */
	public static checkBind:number = 28;
	/** 商城购买 */
	public static buy:number = 29;
	/** 准备倒计时*/
	public static countDown:number = 305;
	//------------------------------------------------茶楼相关接口------------------------------------
	public static teahouse_create:number = 80; //创建茶楼
	public static teahouse_playerList:number = 84; //茶楼玩家列表
	public static teahouse_applyList:number = 91; //待审核玩家列表
	public static teahouse_removeMember:number = 85; //移出茶楼
	public static teahouse_setMember:number = 98; //设置/取消店小二
	// public static teahouse_cancelSetMember:number = 86; //设置店小二

	public static teahouse_agreeMember:number = 83; //同意加入茶楼
	public static teahouse_disagreeMember:number = 83; //拒绝加入茶楼
	public static teahouse_table_memberList:number = 89; //8个牌桌玩家列表
	public static teahouse_table_memberList2:number = 99; //8个牌桌玩家列表
	public static teahouse_enterTable:number = 87; //进入茶楼下的某个牌桌玩游戏
	public static teahouse_join:number = 88; //加入茶楼
	public static teahouse_del:number = 82; //删除茶楼
	public static teahouse_quit:number = 90; //退出茶楼
	public static teahouse_list:number = 81; //茶楼列表（我创建的茶楼）
	public static teahouse_list2:number = 53; //茶楼列表（我创建的茶楼）
	public static teahouse_joinList:number = 94; //我加入的茶楼列表
	public static teahouse_scoreList:number = 92; //茶楼战绩列表
	public static teahouse_myScoreList:number = 93; //茶楼战绩列表
	public static teahouse_backToHall:number = 95; //退出茶楼到大厅
	public static rank_opened:number = 52; //已开房排行榜
	public static rank_tuhao:number = 50; //土豪榜
	public static rank_paishen:number = 51; //土豪榜
	public static teahouse_winList:number = 97; //大赢家
	public static teahouse_set:number = 96; //茶楼设置
	public static teahouse_enter:number = 86; //进入茶楼
	//------------------------------------------------扎金花特有接口------------------------------------------
	/** 自动比牌 */
	public static autoCompare:number = 301;
	/** 跟注 */
	public static follow:number = 300;
	/** 看牌 */
	public static look:number = 303;
	/** 比牌 */
	public static compare:number = 302;
	/** 弃牌 */
	public static giveup:number = 304;

	//---------------------------------------------------牛牛特有接口-----------------------------------------------
	//准备抢庄
	public static readyRobBanker:number = 100;
	//抢庄
	public static robBanker:number = 101;
	//抢庄超过10s时间限制
	public static robBankerOverTime:number = 102; //
	//准备压分
	public static readyStake:number = 103;
	//压分
	public static stake:number = 104;
	//亮牌
	public static showCard:number = 105;
	//搓牌
	public static cuopai:number = 106;


	// 协议
	public static xieyi:number = 10001;
}