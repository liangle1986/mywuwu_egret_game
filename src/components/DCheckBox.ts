/**
 * 复选框
 */
class DCheckBox extends DComponent {
	private _skin: egret.Bitmap;
	private _label: egret.Bitmap;

	private _labelTF: egret.TextField;

	public constructor() {
		super();
		this.initView();
	}
	private _selected: boolean = false;
	public get selected(): boolean {
		return this._selected;
	}

	public set selected(value: boolean) {
		this._selected = value;
		this._skin.texture = this._selected ? RES.getRes(this._chkImgName2) : RES.getRes(this._chkImgName);
	}

	public setLabel(label: string, isImg: boolean = true, x: number = 1, y: number = -1): void {
		if (isImg) {
			this._label.texture = RES.getRes(label);
			this._label.x = x; this._label.y = y;
		}
		else {
			if (this._labelTF == null)
				this._labelTF = new egret.TextField();
			this._labelTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;
			this._labelTF.textColor = 0x8a4b0b;
			this._labelTF.size = 21;
			this._labelTF.textAlign = egret.HorizontalAlign.LEFT;
			this._labelTF.x = x; this._labelTF.y = y;
			this._labelTF.text = label;
			this.addChild(this._labelTF);

			this._touchAreShape.graphics.clear();
			this._touchAreShape.graphics.beginFill(0);
			this._touchAreShape.graphics.drawRect(0, 0, this._labelTF.textWidth + this._label.x + this._skin.width, this._skin.height);
			this._touchAreShape.graphics.endFill();
			// this._touchAreShape.width = this._labelTF.textWidth+this._label.x+this._skin.width+10;
			// this._touchAreShape.y = -this._skin.height*2*0.5;
			// this._touchAreShape.x = -this._touchAreShape.width*0.5;
			this._touchAreShape.visible = true;
			this.addChild(this._touchAreShape);
		}
	}

	private _chkImgName: string = "hall_json.checkbox_default";
	private _chkImgName2: string = "hall_json.checkbox_select";

	public setSkin(chkImgName: string, chkImgName2: string): void {
		this._chkImgName = chkImgName;
		this._chkImgName2 = chkImgName2;

		this._skin.texture = RES.getRes(chkImgName);
	}

	private _touchAreShape: egret.Sprite;

	private initView(): void {
		this.touchEnabled = true;

		this._skin = new egret.Bitmap();
		this._skin.texture = RES.getRes(this._chkImgName);
		this.addChild(this._skin);
		this._skin.touchEnabled = true;

		this._label = new egret.Bitmap();
		this._label.x = 34; this._label.y = 0;
		this.addChild(this._label);

		this._label.touchEnabled = true;
		this._label.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
		
			// AlertView.getInstance().show(text, AlertView.ALERT_MODE);
			XieyiView.getInstance().showView();

		}, this);

		this._touchAreShape = new egret.Sprite();
		this._touchAreShape.graphics.beginFill(0);
		this._touchAreShape.graphics.drawRect(0, 0, 100, this._skin.height);
		this._touchAreShape.graphics.endFill();
		this.addChild(this._touchAreShape);
		this._touchAreShape.alpha = 0;
		// this._touchAreShape.y = -this._skin.height*2*0.5;
		// this._touchAreShape.x = -50;
		this._touchAreShape.visible = false;
		this._touchAreShape.touchEnabled = true;

		this._skin.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {

			this.selected = !this.selected;
			this.dispatchEvent(new DEvent(GameEventManager.SELECTED));
		}, this);

		this._touchAreShape.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {

			this.selected = !this.selected;
			this.dispatchEvent(new DEvent(GameEventManager.SELECTED));
		}, this);
	}
}