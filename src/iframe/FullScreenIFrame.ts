/**
 * 全屏界面
 */
class FullScreenIFrame extends IFrameBase
{
	protected showTweenEffect:boolean = true;

	public constructor() {
		super();

		this.isFullScene = true;
		this.percentHeight = 100;
		this.percentWidth = 100;
	}
	/**
	 * 渐隐显示
	 */
	public tweenShow(): void
	{
		this.alpha = 1;
		this.x = GameGlobal.stageW;
		egret.Tween.removeTweens(this);
		egret.Tween.get(this).to({x:0},200);
	}
	/**缓动隐藏 */
	public tweenRemove(): void
	{
	   	this.alpha = 1;
		egret.Tween.removeTweens(this);
		egret.Tween.get(this).to({alpha:0},200).call(this.tweenRemoveComp,this);
	}
}