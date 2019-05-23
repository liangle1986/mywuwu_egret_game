class TipsPanel extends egret.Sprite {

    private descStr: string = "";

    public constructor(descStr: string = "") {
        super();
        this.descStr = descStr;
        this.initUI();
    }
    private bg: egret.Bitmap;
    private descTF: egret.TextField;

    public initUI(): void {

        this.bg = new egret.Bitmap();
        this.bg.texture = RES.getRes("tipsBg");
        this.addChild(this.bg);
        this.bg.touchEnabled = true;
        this.descTF = new egret.TextField();
        this.addChild(this.descTF);
        this.descTF.textColor = 0xffffff;
        this.descTF.size = 20;
        this.descTF.x = 20;
        this.descTF.y = 10;
        this.descTF.lineSpacing = 6;
        this.descTF.fontFamily = GameGlobal.DEFAULT_FONT_NAME;

        //this.descTF.textAlign = "center";
        this.descTF.text = this.descStr;
        //九宫格
        var rect: egret.Rectangle = new egret.Rectangle(5, 5, 35, 35);
        this.bg.scale9Grid = rect;
        this.bg.width = this.descTF.width + 40;
        this.bg.height = this.descTF.height + 20;
    }
}