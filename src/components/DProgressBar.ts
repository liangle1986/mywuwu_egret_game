/**
 * 进度条信息
 */
class DProgressBar extends DComponent {
	public constructor() {
		super();

		this.initView();
	}

	private _background: egret.Bitmap;
	private _foreground: egret.Bitmap;
	private _maskImg: egret.Shape;

	private initView(): void {
		// 背景图片
		this._background = new egret.Bitmap();
		this._background.texture = RES.getRes("loadingbar_png");
		this.addChild(this._background);

		// 动画切换图片
		this._foreground = new egret.Bitmap();
		this._foreground.texture = RES.getRes("loadingbar2_png");
		this.addChild(this._foreground);

		// 动态规矩
		this._maskImg = new egret.Shape();
		this._maskImg.graphics.beginFill(0, 1);
		this._maskImg.graphics.drawRect(0, 0, this._foreground.width, 40);
		this._maskImg.graphics.endFill();
		this.addChild(this._maskImg);
		this._maskImg.x = 7; this._maskImg.y = 5;

		// 设置和背景滚动条居中 这里需要调试
		this._foreground.x = 7; this._foreground.y = 5;
		// 利用创建规矩把图片绘制出来的效果，形成滚动条效果
		this._foreground.mask = this._maskImg;
	}

	// 设置最大值
	private _maxValue: number = 100;
	public setMaxValue(value: number): void {
		this._maxValue = value;
	}

	// 设置每次绘制规矩大小和最大值
	private _value: number = 0;
	public setValue(value: number, maxValue: number = 100): void {
		this._value = value;
		this._maxValue = maxValue;

		var percent: number = this._value / this._maxValue;
		this._maskImg.scaleX = percent;
	}
}