/**
 * 自定义事件
 */
class DEvent extends egret.Event
{
	public data:any;

	public static ACTION_CHANGE:string="action_change";
	/** 选择牌 */
	public static CARD_ACTION_CHANGE:string="card_action_change";
	/** 玩家操作牌组更新 */
	public static USER_SELECT_CARDS_UPDATE:string="user_select_cards_update"
	/** 下注操作 */
	public static BET_ACTION:string="betAction";
	
	public constructor(type:string,data:any = null,bubbles:boolean = false,cancelable:boolean = false) 
	{
		super(type, bubbles, cancelable);

		this.data = data;
	}
}