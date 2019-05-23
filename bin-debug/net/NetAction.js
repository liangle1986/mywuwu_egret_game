var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var NetAction = (function () {
    function NetAction() {
    }
    /** 错误 */
    NetAction.NORMAL = 0;
    /** 进入大厅 */
    NetAction.enterHall = 1;
    /** 解散房间成功 */
    NetAction.dissolveRoomSuccess = 12;
    /**创建房间 */
    NetAction.createRoom = 5;
    /** 进入房间 */
    NetAction.enterRoom = 6;
    /** 点击准备 */
    NetAction.ready = 7;
    /** 发牌消息 */
    NetAction.sayPoker = 8;
    /** 小结算 */
    NetAction.jiesuan = 24;
    /** 大结算 */
    NetAction.jiesuan2 = 25;
    /** 解散房间 */
    NetAction.dissolveRoom = 9;
    /** 同意解散房间 */
    NetAction.agreeDissolveRoom = 10;
    /** 不同意解散房间 */
    NetAction.disagreeDissolveRoom = 11;
    /** 刷新房间 */
    NetAction.refreshRoom = 13;
    /** 返回大厅 */
    NetAction.backToHall = 16;
    /** 玩家离开20分钟，房间解散 */
    NetAction.autodissolveRoom = 18;
    /**聊天消息 */
    NetAction.chatMsg = 19;
    /**心跳包 */
    NetAction.hearBeat = 20;
    /** 离线 */
    NetAction.offline = 14;
    /** 上线 */
    NetAction.online = 15;
    /** 战绩 */
    NetAction.zhanji = 2;
    /** 用户反馈 */
    NetAction.feedback = 3;
    /** 公告通知 */
    NetAction.notice = 4;
    /** 房卡更新 */
    NetAction.updateFangKa = 21;
    /**地理位置信息同步到服务端 */
    NetAction.updatePosition = 23;
    /** 查询玩家信息 */
    NetAction.playerInfo = 17;
    /** 商城列表 */
    NetAction.mallList = 26;
    /** 绑定推荐码 */
    NetAction.bind = 27;
    /** 确认是否绑定 */
    NetAction.checkBind = 28;
    /** 商城购买 */
    NetAction.buy = 29;
    /** 准备倒计时*/
    NetAction.countDown = 305;
    //------------------------------------------------茶楼相关接口------------------------------------
    NetAction.teahouse_create = 80; //创建茶楼
    NetAction.teahouse_playerList = 84; //茶楼玩家列表
    NetAction.teahouse_applyList = 91; //待审核玩家列表
    NetAction.teahouse_removeMember = 85; //移出茶楼
    NetAction.teahouse_setMember = 98; //设置/取消店小二
    // public static teahouse_cancelSetMember:number = 86; //设置店小二
    NetAction.teahouse_agreeMember = 83; //同意加入茶楼
    NetAction.teahouse_disagreeMember = 83; //拒绝加入茶楼
    NetAction.teahouse_table_memberList = 89; //8个牌桌玩家列表
    NetAction.teahouse_table_memberList2 = 99; //8个牌桌玩家列表
    NetAction.teahouse_enterTable = 87; //进入茶楼下的某个牌桌玩游戏
    NetAction.teahouse_join = 88; //加入茶楼
    NetAction.teahouse_del = 82; //删除茶楼
    NetAction.teahouse_quit = 90; //退出茶楼
    NetAction.teahouse_list = 81; //茶楼列表（我创建的茶楼）
    NetAction.teahouse_list2 = 53; //茶楼列表（我创建的茶楼）
    NetAction.teahouse_joinList = 94; //我加入的茶楼列表
    NetAction.teahouse_scoreList = 92; //茶楼战绩列表
    NetAction.teahouse_myScoreList = 93; //茶楼战绩列表
    NetAction.teahouse_backToHall = 95; //退出茶楼到大厅
    NetAction.rank_opened = 52; //已开房排行榜
    NetAction.rank_tuhao = 50; //土豪榜
    NetAction.rank_paishen = 51; //土豪榜
    NetAction.teahouse_winList = 97; //大赢家
    NetAction.teahouse_set = 96; //茶楼设置
    NetAction.teahouse_enter = 86; //进入茶楼
    //------------------------------------------------扎金花特有接口------------------------------------------
    /** 自动比牌 */
    NetAction.autoCompare = 301;
    /** 跟注 */
    NetAction.follow = 300;
    /** 看牌 */
    NetAction.look = 303;
    /** 比牌 */
    NetAction.compare = 302;
    /** 弃牌 */
    NetAction.giveup = 304;
    //---------------------------------------------------牛牛特有接口-----------------------------------------------
    //准备抢庄
    NetAction.readyRobBanker = 100;
    //抢庄
    NetAction.robBanker = 101;
    //抢庄超过10s时间限制
    NetAction.robBankerOverTime = 102; //
    //准备压分
    NetAction.readyStake = 103;
    //压分
    NetAction.stake = 104;
    //亮牌
    NetAction.showCard = 105;
    //搓牌
    NetAction.cuopai = 106;
    // 协议
    NetAction.xieyi = 10001;
    return NetAction;
}());
__reflect(NetAction.prototype, "NetAction");
//# sourceMappingURL=NetAction.js.map