/**
 * 个人详细信息
 */
class SelfDetailInfoView extends IFrameBase
{

	public constructor() {
		super();

		this.skinName = "PlayerDetailInfoSkin";
		this.name = "SelfDetailInfoView";
	}

	private _face:DImage;

	private nickNameTF:eui.Label;
	private idTF:eui.Label;
	private ipTF:eui.Label;

	public childrenCreated():void
	{
		this._face = new DImage(124, 124);
		this["mainView"].addChild(this._face);
		this._face.defaultImg = "hall_json.testface2";
		this._face.x = 120; this._face.y = 91;

		this.nickNameTF.text = "昵称："+ MyUserInfo.getInstance().getFormatUserName(14);
		this.idTF.text = "ID："+MyUserInfo.getInstance().userId;
		this.ipTF.text = "IP：" + MyUserInfo.getInstance().ip;

		this._face.load(MyUserInfo.getInstance().faceUrl);
	}
	/*该模块被创建完成后的回调函数*/
	public createComplete(event: egret.Event): void {
		super.createComplete(event);

	}

	public show():void
	{
		
	}
}