
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = undefined;generateEUI.paths['resource/app_skins/ChatEmotionItemSkin.exml'] = window.ChatEmotionItemSkin = (function (_super) {
	__extends(ChatEmotionItemSkin, _super);
	function ChatEmotionItemSkin() {
		_super.call(this);
		this.skinParts = ["bq","bq0","bq1","bq2","bq3","bq4","bq5"];
		
		this.elementsContent = [this._Image1_i(),this.bq_i(),this.bq0_i(),this.bq1_i(),this.bq2_i(),this.bq3_i(),this.bq4_i(),this.bq5_i()];
	}
	var _proto = ChatEmotionItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 263;
		t.source = "common_json.bqBg";
		t.width = 372;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bq_i = function () {
		var t = new eui.Image();
		this.bq = t;
		t.horizontalCenter = -146;
		t.source = "emotion_json.bq1";
		t.verticalCenter = -95;
		return t;
	};
	_proto.bq0_i = function () {
		var t = new eui.Image();
		this.bq0 = t;
		t.horizontalCenter = -53;
		t.source = "emotion_json.bq1";
		t.verticalCenter = -94;
		return t;
	};
	_proto.bq1_i = function () {
		var t = new eui.Image();
		this.bq1 = t;
		t.horizontalCenter = 43;
		t.source = "emotion_json.bq1";
		t.verticalCenter = -94;
		return t;
	};
	_proto.bq2_i = function () {
		var t = new eui.Image();
		this.bq2 = t;
		t.horizontalCenter = 136;
		t.source = "emotion_json.bq1";
		t.verticalCenter = -94;
		return t;
	};
	_proto.bq3_i = function () {
		var t = new eui.Image();
		this.bq3 = t;
		t.horizontalCenter = -146;
		t.source = "emotion_json.bq1";
		t.verticalCenter = -13;
		return t;
	};
	_proto.bq4_i = function () {
		var t = new eui.Image();
		this.bq4 = t;
		t.horizontalCenter = -53;
		t.source = "emotion_json.bq1";
		t.verticalCenter = -13;
		return t;
	};
	_proto.bq5_i = function () {
		var t = new eui.Image();
		this.bq5 = t;
		t.horizontalCenter = 43;
		t.source = "emotion_json.bq1";
		t.verticalCenter = -13;
		return t;
	};
	return ChatEmotionItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/ChatSkin.exml'] = window.ChatSkin = (function (_super) {
	__extends(ChatSkin, _super);
	var ChatSkin$Skin1 = 	(function (_super) {
		__extends(ChatSkin$Skin1, _super);
		function ChatSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ChatSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.sendBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ChatSkin$Skin1;
	})(eui.Skin);

	function ChatSkin() {
		_super.call(this);
		this.skinParts = ["maskBg","list","tabContainer1","list2","tabContainer2","tab2","tab1","inputTF","sendBtn","mainView"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.mainView_i()];
	}
	var _proto = ChatSkin.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainView_i = function () {
		var t = new eui.Group();
		this.mainView = t;
		t.horizontalCenter = 1;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.tabContainer1_i(),this.tabContainer2_i(),this.tab2_i(),this.tab1_i(),this.inputTF_i(),this.sendBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "chatBg2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tabContainer1_i = function () {
		var t = new eui.Scroller();
		this.tabContainer1 = t;
		t.height = 203;
		t.horizontalCenter = 0;
		t.width = 434;
		t.y = 94;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.layout = this._TileLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 19;
		t.requestedColumnCount = 4;
		t.verticalGap = 15;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto.tabContainer2_i = function () {
		var t = new eui.Scroller();
		this.tabContainer2 = t;
		t.height = 203;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 466;
		t.y = 94;
		t.viewport = this.list2_i();
		return t;
	};
	_proto.list2_i = function () {
		var t = new eui.List();
		this.list2 = t;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection2_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 9;
		return t;
	};
	_proto._ArrayCollection2_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto.tab2_i = function () {
		var t = new eui.Image();
		this.tab2 = t;
		t.source = "common_json.chatTab2";
		t.x = 258;
		t.y = 26;
		return t;
	};
	_proto.tab1_i = function () {
		var t = new eui.Image();
		this.tab1 = t;
		t.source = "common_json.chatTab1_select";
		t.x = 21;
		t.y = 26;
		return t;
	};
	_proto.inputTF_i = function () {
		var t = new eui.Label();
		this.inputTF = t;
		t.anchorOffsetX = 0;
		t.text = "请输入聊天内容...";
		t.width = 364;
		t.x = 30;
		t.y = 331;
		return t;
	};
	_proto.sendBtn_i = function () {
		var t = new eui.Button();
		this.sendBtn = t;
		t.label = "";
		t.x = 403;
		t.y = 326;
		t.skinName = ChatSkin$Skin1;
		return t;
	};
	return ChatSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/ChatTextItemSkin.exml'] = window.ChatTextItemSkin = (function (_super) {
	__extends(ChatTextItemSkin, _super);
	function ChatTextItemSkin() {
		_super.call(this);
		this.skinParts = ["titleTF"];
		
		this.elementsContent = [this.titleTF_i()];
	}
	var _proto = ChatTextItemSkin.prototype;

	_proto.titleTF_i = function () {
		var t = new eui.Label();
		this.titleTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "--";
		t.textAlign = "left";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return ChatTextItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/hall/CreateRoomSkin.exml'] = window.CreateRoomSkin = (function (_super) {
	__extends(CreateRoomSkin, _super);
	var CreateRoomSkin$Skin2 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin2, _super);
		function CreateRoomSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.createBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateRoomSkin$Skin2;
	})(eui.Skin);

	var CreateRoomSkin$Skin3 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin3, _super);
		function CreateRoomSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateRoomSkin$Skin3;
	})(eui.Skin);

	var CreateRoomSkin$Skin4 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin4, _super);
		function CreateRoomSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateRoomSkin$Skin4;
	})(eui.Skin);

	var CreateRoomSkin$Skin5 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin5, _super);
		function CreateRoomSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateRoomSkin$Skin5;
	})(eui.Skin);

	var CreateRoomSkin$Skin6 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin6, _super);
		function CreateRoomSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateRoomSkin$Skin6;
	})(eui.Skin);

	var CreateRoomSkin$Skin7 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin7, _super);
		function CreateRoomSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateRoomSkin$Skin7;
	})(eui.Skin);

	var CreateRoomSkin$Skin8 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin8, _super);
		function CreateRoomSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateRoomSkin$Skin8;
	})(eui.Skin);

	var CreateRoomSkin$Skin9 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin9, _super);
		function CreateRoomSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateRoomSkin$Skin9;
	})(eui.Skin);

	var CreateRoomSkin$Skin10 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin10, _super);
		function CreateRoomSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateRoomSkin$Skin10;
	})(eui.Skin);

	var CreateRoomSkin$Skin11 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin11, _super);
		function CreateRoomSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateRoomSkin$Skin11;
	})(eui.Skin);

	var CreateRoomSkin$Skin12 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin12, _super);
		function CreateRoomSkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateRoomSkin$Skin12;
	})(eui.Skin);

	var CreateRoomSkin$Skin13 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin13, _super);
		function CreateRoomSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateRoomSkin$Skin13;
	})(eui.Skin);

	var CreateRoomSkin$Skin14 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin14, _super);
		function CreateRoomSkin$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateRoomSkin$Skin14;
	})(eui.Skin);

	var CreateRoomSkin$Skin15 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin15, _super);
		function CreateRoomSkin$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateRoomSkin$Skin15;
	})(eui.Skin);

	var CreateRoomSkin$Skin16 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin16, _super);
		function CreateRoomSkin$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateRoomSkin$Skin16;
	})(eui.Skin);

	var CreateRoomSkin$Skin17 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin17, _super);
		function CreateRoomSkin$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateRoomSkin$Skin17;
	})(eui.Skin);

	var CreateRoomSkin$Skin18 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin18, _super);
		function CreateRoomSkin$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateRoomSkin$Skin18;
	})(eui.Skin);

	var CreateRoomSkin$Skin19 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin19, _super);
		function CreateRoomSkin$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateRoomSkin$Skin19;
	})(eui.Skin);

	var CreateRoomSkin$Skin20 = 	(function (_super) {
		__extends(CreateRoomSkin$Skin20, _super);
		function CreateRoomSkin$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateRoomSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateRoomSkin$Skin20;
	})(eui.Skin);

	function CreateRoomSkin() {
		_super.call(this);
		this.skinParts = ["maskBg","tab1","tab2","createBtn","eightRoundChk","sixteenRoundChk","payWay1","payWay2","roomCardNumTF3","roomCardNumTF4","zjhGroup","tenRoundChk","tweentyRoundChk","zuozhuang1","zuozhuang2","zuozhuang3","zuozhuang4","beishu1","beishu2","beishu3","difen1","difen2","difen3","pay1","pay2","roomCardNumTF","roomCardNumTF2","nnGroup","mainView"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.mainView_i()];
	}
	var _proto = CreateRoomSkin.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainView_i = function () {
		var t = new eui.Group();
		this.mainView = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.tab1_i(),this.tab2_i(),this.createBtn_i(),this.zjhGroup_i(),this.nnGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "iframe_createBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.createRoomTitle";
		t.x = 423;
		t.y = 7;
		return t;
	};
	_proto.tab1_i = function () {
		var t = new eui.Image();
		this.tab1 = t;
		t.source = "hall_json.gameTab1";
		t.x = 45;
		t.y = 67;
		return t;
	};
	_proto.tab2_i = function () {
		var t = new eui.Image();
		this.tab2 = t;
		t.source = "hall_json.gameTab2_select";
		t.x = 231;
		t.y = 67;
		return t;
	};
	_proto.createBtn_i = function () {
		var t = new eui.Button();
		this.createBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 508;
		t.skinName = CreateRoomSkin$Skin2;
		return t;
	};
	_proto.zjhGroup_i = function () {
		var t = new eui.Group();
		this.zjhGroup = t;
		t.horizontalCenter = 0;
		t.y = 154;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Label1_i(),this.eightRoundChk_i(),this.sixteenRoundChk_i(),this._Label2_i(),this.payWay1_i(),this.payWay2_i(),this.roomCardNumTF3_i(),this.roomCardNumTF4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "createRoomTileBg_png";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "createRoomTileBg_png";
		t.y = 69;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "选择模式";
		t.textColor = 0x8a4b0b;
		t.x = 63;
		t.y = 13;
		return t;
	};
	_proto.eightRoundChk_i = function () {
		var t = new eui.CheckBox();
		this.eightRoundChk = t;
		t.label = "8局";
		t.selected = true;
		t.x = 209;
		t.y = 14;
		t.skinName = CreateRoomSkin$Skin3;
		return t;
	};
	_proto.sixteenRoundChk_i = function () {
		var t = new eui.CheckBox();
		this.sixteenRoundChk = t;
		t.label = "16局";
		t.x = 475;
		t.y = 14;
		t.skinName = CreateRoomSkin$Skin4;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "支付方式";
		t.textColor = 0x8a4b0b;
		t.x = 63;
		t.y = 82;
		return t;
	};
	_proto.payWay1_i = function () {
		var t = new eui.CheckBox();
		this.payWay1 = t;
		t.label = "AA支付";
		t.selected = true;
		t.x = 209;
		t.y = 83;
		t.skinName = CreateRoomSkin$Skin5;
		return t;
	};
	_proto.payWay2_i = function () {
		var t = new eui.CheckBox();
		this.payWay2 = t;
		t.label = "房主支付";
		t.x = 399;
		t.y = 83;
		t.skinName = CreateRoomSkin$Skin6;
		return t;
	};
	_proto.roomCardNumTF3_i = function () {
		var t = new eui.Label();
		this.roomCardNumTF3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "（0张房卡）";
		t.textColor = 0x8a4b0b;
		t.x = 303;
		t.y = 12;
		return t;
	};
	_proto.roomCardNumTF4_i = function () {
		var t = new eui.Label();
		this.roomCardNumTF4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "（0张房卡）";
		t.textColor = 0x8a4b0b;
		t.x = 596;
		t.y = 15;
		return t;
	};
	_proto.nnGroup_i = function () {
		var t = new eui.Group();
		this.nnGroup = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 154;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Label3_i(),this.tenRoundChk_i(),this.tweentyRoundChk_i(),this._Label4_i(),this.zuozhuang1_i(),this.zuozhuang2_i(),this.zuozhuang3_i(),this.zuozhuang4_i(),this._Label5_i(),this.beishu1_i(),this.beishu2_i(),this.beishu3_i(),this._Label6_i(),this.difen1_i(),this.difen2_i(),this.difen3_i(),this._Label7_i(),this.pay1_i(),this.pay2_i(),this.roomCardNumTF_i(),this.roomCardNumTF2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "createRoomTileBg_png";
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "createRoomTileBg_png";
		t.y = 69;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "createRoomTileBg_png";
		t.y = 138;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "createRoomTileBg_png";
		t.y = 207;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "createRoomTileBg_png";
		t.y = 276;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "局数";
		t.textColor = 0x8a4b0b;
		t.x = 63;
		t.y = 13;
		return t;
	};
	_proto.tenRoundChk_i = function () {
		var t = new eui.CheckBox();
		this.tenRoundChk = t;
		t.label = "10局";
		t.selected = true;
		t.x = 149;
		t.y = 14;
		t.skinName = CreateRoomSkin$Skin7;
		return t;
	};
	_proto.tweentyRoundChk_i = function () {
		var t = new eui.CheckBox();
		this.tweentyRoundChk = t;
		t.label = "20局";
		t.x = 445;
		t.y = 14;
		t.skinName = CreateRoomSkin$Skin8;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "坐庄";
		t.textColor = 0x8a4b0b;
		t.x = 63;
		t.y = 82;
		return t;
	};
	_proto.zuozhuang1_i = function () {
		var t = new eui.CheckBox();
		this.zuozhuang1 = t;
		t.label = "轮流坐庄";
		t.selected = true;
		t.x = 149;
		t.y = 83;
		t.skinName = CreateRoomSkin$Skin9;
		return t;
	};
	_proto.zuozhuang2_i = function () {
		var t = new eui.CheckBox();
		this.zuozhuang2 = t;
		t.label = "霸王庄";
		t.x = 349;
		t.y = 83;
		t.skinName = CreateRoomSkin$Skin10;
		return t;
	};
	_proto.zuozhuang3_i = function () {
		var t = new eui.CheckBox();
		this.zuozhuang3 = t;
		t.label = "看牌抢庄";
		t.x = 513;
		t.y = 83;
		t.skinName = CreateRoomSkin$Skin11;
		return t;
	};
	_proto.zuozhuang4_i = function () {
		var t = new eui.CheckBox();
		this.zuozhuang4 = t;
		t.label = "赢家当庄";
		t.x = 719;
		t.y = 83;
		t.skinName = CreateRoomSkin$Skin12;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "倍数";
		t.textColor = 0x8a4b0b;
		t.x = 63;
		t.y = 151;
		return t;
	};
	_proto.beishu1_i = function () {
		var t = new eui.CheckBox();
		this.beishu1 = t;
		t.label = "三倍封顶";
		t.selected = true;
		t.x = 149;
		t.y = 152;
		t.skinName = CreateRoomSkin$Skin13;
		return t;
	};
	_proto.beishu2_i = function () {
		var t = new eui.CheckBox();
		this.beishu2 = t;
		t.label = "五倍封顶";
		t.x = 355;
		t.y = 152;
		t.skinName = CreateRoomSkin$Skin14;
		return t;
	};
	_proto.beishu3_i = function () {
		var t = new eui.CheckBox();
		this.beishu3 = t;
		t.label = "不限制";
		t.x = 571;
		t.y = 152;
		t.skinName = CreateRoomSkin$Skin15;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "底分";
		t.textColor = 0x8a4b0b;
		t.x = 63;
		t.y = 220;
		return t;
	};
	_proto.difen1_i = function () {
		var t = new eui.CheckBox();
		this.difen1 = t;
		t.label = "1/2/3/4";
		t.selected = true;
		t.x = 149;
		t.y = 221;
		t.skinName = CreateRoomSkin$Skin16;
		return t;
	};
	_proto.difen2_i = function () {
		var t = new eui.CheckBox();
		this.difen2 = t;
		t.label = "2/4/6/8";
		t.x = 355;
		t.y = 221;
		t.skinName = CreateRoomSkin$Skin17;
		return t;
	};
	_proto.difen3_i = function () {
		var t = new eui.CheckBox();
		this.difen3 = t;
		t.label = "3/6/9/12";
		t.x = 571;
		t.y = 221;
		t.skinName = CreateRoomSkin$Skin18;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "支付方式";
		t.textColor = 0x8a4b0b;
		t.x = 63;
		t.y = 289;
		return t;
	};
	_proto.pay1_i = function () {
		var t = new eui.CheckBox();
		this.pay1 = t;
		t.label = "AA支付";
		t.selected = true;
		t.x = 209;
		t.y = 290;
		t.skinName = CreateRoomSkin$Skin19;
		return t;
	};
	_proto.pay2_i = function () {
		var t = new eui.CheckBox();
		this.pay2 = t;
		t.label = "房主支付";
		t.x = 399;
		t.y = 290;
		t.skinName = CreateRoomSkin$Skin20;
		return t;
	};
	_proto.roomCardNumTF_i = function () {
		var t = new eui.Label();
		this.roomCardNumTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "（0张房卡）";
		t.textColor = 0x8a4b0b;
		t.x = 271;
		t.y = 15;
		return t;
	};
	_proto.roomCardNumTF2_i = function () {
		var t = new eui.Label();
		this.roomCardNumTF2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "（0张房卡）";
		t.textColor = 0x8a4b0b;
		t.x = 566;
		t.y = 15;
		return t;
	};
	return CreateRoomSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/hall/CreateTeahouseSkin.exml'] = window.CreateTeahouseSkin = (function (_super) {
	__extends(CreateTeahouseSkin, _super);
	var CreateTeahouseSkin$Skin21 = 	(function (_super) {
		__extends(CreateTeahouseSkin$Skin21, _super);
		function CreateTeahouseSkin$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateTeahouseSkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.createBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return CreateTeahouseSkin$Skin21;
	})(eui.Skin);

	var CreateTeahouseSkin$Skin22 = 	(function (_super) {
		__extends(CreateTeahouseSkin$Skin22, _super);
		function CreateTeahouseSkin$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateTeahouseSkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateTeahouseSkin$Skin22;
	})(eui.Skin);

	var CreateTeahouseSkin$Skin23 = 	(function (_super) {
		__extends(CreateTeahouseSkin$Skin23, _super);
		function CreateTeahouseSkin$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateTeahouseSkin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateTeahouseSkin$Skin23;
	})(eui.Skin);

	var CreateTeahouseSkin$Skin24 = 	(function (_super) {
		__extends(CreateTeahouseSkin$Skin24, _super);
		function CreateTeahouseSkin$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateTeahouseSkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateTeahouseSkin$Skin24;
	})(eui.Skin);

	var CreateTeahouseSkin$Skin25 = 	(function (_super) {
		__extends(CreateTeahouseSkin$Skin25, _super);
		function CreateTeahouseSkin$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateTeahouseSkin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateTeahouseSkin$Skin25;
	})(eui.Skin);

	var CreateTeahouseSkin$Skin26 = 	(function (_super) {
		__extends(CreateTeahouseSkin$Skin26, _super);
		function CreateTeahouseSkin$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateTeahouseSkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateTeahouseSkin$Skin26;
	})(eui.Skin);

	var CreateTeahouseSkin$Skin27 = 	(function (_super) {
		__extends(CreateTeahouseSkin$Skin27, _super);
		function CreateTeahouseSkin$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateTeahouseSkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateTeahouseSkin$Skin27;
	})(eui.Skin);

	var CreateTeahouseSkin$Skin28 = 	(function (_super) {
		__extends(CreateTeahouseSkin$Skin28, _super);
		function CreateTeahouseSkin$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateTeahouseSkin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateTeahouseSkin$Skin28;
	})(eui.Skin);

	var CreateTeahouseSkin$Skin29 = 	(function (_super) {
		__extends(CreateTeahouseSkin$Skin29, _super);
		function CreateTeahouseSkin$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateTeahouseSkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateTeahouseSkin$Skin29;
	})(eui.Skin);

	var CreateTeahouseSkin$Skin30 = 	(function (_super) {
		__extends(CreateTeahouseSkin$Skin30, _super);
		function CreateTeahouseSkin$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateTeahouseSkin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateTeahouseSkin$Skin30;
	})(eui.Skin);

	var CreateTeahouseSkin$Skin31 = 	(function (_super) {
		__extends(CreateTeahouseSkin$Skin31, _super);
		function CreateTeahouseSkin$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateTeahouseSkin$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateTeahouseSkin$Skin31;
	})(eui.Skin);

	var CreateTeahouseSkin$Skin32 = 	(function (_super) {
		__extends(CreateTeahouseSkin$Skin32, _super);
		function CreateTeahouseSkin$Skin32() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateTeahouseSkin$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateTeahouseSkin$Skin32;
	})(eui.Skin);

	var CreateTeahouseSkin$Skin33 = 	(function (_super) {
		__extends(CreateTeahouseSkin$Skin33, _super);
		function CreateTeahouseSkin$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateTeahouseSkin$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateTeahouseSkin$Skin33;
	})(eui.Skin);

	var CreateTeahouseSkin$Skin34 = 	(function (_super) {
		__extends(CreateTeahouseSkin$Skin34, _super);
		function CreateTeahouseSkin$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateTeahouseSkin$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateTeahouseSkin$Skin34;
	})(eui.Skin);

	var CreateTeahouseSkin$Skin35 = 	(function (_super) {
		__extends(CreateTeahouseSkin$Skin35, _super);
		function CreateTeahouseSkin$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateTeahouseSkin$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateTeahouseSkin$Skin35;
	})(eui.Skin);

	var CreateTeahouseSkin$Skin36 = 	(function (_super) {
		__extends(CreateTeahouseSkin$Skin36, _super);
		function CreateTeahouseSkin$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateTeahouseSkin$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateTeahouseSkin$Skin36;
	})(eui.Skin);

	var CreateTeahouseSkin$Skin37 = 	(function (_super) {
		__extends(CreateTeahouseSkin$Skin37, _super);
		function CreateTeahouseSkin$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateTeahouseSkin$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateTeahouseSkin$Skin37;
	})(eui.Skin);

	var CreateTeahouseSkin$Skin38 = 	(function (_super) {
		__extends(CreateTeahouseSkin$Skin38, _super);
		function CreateTeahouseSkin$Skin38() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateTeahouseSkin$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateTeahouseSkin$Skin38;
	})(eui.Skin);

	var CreateTeahouseSkin$Skin39 = 	(function (_super) {
		__extends(CreateTeahouseSkin$Skin39, _super);
		function CreateTeahouseSkin$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","hall_json.checkbox_select2")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CreateTeahouseSkin$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "hall_json.checkbox_default2";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.textColor = 0x8a4b0b;
			t.verticalCenter = 0;
			t.x = 57;
			return t;
		};
		return CreateTeahouseSkin$Skin39;
	})(eui.Skin);

	function CreateTeahouseSkin() {
		_super.call(this);
		this.skinParts = ["maskBg","tab1","tab2","createBtn","eightRoundChk","sixteenRoundChk","payWay1","payWay2","roomCardNumTF3","roomCardNumTF4","zjhGroup","tenRoundChk","tweentyRoundChk","zuozhuang1","zuozhuang2","zuozhuang3","zuozhuang4","beishu1","beishu2","beishu3","difen1","difen2","difen3","pay1","pay2","roomCardNumTF","roomCardNumTF2","nnGroup","mainView"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.mainView_i()];
	}
	var _proto = CreateTeahouseSkin.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainView_i = function () {
		var t = new eui.Group();
		this.mainView = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.tab1_i(),this.tab2_i(),this.createBtn_i(),this.zjhGroup_i(),this.nnGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "iframe_createBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.createTeahouseTitle";
		t.x = 423;
		t.y = 7;
		return t;
	};
	_proto.tab1_i = function () {
		var t = new eui.Image();
		this.tab1 = t;
		t.source = "hall_json.gameTab1";
		t.x = 45;
		t.y = 67;
		return t;
	};
	_proto.tab2_i = function () {
		var t = new eui.Image();
		this.tab2 = t;
		t.source = "hall_json.gameTab2_select";
		t.x = 231;
		t.y = 67;
		return t;
	};
	_proto.createBtn_i = function () {
		var t = new eui.Button();
		this.createBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 508;
		t.skinName = CreateTeahouseSkin$Skin21;
		return t;
	};
	_proto.zjhGroup_i = function () {
		var t = new eui.Group();
		this.zjhGroup = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 154;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Label1_i(),this.eightRoundChk_i(),this.sixteenRoundChk_i(),this._Label2_i(),this.payWay1_i(),this.payWay2_i(),this.roomCardNumTF3_i(),this.roomCardNumTF4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "createRoomTileBg_png";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "createRoomTileBg_png";
		t.y = 69;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "选择模式";
		t.textColor = 0x8a4b0b;
		t.x = 63;
		t.y = 13;
		return t;
	};
	_proto.eightRoundChk_i = function () {
		var t = new eui.CheckBox();
		this.eightRoundChk = t;
		t.label = "8局";
		t.selected = true;
		t.x = 209;
		t.y = 14;
		t.skinName = CreateTeahouseSkin$Skin22;
		return t;
	};
	_proto.sixteenRoundChk_i = function () {
		var t = new eui.CheckBox();
		this.sixteenRoundChk = t;
		t.label = "16局";
		t.x = 478;
		t.y = 14;
		t.skinName = CreateTeahouseSkin$Skin23;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "支付方式";
		t.textColor = 0x8a4b0b;
		t.x = 63;
		t.y = 82;
		return t;
	};
	_proto.payWay1_i = function () {
		var t = new eui.CheckBox();
		this.payWay1 = t;
		t.label = "AA支付";
		t.selected = true;
		t.visible = true;
		t.x = 209;
		t.y = 83;
		t.skinName = CreateTeahouseSkin$Skin24;
		return t;
	};
	_proto.payWay2_i = function () {
		var t = new eui.CheckBox();
		this.payWay2 = t;
		t.label = "房主支付";
		t.selected = false;
		t.x = 399;
		t.y = 83;
		t.skinName = CreateTeahouseSkin$Skin25;
		return t;
	};
	_proto.roomCardNumTF3_i = function () {
		var t = new eui.Label();
		this.roomCardNumTF3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "（0张房卡）";
		t.textColor = 0x8a4b0b;
		t.x = 303;
		t.y = 12;
		return t;
	};
	_proto.roomCardNumTF4_i = function () {
		var t = new eui.Label();
		this.roomCardNumTF4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "（0张房卡）";
		t.textColor = 0x8a4b0b;
		t.x = 596;
		t.y = 15;
		return t;
	};
	_proto.nnGroup_i = function () {
		var t = new eui.Group();
		this.nnGroup = t;
		t.horizontalCenter = 0;
		t.y = 154;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Label3_i(),this.tenRoundChk_i(),this.tweentyRoundChk_i(),this._Label4_i(),this.zuozhuang1_i(),this.zuozhuang2_i(),this.zuozhuang3_i(),this.zuozhuang4_i(),this._Label5_i(),this.beishu1_i(),this.beishu2_i(),this.beishu3_i(),this._Label6_i(),this.difen1_i(),this.difen2_i(),this.difen3_i(),this._Label7_i(),this.pay1_i(),this.pay2_i(),this.roomCardNumTF_i(),this.roomCardNumTF2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "createRoomTileBg_png";
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "createRoomTileBg_png";
		t.y = 69;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "createRoomTileBg_png";
		t.y = 138;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "createRoomTileBg_png";
		t.y = 207;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "createRoomTileBg_png";
		t.y = 276;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "局数";
		t.textColor = 0x8a4b0b;
		t.x = 63;
		t.y = 13;
		return t;
	};
	_proto.tenRoundChk_i = function () {
		var t = new eui.CheckBox();
		this.tenRoundChk = t;
		t.label = "10局";
		t.selected = true;
		t.x = 149;
		t.y = 14;
		t.skinName = CreateTeahouseSkin$Skin26;
		return t;
	};
	_proto.tweentyRoundChk_i = function () {
		var t = new eui.CheckBox();
		this.tweentyRoundChk = t;
		t.label = "20局";
		t.x = 435;
		t.y = 14;
		t.skinName = CreateTeahouseSkin$Skin27;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "坐庄";
		t.textColor = 0x8a4b0b;
		t.x = 63;
		t.y = 82;
		return t;
	};
	_proto.zuozhuang1_i = function () {
		var t = new eui.CheckBox();
		this.zuozhuang1 = t;
		t.label = "轮流坐庄";
		t.selected = true;
		t.x = 149;
		t.y = 83;
		t.skinName = CreateTeahouseSkin$Skin28;
		return t;
	};
	_proto.zuozhuang2_i = function () {
		var t = new eui.CheckBox();
		this.zuozhuang2 = t;
		t.label = "霸王庄";
		t.x = 349;
		t.y = 83;
		t.skinName = CreateTeahouseSkin$Skin29;
		return t;
	};
	_proto.zuozhuang3_i = function () {
		var t = new eui.CheckBox();
		this.zuozhuang3 = t;
		t.label = "看牌抢庄";
		t.x = 513;
		t.y = 83;
		t.skinName = CreateTeahouseSkin$Skin30;
		return t;
	};
	_proto.zuozhuang4_i = function () {
		var t = new eui.CheckBox();
		this.zuozhuang4 = t;
		t.label = "赢家当庄";
		t.x = 719;
		t.y = 83;
		t.skinName = CreateTeahouseSkin$Skin31;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "倍数";
		t.textColor = 0x8a4b0b;
		t.x = 63;
		t.y = 151;
		return t;
	};
	_proto.beishu1_i = function () {
		var t = new eui.CheckBox();
		this.beishu1 = t;
		t.label = "三倍封顶";
		t.selected = true;
		t.x = 149;
		t.y = 152;
		t.skinName = CreateTeahouseSkin$Skin32;
		return t;
	};
	_proto.beishu2_i = function () {
		var t = new eui.CheckBox();
		this.beishu2 = t;
		t.label = "五倍封顶";
		t.x = 355;
		t.y = 152;
		t.skinName = CreateTeahouseSkin$Skin33;
		return t;
	};
	_proto.beishu3_i = function () {
		var t = new eui.CheckBox();
		this.beishu3 = t;
		t.label = "不限制";
		t.x = 571;
		t.y = 152;
		t.skinName = CreateTeahouseSkin$Skin34;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "底分";
		t.textColor = 0x8a4b0b;
		t.x = 63;
		t.y = 220;
		return t;
	};
	_proto.difen1_i = function () {
		var t = new eui.CheckBox();
		this.difen1 = t;
		t.label = "1/2/3/4";
		t.selected = true;
		t.x = 149;
		t.y = 221;
		t.skinName = CreateTeahouseSkin$Skin35;
		return t;
	};
	_proto.difen2_i = function () {
		var t = new eui.CheckBox();
		this.difen2 = t;
		t.label = "2/4/6/8";
		t.x = 355;
		t.y = 221;
		t.skinName = CreateTeahouseSkin$Skin36;
		return t;
	};
	_proto.difen3_i = function () {
		var t = new eui.CheckBox();
		this.difen3 = t;
		t.label = "3/6/9/12";
		t.x = 571;
		t.y = 221;
		t.skinName = CreateTeahouseSkin$Skin37;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "支付方式";
		t.textColor = 0x8a4b0b;
		t.x = 63;
		t.y = 289;
		return t;
	};
	_proto.pay1_i = function () {
		var t = new eui.CheckBox();
		this.pay1 = t;
		t.label = "AA支付";
		t.selected = true;
		t.visible = true;
		t.x = 209;
		t.y = 290;
		t.skinName = CreateTeahouseSkin$Skin38;
		return t;
	};
	_proto.pay2_i = function () {
		var t = new eui.CheckBox();
		this.pay2 = t;
		t.label = "房主支付";
		t.selected = false;
		t.x = 399;
		t.y = 290;
		t.skinName = CreateTeahouseSkin$Skin39;
		return t;
	};
	_proto.roomCardNumTF_i = function () {
		var t = new eui.Label();
		this.roomCardNumTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "（0张房卡）";
		t.textColor = 0x8a4b0b;
		t.x = 271;
		t.y = 15;
		return t;
	};
	_proto.roomCardNumTF2_i = function () {
		var t = new eui.Label();
		this.roomCardNumTF2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "（0张房卡）";
		t.textColor = 0x8a4b0b;
		t.x = 566;
		t.y = 15;
		return t;
	};
	return CreateTeahouseSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/hall/JoinRoomSkin.exml'] = window.JoinRoomSkin = (function (_super) {
	__extends(JoinRoomSkin, _super);
	var JoinRoomSkin$Skin40 = 	(function (_super) {
		__extends(JoinRoomSkin$Skin40, _super);
		function JoinRoomSkin$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = JoinRoomSkin$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.data1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JoinRoomSkin$Skin40;
	})(eui.Skin);

	function JoinRoomSkin() {
		_super.call(this);
		this.skinParts = ["maskBg","numTF","btn1","btn2","btn3","btn4","btn5","btn6","btn7","btn8","btn9","btn11","btn10","btn0","mainView"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.mainView_i()];
	}
	var _proto = JoinRoomSkin.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainView_i = function () {
		var t = new eui.Group();
		this.mainView = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.numTF_i(),this.btn1_i(),this.btn2_i(),this.btn3_i(),this.btn4_i(),this.btn5_i(),this.btn6_i(),this.btn7_i(),this.btn8_i(),this.btn9_i(),this.btn11_i(),this.btn10_i(),this.btn0_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "iframe_joinRoomBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.joinRoomTitle";
		t.x = 227;
		t.y = 7;
		return t;
	};
	_proto.numTF_i = function () {
		var t = new eui.Label();
		this.numTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 48;
		t.text = "请输入房间ID";
		t.textColor = 0x64330c;
		t.width = 539;
		t.x = 28;
		t.y = 72;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Button();
		this.btn1 = t;
		t.label = "";
		t.x = 22;
		t.y = 134;
		t.skinName = JoinRoomSkin$Skin40;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Image();
		this.btn2 = t;
		t.source = "hall_json.data2";
		t.x = 206;
		t.y = 134;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new eui.Image();
		this.btn3 = t;
		t.source = "hall_json.data3";
		t.x = 392;
		t.y = 134;
		return t;
	};
	_proto.btn4_i = function () {
		var t = new eui.Image();
		this.btn4 = t;
		t.source = "hall_json.data4";
		t.x = 22;
		t.y = 215;
		return t;
	};
	_proto.btn5_i = function () {
		var t = new eui.Image();
		this.btn5 = t;
		t.source = "hall_json.data5";
		t.x = 206;
		t.y = 215;
		return t;
	};
	_proto.btn6_i = function () {
		var t = new eui.Image();
		this.btn6 = t;
		t.source = "hall_json.data6";
		t.x = 392;
		t.y = 215;
		return t;
	};
	_proto.btn7_i = function () {
		var t = new eui.Image();
		this.btn7 = t;
		t.source = "hall_json.data7";
		t.x = 22;
		t.y = 296;
		return t;
	};
	_proto.btn8_i = function () {
		var t = new eui.Image();
		this.btn8 = t;
		t.source = "hall_json.data8";
		t.x = 206;
		t.y = 296;
		return t;
	};
	_proto.btn9_i = function () {
		var t = new eui.Image();
		this.btn9 = t;
		t.source = "hall_json.data9";
		t.x = 392;
		t.y = 296;
		return t;
	};
	_proto.btn11_i = function () {
		var t = new eui.Image();
		this.btn11 = t;
		t.source = "hall_json.delBtn";
		t.x = 392;
		t.y = 377;
		return t;
	};
	_proto.btn10_i = function () {
		var t = new eui.Image();
		this.btn10 = t;
		t.source = "hall_json.reInputBtn";
		t.x = 22;
		t.y = 377;
		return t;
	};
	_proto.btn0_i = function () {
		var t = new eui.Image();
		this.btn0 = t;
		t.source = "hall_json.data0";
		t.x = 206;
		t.y = 377;
		return t;
	};
	return JoinRoomSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/hall/JoinTeahouseSkin.exml'] = window.JoinTeahouseSkin = (function (_super) {
	__extends(JoinTeahouseSkin, _super);
	var JoinTeahouseSkin$Skin41 = 	(function (_super) {
		__extends(JoinTeahouseSkin$Skin41, _super);
		function JoinTeahouseSkin$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = JoinTeahouseSkin$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.data1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return JoinTeahouseSkin$Skin41;
	})(eui.Skin);

	function JoinTeahouseSkin() {
		_super.call(this);
		this.skinParts = ["maskBg","numTF","btn1","btn2","btn3","btn4","btn5","btn6","btn7","btn8","btn9","btn11","btn10","btn0","mainView"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.mainView_i()];
	}
	var _proto = JoinTeahouseSkin.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainView_i = function () {
		var t = new eui.Group();
		this.mainView = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.numTF_i(),this.btn1_i(),this.btn2_i(),this.btn3_i(),this.btn4_i(),this.btn5_i(),this.btn6_i(),this.btn7_i(),this.btn8_i(),this.btn9_i(),this.btn11_i(),this.btn10_i(),this.btn0_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "iframe_joinRoomBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.joinTeahouseTitle";
		t.x = 227;
		t.y = 7;
		return t;
	};
	_proto.numTF_i = function () {
		var t = new eui.Label();
		this.numTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 48;
		t.text = "请输入茶楼ID";
		t.textColor = 0x64330c;
		t.width = 539;
		t.x = 28;
		t.y = 72;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Button();
		this.btn1 = t;
		t.label = "";
		t.x = 22;
		t.y = 134;
		t.skinName = JoinTeahouseSkin$Skin41;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Image();
		this.btn2 = t;
		t.source = "hall_json.data2";
		t.x = 206;
		t.y = 134;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new eui.Image();
		this.btn3 = t;
		t.source = "hall_json.data3";
		t.x = 392;
		t.y = 134;
		return t;
	};
	_proto.btn4_i = function () {
		var t = new eui.Image();
		this.btn4 = t;
		t.source = "hall_json.data4";
		t.x = 22;
		t.y = 215;
		return t;
	};
	_proto.btn5_i = function () {
		var t = new eui.Image();
		this.btn5 = t;
		t.source = "hall_json.data5";
		t.x = 206;
		t.y = 215;
		return t;
	};
	_proto.btn6_i = function () {
		var t = new eui.Image();
		this.btn6 = t;
		t.source = "hall_json.data6";
		t.x = 392;
		t.y = 215;
		return t;
	};
	_proto.btn7_i = function () {
		var t = new eui.Image();
		this.btn7 = t;
		t.source = "hall_json.data7";
		t.x = 22;
		t.y = 296;
		return t;
	};
	_proto.btn8_i = function () {
		var t = new eui.Image();
		this.btn8 = t;
		t.source = "hall_json.data8";
		t.x = 206;
		t.y = 296;
		return t;
	};
	_proto.btn9_i = function () {
		var t = new eui.Image();
		this.btn9 = t;
		t.source = "hall_json.data9";
		t.x = 392;
		t.y = 296;
		return t;
	};
	_proto.btn11_i = function () {
		var t = new eui.Image();
		this.btn11 = t;
		t.source = "hall_json.delBtn";
		t.x = 392;
		t.y = 377;
		return t;
	};
	_proto.btn10_i = function () {
		var t = new eui.Image();
		this.btn10 = t;
		t.source = "hall_json.reInputBtn";
		t.x = 22;
		t.y = 377;
		return t;
	};
	_proto.btn0_i = function () {
		var t = new eui.Image();
		this.btn0 = t;
		t.source = "hall_json.data0";
		t.x = 206;
		t.y = 377;
		return t;
	};
	return JoinTeahouseSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/hall/PlayerDetailInfoSkin.exml'] = window.PlayerDetailInfoSkin = (function (_super) {
	__extends(PlayerDetailInfoSkin, _super);
	function PlayerDetailInfoSkin() {
		_super.call(this);
		this.skinParts = ["maskBg","nickNameTF","idTF","ipTF","mainView"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.mainView_i()];
	}
	var _proto = PlayerDetailInfoSkin.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainView_i = function () {
		var t = new eui.Group();
		this.mainView = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.nickNameTF_i(),this.idTF_i(),this.ipTF_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "iframe_playerInfoBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nickNameTF_i = function () {
		var t = new eui.Label();
		this.nickNameTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "--";
		t.textAlign = "left";
		t.textColor = 0x372d11;
		t.width = 300;
		t.x = 276;
		t.y = 89;
		return t;
	};
	_proto.idTF_i = function () {
		var t = new eui.Label();
		this.idTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "ID:";
		t.textAlign = "left";
		t.textColor = 0x372d11;
		t.width = 300;
		t.x = 276;
		t.y = 135;
		return t;
	};
	_proto.ipTF_i = function () {
		var t = new eui.Label();
		this.ipTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "IP:";
		t.textColor = 0x372d11;
		t.width = 300;
		t.x = 276;
		t.y = 183;
		return t;
	};
	return PlayerDetailInfoSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/hall/TuiGuangSkin.exml'] = window.TuiGuangSkin = (function (_super) {
	__extends(TuiGuangSkin, _super);
	var TuiGuangSkin$Skin42 = 	(function (_super) {
		__extends(TuiGuangSkin$Skin42, _super);
		function TuiGuangSkin$Skin42() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TuiGuangSkin$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.bindBtn3";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TuiGuangSkin$Skin42;
	})(eui.Skin);

	function TuiGuangSkin() {
		_super.call(this);
		this.skinParts = ["maskBg","inputTF","bindBtn","mainView"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.mainView_i()];
	}
	var _proto = TuiGuangSkin.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainView_i = function () {
		var t = new eui.Group();
		this.mainView = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.inputTF_i(),this.bindBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tgBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.inputTF_i = function () {
		var t = new eui.Label();
		this.inputTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.text = "请输入推广码";
		t.textColor = 0x000000;
		t.width = 492;
		t.x = 66;
		t.y = 133;
		return t;
	};
	_proto.bindBtn_i = function () {
		var t = new eui.Button();
		this.bindBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 227;
		t.skinName = TuiGuangSkin$Skin42;
		return t;
	};
	return TuiGuangSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/hall/ZhanjiSkin.exml'] = window.ZhanjiSkin = (function (_super) {
	__extends(ZhanjiSkin, _super);
	function ZhanjiSkin() {
		_super.call(this);
		this.skinParts = ["maskBg","tab1","tab2","list","mainView"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.mainView_i()];
	}
	var _proto = ZhanjiSkin.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainView_i = function () {
		var t = new eui.Group();
		this.mainView = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.tab1_i(),this.tab2_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "iframe_zhanjiBg2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tab1_i = function () {
		var t = new eui.Image();
		this.tab1 = t;
		t.source = "hall_json.gameTab1_select";
		t.x = 316;
		t.y = 78;
		return t;
	};
	_proto.tab2_i = function () {
		var t = new eui.Image();
		this.tab2 = t;
		t.source = "hall_json.gameTab2";
		t.x = 502;
		t.y = 78;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 418;
		t.horizontalCenter = 0;
		t.width = 938;
		t.y = 154;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetY = 0;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 13;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	return ZhanjiSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/hall/ZhanjiTileSkin.exml'] = window.ZhanjiTileSkin = (function (_super) {
	__extends(ZhanjiTileSkin, _super);
	function ZhanjiTileSkin() {
		_super.call(this);
		this.skinParts = ["rankTF","roomNumTF","timeTF","detailTF"];
		
		this.elementsContent = [this._Image1_i(),this.rankTF_i(),this.roomNumTF_i(),this.timeTF_i(),this.detailTF_i()];
	}
	var _proto = ZhanjiTileSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "zhanjiTileBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rankTF_i = function () {
		var t = new eui.Label();
		this.rankTF = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0x814314;
		t.verticalCenter = 0;
		t.x = 25;
		return t;
	};
	_proto.roomNumTF_i = function () {
		var t = new eui.Label();
		this.roomNumTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "房号：0";
		t.textColor = 0x814314;
		t.x = 77;
		t.y = 26;
		return t;
	};
	_proto.timeTF_i = function () {
		var t = new eui.Label();
		this.timeTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "1990/1/1 00:00:00";
		t.textColor = 0x814314;
		t.x = 77;
		t.y = 77;
		return t;
	};
	_proto.detailTF_i = function () {
		var t = new eui.Label();
		this.detailTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 113;
		t.lineSpacing = 10;
		t.multiline = true;
		t.size = 24;
		t.text = "";
		t.textColor = 0x814314;
		t.verticalCenter = 0;
		t.width = 609;
		t.wordWrap = true;
		t.x = 324;
		return t;
	};
	return ZhanjiTileSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/HallBottomMenuSkin.exml'] = window.HallBottomMenuSkin = (function (_super) {
	__extends(HallBottomMenuSkin, _super);
	var HallBottomMenuSkin$Skin43 = 	(function (_super) {
		__extends(HallBottomMenuSkin$Skin43, _super);
		function HallBottomMenuSkin$Skin43() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallBottomMenuSkin$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.mallBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HallBottomMenuSkin$Skin43;
	})(eui.Skin);

	var HallBottomMenuSkin$Skin44 = 	(function (_super) {
		__extends(HallBottomMenuSkin$Skin44, _super);
		function HallBottomMenuSkin$Skin44() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallBottomMenuSkin$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.activityBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HallBottomMenuSkin$Skin44;
	})(eui.Skin);

	var HallBottomMenuSkin$Skin45 = 	(function (_super) {
		__extends(HallBottomMenuSkin$Skin45, _super);
		function HallBottomMenuSkin$Skin45() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallBottomMenuSkin$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.choujiangBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HallBottomMenuSkin$Skin45;
	})(eui.Skin);

	var HallBottomMenuSkin$Skin46 = 	(function (_super) {
		__extends(HallBottomMenuSkin$Skin46, _super);
		function HallBottomMenuSkin$Skin46() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallBottomMenuSkin$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.shareBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HallBottomMenuSkin$Skin46;
	})(eui.Skin);

	var HallBottomMenuSkin$Skin47 = 	(function (_super) {
		__extends(HallBottomMenuSkin$Skin47, _super);
		function HallBottomMenuSkin$Skin47() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallBottomMenuSkin$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.tuiguangBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HallBottomMenuSkin$Skin47;
	})(eui.Skin);

	function HallBottomMenuSkin() {
		_super.call(this);
		this.skinParts = ["mallBtn","activityBtn","choujiangBtn","shareBtn","tuiguangBtn"];
		
		this.elementsContent = [this.mallBtn_i(),this.activityBtn_i(),this.choujiangBtn_i(),this.shareBtn_i(),this.tuiguangBtn_i()];
	}
	var _proto = HallBottomMenuSkin.prototype;

	_proto.mallBtn_i = function () {
		var t = new eui.Button();
		this.mallBtn = t;
		t.label = "";
		t.x = 499;
		t.y = 0;
		t.skinName = HallBottomMenuSkin$Skin43;
		return t;
	};
	_proto.activityBtn_i = function () {
		var t = new eui.Button();
		this.activityBtn = t;
		t.label = "";
		t.x = 374;
		t.y = 16;
		t.skinName = HallBottomMenuSkin$Skin44;
		return t;
	};
	_proto.choujiangBtn_i = function () {
		var t = new eui.Button();
		this.choujiangBtn = t;
		t.label = "";
		t.x = 249;
		t.y = 16;
		t.skinName = HallBottomMenuSkin$Skin45;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new eui.Button();
		this.shareBtn = t;
		t.label = "";
		t.y = 15;
		t.skinName = HallBottomMenuSkin$Skin46;
		return t;
	};
	_proto.tuiguangBtn_i = function () {
		var t = new eui.Button();
		this.tuiguangBtn = t;
		t.label = "";
		t.x = 124;
		t.y = 17;
		t.skinName = HallBottomMenuSkin$Skin47;
		return t;
	};
	return HallBottomMenuSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/HallRightMenuSkin.exml'] = window.HallRightMenuSkin = (function (_super) {
	__extends(HallRightMenuSkin, _super);
	var HallRightMenuSkin$Skin48 = 	(function (_super) {
		__extends(HallRightMenuSkin$Skin48, _super);
		function HallRightMenuSkin$Skin48() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallRightMenuSkin$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.createTeahouseBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HallRightMenuSkin$Skin48;
	})(eui.Skin);

	var HallRightMenuSkin$Skin49 = 	(function (_super) {
		__extends(HallRightMenuSkin$Skin49, _super);
		function HallRightMenuSkin$Skin49() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallRightMenuSkin$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.joinTeahouseBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HallRightMenuSkin$Skin49;
	})(eui.Skin);

	var HallRightMenuSkin$Skin50 = 	(function (_super) {
		__extends(HallRightMenuSkin$Skin50, _super);
		function HallRightMenuSkin$Skin50() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallRightMenuSkin$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.createRoomBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HallRightMenuSkin$Skin50;
	})(eui.Skin);

	var HallRightMenuSkin$Skin51 = 	(function (_super) {
		__extends(HallRightMenuSkin$Skin51, _super);
		function HallRightMenuSkin$Skin51() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallRightMenuSkin$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.joinRoomBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HallRightMenuSkin$Skin51;
	})(eui.Skin);

	function HallRightMenuSkin() {
		_super.call(this);
		this.skinParts = ["createTeahouseBtn","joinTeahouseBtn","createRoomBtn","joinRoomBtn"];
		
		this.elementsContent = [this.createTeahouseBtn_i(),this.joinTeahouseBtn_i(),this.createRoomBtn_i(),this.joinRoomBtn_i()];
	}
	var _proto = HallRightMenuSkin.prototype;

	_proto.createTeahouseBtn_i = function () {
		var t = new eui.Button();
		this.createTeahouseBtn = t;
		t.label = "";
		t.x = 14;
		t.skinName = HallRightMenuSkin$Skin48;
		return t;
	};
	_proto.joinTeahouseBtn_i = function () {
		var t = new eui.Button();
		this.joinTeahouseBtn = t;
		t.label = "";
		t.y = 71;
		t.skinName = HallRightMenuSkin$Skin49;
		return t;
	};
	_proto.createRoomBtn_i = function () {
		var t = new eui.Button();
		this.createRoomBtn = t;
		t.label = "";
		t.x = 11;
		t.y = 183;
		t.skinName = HallRightMenuSkin$Skin50;
		return t;
	};
	_proto.joinRoomBtn_i = function () {
		var t = new eui.Button();
		this.joinRoomBtn = t;
		t.label = "";
		t.x = 5;
		t.y = 271;
		t.skinName = HallRightMenuSkin$Skin51;
		return t;
	};
	return HallRightMenuSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/SelfInfoSkin.exml'] = window.SelfInfoSkin = (function (_super) {
	__extends(SelfInfoSkin, _super);
	var SelfInfoSkin$Skin52 = 	(function (_super) {
		__extends(SelfInfoSkin$Skin52, _super);
		function SelfInfoSkin$Skin52() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SelfInfoSkin$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.roomCardBg";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.source = "hall_json.coinAddBtn";
			t.x = 146;
			t.y = 6;
			return t;
		};
		return SelfInfoSkin$Skin52;
	})(eui.Skin);

	function SelfInfoSkin() {
		_super.call(this);
		this.skinParts = ["nickNameTF","idTF","roomCardBtn","roomCardTF"];
		
		this.elementsContent = [this._Image1_i(),this.nickNameTF_i(),this.idTF_i(),this.roomCardBtn_i(),this.roomCardTF_i()];
	}
	var _proto = SelfInfoSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.selfInfoBg";
		return t;
	};
	_proto.nickNameTF_i = function () {
		var t = new eui.Label();
		this.nickNameTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 17;
		t.text = "昵称";
		t.textAlign = "left";
		t.width = 142;
		t.x = 62;
		t.y = 11;
		return t;
	};
	_proto.idTF_i = function () {
		var t = new eui.Label();
		this.idTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 17;
		t.text = "ID:";
		t.textAlign = "left";
		t.width = 142;
		t.x = 62;
		t.y = 30;
		return t;
	};
	_proto.roomCardBtn_i = function () {
		var t = new eui.Button();
		this.roomCardBtn = t;
		t.label = "0";
		t.x = 226;
		t.y = 1;
		t.skinName = SelfInfoSkin$Skin52;
		return t;
	};
	_proto.roomCardTF_i = function () {
		var t = new eui.Label();
		this.roomCardTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 25;
		t.text = "0";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.width = 103;
		t.x = 270;
		t.y = 13;
		return t;
	};
	return SelfInfoSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/HallTopMenuSkin.exml'] = window.HallTopMenuSkin = (function (_super) {
	__extends(HallTopMenuSkin, _super);
	var HallTopMenuSkin$Skin53 = 	(function (_super) {
		__extends(HallTopMenuSkin$Skin53, _super);
		function HallTopMenuSkin$Skin53() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallTopMenuSkin$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.quitBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HallTopMenuSkin$Skin53;
	})(eui.Skin);

	var HallTopMenuSkin$Skin54 = 	(function (_super) {
		__extends(HallTopMenuSkin$Skin54, _super);
		function HallTopMenuSkin$Skin54() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallTopMenuSkin$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.zhanjiBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HallTopMenuSkin$Skin54;
	})(eui.Skin);

	var HallTopMenuSkin$Skin55 = 	(function (_super) {
		__extends(HallTopMenuSkin$Skin55, _super);
		function HallTopMenuSkin$Skin55() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HallTopMenuSkin$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.setBtn";
			t.percentWidth = 100;
			return t;
		};
		return HallTopMenuSkin$Skin55;
	})(eui.Skin);

	function HallTopMenuSkin() {
		_super.call(this);
		this.skinParts = ["quitBtn","zhanjiBtn","setBtn"];
		
		this.elementsContent = [this.quitBtn_i(),this.zhanjiBtn_i(),this.setBtn_i()];
	}
	var _proto = HallTopMenuSkin.prototype;

	_proto.quitBtn_i = function () {
		var t = new eui.Button();
		this.quitBtn = t;
		t.label = "";
		t.x = 139;
		t.y = 6;
		t.skinName = HallTopMenuSkin$Skin53;
		return t;
	};
	_proto.zhanjiBtn_i = function () {
		var t = new eui.Button();
		this.zhanjiBtn = t;
		t.label = "";
		t.x = 67;
		t.skinName = HallTopMenuSkin$Skin54;
		return t;
	};
	_proto.setBtn_i = function () {
		var t = new eui.Button();
		this.setBtn = t;
		t.label = "";
		t.skinName = HallTopMenuSkin$Skin55;
		return t;
	};
	return HallTopMenuSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/MyTeahouseListSkin.exml'] = window.MyTeahouseListSkin = (function (_super) {
	__extends(MyTeahouseListSkin, _super);
	function MyTeahouseListSkin() {
		_super.call(this);
		this.skinParts = ["btn","list"];
		
		this.elementsContent = [this._Image1_i(),this.btn_i(),this._Scroller1_i()];
	}
	var _proto = MyTeahouseListSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "myteahouseList_bg_png";
		return t;
	};
	_proto.btn_i = function () {
		var t = new eui.Image();
		this.btn = t;
		t.source = "hall_json.myTeahouseBtn";
		t.x = 270;
		t.y = 4;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 400;
		t.width = 249;
		t.x = 10;
		t.y = 18;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 5;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	return MyTeahouseListSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/HallSkin.exml'] = window.HallSkin = (function (_super) {
	__extends(HallSkin, _super);
	function HallSkin() {
		_super.call(this);
		this.skinParts = ["selfInfo","topMenu","roleImg","myTeahouseList","rightMenu","bottomMenu"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this._Image1_i(),this.selfInfo_i(),this.topMenu_i(),this.roleImg_i(),this.myTeahouseList_i(),this.rightMenu_i(),this.bottomMenu_i()];
	}
	var _proto = HallSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "hall_bg_jpg";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.selfInfo_i = function () {
		var t = new eui.Component();
		this.selfInfo = t;
		t.skinName = "SelfInfoSkin";
		t.x = 24;
		t.y = 13;
		return t;
	};
	_proto.topMenu_i = function () {
		var t = new eui.Component();
		this.topMenu = t;
		t.right = 14;
		t.skinName = "HallTopMenuSkin";
		t.y = 12;
		return t;
	};
	_proto.roleImg_i = function () {
		var t = new eui.Image();
		this.roleImg = t;
		t.source = "role2_png";
		t.x = 0;
		t.y = 152;
		return t;
	};
	_proto.myTeahouseList_i = function () {
		var t = new eui.Component();
		this.myTeahouseList = t;
		t.skinName = "MyTeahouseListSkin";
		t.x = -270;
		t.y = 162;
		return t;
	};
	_proto.rightMenu_i = function () {
		var t = new eui.Component();
		this.rightMenu = t;
		t.skinName = "HallRightMenuSkin";
		t.top = 164;
		t.x = 814;
		return t;
	};
	_proto.bottomMenu_i = function () {
		var t = new eui.Component();
		this.bottomMenu = t;
		t.bottom = 0;
		t.right = 0;
		t.skinName = "HallBottomMenuSkin";
		return t;
	};
	return HallSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/MallSkin.exml'] = window.MallSkin = (function (_super) {
	__extends(MallSkin, _super);
	var MallSkin$Skin56 = 	(function (_super) {
		__extends(MallSkin$Skin56, _super);
		function MallSkin$Skin56() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MallSkin$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.copyBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MallSkin$Skin56;
	})(eui.Skin);

	var MallSkin$Skin57 = 	(function (_super) {
		__extends(MallSkin$Skin57, _super);
		function MallSkin$Skin57() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MallSkin$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.copyBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MallSkin$Skin57;
	})(eui.Skin);

	function MallSkin() {
		_super.call(this);
		this.skinParts = ["maskBg","wxTF1","copyBtn1","mobileTF","copyBtn2","mainView"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.mainView_i()];
	}
	var _proto = MallSkin.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainView_i = function () {
		var t = new eui.Group();
		this.mainView = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i(),this.wxTF1_i(),this.copyBtn1_i(),this.mobileTF_i(),this.copyBtn2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "iframe_buyBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "关注微信公众号：天乐棋牌";
		t.textColor = 0x372d11;
		t.x = 36;
		t.y = 82;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "代理购卡享超大优惠，咨询微信号：";
		t.textColor = 0x372d11;
		t.x = 36;
		t.y = 124;
		return t;
	};
	_proto.wxTF1_i = function () {
		var t = new eui.Label();
		this.wxTF1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "微信号：17302139567";
		t.textColor = 0x372d11;
		t.x = 36;
		t.y = 181;
		return t;
	};
	_proto.copyBtn1_i = function () {
		var t = new eui.Button();
		this.copyBtn1 = t;
		t.label = "";
		t.x = 275;
		t.y = 178;
		t.skinName = MallSkin$Skin56;
		return t;
	};
	_proto.mobileTF_i = function () {
		var t = new eui.Label();
		this.mobileTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "公众号关注：杏趣社区";
		t.textColor = 0x372d11;
		t.x = 36;
		t.y = 252;
		return t;
	};
	_proto.copyBtn2_i = function () {
		var t = new eui.Button();
		this.copyBtn2 = t;
		t.label = "";
		t.x = 275;
		t.y = 249;
		t.skinName = MallSkin$Skin57;
		return t;
	};
	return MallSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/MyTeahouseListItemSkin.exml'] = window.MyTeahouseListItemSkin = (function (_super) {
	__extends(MyTeahouseListItemSkin, _super);
	function MyTeahouseListItemSkin() {
		_super.call(this);
		this.skinParts = ["gameNameTF","bossTF"];
		
		this.elementsContent = [this._Image1_i(),this.gameNameTF_i(),this.bossTF_i()];
	}
	var _proto = MyTeahouseListItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "myTeahouseTileBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gameNameTF_i = function () {
		var t = new eui.Label();
		this.gameNameTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "牛牛";
		t.textColor = 0x7a3176;
		t.width = 160;
		t.x = 80;
		t.y = 14;
		return t;
	};
	_proto.bossTF_i = function () {
		var t = new eui.Label();
		this.bossTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 19;
		t.text = "老板：";
		t.textColor = 0x5a349b;
		t.width = 158;
		t.x = 82;
		t.y = 47;
		return t;
	};
	return MyTeahouseListItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/nn/NiuNiuBattleSkin.exml'] = window.NiuNiuBattleSkin = (function (_super) {
	__extends(NiuNiuBattleSkin, _super);
	var NiuNiuBattleSkin$Skin58 = 	(function (_super) {
		__extends(NiuNiuBattleSkin$Skin58, _super);
		function NiuNiuBattleSkin$Skin58() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuNiuBattleSkin$Skin58.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_quitBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NiuNiuBattleSkin$Skin58;
	})(eui.Skin);

	var NiuNiuBattleSkin$Skin59 = 	(function (_super) {
		__extends(NiuNiuBattleSkin$Skin59, _super);
		function NiuNiuBattleSkin$Skin59() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuNiuBattleSkin$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_helpBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NiuNiuBattleSkin$Skin59;
	})(eui.Skin);

	var NiuNiuBattleSkin$Skin60 = 	(function (_super) {
		__extends(NiuNiuBattleSkin$Skin60, _super);
		function NiuNiuBattleSkin$Skin60() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuNiuBattleSkin$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_setBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NiuNiuBattleSkin$Skin60;
	})(eui.Skin);

	var NiuNiuBattleSkin$Skin61 = 	(function (_super) {
		__extends(NiuNiuBattleSkin$Skin61, _super);
		function NiuNiuBattleSkin$Skin61() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuNiuBattleSkin$Skin61.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_chatBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NiuNiuBattleSkin$Skin61;
	})(eui.Skin);

	var NiuNiuBattleSkin$Skin62 = 	(function (_super) {
		__extends(NiuNiuBattleSkin$Skin62, _super);
		function NiuNiuBattleSkin$Skin62() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuNiuBattleSkin$Skin62.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_recordBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NiuNiuBattleSkin$Skin62;
	})(eui.Skin);

	var NiuNiuBattleSkin$Skin63 = 	(function (_super) {
		__extends(NiuNiuBattleSkin$Skin63, _super);
		function NiuNiuBattleSkin$Skin63() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuNiuBattleSkin$Skin63.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_inviteBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NiuNiuBattleSkin$Skin63;
	})(eui.Skin);

	var NiuNiuBattleSkin$Skin64 = 	(function (_super) {
		__extends(NiuNiuBattleSkin$Skin64, _super);
		function NiuNiuBattleSkin$Skin64() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuNiuBattleSkin$Skin64.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_readyBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NiuNiuBattleSkin$Skin64;
	})(eui.Skin);

	var NiuNiuBattleSkin$Skin65 = 	(function (_super) {
		__extends(NiuNiuBattleSkin$Skin65, _super);
		function NiuNiuBattleSkin$Skin65() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuNiuBattleSkin$Skin65.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_buqiangBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NiuNiuBattleSkin$Skin65;
	})(eui.Skin);

	var NiuNiuBattleSkin$Skin66 = 	(function (_super) {
		__extends(NiuNiuBattleSkin$Skin66, _super);
		function NiuNiuBattleSkin$Skin66() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuNiuBattleSkin$Skin66.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_1times";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NiuNiuBattleSkin$Skin66;
	})(eui.Skin);

	var NiuNiuBattleSkin$Skin67 = 	(function (_super) {
		__extends(NiuNiuBattleSkin$Skin67, _super);
		function NiuNiuBattleSkin$Skin67() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuNiuBattleSkin$Skin67.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_2times";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NiuNiuBattleSkin$Skin67;
	})(eui.Skin);

	var NiuNiuBattleSkin$Skin68 = 	(function (_super) {
		__extends(NiuNiuBattleSkin$Skin68, _super);
		function NiuNiuBattleSkin$Skin68() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuNiuBattleSkin$Skin68.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_3times";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NiuNiuBattleSkin$Skin68;
	})(eui.Skin);

	var NiuNiuBattleSkin$Skin69 = 	(function (_super) {
		__extends(NiuNiuBattleSkin$Skin69, _super);
		function NiuNiuBattleSkin$Skin69() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuNiuBattleSkin$Skin69.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_4times";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NiuNiuBattleSkin$Skin69;
	})(eui.Skin);

	var NiuNiuBattleSkin$Skin70 = 	(function (_super) {
		__extends(NiuNiuBattleSkin$Skin70, _super);
		function NiuNiuBattleSkin$Skin70() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NiuNiuBattleSkin$Skin70.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_kaipaiBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NiuNiuBattleSkin$Skin70;
	})(eui.Skin);

	function NiuNiuBattleSkin() {
		_super.call(this);
		this.skinParts = ["timeTF","infoTF","betScore3","bet3","readyed3","face3","zhuang3","nickName3","score3","score3_1","cardGroup3_0","cardGroup3_1","cardGroup3_2","cardGroup3_3","cardGroup3_4","cardGroup3","qiangFlag3","cardType3","offline3","e3","yuyin3","player3","betScore2","bet2","readyed2","face2","zhuang2","nickName2","score2","score2_1","cardGroup2_0","cardGroup2_1","cardGroup2_2","cardGroup2_3","cardGroup2_4","cardGroup2","qiangFlag2","cardType2","offline2","e2","yuyin2","player2","betScore1","bet1","readyed1","face1","zhuang1","nickName1","score1","score1_1","cardGroup1_0","cardGroup1_1","cardGroup1_2","cardGroup1_3","cardGroup1_4","cardGroup1","qiangFlag1","cardType1","offline1","e1","yuyin1","player1","betScore4","bet4","readyed4","face4","zhuang4","nickName4","score4","score4_1","cardGroup4_0","cardGroup4_1","cardGroup4_2","cardGroup4_3","cardGroup4_4","cardGroup4","qiangFlag4","cardType4","offline4","e4","yuyin4","player4","betScore5","bet5","readyed5","face5","zhuang5","nickName5","score5","score5_1","cardGroup5_0","cardGroup5_1","cardGroup5_2","cardGroup5_3","cardGroup5_4","cardGroup5","qiangFlag5","cardType5","offline5","e5","yuyin5","player5","quitBtn","helpBtn","setBtn","chatBtn","recordBtn","nickName0","score0","score0_1","face0","zhuang0","e0","yuyin0","player0","inviteBtn","readyBtn","countDownTF","countDown","qiang0","qiang1","qiang2","qiang3","qiang4","qiangzhuangGroup","bankerIcon","cardGroup0_0","cardGroup0_1","cardGroup0_2","cardGroup0_3","cardGroup0_4","arrow","cardType0","cardGroup0","liangpaiBtn","readyed0","qiangFlag0","betGroup","betScore0","bet0","chatTF0","chat0","chatTF5","chat5","chatTF4","chat4","chatTF3","chat3","chatTF2","chat2","chatTF1","chat1","resultTF"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.timeTF_i(),this.infoTF_i(),this.player3_i(),this.player2_i(),this.player1_i(),this.player4_i(),this.player5_i(),this.quitBtn_i(),this.helpBtn_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this.setBtn_i(),this.chatBtn_i(),this.recordBtn_i(),this.player0_i(),this.inviteBtn_i(),this.readyBtn_i(),this.countDown_i(),this.qiangzhuangGroup_i(),this.bankerIcon_i(),this.cardGroup0_i(),this.liangpaiBtn_i(),this.readyed0_i(),this.qiangFlag0_i(),this.betGroup_i(),this.bet0_i(),this.chat0_i(),this.chat5_i(),this.chat4_i(),this.chat3_i(),this.chat2_i(),this.chat1_i(),this.resultTF_i()];
	}
	var _proto = NiuNiuBattleSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "n_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "n_infoBg_png";
		t.x = 81;
		t.y = 4;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.n_timeBg";
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto.timeTF_i = function () {
		var t = new eui.Label();
		this.timeTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "00:00";
		t.textAlign = "center";
		t.x = 8;
		t.y = 13;
		return t;
	};
	_proto.infoTF_i = function () {
		var t = new eui.Label();
		this.infoTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "茶楼编号:";
		t.textAlign = "left";
		t.width = 556;
		t.x = 88;
		t.y = 13;
		return t;
	};
	_proto.player3_i = function () {
		var t = new eui.Group();
		this.player3 = t;
		t.x = 480;
		t.y = 46;
		t.elementsContent = [this._Image4_i(),this.bet3_i(),this.readyed3_i(),this.face3_i(),this.zhuang3_i(),this.nickName3_i(),this.score3_i(),this.score3_1_i(),this.cardGroup3_i(),this.qiangFlag3_i(),this.cardType3_i(),this.offline3_i(),this.e3_i(),this.yuyin3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.nn_playerBg2";
		return t;
	};
	_proto.bet3_i = function () {
		var t = new eui.Group();
		this.bet3 = t;
		t.x = -116;
		t.y = 29;
		t.elementsContent = [this._Image5_i(),this.betScore3_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.n_goldBg";
		return t;
	};
	_proto.betScore3_i = function () {
		var t = new eui.Label();
		this.betScore3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.width = 68;
		t.x = 34;
		t.y = 10;
		return t;
	};
	_proto.readyed3_i = function () {
		var t = new eui.Image();
		this.readyed3 = t;
		t.source = "nnGame2_json.n_readyed";
		t.x = 65;
		t.y = 114;
		return t;
	};
	_proto.face3_i = function () {
		var t = new eui.Image();
		this.face3 = t;
		t.height = 54;
		t.source = "game_json.testFace";
		t.width = 54;
		t.x = 12;
		t.y = 12;
		return t;
	};
	_proto.zhuang3_i = function () {
		var t = new eui.Image();
		this.zhuang3 = t;
		t.source = "nnGame2_json.n_zhuangKuang2";
		t.x = 12;
		t.y = -8;
		return t;
	};
	_proto.nickName3_i = function () {
		var t = new eui.Label();
		this.nickName3 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "--";
		t.textAlign = "left";
		t.width = 99;
		t.x = 78;
		t.y = 12;
		return t;
	};
	_proto.score3_i = function () {
		var t = new eui.Label();
		this.score3 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.width = 62;
		t.x = 91;
		t.y = 44;
		return t;
	};
	_proto.score3_1_i = function () {
		var t = new eui.Label();
		this.score3_1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.visible = false;
		t.width = 62;
		t.x = 91;
		t.y = 44;
		return t;
	};
	_proto.cardGroup3_i = function () {
		var t = new eui.Group();
		this.cardGroup3 = t;
		t.x = -75;
		t.y = 91;
		t.elementsContent = [this.cardGroup3_0_i(),this.cardGroup3_1_i(),this.cardGroup3_2_i(),this.cardGroup3_3_i(),this.cardGroup3_4_i()];
		return t;
	};
	_proto.cardGroup3_0_i = function () {
		var t = new eui.Image();
		this.cardGroup3_0 = t;
		t.source = "poker5_json.cardBg2";
		return t;
	};
	_proto.cardGroup3_1_i = function () {
		var t = new eui.Image();
		this.cardGroup3_1 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 20;
		return t;
	};
	_proto.cardGroup3_2_i = function () {
		var t = new eui.Image();
		this.cardGroup3_2 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 40;
		return t;
	};
	_proto.cardGroup3_3_i = function () {
		var t = new eui.Image();
		this.cardGroup3_3 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 60;
		return t;
	};
	_proto.cardGroup3_4_i = function () {
		var t = new eui.Image();
		this.cardGroup3_4 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 80;
		return t;
	};
	_proto.qiangFlag3_i = function () {
		var t = new eui.Image();
		this.qiangFlag3 = t;
		t.source = "nnGame2_json.n_buqiang";
		t.x = -39.5;
		t.y = 111;
		return t;
	};
	_proto.cardType3_i = function () {
		var t = new eui.Image();
		this.cardType3 = t;
		t.anchorOffsetX = 46;
		t.anchorOffsetY = 24;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniu_json.niu0";
		t.x = -9;
		t.y = 130;
		return t;
	};
	_proto.offline3_i = function () {
		var t = new eui.Image();
		this.offline3 = t;
		t.source = "nnGame2_json.offline";
		t.touchEnabled = false;
		t.x = 10;
		t.y = 54;
		return t;
	};
	_proto.e3_i = function () {
		var t = new eui.Image();
		this.e3 = t;
		t.source = "emotion_json.bq1";
		t.visible = false;
		t.x = 9;
		t.y = 8;
		return t;
	};
	_proto.yuyin3_i = function () {
		var t = new eui.Image();
		this.yuyin3 = t;
		t.source = "common_json.yuyinIcon";
		t.x = 175;
		t.y = 39;
		return t;
	};
	_proto.player2_i = function () {
		var t = new eui.Group();
		this.player2 = t;
		t.x = 816;
		t.y = 103;
		t.elementsContent = [this._Image6_i(),this.bet2_i(),this.readyed2_i(),this.face2_i(),this.zhuang2_i(),this.nickName2_i(),this.score2_i(),this.score2_1_i(),this.cardGroup2_i(),this.qiangFlag2_i(),this.cardType2_i(),this.offline2_i(),this.e2_i(),this.yuyin2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.nn_playerBg2";
		return t;
	};
	_proto.bet2_i = function () {
		var t = new eui.Group();
		this.bet2 = t;
		t.x = 77;
		t.y = 88;
		t.elementsContent = [this._Image7_i(),this.betScore2_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.n_goldBg";
		return t;
	};
	_proto.betScore2_i = function () {
		var t = new eui.Label();
		this.betScore2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.width = 68;
		t.x = 34;
		t.y = 10;
		return t;
	};
	_proto.readyed2_i = function () {
		var t = new eui.Image();
		this.readyed2 = t;
		t.source = "nnGame2_json.n_readyed";
		t.x = -38;
		t.y = 115;
		return t;
	};
	_proto.face2_i = function () {
		var t = new eui.Image();
		this.face2 = t;
		t.height = 54;
		t.source = "game_json.testFace";
		t.width = 54;
		t.x = 12;
		t.y = 12;
		return t;
	};
	_proto.zhuang2_i = function () {
		var t = new eui.Image();
		this.zhuang2 = t;
		t.source = "nnGame2_json.n_zhuangKuang2";
		t.x = 12;
		t.y = -8;
		return t;
	};
	_proto.nickName2_i = function () {
		var t = new eui.Label();
		this.nickName2 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "--";
		t.textAlign = "left";
		t.width = 99;
		t.x = 78;
		t.y = 12;
		return t;
	};
	_proto.score2_i = function () {
		var t = new eui.Label();
		this.score2 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.width = 62;
		t.x = 91;
		t.y = 44;
		return t;
	};
	_proto.score2_1_i = function () {
		var t = new eui.Label();
		this.score2_1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.visible = false;
		t.width = 62;
		t.x = 91;
		t.y = 44;
		return t;
	};
	_proto.cardGroup2_i = function () {
		var t = new eui.Group();
		this.cardGroup2 = t;
		t.x = -75;
		t.y = 91;
		t.elementsContent = [this.cardGroup2_0_i(),this.cardGroup2_1_i(),this.cardGroup2_2_i(),this.cardGroup2_3_i(),this.cardGroup2_4_i()];
		return t;
	};
	_proto.cardGroup2_0_i = function () {
		var t = new eui.Image();
		this.cardGroup2_0 = t;
		t.source = "poker5_json.cardBg2";
		return t;
	};
	_proto.cardGroup2_1_i = function () {
		var t = new eui.Image();
		this.cardGroup2_1 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 20;
		return t;
	};
	_proto.cardGroup2_2_i = function () {
		var t = new eui.Image();
		this.cardGroup2_2 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 40;
		return t;
	};
	_proto.cardGroup2_3_i = function () {
		var t = new eui.Image();
		this.cardGroup2_3 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 60;
		return t;
	};
	_proto.cardGroup2_4_i = function () {
		var t = new eui.Image();
		this.cardGroup2_4 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 80;
		return t;
	};
	_proto.qiangFlag2_i = function () {
		var t = new eui.Image();
		this.qiangFlag2 = t;
		t.source = "nnGame2_json.n_buqiang";
		t.x = -39.5;
		t.y = 111;
		return t;
	};
	_proto.cardType2_i = function () {
		var t = new eui.Image();
		this.cardType2 = t;
		t.anchorOffsetX = 46;
		t.anchorOffsetY = 24;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniu_json.niu0";
		t.x = -9;
		t.y = 130;
		return t;
	};
	_proto.offline2_i = function () {
		var t = new eui.Image();
		this.offline2 = t;
		t.source = "nnGame2_json.offline";
		t.touchEnabled = false;
		t.x = 10;
		t.y = 54;
		return t;
	};
	_proto.e2_i = function () {
		var t = new eui.Image();
		this.e2 = t;
		t.source = "emotion_json.bq1";
		t.visible = false;
		t.x = 9;
		t.y = 8;
		return t;
	};
	_proto.yuyin2_i = function () {
		var t = new eui.Image();
		this.yuyin2 = t;
		t.source = "common_json.yuyinIcon";
		t.x = -27;
		t.y = 45;
		return t;
	};
	_proto.player1_i = function () {
		var t = new eui.Group();
		this.player1 = t;
		t.x = 949;
		t.y = 310;
		t.elementsContent = [this._Image8_i(),this.bet1_i(),this.readyed1_i(),this.face1_i(),this.zhuang1_i(),this.nickName1_i(),this.score1_i(),this.score1_1_i(),this.cardGroup1_i(),this.qiangFlag1_i(),this.cardType1_i(),this.offline1_i(),this.e1_i(),this.yuyin1_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.nn_playerBg2";
		return t;
	};
	_proto.bet1_i = function () {
		var t = new eui.Group();
		this.bet1 = t;
		t.x = 77;
		t.y = 88;
		t.elementsContent = [this._Image9_i(),this.betScore1_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.n_goldBg";
		return t;
	};
	_proto.betScore1_i = function () {
		var t = new eui.Label();
		this.betScore1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.width = 68;
		t.x = 34;
		t.y = 10;
		return t;
	};
	_proto.readyed1_i = function () {
		var t = new eui.Image();
		this.readyed1 = t;
		t.source = "nnGame2_json.n_readyed";
		t.x = -38;
		t.y = 115;
		return t;
	};
	_proto.face1_i = function () {
		var t = new eui.Image();
		this.face1 = t;
		t.height = 54;
		t.source = "game_json.testFace";
		t.width = 54;
		t.x = 12;
		t.y = 12;
		return t;
	};
	_proto.zhuang1_i = function () {
		var t = new eui.Image();
		this.zhuang1 = t;
		t.source = "nnGame2_json.n_zhuangKuang2";
		t.x = 12;
		t.y = -8;
		return t;
	};
	_proto.nickName1_i = function () {
		var t = new eui.Label();
		this.nickName1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "--";
		t.textAlign = "left";
		t.width = 99;
		t.x = 78;
		t.y = 12;
		return t;
	};
	_proto.score1_i = function () {
		var t = new eui.Label();
		this.score1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.width = 62;
		t.x = 91;
		t.y = 44;
		return t;
	};
	_proto.score1_1_i = function () {
		var t = new eui.Label();
		this.score1_1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.visible = false;
		t.width = 62;
		t.x = 91;
		t.y = 44;
		return t;
	};
	_proto.cardGroup1_i = function () {
		var t = new eui.Group();
		this.cardGroup1 = t;
		t.x = -145;
		t.elementsContent = [this.cardGroup1_0_i(),this.cardGroup1_1_i(),this.cardGroup1_2_i(),this.cardGroup1_3_i(),this.cardGroup1_4_i()];
		return t;
	};
	_proto.cardGroup1_0_i = function () {
		var t = new eui.Image();
		this.cardGroup1_0 = t;
		t.source = "poker5_json.cardBg2";
		return t;
	};
	_proto.cardGroup1_1_i = function () {
		var t = new eui.Image();
		this.cardGroup1_1 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 20;
		return t;
	};
	_proto.cardGroup1_2_i = function () {
		var t = new eui.Image();
		this.cardGroup1_2 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 40;
		return t;
	};
	_proto.cardGroup1_3_i = function () {
		var t = new eui.Image();
		this.cardGroup1_3 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 60;
		return t;
	};
	_proto.cardGroup1_4_i = function () {
		var t = new eui.Image();
		this.cardGroup1_4 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 80;
		return t;
	};
	_proto.qiangFlag1_i = function () {
		var t = new eui.Image();
		this.qiangFlag1 = t;
		t.source = "nnGame2_json.n_buqiang";
		t.x = -112;
		t.y = 21;
		return t;
	};
	_proto.cardType1_i = function () {
		var t = new eui.Image();
		this.cardType1 = t;
		t.anchorOffsetX = 46;
		t.anchorOffsetY = 24;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniu_json.niu0";
		t.x = -75.6;
		t.y = 38.2;
		return t;
	};
	_proto.offline1_i = function () {
		var t = new eui.Image();
		this.offline1 = t;
		t.source = "nnGame2_json.offline";
		t.touchEnabled = false;
		t.x = 10;
		t.y = 54;
		return t;
	};
	_proto.e1_i = function () {
		var t = new eui.Image();
		this.e1 = t;
		t.source = "emotion_json.bq1";
		t.visible = false;
		t.x = 9;
		t.y = 8;
		return t;
	};
	_proto.yuyin1_i = function () {
		var t = new eui.Image();
		this.yuyin1 = t;
		t.source = "common_json.yuyinIcon";
		t.x = -27;
		t.y = 45;
		return t;
	};
	_proto.player4_i = function () {
		var t = new eui.Group();
		this.player4 = t;
		t.x = 120;
		t.y = 102;
		t.elementsContent = [this._Image10_i(),this.bet4_i(),this.readyed4_i(),this.face4_i(),this.zhuang4_i(),this.nickName4_i(),this.score4_i(),this.score4_1_i(),this.cardGroup4_i(),this.qiangFlag4_i(),this.cardType4_i(),this.offline4_i(),this.e4_i(),this.yuyin4_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.nn_playerBg2";
		return t;
	};
	_proto.bet4_i = function () {
		var t = new eui.Group();
		this.bet4 = t;
		t.x = -2;
		t.y = 86;
		t.elementsContent = [this._Image11_i(),this.betScore4_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.n_goldBg";
		return t;
	};
	_proto.betScore4_i = function () {
		var t = new eui.Label();
		this.betScore4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.width = 68;
		t.x = 34;
		t.y = 10;
		return t;
	};
	_proto.readyed4_i = function () {
		var t = new eui.Image();
		this.readyed4 = t;
		t.source = "nnGame2_json.n_readyed";
		t.x = 222;
		t.y = 30;
		return t;
	};
	_proto.face4_i = function () {
		var t = new eui.Image();
		this.face4 = t;
		t.height = 54;
		t.source = "game_json.testFace";
		t.width = 54;
		t.x = 12;
		t.y = 12;
		return t;
	};
	_proto.zhuang4_i = function () {
		var t = new eui.Image();
		this.zhuang4 = t;
		t.source = "nnGame2_json.n_zhuangKuang2";
		t.x = 12;
		t.y = -8;
		return t;
	};
	_proto.nickName4_i = function () {
		var t = new eui.Label();
		this.nickName4 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "--";
		t.textAlign = "left";
		t.width = 99;
		t.x = 78;
		t.y = 12;
		return t;
	};
	_proto.score4_i = function () {
		var t = new eui.Label();
		this.score4 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.width = 62;
		t.x = 91;
		t.y = 45;
		return t;
	};
	_proto.score4_1_i = function () {
		var t = new eui.Label();
		this.score4_1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.visible = false;
		t.width = 62;
		t.x = 91;
		t.y = 44;
		return t;
	};
	_proto.cardGroup4_i = function () {
		var t = new eui.Group();
		this.cardGroup4 = t;
		t.x = 141;
		t.y = 92;
		t.elementsContent = [this.cardGroup4_0_i(),this.cardGroup4_1_i(),this.cardGroup4_2_i(),this.cardGroup4_3_i(),this.cardGroup4_4_i()];
		return t;
	};
	_proto.cardGroup4_0_i = function () {
		var t = new eui.Image();
		this.cardGroup4_0 = t;
		t.source = "poker5_json.cardBg2";
		return t;
	};
	_proto.cardGroup4_1_i = function () {
		var t = new eui.Image();
		this.cardGroup4_1 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 20;
		return t;
	};
	_proto.cardGroup4_2_i = function () {
		var t = new eui.Image();
		this.cardGroup4_2 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 40;
		return t;
	};
	_proto.cardGroup4_3_i = function () {
		var t = new eui.Image();
		this.cardGroup4_3 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 60;
		return t;
	};
	_proto.cardGroup4_4_i = function () {
		var t = new eui.Image();
		this.cardGroup4_4 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 80;
		return t;
	};
	_proto.qiangFlag4_i = function () {
		var t = new eui.Image();
		this.qiangFlag4 = t;
		t.source = "nnGame2_json.n_buqiang";
		t.x = 177;
		t.y = 112;
		return t;
	};
	_proto.cardType4_i = function () {
		var t = new eui.Image();
		this.cardType4 = t;
		t.anchorOffsetX = 46;
		t.anchorOffsetY = 24;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniu_json.niu0";
		t.x = 209;
		t.y = 130;
		return t;
	};
	_proto.offline4_i = function () {
		var t = new eui.Image();
		this.offline4 = t;
		t.source = "nnGame2_json.offline";
		t.touchEnabled = false;
		t.x = 10;
		t.y = 54;
		return t;
	};
	_proto.e4_i = function () {
		var t = new eui.Image();
		this.e4 = t;
		t.source = "emotion_json.bq1";
		t.visible = false;
		t.x = 9;
		t.y = 8;
		return t;
	};
	_proto.yuyin4_i = function () {
		var t = new eui.Image();
		this.yuyin4 = t;
		t.source = "common_json.yuyinIcon";
		t.x = 175;
		t.y = 39;
		return t;
	};
	_proto.player5_i = function () {
		var t = new eui.Group();
		this.player5 = t;
		t.x = 6;
		t.y = 310;
		t.elementsContent = [this._Image12_i(),this.bet5_i(),this.readyed5_i(),this.face5_i(),this.zhuang5_i(),this.nickName5_i(),this.score5_i(),this.score5_1_i(),this.cardGroup5_i(),this.qiangFlag5_i(),this.cardType5_i(),this.offline5_i(),this.e5_i(),this.yuyin5_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.nn_playerBg2";
		return t;
	};
	_proto.bet5_i = function () {
		var t = new eui.Group();
		this.bet5 = t;
		t.x = -2;
		t.y = 86;
		t.elementsContent = [this._Image13_i(),this.betScore5_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.n_goldBg";
		return t;
	};
	_proto.betScore5_i = function () {
		var t = new eui.Label();
		this.betScore5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.width = 68;
		t.x = 34;
		t.y = 10;
		return t;
	};
	_proto.readyed5_i = function () {
		var t = new eui.Image();
		this.readyed5 = t;
		t.source = "nnGame2_json.n_readyed";
		t.x = 222;
		t.y = 30;
		return t;
	};
	_proto.face5_i = function () {
		var t = new eui.Image();
		this.face5 = t;
		t.height = 54;
		t.source = "game_json.testFace";
		t.width = 54;
		t.x = 12;
		t.y = 12;
		return t;
	};
	_proto.zhuang5_i = function () {
		var t = new eui.Image();
		this.zhuang5 = t;
		t.source = "nnGame2_json.n_zhuangKuang2";
		t.x = 12;
		t.y = -8;
		return t;
	};
	_proto.nickName5_i = function () {
		var t = new eui.Label();
		this.nickName5 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "--";
		t.textAlign = "left";
		t.width = 99;
		t.x = 78;
		t.y = 12;
		return t;
	};
	_proto.score5_i = function () {
		var t = new eui.Label();
		this.score5 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.width = 62;
		t.x = 91;
		t.y = 44;
		return t;
	};
	_proto.score5_1_i = function () {
		var t = new eui.Label();
		this.score5_1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.visible = false;
		t.width = 62;
		t.x = 91;
		t.y = 44;
		return t;
	};
	_proto.cardGroup5_i = function () {
		var t = new eui.Group();
		this.cardGroup5 = t;
		t.x = 195;
		t.elementsContent = [this.cardGroup5_0_i(),this.cardGroup5_1_i(),this.cardGroup5_2_i(),this.cardGroup5_3_i(),this.cardGroup5_4_i()];
		return t;
	};
	_proto.cardGroup5_0_i = function () {
		var t = new eui.Image();
		this.cardGroup5_0 = t;
		t.source = "poker5_json.cardBg2";
		return t;
	};
	_proto.cardGroup5_1_i = function () {
		var t = new eui.Image();
		this.cardGroup5_1 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 20;
		return t;
	};
	_proto.cardGroup5_2_i = function () {
		var t = new eui.Image();
		this.cardGroup5_2 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 40;
		return t;
	};
	_proto.cardGroup5_3_i = function () {
		var t = new eui.Image();
		this.cardGroup5_3 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 60;
		return t;
	};
	_proto.cardGroup5_4_i = function () {
		var t = new eui.Image();
		this.cardGroup5_4 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 80;
		return t;
	};
	_proto.qiangFlag5_i = function () {
		var t = new eui.Image();
		this.qiangFlag5 = t;
		t.source = "nnGame2_json.n_buqiang";
		t.x = 228;
		t.y = 22;
		return t;
	};
	_proto.cardType5_i = function () {
		var t = new eui.Image();
		this.cardType5 = t;
		t.anchorOffsetX = 46;
		t.anchorOffsetY = 24;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniu_json.niu0";
		t.x = 260;
		t.y = 40;
		return t;
	};
	_proto.offline5_i = function () {
		var t = new eui.Image();
		this.offline5 = t;
		t.source = "nnGame2_json.offline";
		t.touchEnabled = false;
		t.x = 10;
		t.y = 54;
		return t;
	};
	_proto.e5_i = function () {
		var t = new eui.Image();
		this.e5 = t;
		t.source = "emotion_json.bq1";
		t.visible = false;
		t.x = 9;
		t.y = 8;
		return t;
	};
	_proto.yuyin5_i = function () {
		var t = new eui.Image();
		this.yuyin5 = t;
		t.source = "common_json.yuyinIcon";
		t.x = 175;
		t.y = 39;
		return t;
	};
	_proto.quitBtn_i = function () {
		var t = new eui.Button();
		this.quitBtn = t;
		t.label = "";
		t.right = 21;
		t.y = 25;
		t.skinName = NiuNiuBattleSkin$Skin58;
		return t;
	};
	_proto.helpBtn_i = function () {
		var t = new eui.Button();
		this.helpBtn = t;
		t.label = "";
		t.right = 21;
		t.y = 108;
		t.skinName = NiuNiuBattleSkin$Skin59;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.bottom = 1;
		t.source = "n_bottomeBg_png";
		t.x = 0;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.bottom = 3;
		t.source = "nnGame2_json.nameBg";
		t.x = 191;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.bottom = 3;
		t.source = "nnGame2_json.n_scoreBg";
		t.x = 426;
		return t;
	};
	_proto.setBtn_i = function () {
		var t = new eui.Button();
		this.setBtn = t;
		t.bottom = 3;
		t.label = "";
		t.right = 230;
		t.skinName = NiuNiuBattleSkin$Skin60;
		return t;
	};
	_proto.chatBtn_i = function () {
		var t = new eui.Button();
		this.chatBtn = t;
		t.bottom = 2;
		t.label = "";
		t.right = 131;
		t.skinName = NiuNiuBattleSkin$Skin61;
		return t;
	};
	_proto.recordBtn_i = function () {
		var t = new eui.Button();
		this.recordBtn = t;
		t.bottom = 2;
		t.label = "";
		t.right = 41;
		t.skinName = NiuNiuBattleSkin$Skin62;
		return t;
	};
	_proto.player0_i = function () {
		var t = new eui.Group();
		this.player0 = t;
		t.x = 37;
		t.y = 544;
		t.elementsContent = [this.nickName0_i(),this.score0_i(),this.score0_1_i(),this._Image17_i(),this.face0_i(),this.zhuang0_i(),this.e0_i(),this.yuyin0_i()];
		return t;
	};
	_proto.nickName0_i = function () {
		var t = new eui.Label();
		this.nickName0 = t;
		t.anchorOffsetX = 0;
		t.bottom = 9;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "--";
		t.textAlign = "center";
		t.width = 149;
		t.x = 148;
		return t;
	};
	_proto.score0_i = function () {
		var t = new eui.Label();
		this.score0 = t;
		t.anchorOffsetX = 0;
		t.bottom = 9;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xddc687;
		t.width = 149;
		t.x = 380;
		return t;
	};
	_proto.score0_1_i = function () {
		var t = new eui.Label();
		this.score0_1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.visible = false;
		t.width = 62;
		t.x = 91;
		t.y = 44;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.n_faceKuang";
		return t;
	};
	_proto.face0_i = function () {
		var t = new eui.Image();
		this.face0 = t;
		t.height = 94;
		t.source = "game_json.testFace";
		t.width = 98;
		return t;
	};
	_proto.zhuang0_i = function () {
		var t = new eui.Image();
		this.zhuang0 = t;
		t.source = "nnGame2_json.n_zhuangKuang";
		t.y = -38;
		return t;
	};
	_proto.e0_i = function () {
		var t = new eui.Image();
		this.e0 = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "emotion_json.bq1";
		t.visible = false;
		t.x = -12;
		t.y = -12;
		return t;
	};
	_proto.yuyin0_i = function () {
		var t = new eui.Image();
		this.yuyin0 = t;
		t.source = "common_json.yuyinIcon";
		t.visible = false;
		t.x = 106;
		t.y = 54;
		return t;
	};
	_proto.inviteBtn_i = function () {
		var t = new eui.Button();
		this.inviteBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 241;
		t.skinName = NiuNiuBattleSkin$Skin63;
		return t;
	};
	_proto.readyBtn_i = function () {
		var t = new eui.Button();
		this.readyBtn = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.y = 324;
		t.skinName = NiuNiuBattleSkin$Skin64;
		return t;
	};
	_proto.countDown_i = function () {
		var t = new eui.Group();
		this.countDown = t;
		t.bottom = 60;
		t.x = 176;
		t.elementsContent = [this._Image18_i(),this.countDownTF_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.clockBg";
		return t;
	};
	_proto.countDownTF_i = function () {
		var t = new eui.Label();
		this.countDownTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.text = "10";
		t.textAlign = "center";
		t.width = 59;
		t.x = 10;
		t.y = 32;
		return t;
	};
	_proto.qiangzhuangGroup_i = function () {
		var t = new eui.Group();
		this.qiangzhuangGroup = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 390;
		t.elementsContent = [this.qiang0_i(),this.qiang1_i(),this.qiang2_i(),this.qiang3_i(),this.qiang4_i()];
		return t;
	};
	_proto.qiang0_i = function () {
		var t = new eui.Button();
		this.qiang0 = t;
		t.label = "";
		t.skinName = NiuNiuBattleSkin$Skin65;
		return t;
	};
	_proto.qiang1_i = function () {
		var t = new eui.Button();
		this.qiang1 = t;
		t.label = "";
		t.x = 161;
		t.skinName = NiuNiuBattleSkin$Skin66;
		return t;
	};
	_proto.qiang2_i = function () {
		var t = new eui.Button();
		this.qiang2 = t;
		t.label = "";
		t.x = 325;
		t.skinName = NiuNiuBattleSkin$Skin67;
		return t;
	};
	_proto.qiang3_i = function () {
		var t = new eui.Button();
		this.qiang3 = t;
		t.label = "";
		t.x = 484;
		t.skinName = NiuNiuBattleSkin$Skin68;
		return t;
	};
	_proto.qiang4_i = function () {
		var t = new eui.Button();
		this.qiang4 = t;
		t.label = "";
		t.x = 638;
		t.skinName = NiuNiuBattleSkin$Skin69;
		return t;
	};
	_proto.bankerIcon_i = function () {
		var t = new eui.Image();
		this.bankerIcon = t;
		t.source = "nnGame2_json.n_bankerIcon";
		t.x = 534;
		t.y = 311;
		return t;
	};
	_proto.cardGroup0_i = function () {
		var t = new eui.Group();
		this.cardGroup0 = t;
		t.x = 317;
		t.y = 444;
		t.elementsContent = [this.cardGroup0_0_i(),this.cardGroup0_1_i(),this.cardGroup0_2_i(),this.cardGroup0_3_i(),this.cardGroup0_4_i(),this.arrow_i(),this.cardType0_i()];
		return t;
	};
	_proto.cardGroup0_0_i = function () {
		var t = new eui.Image();
		this.cardGroup0_0 = t;
		t.source = "poker5_json.cardBg";
		return t;
	};
	_proto.cardGroup0_1_i = function () {
		var t = new eui.Image();
		this.cardGroup0_1 = t;
		t.source = "poker5_json.cardBg";
		t.x = 108;
		return t;
	};
	_proto.cardGroup0_2_i = function () {
		var t = new eui.Image();
		this.cardGroup0_2 = t;
		t.source = "poker5_json.cardBg";
		t.x = 216;
		return t;
	};
	_proto.cardGroup0_3_i = function () {
		var t = new eui.Image();
		this.cardGroup0_3 = t;
		t.source = "poker5_json.cardBg";
		t.x = 324;
		return t;
	};
	_proto.cardGroup0_4_i = function () {
		var t = new eui.Image();
		this.cardGroup0_4 = t;
		t.source = "poker5_json.cardBg";
		t.x = 432;
		return t;
	};
	_proto.arrow_i = function () {
		var t = new eui.Image();
		this.arrow = t;
		t.source = "nnGame2_json.n_arrow";
		t.x = 441;
		t.y = 24;
		return t;
	};
	_proto.cardType0_i = function () {
		var t = new eui.Image();
		this.cardType0 = t;
		t.horizontalCenter = 0;
		t.source = "niuniu_json.niu0";
		t.y = 42;
		return t;
	};
	_proto.liangpaiBtn_i = function () {
		var t = new eui.Button();
		this.liangpaiBtn = t;
		t.label = "";
		t.x = 880;
		t.y = 478;
		t.skinName = NiuNiuBattleSkin$Skin70;
		return t;
	};
	_proto.readyed0_i = function () {
		var t = new eui.Image();
		this.readyed0 = t;
		t.horizontalCenter = 15;
		t.source = "nnGame2_json.n_readyed";
		t.y = 496.5;
		return t;
	};
	_proto.qiangFlag0_i = function () {
		var t = new eui.Image();
		this.qiangFlag0 = t;
		t.horizontalCenter = 9;
		t.source = "nnGame2_json.n_qiangzhuang1";
		t.y = 369;
		return t;
	};
	_proto.betGroup_i = function () {
		var t = new eui.Group();
		this.betGroup = t;
		t.horizontalCenter = 0;
		t.y = 390;
		return t;
	};
	_proto.bet0_i = function () {
		var t = new eui.Group();
		this.bet0 = t;
		t.horizontalCenter = 0;
		t.y = 396;
		t.elementsContent = [this._Image19_i(),this.betScore0_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.n_goldBg";
		t.x = 20;
		return t;
	};
	_proto.betScore0_i = function () {
		var t = new eui.Label();
		this.betScore0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.width = 68;
		t.x = 34;
		t.y = 10;
		return t;
	};
	_proto.chat0_i = function () {
		var t = new eui.Group();
		this.chat0 = t;
		t.x = 8;
		t.y = 457;
		t.elementsContent = [this._Image20_i(),this.chatTF0_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "common_json.chatpaopao";
		return t;
	};
	_proto.chatTF0_i = function () {
		var t = new eui.Label();
		this.chatTF0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 37;
		t.size = 20;
		t.text = "--";
		t.width = 180;
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto.chat5_i = function () {
		var t = new eui.Group();
		this.chat5 = t;
		t.x = 8;
		t.y = 253;
		t.elementsContent = [this._Image21_i(),this.chatTF5_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "common_json.chatpaopao";
		return t;
	};
	_proto.chatTF5_i = function () {
		var t = new eui.Label();
		this.chatTF5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 37;
		t.size = 20;
		t.text = "--";
		t.width = 180;
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto.chat4_i = function () {
		var t = new eui.Group();
		this.chat4 = t;
		t.x = 105;
		t.y = 53;
		t.elementsContent = [this._Image22_i(),this.chatTF4_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "common_json.chatpaopao";
		return t;
	};
	_proto.chatTF4_i = function () {
		var t = new eui.Label();
		this.chatTF4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 37;
		t.size = 20;
		t.text = "--";
		t.width = 180;
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto.chat3_i = function () {
		var t = new eui.Group();
		this.chat3 = t;
		t.x = 468;
		t.y = 13;
		t.elementsContent = [this._Image23_i(),this.chatTF3_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "common_json.chatpaopao";
		return t;
	};
	_proto.chatTF3_i = function () {
		var t = new eui.Label();
		this.chatTF3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 37;
		t.size = 20;
		t.text = "--";
		t.width = 180;
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto.chat2_i = function () {
		var t = new eui.Group();
		this.chat2 = t;
		t.x = 800;
		t.y = 40;
		t.elementsContent = [this._Image24_i(),this.chatTF2_i()];
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "common_json.chatpaopao";
		return t;
	};
	_proto.chatTF2_i = function () {
		var t = new eui.Label();
		this.chatTF2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 37;
		t.size = 20;
		t.text = "--";
		t.width = 180;
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto.chat1_i = function () {
		var t = new eui.Group();
		this.chat1 = t;
		t.x = 929;
		t.y = 234;
		t.elementsContent = [this._Image25_i(),this.chatTF1_i()];
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "common_json.chatpaopao";
		return t;
	};
	_proto.chatTF1_i = function () {
		var t = new eui.Label();
		this.chatTF1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 37;
		t.size = 20;
		t.text = "--";
		t.width = 180;
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto.resultTF_i = function () {
		var t = new eui.Label();
		this.resultTF = t;
		t.anchorOffsetX = 0;
		t.text = "0+0+0=无牛";
		t.width = 234;
		t.x = 265;
		t.y = 404;
		return t;
	};
	return NiuNiuBattleSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/nn/NiuNiuHelpSkin.exml'] = window.NiuNiuHelpSkin = (function (_super) {
	__extends(NiuNiuHelpSkin, _super);
	function NiuNiuHelpSkin() {
		_super.call(this);
		this.skinParts = ["maskBg","wanfaTF","difenTF","fanbeiTF","fangjianTF","teshuTF","mainView"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.mainView_i()];
	}
	var _proto = NiuNiuHelpSkin.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainView_i = function () {
		var t = new eui.Group();
		this.mainView = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.wanfaTF_i(),this.difenTF_i(),this.fanbeiTF_i(),this.fangjianTF_i(),this.teshuTF_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "help_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.wanfaTF_i = function () {
		var t = new eui.Label();
		this.wanfaTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.text = "--";
		t.textColor = 0x784a23;
		t.width = 217;
		t.x = 130;
		t.y = 46;
		return t;
	};
	_proto.difenTF_i = function () {
		var t = new eui.Label();
		this.difenTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.text = "--";
		t.textColor = 0x784a23;
		t.width = 217;
		t.x = 500;
		t.y = 46;
		return t;
	};
	_proto.fanbeiTF_i = function () {
		var t = new eui.Label();
		this.fanbeiTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.text = "--";
		t.textColor = 0x784a23;
		t.width = 524;
		t.x = 192;
		t.y = 143;
		return t;
	};
	_proto.fangjianTF_i = function () {
		var t = new eui.Label();
		this.fangjianTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.text = "--";
		t.textColor = 0x784a23;
		t.width = 524;
		t.x = 192;
		t.y = 249;
		return t;
	};
	_proto.teshuTF_i = function () {
		var t = new eui.Label();
		this.teshuTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.text = "--";
		t.textColor = 0x784a23;
		t.width = 524;
		t.x = 192;
		t.y = 359;
		return t;
	};
	return NiuNiuHelpSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/nn/NNGameResultSkin.exml'] = window.NNGameResultSkin = (function (_super) {
	__extends(NNGameResultSkin, _super);
	var NNGameResultSkin$Skin71 = 	(function (_super) {
		__extends(NNGameResultSkin$Skin71, _super);
		function NNGameResultSkin$Skin71() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NNGameResultSkin$Skin71.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "common_json.c_shareBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NNGameResultSkin$Skin71;
	})(eui.Skin);

	var NNGameResultSkin$Skin72 = 	(function (_super) {
		__extends(NNGameResultSkin$Skin72, _super);
		function NNGameResultSkin$Skin72() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NNGameResultSkin$Skin72.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.closeBtn2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NNGameResultSkin$Skin72;
	})(eui.Skin);

	function NNGameResultSkin() {
		_super.call(this);
		this.skinParts = ["maskBg","list","shareBtn","closeBtn","mainView"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.mainView_i()];
	}
	var _proto = NNGameResultSkin.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainView_i = function () {
		var t = new eui.Group();
		this.mainView = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.list_i(),this.shareBtn_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "c_resultBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 457;
		t.horizontalCenter = 0;
		t.width = 948;
		t.y = 63;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 3;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new eui.Button();
		this.shareBtn = t;
		t.label = "";
		t.x = 398;
		t.y = 536;
		t.skinName = NNGameResultSkin$Skin71;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "";
		t.x = 925;
		t.y = 5.5;
		t.skinName = NNGameResultSkin$Skin72;
		return t;
	};
	return NNGameResultSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/nn/NNGameResultTileSkin.exml'] = window.NNGameResultTileSkin = (function (_super) {
	__extends(NNGameResultTileSkin, _super);
	function NNGameResultTileSkin() {
		_super.call(this);
		this.skinParts = ["winnerIcon","nickNameTF","idTF","cardTypeTF0_0","cardTypeTF0_1","cardTypeTF1_0","cardTypeTF1_1","cardTypeTF2_0","cardTypeTF2_1","cardTypeTF3_0","cardTypeTF3_1","cardTypeTF4_0","cardTypeTF4_1","cardTypeTF5_0","cardTypeTF5_1","cardTypeTF6_0","cardTypeTF6_1"];
		
		this.elementsContent = [this._Image1_i(),this.winnerIcon_i(),this.nickNameTF_i(),this.idTF_i(),this.cardTypeTF0_0_i(),this.cardTypeTF0_1_i(),this.cardTypeTF1_0_i(),this.cardTypeTF1_1_i(),this.cardTypeTF2_0_i(),this.cardTypeTF2_1_i(),this.cardTypeTF3_0_i(),this.cardTypeTF3_1_i(),this.cardTypeTF4_0_i(),this.cardTypeTF4_1_i(),this.cardTypeTF5_0_i(),this.cardTypeTF5_1_i(),this.cardTypeTF6_0_i(),this.cardTypeTF6_1_i(),this._Label1_i()];
	}
	var _proto = NNGameResultTileSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "common_json.c_resultTile";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.winnerIcon_i = function () {
		var t = new eui.Image();
		this.winnerIcon = t;
		t.horizontalCenter = 0;
		t.source = "common_json.winnerIcon";
		t.y = 419;
		return t;
	};
	_proto.nickNameTF_i = function () {
		var t = new eui.Label();
		this.nickNameTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "--";
		t.textColor = 0x604523;
		t.width = 86;
		t.x = 62;
		t.y = 11;
		return t;
	};
	_proto.idTF_i = function () {
		var t = new eui.Label();
		this.idTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "--";
		t.textColor = 0x604523;
		t.width = 86;
		t.x = 62;
		t.y = 34;
		return t;
	};
	_proto.cardTypeTF0_0_i = function () {
		var t = new eui.Label();
		this.cardTypeTF0_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 36;
		t.horizontalCenter = -28.5;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "五小牛";
		t.textColor = 0x000000;
		t.width = 90;
		t.y = 75;
		return t;
	};
	_proto.cardTypeTF0_1_i = function () {
		var t = new eui.Label();
		this.cardTypeTF0_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 36;
		t.horizontalCenter = 43.5;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "1";
		t.textAlign = "right";
		t.textColor = 0x000000;
		t.width = 62;
		t.y = 75;
		return t;
	};
	_proto.cardTypeTF1_0_i = function () {
		var t = new eui.Label();
		this.cardTypeTF1_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 36;
		t.horizontalCenter = -28.5;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "五小牛";
		t.textColor = 0x000000;
		t.width = 90;
		t.y = 109;
		return t;
	};
	_proto.cardTypeTF1_1_i = function () {
		var t = new eui.Label();
		this.cardTypeTF1_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 36;
		t.horizontalCenter = 43.5;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "1";
		t.textAlign = "right";
		t.textColor = 0x000000;
		t.width = 62;
		t.y = 109;
		return t;
	};
	_proto.cardTypeTF2_0_i = function () {
		var t = new eui.Label();
		this.cardTypeTF2_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 36;
		t.horizontalCenter = -28.5;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "五小牛";
		t.textColor = 0x000000;
		t.width = 90;
		t.y = 143;
		return t;
	};
	_proto.cardTypeTF2_1_i = function () {
		var t = new eui.Label();
		this.cardTypeTF2_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 36;
		t.horizontalCenter = 43.5;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "1";
		t.textAlign = "right";
		t.textColor = 0x000000;
		t.width = 62;
		t.y = 143;
		return t;
	};
	_proto.cardTypeTF3_0_i = function () {
		var t = new eui.Label();
		this.cardTypeTF3_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 36;
		t.horizontalCenter = -28.5;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "五小牛";
		t.textColor = 0x000000;
		t.width = 90;
		t.y = 177;
		return t;
	};
	_proto.cardTypeTF3_1_i = function () {
		var t = new eui.Label();
		this.cardTypeTF3_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 36;
		t.horizontalCenter = 43.5;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "1";
		t.textAlign = "right";
		t.textColor = 0x000000;
		t.width = 62;
		t.y = 177;
		return t;
	};
	_proto.cardTypeTF4_0_i = function () {
		var t = new eui.Label();
		this.cardTypeTF4_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 36;
		t.horizontalCenter = -28.5;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "五小牛";
		t.textColor = 0x000000;
		t.width = 90;
		t.y = 211;
		return t;
	};
	_proto.cardTypeTF4_1_i = function () {
		var t = new eui.Label();
		this.cardTypeTF4_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 36;
		t.horizontalCenter = 43.5;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "1";
		t.textAlign = "right";
		t.textColor = 0x000000;
		t.width = 62;
		t.y = 211;
		return t;
	};
	_proto.cardTypeTF5_0_i = function () {
		var t = new eui.Label();
		this.cardTypeTF5_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 36;
		t.horizontalCenter = -28.5;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "五小牛";
		t.textColor = 0x000000;
		t.width = 90;
		t.y = 245;
		return t;
	};
	_proto.cardTypeTF5_1_i = function () {
		var t = new eui.Label();
		this.cardTypeTF5_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 36;
		t.horizontalCenter = 43.5;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "1";
		t.textAlign = "right";
		t.textColor = 0x000000;
		t.width = 62;
		t.y = 245;
		return t;
	};
	_proto.cardTypeTF6_0_i = function () {
		var t = new eui.Label();
		this.cardTypeTF6_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 36;
		t.horizontalCenter = -28.5;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "五小牛";
		t.textColor = 0x000000;
		t.width = 90;
		t.y = 279;
		return t;
	};
	_proto.cardTypeTF6_1_i = function () {
		var t = new eui.Label();
		this.cardTypeTF6_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 36;
		t.horizontalCenter = 43.5;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "1";
		t.textAlign = "right";
		t.textColor = 0x000000;
		t.width = 62;
		t.y = 279;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "总分：";
		t.textColor = 0x000000;
		t.x = 4;
		t.y = 313;
		return t;
	};
	return NNGameResultTileSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/PlayerDetailInfoSkin2.exml'] = window.PlayerDetailInfoSkin2 = (function (_super) {
	__extends(PlayerDetailInfoSkin2, _super);
	function PlayerDetailInfoSkin2() {
		_super.call(this);
		this.skinParts = ["maskBg","nickNameTF","idTF","ipTF","distanceTF","bq1","bq2","bq4","bq3","bq5","mainView"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.mainView_i()];
	}
	var _proto = PlayerDetailInfoSkin2.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainView_i = function () {
		var t = new eui.Group();
		this.mainView = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.nickNameTF_i(),this.idTF_i(),this.ipTF_i(),this.distanceTF_i(),this.bq1_i(),this.bq2_i(),this.bq4_i(),this.bq3_i(),this.bq5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "playerInfoBg2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nickNameTF_i = function () {
		var t = new eui.Label();
		this.nickNameTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "--";
		t.textAlign = "left";
		t.textColor = 0x372d11;
		t.width = 374;
		t.x = 201;
		t.y = 85;
		return t;
	};
	_proto.idTF_i = function () {
		var t = new eui.Label();
		this.idTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "ID:";
		t.textAlign = "left";
		t.textColor = 0x372d11;
		t.width = 300;
		t.x = 201;
		t.y = 131;
		return t;
	};
	_proto.ipTF_i = function () {
		var t = new eui.Label();
		this.ipTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "IP:";
		t.textColor = 0x372d11;
		t.width = 300;
		t.x = 201;
		t.y = 179;
		return t;
	};
	_proto.distanceTF_i = function () {
		var t = new eui.Label();
		this.distanceTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "--";
		t.textColor = 0x372d11;
		t.width = 300;
		t.x = 201;
		t.y = 218;
		return t;
	};
	_proto.bq1_i = function () {
		var t = new eui.Image();
		this.bq1 = t;
		t.source = "emotion_json.dzh";
		t.x = 69;
		t.y = 245;
		return t;
	};
	_proto.bq2_i = function () {
		var t = new eui.Image();
		this.bq2 = t;
		t.source = "emotion_json.hc";
		t.x = 170;
		t.y = 252;
		return t;
	};
	_proto.bq4_i = function () {
		var t = new eui.Image();
		this.bq4 = t;
		t.source = "emotion_json.jd";
		t.x = 396;
		t.y = 250;
		return t;
	};
	_proto.bq3_i = function () {
		var t = new eui.Image();
		this.bq3 = t;
		t.source = "emotion_json.pj";
		t.x = 280;
		t.y = 249;
		return t;
	};
	_proto.bq5_i = function () {
		var t = new eui.Image();
		this.bq5 = t;
		t.source = "emotion_json.xh";
		t.x = 510;
		t.y = 254;
		return t;
	};
	return PlayerDetailInfoSkin2;
})(eui.Skin);generateEUI.paths['resource/app_skins/RankSkin.exml'] = window.RankSkin = (function (_super) {
	__extends(RankSkin, _super);
	function RankSkin() {
		_super.call(this);
		this.skinParts = ["tabSelect","tab1","tab2","tab3","list"];
		
		this.elementsContent = [this._Image1_i(),this.tabSelect_i(),this.tab1_i(),this.tab2_i(),this.tab3_i(),this._Scroller1_i()];
	}
	var _proto = RankSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "rank_bg_png";
		return t;
	};
	_proto.tabSelect_i = function () {
		var t = new eui.Image();
		this.tabSelect = t;
		t.source = "hall_json.rankTab_select";
		t.x = 14;
		t.y = 2;
		return t;
	};
	_proto.tab1_i = function () {
		var t = new eui.Image();
		this.tab1 = t;
		t.source = "hall_json.rankTab1";
		t.x = 36;
		t.y = 12;
		return t;
	};
	_proto.tab2_i = function () {
		var t = new eui.Image();
		this.tab2 = t;
		t.source = "hall_json.rankTab2";
		t.x = 171;
		t.y = 12;
		return t;
	};
	_proto.tab3_i = function () {
		var t = new eui.Image();
		this.tab3 = t;
		t.source = "hall_json.rankTab3";
		t.x = 301;
		t.y = 12;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 260;
		t.width = 405;
		t.x = 13;
		t.y = 68;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 85;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.gold = "10.11";
		t.headImg = "";
		t.title = "赢家榜";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.gold = "10.12";
		t.headImg = "";
		t.title = "战神榜";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.gold = "10.13";
		t.headImg = "";
		t.title = "富豪榜";
		return t;
	};
	return RankSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/RuleSkin.exml'] = window.RuleSkin = (function (_super) {
	__extends(RuleSkin, _super);
	var RuleSkin$Skin73 = 	(function (_super) {
		__extends(RuleSkin$Skin73, _super);
		function RuleSkin$Skin73() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RuleSkin$Skin73.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.closeBtn2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RuleSkin$Skin73;
	})(eui.Skin);

	function RuleSkin() {
		_super.call(this);
		this.skinParts = ["maskBg","ruleTF","scroller","closeBtn","mainView"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.mainView_i()];
	}
	var _proto = RuleSkin.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainView_i = function () {
		var t = new eui.Group();
		this.mainView = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.scroller_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ruleBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.height = 523;
		t.width = 941;
		t.x = 25;
		t.y = 66;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.ruleTF_i()];
		return t;
	};
	_proto.ruleTF_i = function () {
		var t = new eui.Label();
		this.ruleTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 523;
		t.size = 24;
		t.text = "游戏规则...";
		t.textColor = 0x8a4b0b;
		t.width = 941;
		t.x = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "";
		t.x = 925;
		t.y = 5.5;
		t.skinName = RuleSkin$Skin73;
		return t;
	};
	return RuleSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/RuleSkin2.exml'] = window.RuleSkin2 = (function (_super) {
	__extends(RuleSkin2, _super);
	var RuleSkin2$Skin74 = 	(function (_super) {
		__extends(RuleSkin2$Skin74, _super);
		function RuleSkin2$Skin74() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RuleSkin2$Skin74.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hall_json.closeBtn2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RuleSkin2$Skin74;
	})(eui.Skin);

	function RuleSkin2() {
		_super.call(this);
		this.skinParts = ["maskBg","scroller","closeBtn","mainView"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.mainView_i()];
	}
	var _proto = RuleSkin2.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainView_i = function () {
		var t = new eui.Group();
		this.mainView = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.scroller_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ruleBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.height = 523;
		t.width = 941;
		t.x = 25;
		t.y = 66;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "helpText_png";
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "";
		t.x = 925;
		t.y = 5.5;
		t.skinName = RuleSkin2$Skin74;
		return t;
	};
	return RuleSkin2;
})(eui.Skin);generateEUI.paths['resource/app_skins/SettingSkin.exml'] = window.SettingSkin = (function (_super) {
	__extends(SettingSkin, _super);
	function SettingSkin() {
		_super.call(this);
		this.skinParts = ["maskBg","musicToggle","soundToggle","mainView"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.mainView_i()];
	}
	var _proto = SettingSkin.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainView_i = function () {
		var t = new eui.Group();
		this.mainView = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.musicToggle_i(),this.soundToggle_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "iframe_setBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "teahouse_json.musicLabel";
		t.x = 153;
		t.y = 117;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "teahouse_json.yinxiaoLabel";
		t.x = 153;
		t.y = 224;
		return t;
	};
	_proto.musicToggle_i = function () {
		var t = new eui.Image();
		this.musicToggle = t;
		t.source = "teahouse_json.t_toggleOn2";
		t.x = 271;
		t.y = 98;
		return t;
	};
	_proto.soundToggle_i = function () {
		var t = new eui.Image();
		this.soundToggle = t;
		t.source = "teahouse_json.t_toggleOn2";
		t.x = 271;
		t.y = 199;
		return t;
	};
	return SettingSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/ShareSkin.exml'] = window.ShareSkin = (function (_super) {
	__extends(ShareSkin, _super);
	var ShareSkin$Skin75 = 	(function (_super) {
		__extends(ShareSkin$Skin75, _super);
		function ShareSkin$Skin75() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShareSkin$Skin75.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "teahouse_json.t_shareWechatBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShareSkin$Skin75;
	})(eui.Skin);

	var ShareSkin$Skin76 = 	(function (_super) {
		__extends(ShareSkin$Skin76, _super);
		function ShareSkin$Skin76() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShareSkin$Skin76.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "teahouse_json.t_sharePublicBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShareSkin$Skin76;
	})(eui.Skin);

	function ShareSkin() {
		_super.call(this);
		this.skinParts = ["maskBg","shareWechatBtn","sharePublicBtn","mainView"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.mainView_i()];
	}
	var _proto = ShareSkin.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainView_i = function () {
		var t = new eui.Group();
		this.mainView = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.shareWechatBtn_i(),this.sharePublicBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "iframe_shareBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shareWechatBtn_i = function () {
		var t = new eui.Button();
		this.shareWechatBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 90;
		t.skinName = ShareSkin$Skin75;
		return t;
	};
	_proto.sharePublicBtn_i = function () {
		var t = new eui.Button();
		this.sharePublicBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 205;
		t.skinName = ShareSkin$Skin76;
		return t;
	};
	return ShareSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/TeahouseManageItemSkin.exml'] = window.TeahouseManageItemSkin = (function (_super) {
	__extends(TeahouseManageItemSkin, _super);
	var TeahouseManageItemSkin$Skin77 = 	(function (_super) {
		__extends(TeahouseManageItemSkin$Skin77, _super);
		function TeahouseManageItemSkin$Skin77() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TeahouseManageItemSkin$Skin77.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "teahouse_json.t_enterBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TeahouseManageItemSkin$Skin77;
	})(eui.Skin);

	var TeahouseManageItemSkin$Skin78 = 	(function (_super) {
		__extends(TeahouseManageItemSkin$Skin78, _super);
		function TeahouseManageItemSkin$Skin78() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TeahouseManageItemSkin$Skin78.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "teahouse_json.t_delBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TeahouseManageItemSkin$Skin78;
	})(eui.Skin);

	var TeahouseManageItemSkin$Skin79 = 	(function (_super) {
		__extends(TeahouseManageItemSkin$Skin79, _super);
		function TeahouseManageItemSkin$Skin79() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TeahouseManageItemSkin$Skin79.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "teahouse_json.t_quitBtn2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TeahouseManageItemSkin$Skin79;
	})(eui.Skin);

	function TeahouseManageItemSkin() {
		_super.call(this);
		this.skinParts = ["enterBtn","delBtn","quitBtn","gameNameTF","nickNameTF","teahouseInfoTF"];
		
		this.elementsContent = [this._Image1_i(),this.enterBtn_i(),this.delBtn_i(),this.quitBtn_i(),this.gameNameTF_i(),this.nickNameTF_i(),this.teahouseInfoTF_i()];
	}
	var _proto = TeahouseManageItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "t_manageTileBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.enterBtn_i = function () {
		var t = new eui.Button();
		this.enterBtn = t;
		t.label = "";
		t.x = 624;
		t.y = 11;
		t.skinName = TeahouseManageItemSkin$Skin77;
		return t;
	};
	_proto.delBtn_i = function () {
		var t = new eui.Button();
		this.delBtn = t;
		t.label = "";
		t.x = 778;
		t.y = 11;
		t.skinName = TeahouseManageItemSkin$Skin78;
		return t;
	};
	_proto.quitBtn_i = function () {
		var t = new eui.Button();
		this.quitBtn = t;
		t.label = "";
		t.x = 778;
		t.y = 11;
		t.skinName = TeahouseManageItemSkin$Skin79;
		return t;
	};
	_proto.gameNameTF_i = function () {
		var t = new eui.Label();
		this.gameNameTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "--";
		t.textColor = 0x633110;
		t.width = 226;
		t.x = 73;
		t.y = 15;
		return t;
	};
	_proto.nickNameTF_i = function () {
		var t = new eui.Label();
		this.nickNameTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "--";
		t.textColor = 0x633110;
		t.width = 226;
		t.x = 73;
		t.y = 42;
		return t;
	};
	_proto.teahouseInfoTF_i = function () {
		var t = new eui.Label();
		this.teahouseInfoTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "--";
		t.textColor = 0x633110;
		t.width = 284;
		t.x = 326;
		t.y = 23;
		return t;
	};
	return TeahouseManageItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/TeahouseManageSkin.exml'] = window.TeahouseManageSkin = (function (_super) {
	__extends(TeahouseManageSkin, _super);
	var TeahouseManageSkin$Skin80 = 	(function (_super) {
		__extends(TeahouseManageSkin$Skin80, _super);
		function TeahouseManageSkin$Skin80() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TeahouseManageSkin$Skin80.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "teahouse_json.t_createTeahouseBtn2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TeahouseManageSkin$Skin80;
	})(eui.Skin);

	function TeahouseManageSkin() {
		_super.call(this);
		this.skinParts = ["maskBg","list","tab1","tab2","createBtn","mainView"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.mainView_i()];
	}
	var _proto = TeahouseManageSkin.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainView_i = function () {
		var t = new eui.Group();
		this.mainView = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Scroller1_i(),this.tab1_i(),this.tab2_i(),this.createBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "t_manageBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 355;
		t.horizontalCenter = 0;
		t.width = 935;
		t.y = 147;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetY = 0;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 13;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto.tab1_i = function () {
		var t = new eui.Image();
		this.tab1 = t;
		t.source = "teahouse_json.t_ruzhuTab1_select";
		t.x = 284;
		t.y = 65;
		return t;
	};
	_proto.tab2_i = function () {
		var t = new eui.Image();
		this.tab2 = t;
		t.source = "teahouse_json.t_ruzhuTab2_default";
		t.x = 500;
		t.y = 65;
		return t;
	};
	_proto.createBtn_i = function () {
		var t = new eui.Button();
		this.createBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 519;
		t.skinName = TeahouseManageSkin$Skin80;
		return t;
	};
	return TeahouseManageSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/TeahouseSetSkin.exml'] = window.TeahouseSetSkin = (function (_super) {
	__extends(TeahouseSetSkin, _super);
	var TeahouseSetSkin$Skin81 = 	(function (_super) {
		__extends(TeahouseSetSkin$Skin81, _super);
		function TeahouseSetSkin$Skin81() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TeahouseSetSkin$Skin81.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "teahouse_json.t_confirmBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TeahouseSetSkin$Skin81;
	})(eui.Skin);

	function TeahouseSetSkin() {
		_super.call(this);
		this.skinParts = ["maskBg","toggle","inputTF","confirmBtn","mainView"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.mainView_i()];
	}
	var _proto = TeahouseSetSkin.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainView_i = function () {
		var t = new eui.Group();
		this.mainView = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.toggle_i(),this._Label1_i(),this.inputTF_i(),this.confirmBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "iframe_teahouseSetBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.toggle_i = function () {
		var t = new eui.Image();
		this.toggle = t;
		t.source = "teahouse_json.t_toggleOff";
		t.x = 170;
		t.y = 66;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 17;
		t.text = "（非大赢家模式请务必打开审核开关）";
		t.textColor = 0xa93a3a;
		t.x = 283;
		t.y = 85;
		return t;
	};
	_proto.inputTF_i = function () {
		var t = new eui.Label();
		this.inputTF = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 152;
		t.size = 24;
		t.text = "请输入公告，例如：您邀请的玩家加入您的微信 群信息";
		t.textColor = 0x8f8f8f;
		t.width = 532;
		t.x = 38;
		t.y = 130;
		return t;
	};
	_proto.confirmBtn_i = function () {
		var t = new eui.Button();
		this.confirmBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 300;
		t.skinName = TeahouseSetSkin$Skin81;
		return t;
	};
	return TeahouseSetSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/TeahouseTableDetailItemSkin.exml'] = window.TeahouseTableDetailItemSkin = (function (_super) {
	__extends(TeahouseTableDetailItemSkin, _super);
	function TeahouseTableDetailItemSkin() {
		_super.call(this);
		this.skinParts = ["nickNameTF","idTF","ipTF"];
		
		this.elementsContent = [this._Rect1_i(),this.nickNameTF_i(),this.idTF_i(),this.ipTF_i()];
	}
	var _proto = TeahouseTableDetailItemSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 54;
		t.width = 561;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nickNameTF_i = function () {
		var t = new eui.Label();
		this.nickNameTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "--";
		t.textAlign = "center";
		t.textColor = 0x814314;
		t.width = 153;
		t.x = 15;
		t.y = 15;
		return t;
	};
	_proto.idTF_i = function () {
		var t = new eui.Label();
		this.idTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "--";
		t.textAlign = "center";
		t.textColor = 0x814314;
		t.width = 153;
		t.x = 199;
		t.y = 15;
		return t;
	};
	_proto.ipTF_i = function () {
		var t = new eui.Label();
		this.ipTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "--";
		t.textAlign = "center";
		t.textColor = 0x814314;
		t.width = 191;
		t.x = 363;
		t.y = 15;
		return t;
	};
	return TeahouseTableDetailItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/TeahouseTableDetailSkin.exml'] = window.TeahouseTableDetailSkin = (function (_super) {
	__extends(TeahouseTableDetailSkin, _super);
	function TeahouseTableDetailSkin() {
		_super.call(this);
		this.skinParts = ["maskBg","list","mainView"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.mainView_i()];
	}
	var _proto = TeahouseTableDetailSkin.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainView_i = function () {
		var t = new eui.Group();
		this.mainView = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "iframe_teahouseDetail_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 380;
		t.horizontalCenter = 0;
		t.width = 561;
		t.y = 106;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 13;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	return TeahouseTableDetailSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/TeahouseWinnerItemSkin.exml'] = window.TeahouseWinnerItemSkin = (function (_super) {
	__extends(TeahouseWinnerItemSkin, _super);
	function TeahouseWinnerItemSkin() {
		_super.call(this);
		this.skinParts = ["idTF","nickNameTF","winCountTF"];
		
		this.elementsContent = [this._Image1_i(),this.idTF_i(),this.nickNameTF_i(),this.winCountTF_i()];
	}
	var _proto = TeahouseWinnerItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "teahouse_json.t_teamListItemBg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.idTF_i = function () {
		var t = new eui.Label();
		this.idTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "ID:";
		t.textColor = 0x7b3b0c;
		t.width = 148;
		t.x = 71;
		t.y = 2;
		return t;
	};
	_proto.nickNameTF_i = function () {
		var t = new eui.Label();
		this.nickNameTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "--";
		t.textColor = 0x7b3b0c;
		t.x = 71;
		t.y = 29;
		return t;
	};
	_proto.winCountTF_i = function () {
		var t = new eui.Label();
		this.winCountTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x7b3b0c;
		t.width = 164;
		t.x = 237;
		t.y = 14;
		return t;
	};
	return TeahouseWinnerItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/TeahouseWinnerSkin.exml'] = window.TeahouseWinnerSkin = (function (_super) {
	__extends(TeahouseWinnerSkin, _super);
	var TeahouseWinnerSkin$Skin82 = 	(function (_super) {
		__extends(TeahouseWinnerSkin$Skin82, _super);
		function TeahouseWinnerSkin$Skin82() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TeahouseWinnerSkin$Skin82.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "teahouse_json.t_clearAllBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TeahouseWinnerSkin$Skin82;
	})(eui.Skin);

	function TeahouseWinnerSkin() {
		_super.call(this);
		this.skinParts = ["maskBg","list","clearAllBtn","mainView"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.mainView_i()];
	}
	var _proto = TeahouseWinnerSkin.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainView_i = function () {
		var t = new eui.Group();
		this.mainView = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Scroller1_i(),this.clearAllBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "iframe_winnerBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 362;
		t.horizontalCenter = 0;
		t.width = 578;
		t.y = 108;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 13;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto.clearAllBtn_i = function () {
		var t = new eui.Button();
		this.clearAllBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 500;
		t.skinName = TeahouseWinnerSkin$Skin82;
		return t;
	};
	return TeahouseWinnerSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/TeahouseZhanjiSkin.exml'] = window.TeahouseZhanjiSkin = (function (_super) {
	__extends(TeahouseZhanjiSkin, _super);
	function TeahouseZhanjiSkin() {
		_super.call(this);
		this.skinParts = ["maskBg","list","tab1","tab2","mainView"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.mainView_i()];
	}
	var _proto = TeahouseZhanjiSkin.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainView_i = function () {
		var t = new eui.Group();
		this.mainView = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Scroller1_i(),this.tab1_i(),this.tab2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "iframe_zhanjiBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 418;
		t.horizontalCenter = 0;
		t.width = 938;
		t.y = 130;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetY = 0;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 13;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto.tab1_i = function () {
		var t = new eui.Image();
		this.tab1 = t;
		t.source = "teahouse_json.t_zhanjiTab1_select";
		t.x = 263;
		t.y = 74;
		return t;
	};
	_proto.tab2_i = function () {
		var t = new eui.Image();
		this.tab2 = t;
		t.source = "teahouse_json.t_zhanjiTab2_default";
		t.x = 495;
		t.y = 74;
		return t;
	};
	return TeahouseZhanjiSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/TeahouseZhanjiTileSkin.exml'] = window.TeahouseZhanjiTileSkin = (function (_super) {
	__extends(TeahouseZhanjiTileSkin, _super);
	function TeahouseZhanjiTileSkin() {
		_super.call(this);
		this.skinParts = ["rankTF","roomNumTF","timeTF","detailTF","detailBtn"];
		
		this.elementsContent = [this._Image1_i(),this.rankTF_i(),this.roomNumTF_i(),this.timeTF_i(),this.detailTF_i(),this._Button1_i(),this.detailBtn_i()];
	}
	var _proto = TeahouseZhanjiTileSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "t_zhanjiTileBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rankTF_i = function () {
		var t = new eui.Label();
		this.rankTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0x814314;
		t.width = 58;
		t.x = 4;
		t.y = 45;
		return t;
	};
	_proto.roomNumTF_i = function () {
		var t = new eui.Label();
		this.roomNumTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "房号：0";
		t.textColor = 0x814314;
		t.x = 57;
		t.y = 25;
		return t;
	};
	_proto.timeTF_i = function () {
		var t = new eui.Label();
		this.timeTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "12/1/1 00:00:00";
		t.textColor = 0x814314;
		t.x = 60;
		t.y = 77;
		return t;
	};
	_proto.detailTF_i = function () {
		var t = new eui.Label();
		this.detailTF = t;
		t.height = 120;
		t.multiline = true;
		t.text = "";
		t.textColor = 0x814314;
		t.width = 490;
		t.wordWrap = true;
		t.x = 296;
		t.y = 4;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "Button";
		t.x = 819;
		t.y = 48;
		return t;
	};
	_proto.detailBtn_i = function () {
		var t = new eui.Image();
		this.detailBtn = t;
		t.source = "teahouse_json.t_chakanBtn";
		t.visible = false;
		t.x = 798;
		t.y = 38;
		return t;
	};
	return TeahouseZhanjiTileSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/TeamMemberListItemSkin.exml'] = window.TeamMemberListItemSkin = (function (_super) {
	__extends(TeamMemberListItemSkin, _super);
	var TeamMemberListItemSkin$Skin83 = 	(function (_super) {
		__extends(TeamMemberListItemSkin$Skin83, _super);
		function TeamMemberListItemSkin$Skin83() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TeamMemberListItemSkin$Skin83.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "teahouse_json.t_setManagerBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TeamMemberListItemSkin$Skin83;
	})(eui.Skin);

	var TeamMemberListItemSkin$Skin84 = 	(function (_super) {
		__extends(TeamMemberListItemSkin$Skin84, _super);
		function TeamMemberListItemSkin$Skin84() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TeamMemberListItemSkin$Skin84.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "teahouse_json.t_cancelManagerBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TeamMemberListItemSkin$Skin84;
	})(eui.Skin);

	var TeamMemberListItemSkin$Skin85 = 	(function (_super) {
		__extends(TeamMemberListItemSkin$Skin85, _super);
		function TeamMemberListItemSkin$Skin85() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TeamMemberListItemSkin$Skin85.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "teahouse_json.t_agreeBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TeamMemberListItemSkin$Skin85;
	})(eui.Skin);

	var TeamMemberListItemSkin$Skin86 = 	(function (_super) {
		__extends(TeamMemberListItemSkin$Skin86, _super);
		function TeamMemberListItemSkin$Skin86() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TeamMemberListItemSkin$Skin86.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "teahouse_json.t_removeMemberBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TeamMemberListItemSkin$Skin86;
	})(eui.Skin);

	var TeamMemberListItemSkin$Skin87 = 	(function (_super) {
		__extends(TeamMemberListItemSkin$Skin87, _super);
		function TeamMemberListItemSkin$Skin87() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TeamMemberListItemSkin$Skin87.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "teahouse_json.t_refuseBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TeamMemberListItemSkin$Skin87;
	})(eui.Skin);

	function TeamMemberListItemSkin() {
		_super.call(this);
		this.skinParts = ["setManagerBtn","cancelManagerBtn","agreeBtn","removeBtn","refuseBtn","idTF","nickNameTF","rankTF"];
		
		this.elementsContent = [this._Image1_i(),this.setManagerBtn_i(),this.cancelManagerBtn_i(),this.agreeBtn_i(),this.removeBtn_i(),this.refuseBtn_i(),this.idTF_i(),this.nickNameTF_i(),this.rankTF_i()];
	}
	var _proto = TeamMemberListItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "teahouse_json.t_teamListItemBg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.setManagerBtn_i = function () {
		var t = new eui.Button();
		this.setManagerBtn = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 279;
		t.skinName = TeamMemberListItemSkin$Skin83;
		return t;
	};
	_proto.cancelManagerBtn_i = function () {
		var t = new eui.Button();
		this.cancelManagerBtn = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 279;
		t.skinName = TeamMemberListItemSkin$Skin84;
		return t;
	};
	_proto.agreeBtn_i = function () {
		var t = new eui.Button();
		this.agreeBtn = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 279;
		t.skinName = TeamMemberListItemSkin$Skin85;
		return t;
	};
	_proto.removeBtn_i = function () {
		var t = new eui.Button();
		this.removeBtn = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 430;
		t.skinName = TeamMemberListItemSkin$Skin86;
		return t;
	};
	_proto.refuseBtn_i = function () {
		var t = new eui.Button();
		this.refuseBtn = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 430;
		t.skinName = TeamMemberListItemSkin$Skin87;
		return t;
	};
	_proto.idTF_i = function () {
		var t = new eui.Label();
		this.idTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "ID:";
		t.textColor = 0x673814;
		t.width = 140;
		t.x = 130;
		t.y = 7;
		return t;
	};
	_proto.nickNameTF_i = function () {
		var t = new eui.Label();
		this.nickNameTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "--";
		t.textColor = 0x673814;
		t.width = 140;
		t.x = 130;
		t.y = 32;
		return t;
	};
	_proto.rankTF_i = function () {
		var t = new eui.Label();
		this.rankTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0x673814;
		t.verticalCenter = 0;
		t.width = 68;
		t.x = 1;
		return t;
	};
	return TeamMemberListItemSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/TeamMemberListSkin.exml'] = window.TeamMemberListSkin = (function (_super) {
	__extends(TeamMemberListSkin, _super);
	function TeamMemberListSkin() {
		_super.call(this);
		this.skinParts = ["maskBg","list","searchBtn","searchTF","tab1","tab2","mainView"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.mainView_i()];
	}
	var _proto = TeamMemberListSkin.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.touchEnabled = true;
		t.percentWidth = 100;
		return t;
	};
	_proto.mainView_i = function () {
		var t = new eui.Group();
		this.mainView = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Scroller1_i(),this.searchBtn_i(),this._Image2_i(),this.searchTF_i(),this.tab1_i(),this.tab2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "iframe_teamListBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 380;
		t.horizontalCenter = 0;
		t.width = 578;
		t.y = 106;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetY = 0;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 13;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto.searchBtn_i = function () {
		var t = new eui.Image();
		this.searchBtn = t;
		t.source = "teahouse_json.t_searchBtn";
		t.x = 403;
		t.y = 513;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "teahouse_json.t_searchInputBg";
		t.x = 137;
		t.y = 509;
		return t;
	};
	_proto.searchTF_i = function () {
		var t = new eui.Label();
		this.searchTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.text = "输入查询的昵称";
		t.textColor = 0x6d6d6d;
		t.width = 228;
		t.x = 156;
		t.y = 516;
		return t;
	};
	_proto.tab1_i = function () {
		var t = new eui.Image();
		this.tab1 = t;
		t.source = "teahouse_json.t_memberTab1_select";
		t.x = 92;
		t.y = 62;
		return t;
	};
	_proto.tab2_i = function () {
		var t = new eui.Image();
		this.tab2 = t;
		t.source = "teahouse_json.t_memberTab2_default";
		t.x = 309;
		t.y = 62;
		return t;
	};
	return TeamMemberListSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/xieyi/xieyiSkin.exml'] = window.XieyiViewSkin = (function (_super) {
	__extends(XieyiViewSkin, _super);
	function XieyiViewSkin() {
		_super.call(this);
		this.skinParts = ["maskBg","xieyiText","xieyiScroller","xieyiButton","xieyiTitle","xieyiGroup"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this.maskBg_i(),this.xieyiGroup_i()];
	}
	var _proto = XieyiViewSkin.prototype;

	_proto.maskBg_i = function () {
		var t = new eui.Rect();
		this.maskBg = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.xieyiGroup_i = function () {
		var t = new eui.Group();
		this.xieyiGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 400;
		t.horizontalCenter = -6;
		t.verticalCenter = -13.5;
		t.width = 600;
		t.elementsContent = [this._Image1_i(),this.xieyiScroller_i(),this.xieyiButton_i(),this.xieyiTitle_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "chatBg2_png";
		t.top = 0;
		return t;
	};
	_proto.xieyiScroller_i = function () {
		var t = new eui.Scroller();
		this.xieyiScroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 233;
		t.left = 21;
		t.right = 20;
		t.y = 82;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 209;
		t.width = 559;
		t.elementsContent = [this.xieyiText_i()];
		return t;
	};
	_proto.xieyiText_i = function () {
		var t = new eui.Label();
		this.xieyiText = t;
		t.left = 0;
		t.right = 0;
		t.rotation = 0.04;
		t.size = 16;
		t.text = "Label";
		t.y = 2;
		return t;
	};
	_proto.xieyiButton_i = function () {
		var t = new eui.Image();
		this.xieyiButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.horizontalCenter = 6;
		t.source = "hall_json.confirmBtn";
		t.width = 102;
		t.y = 335;
		return t;
	};
	_proto.xieyiTitle_i = function () {
		var t = new eui.Image();
		this.xieyiTitle = t;
		t.horizontalCenter = 0;
		t.source = "hall_json.xieyiTextBtn";
		t.y = 34;
		return t;
	};
	return XieyiViewSkin;
})(eui.Skin);generateEUI.paths['resource/app_skins/zjh/ZjhBattleSkin.exml'] = window.ZjhBattleSkin = (function (_super) {
	__extends(ZjhBattleSkin, _super);
	var ZjhBattleSkin$Skin88 = 	(function (_super) {
		__extends(ZjhBattleSkin$Skin88, _super);
		function ZjhBattleSkin$Skin88() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhBattleSkin$Skin88.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_quitBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZjhBattleSkin$Skin88;
	})(eui.Skin);

	var ZjhBattleSkin$Skin89 = 	(function (_super) {
		__extends(ZjhBattleSkin$Skin89, _super);
		function ZjhBattleSkin$Skin89() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhBattleSkin$Skin89.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_helpBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZjhBattleSkin$Skin89;
	})(eui.Skin);

	var ZjhBattleSkin$Skin90 = 	(function (_super) {
		__extends(ZjhBattleSkin$Skin90, _super);
		function ZjhBattleSkin$Skin90() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhBattleSkin$Skin90.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_setBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZjhBattleSkin$Skin90;
	})(eui.Skin);

	var ZjhBattleSkin$Skin91 = 	(function (_super) {
		__extends(ZjhBattleSkin$Skin91, _super);
		function ZjhBattleSkin$Skin91() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhBattleSkin$Skin91.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_chatBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZjhBattleSkin$Skin91;
	})(eui.Skin);

	var ZjhBattleSkin$Skin92 = 	(function (_super) {
		__extends(ZjhBattleSkin$Skin92, _super);
		function ZjhBattleSkin$Skin92() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhBattleSkin$Skin92.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_recordBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZjhBattleSkin$Skin92;
	})(eui.Skin);

	var ZjhBattleSkin$Skin93 = 	(function (_super) {
		__extends(ZjhBattleSkin$Skin93, _super);
		function ZjhBattleSkin$Skin93() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhBattleSkin$Skin93.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_inviteBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZjhBattleSkin$Skin93;
	})(eui.Skin);

	var ZjhBattleSkin$Skin94 = 	(function (_super) {
		__extends(ZjhBattleSkin$Skin94, _super);
		function ZjhBattleSkin$Skin94() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhBattleSkin$Skin94.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_readyBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZjhBattleSkin$Skin94;
	})(eui.Skin);

	var ZjhBattleSkin$Skin95 = 	(function (_super) {
		__extends(ZjhBattleSkin$Skin95, _super);
		function ZjhBattleSkin$Skin95() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhBattleSkin$Skin95.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_buqiangBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZjhBattleSkin$Skin95;
	})(eui.Skin);

	var ZjhBattleSkin$Skin96 = 	(function (_super) {
		__extends(ZjhBattleSkin$Skin96, _super);
		function ZjhBattleSkin$Skin96() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhBattleSkin$Skin96.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_1times";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZjhBattleSkin$Skin96;
	})(eui.Skin);

	var ZjhBattleSkin$Skin97 = 	(function (_super) {
		__extends(ZjhBattleSkin$Skin97, _super);
		function ZjhBattleSkin$Skin97() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhBattleSkin$Skin97.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_2times";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZjhBattleSkin$Skin97;
	})(eui.Skin);

	var ZjhBattleSkin$Skin98 = 	(function (_super) {
		__extends(ZjhBattleSkin$Skin98, _super);
		function ZjhBattleSkin$Skin98() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhBattleSkin$Skin98.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_3times";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZjhBattleSkin$Skin98;
	})(eui.Skin);

	var ZjhBattleSkin$Skin99 = 	(function (_super) {
		__extends(ZjhBattleSkin$Skin99, _super);
		function ZjhBattleSkin$Skin99() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhBattleSkin$Skin99.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_4times";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZjhBattleSkin$Skin99;
	})(eui.Skin);

	var ZjhBattleSkin$Skin100 = 	(function (_super) {
		__extends(ZjhBattleSkin$Skin100, _super);
		function ZjhBattleSkin$Skin100() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhBattleSkin$Skin100.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "nnGame2_json.n_kaipaiBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZjhBattleSkin$Skin100;
	})(eui.Skin);

	var ZjhBattleSkin$Skin101 = 	(function (_super) {
		__extends(ZjhBattleSkin$Skin101, _super);
		function ZjhBattleSkin$Skin101() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhBattleSkin$Skin101.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjhGame_json.1fenBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZjhBattleSkin$Skin101;
	})(eui.Skin);

	var ZjhBattleSkin$Skin102 = 	(function (_super) {
		__extends(ZjhBattleSkin$Skin102, _super);
		function ZjhBattleSkin$Skin102() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhBattleSkin$Skin102.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjhGame_json.2fenBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZjhBattleSkin$Skin102;
	})(eui.Skin);

	var ZjhBattleSkin$Skin103 = 	(function (_super) {
		__extends(ZjhBattleSkin$Skin103, _super);
		function ZjhBattleSkin$Skin103() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhBattleSkin$Skin103.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjhGame_json.3fenBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZjhBattleSkin$Skin103;
	})(eui.Skin);

	var ZjhBattleSkin$Skin104 = 	(function (_super) {
		__extends(ZjhBattleSkin$Skin104, _super);
		function ZjhBattleSkin$Skin104() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhBattleSkin$Skin104.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjhGame_json.cancelBipaiBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZjhBattleSkin$Skin104;
	})(eui.Skin);

	var ZjhBattleSkin$Skin105 = 	(function (_super) {
		__extends(ZjhBattleSkin$Skin105, _super);
		function ZjhBattleSkin$Skin105() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ZjhBattleSkin$Skin105.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "zjhGame_json.bipaiBtn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ZjhBattleSkin$Skin105;
	})(eui.Skin);

	function ZjhBattleSkin() {
		_super.call(this);
		this.skinParts = ["timeTF","infoTF","betScore3","bet3","zhuang3","nickName3","score3","cardGroup3_0","cardGroup3_1","cardGroup3_2","cardGroup3_3","cardGroup3_4","cardGroup3","qiangFlag3","cardType3","offline3","e3","readyed3","statusTip3","player3","betScore2","bet2","zhuang2","nickName2","score2","cardGroup2_0","cardGroup2_1","cardGroup2_2","cardGroup2_3","cardGroup2_4","cardGroup2","qiangFlag2","cardType2","offline2","e2","readyed2","statusTip2","player2","betScore1","bet1","readyed1","zhuang1","nickName1","score1","cardGroup1_0","cardGroup1_1","cardGroup1_2","cardGroup1_3","cardGroup1_4","cardGroup1","qiangFlag1","cardType1","offline1","e1","statusTip1","player1","betScore4","bet4","readyed4","zhuang4","nickName4","score4","cardGroup4_0","cardGroup4_1","cardGroup4_2","cardGroup4_3","cardGroup4_4","cardGroup4","qiangFlag4","cardType4","offline4","e4","statusTip4","player4","betScore5","bet5","zhuang5","nickName5","score5","cardGroup5_0","cardGroup5_1","cardGroup5_2","cardGroup5_3","cardGroup5_4","cardGroup5","qiangFlag5","cardType5","offline5","e5","readyed5","statusTip5","player5","quitBtn","helpBtn","setBtn","chatBtn","recordBtn","nickName0","score0","zhuang0","e0","statusTip0","player0","inviteBtn","readyBtn","countDownTF","countDown","qiang0","qiang1","qiang2","qiang3","qiang4","qiangzhuangGroup","bankerIcon","cardGroup0_0","cardGroup0_1","cardGroup0_2","cardGroup0","liangpaiBtn","readyed0","qiangFlag0","bei1","bei2","bei3","betGroup","betScore0","bet0","chatTF0","chat0","chatTF5","chat5","chatTF4","chat4","chatTF3","chat3","chatTF2","chat2","chatTF1","chat1","bipaiBtn","qipaiBtn"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.timeTF_i(),this.infoTF_i(),this.player3_i(),this.player2_i(),this.player1_i(),this.player4_i(),this.player5_i(),this.quitBtn_i(),this.helpBtn_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this.setBtn_i(),this.chatBtn_i(),this.recordBtn_i(),this.player0_i(),this.inviteBtn_i(),this.readyBtn_i(),this.countDown_i(),this.qiangzhuangGroup_i(),this.bankerIcon_i(),this.cardGroup0_i(),this.liangpaiBtn_i(),this.readyed0_i(),this.qiangFlag0_i(),this.betGroup_i(),this.bet0_i(),this.chat0_i(),this.chat5_i(),this.chat4_i(),this.chat3_i(),this.chat2_i(),this.chat1_i(),this.bipaiBtn_i(),this.qipaiBtn_i()];
	}
	var _proto = ZjhBattleSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "n_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "n_infoBg_png";
		t.x = 81;
		t.y = 4;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.n_timeBg";
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto.timeTF_i = function () {
		var t = new eui.Label();
		this.timeTF = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "00:00";
		t.textAlign = "center";
		t.x = 8;
		t.y = 13;
		return t;
	};
	_proto.infoTF_i = function () {
		var t = new eui.Label();
		this.infoTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 24;
		t.text = "茶楼编号:";
		t.textAlign = "left";
		t.width = 556;
		t.x = 88;
		t.y = 13;
		return t;
	};
	_proto.player3_i = function () {
		var t = new eui.Group();
		this.player3 = t;
		t.x = 480;
		t.y = 46;
		t.elementsContent = [this._Image4_i(),this.bet3_i(),this.zhuang3_i(),this.nickName3_i(),this.score3_i(),this.cardGroup3_i(),this.qiangFlag3_i(),this.cardType3_i(),this.offline3_i(),this.e3_i(),this.readyed3_i(),this.statusTip3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.nn_playerBg2";
		return t;
	};
	_proto.bet3_i = function () {
		var t = new eui.Group();
		this.bet3 = t;
		t.x = -116;
		t.y = 29;
		t.elementsContent = [this._Image5_i(),this.betScore3_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.n_goldBg";
		return t;
	};
	_proto.betScore3_i = function () {
		var t = new eui.Label();
		this.betScore3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.width = 68;
		t.x = 34;
		t.y = 10;
		return t;
	};
	_proto.zhuang3_i = function () {
		var t = new eui.Image();
		this.zhuang3 = t;
		t.source = "nnGame2_json.n_zhuangKuang2";
		t.x = 12;
		t.y = -8;
		return t;
	};
	_proto.nickName3_i = function () {
		var t = new eui.Label();
		this.nickName3 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "--";
		t.textAlign = "left";
		t.width = 99;
		t.x = 78;
		t.y = 12;
		return t;
	};
	_proto.score3_i = function () {
		var t = new eui.Label();
		this.score3 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.width = 62;
		t.x = 91;
		t.y = 44;
		return t;
	};
	_proto.cardGroup3_i = function () {
		var t = new eui.Group();
		this.cardGroup3 = t;
		t.x = 46;
		t.y = 84;
		t.elementsContent = [this.cardGroup3_0_i(),this.cardGroup3_1_i(),this.cardGroup3_2_i(),this.cardGroup3_3_i(),this.cardGroup3_4_i()];
		return t;
	};
	_proto.cardGroup3_0_i = function () {
		var t = new eui.Image();
		this.cardGroup3_0 = t;
		t.source = "poker5_json.cardBg2";
		return t;
	};
	_proto.cardGroup3_1_i = function () {
		var t = new eui.Image();
		this.cardGroup3_1 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 20;
		return t;
	};
	_proto.cardGroup3_2_i = function () {
		var t = new eui.Image();
		this.cardGroup3_2 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 40;
		return t;
	};
	_proto.cardGroup3_3_i = function () {
		var t = new eui.Image();
		this.cardGroup3_3 = t;
		t.source = "poker5_json.cardBg2";
		t.visible = false;
		t.x = 60;
		return t;
	};
	_proto.cardGroup3_4_i = function () {
		var t = new eui.Image();
		this.cardGroup3_4 = t;
		t.source = "poker5_json.cardBg2";
		t.visible = false;
		t.x = 80;
		return t;
	};
	_proto.qiangFlag3_i = function () {
		var t = new eui.Image();
		this.qiangFlag3 = t;
		t.source = "nnGame2_json.n_buqiang";
		t.visible = false;
		t.x = -39.5;
		t.y = 111;
		return t;
	};
	_proto.cardType3_i = function () {
		var t = new eui.Image();
		this.cardType3 = t;
		t.anchorOffsetX = 46;
		t.anchorOffsetY = 24;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniu_json.niu0";
		t.visible = false;
		t.x = -9;
		t.y = 130;
		return t;
	};
	_proto.offline3_i = function () {
		var t = new eui.Image();
		this.offline3 = t;
		t.source = "nnGame2_json.offline";
		t.x = 10;
		t.y = 54;
		return t;
	};
	_proto.e3_i = function () {
		var t = new eui.Image();
		this.e3 = t;
		t.source = "emotion_json.bq1";
		t.x = 9;
		t.y = 8;
		return t;
	};
	_proto.readyed3_i = function () {
		var t = new eui.Image();
		this.readyed3 = t;
		t.source = "nnGame2_json.n_readyed";
		t.x = 65;
		t.y = 114;
		return t;
	};
	_proto.statusTip3_i = function () {
		var t = new eui.Image();
		this.statusTip3 = t;
		t.source = "zjhGame_json.qipaiFlag";
		t.x = 78;
		t.y = -33;
		return t;
	};
	_proto.player2_i = function () {
		var t = new eui.Group();
		this.player2 = t;
		t.x = 816;
		t.y = 103;
		t.elementsContent = [this._Image6_i(),this.bet2_i(),this.zhuang2_i(),this.nickName2_i(),this.score2_i(),this.cardGroup2_i(),this.qiangFlag2_i(),this.cardType2_i(),this.offline2_i(),this.e2_i(),this.readyed2_i(),this.statusTip2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.nn_playerBg2";
		return t;
	};
	_proto.bet2_i = function () {
		var t = new eui.Group();
		this.bet2 = t;
		t.x = 77;
		t.y = 88;
		t.elementsContent = [this._Image7_i(),this.betScore2_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.n_goldBg";
		return t;
	};
	_proto.betScore2_i = function () {
		var t = new eui.Label();
		this.betScore2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.width = 68;
		t.x = 34;
		t.y = 10;
		return t;
	};
	_proto.zhuang2_i = function () {
		var t = new eui.Image();
		this.zhuang2 = t;
		t.source = "nnGame2_json.n_zhuangKuang2";
		t.x = 12;
		t.y = -8;
		return t;
	};
	_proto.nickName2_i = function () {
		var t = new eui.Label();
		this.nickName2 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "--";
		t.textAlign = "left";
		t.width = 99;
		t.x = 78;
		t.y = 12;
		return t;
	};
	_proto.score2_i = function () {
		var t = new eui.Label();
		this.score2 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.width = 62;
		t.x = 91;
		t.y = 44;
		return t;
	};
	_proto.cardGroup2_i = function () {
		var t = new eui.Group();
		this.cardGroup2 = t;
		t.x = -54;
		t.y = 83;
		t.elementsContent = [this.cardGroup2_0_i(),this.cardGroup2_1_i(),this.cardGroup2_2_i(),this.cardGroup2_3_i(),this.cardGroup2_4_i()];
		return t;
	};
	_proto.cardGroup2_0_i = function () {
		var t = new eui.Image();
		this.cardGroup2_0 = t;
		t.source = "poker5_json.cardBg2";
		return t;
	};
	_proto.cardGroup2_1_i = function () {
		var t = new eui.Image();
		this.cardGroup2_1 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 20;
		return t;
	};
	_proto.cardGroup2_2_i = function () {
		var t = new eui.Image();
		this.cardGroup2_2 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 40;
		return t;
	};
	_proto.cardGroup2_3_i = function () {
		var t = new eui.Image();
		this.cardGroup2_3 = t;
		t.source = "poker5_json.cardBg2";
		t.visible = false;
		t.x = 60;
		return t;
	};
	_proto.cardGroup2_4_i = function () {
		var t = new eui.Image();
		this.cardGroup2_4 = t;
		t.source = "poker5_json.cardBg2";
		t.visible = false;
		t.x = 80;
		return t;
	};
	_proto.qiangFlag2_i = function () {
		var t = new eui.Image();
		this.qiangFlag2 = t;
		t.source = "nnGame2_json.n_buqiang";
		t.visible = false;
		t.x = -39.5;
		t.y = 111;
		return t;
	};
	_proto.cardType2_i = function () {
		var t = new eui.Image();
		this.cardType2 = t;
		t.anchorOffsetX = 46;
		t.anchorOffsetY = 24;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniu_json.niu0";
		t.visible = false;
		t.x = -9;
		t.y = 130;
		return t;
	};
	_proto.offline2_i = function () {
		var t = new eui.Image();
		this.offline2 = t;
		t.source = "nnGame2_json.offline";
		t.x = 10;
		t.y = 54;
		return t;
	};
	_proto.e2_i = function () {
		var t = new eui.Image();
		this.e2 = t;
		t.source = "emotion_json.bq1";
		t.x = 9;
		t.y = 8;
		return t;
	};
	_proto.readyed2_i = function () {
		var t = new eui.Image();
		this.readyed2 = t;
		t.source = "nnGame2_json.n_readyed";
		t.x = -38;
		t.y = 115;
		return t;
	};
	_proto.statusTip2_i = function () {
		var t = new eui.Image();
		this.statusTip2 = t;
		t.source = "zjhGame_json.qipaiFlag";
		t.x = 76;
		t.y = -63;
		return t;
	};
	_proto.player1_i = function () {
		var t = new eui.Group();
		this.player1 = t;
		t.x = 949;
		t.y = 310;
		t.elementsContent = [this._Image8_i(),this.bet1_i(),this.readyed1_i(),this.zhuang1_i(),this.nickName1_i(),this.score1_i(),this.cardGroup1_i(),this.qiangFlag1_i(),this.cardType1_i(),this.offline1_i(),this.e1_i(),this.statusTip1_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.nn_playerBg2";
		return t;
	};
	_proto.bet1_i = function () {
		var t = new eui.Group();
		this.bet1 = t;
		t.x = 77;
		t.y = 88;
		t.elementsContent = [this._Image9_i(),this.betScore1_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.n_goldBg";
		return t;
	};
	_proto.betScore1_i = function () {
		var t = new eui.Label();
		this.betScore1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.width = 68;
		t.x = 34;
		t.y = 10;
		return t;
	};
	_proto.readyed1_i = function () {
		var t = new eui.Image();
		this.readyed1 = t;
		t.source = "nnGame2_json.n_readyed";
		t.x = -38;
		t.y = 115;
		return t;
	};
	_proto.zhuang1_i = function () {
		var t = new eui.Image();
		this.zhuang1 = t;
		t.source = "nnGame2_json.n_zhuangKuang2";
		t.x = 12;
		t.y = -8;
		return t;
	};
	_proto.nickName1_i = function () {
		var t = new eui.Label();
		this.nickName1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "--";
		t.textAlign = "left";
		t.width = 99;
		t.x = 78;
		t.y = 12;
		return t;
	};
	_proto.score1_i = function () {
		var t = new eui.Label();
		this.score1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.width = 62;
		t.x = 91;
		t.y = 44;
		return t;
	};
	_proto.cardGroup1_i = function () {
		var t = new eui.Group();
		this.cardGroup1 = t;
		t.x = -124;
		t.elementsContent = [this.cardGroup1_0_i(),this.cardGroup1_1_i(),this.cardGroup1_2_i(),this.cardGroup1_3_i(),this.cardGroup1_4_i()];
		return t;
	};
	_proto.cardGroup1_0_i = function () {
		var t = new eui.Image();
		this.cardGroup1_0 = t;
		t.source = "poker5_json.cardBg2";
		return t;
	};
	_proto.cardGroup1_1_i = function () {
		var t = new eui.Image();
		this.cardGroup1_1 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 20;
		return t;
	};
	_proto.cardGroup1_2_i = function () {
		var t = new eui.Image();
		this.cardGroup1_2 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 40;
		return t;
	};
	_proto.cardGroup1_3_i = function () {
		var t = new eui.Image();
		this.cardGroup1_3 = t;
		t.source = "poker5_json.cardBg2";
		t.visible = false;
		t.x = 60;
		return t;
	};
	_proto.cardGroup1_4_i = function () {
		var t = new eui.Image();
		this.cardGroup1_4 = t;
		t.source = "poker5_json.cardBg2";
		t.visible = false;
		t.x = 80;
		return t;
	};
	_proto.qiangFlag1_i = function () {
		var t = new eui.Image();
		this.qiangFlag1 = t;
		t.source = "nnGame2_json.n_buqiang";
		t.visible = false;
		t.x = -112;
		t.y = 21;
		return t;
	};
	_proto.cardType1_i = function () {
		var t = new eui.Image();
		this.cardType1 = t;
		t.anchorOffsetX = 46;
		t.anchorOffsetY = 24;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniu_json.niu0";
		t.visible = false;
		t.x = -75.6;
		t.y = 38.2;
		return t;
	};
	_proto.offline1_i = function () {
		var t = new eui.Image();
		this.offline1 = t;
		t.source = "nnGame2_json.offline";
		t.x = 10;
		t.y = 54;
		return t;
	};
	_proto.e1_i = function () {
		var t = new eui.Image();
		this.e1 = t;
		t.source = "emotion_json.bq1";
		t.x = 9;
		t.y = 8;
		return t;
	};
	_proto.statusTip1_i = function () {
		var t = new eui.Image();
		this.statusTip1 = t;
		t.source = "zjhGame_json.qipaiFlag";
		t.x = 69;
		t.y = -77;
		return t;
	};
	_proto.player4_i = function () {
		var t = new eui.Group();
		this.player4 = t;
		t.x = 120;
		t.y = 102;
		t.elementsContent = [this._Image10_i(),this.bet4_i(),this.readyed4_i(),this.zhuang4_i(),this.nickName4_i(),this.score4_i(),this.cardGroup4_i(),this.qiangFlag4_i(),this.cardType4_i(),this.offline4_i(),this.e4_i(),this.statusTip4_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.nn_playerBg2";
		return t;
	};
	_proto.bet4_i = function () {
		var t = new eui.Group();
		this.bet4 = t;
		t.x = -2;
		t.y = 86;
		t.elementsContent = [this._Image11_i(),this.betScore4_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.n_goldBg";
		return t;
	};
	_proto.betScore4_i = function () {
		var t = new eui.Label();
		this.betScore4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.width = 68;
		t.x = 34;
		t.y = 10;
		return t;
	};
	_proto.readyed4_i = function () {
		var t = new eui.Image();
		this.readyed4 = t;
		t.source = "nnGame2_json.n_readyed";
		t.x = 222;
		t.y = 30;
		return t;
	};
	_proto.zhuang4_i = function () {
		var t = new eui.Image();
		this.zhuang4 = t;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.source = "nnGame2_json.n_zhuangKuang2";
		t.x = 12;
		t.y = 12;
		return t;
	};
	_proto.nickName4_i = function () {
		var t = new eui.Label();
		this.nickName4 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "--";
		t.textAlign = "left";
		t.width = 99;
		t.x = 78;
		t.y = 12;
		return t;
	};
	_proto.score4_i = function () {
		var t = new eui.Label();
		this.score4 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.width = 62;
		t.x = 91;
		t.y = 45;
		return t;
	};
	_proto.cardGroup4_i = function () {
		var t = new eui.Group();
		this.cardGroup4 = t;
		t.x = 162;
		t.y = 84;
		t.elementsContent = [this.cardGroup4_0_i(),this.cardGroup4_1_i(),this.cardGroup4_2_i(),this.cardGroup4_3_i(),this.cardGroup4_4_i()];
		return t;
	};
	_proto.cardGroup4_0_i = function () {
		var t = new eui.Image();
		this.cardGroup4_0 = t;
		t.source = "poker5_json.cardBg2";
		return t;
	};
	_proto.cardGroup4_1_i = function () {
		var t = new eui.Image();
		this.cardGroup4_1 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 20;
		return t;
	};
	_proto.cardGroup4_2_i = function () {
		var t = new eui.Image();
		this.cardGroup4_2 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 40;
		return t;
	};
	_proto.cardGroup4_3_i = function () {
		var t = new eui.Image();
		this.cardGroup4_3 = t;
		t.source = "poker5_json.cardBg2";
		t.visible = false;
		t.x = 60;
		return t;
	};
	_proto.cardGroup4_4_i = function () {
		var t = new eui.Image();
		this.cardGroup4_4 = t;
		t.source = "poker5_json.cardBg2";
		t.visible = false;
		t.x = 80;
		return t;
	};
	_proto.qiangFlag4_i = function () {
		var t = new eui.Image();
		this.qiangFlag4 = t;
		t.source = "nnGame2_json.n_buqiang";
		t.visible = false;
		t.x = 177;
		t.y = 112;
		return t;
	};
	_proto.cardType4_i = function () {
		var t = new eui.Image();
		this.cardType4 = t;
		t.anchorOffsetX = 46;
		t.anchorOffsetY = 24;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniu_json.niu0";
		t.visible = false;
		t.x = 209;
		t.y = 130;
		return t;
	};
	_proto.offline4_i = function () {
		var t = new eui.Image();
		this.offline4 = t;
		t.source = "nnGame2_json.offline";
		t.x = 10;
		t.y = 54;
		return t;
	};
	_proto.e4_i = function () {
		var t = new eui.Image();
		this.e4 = t;
		t.source = "emotion_json.bq1";
		t.x = 106;
		t.y = 16.5;
		return t;
	};
	_proto.statusTip4_i = function () {
		var t = new eui.Image();
		this.statusTip4 = t;
		t.source = "zjhGame_json.qipaiFlag";
		t.x = 92;
		t.y = -50;
		return t;
	};
	_proto.player5_i = function () {
		var t = new eui.Group();
		this.player5 = t;
		t.x = 6;
		t.y = 310;
		t.elementsContent = [this._Image12_i(),this.bet5_i(),this.zhuang5_i(),this.nickName5_i(),this.score5_i(),this.cardGroup5_i(),this.qiangFlag5_i(),this.cardType5_i(),this.offline5_i(),this.e5_i(),this.readyed5_i(),this.statusTip5_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.nn_playerBg2";
		return t;
	};
	_proto.bet5_i = function () {
		var t = new eui.Group();
		this.bet5 = t;
		t.x = -2;
		t.y = 86;
		t.elementsContent = [this._Image13_i(),this.betScore5_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.n_goldBg";
		return t;
	};
	_proto.betScore5_i = function () {
		var t = new eui.Label();
		this.betScore5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.width = 68;
		t.x = 34;
		t.y = 10;
		return t;
	};
	_proto.zhuang5_i = function () {
		var t = new eui.Image();
		this.zhuang5 = t;
		t.source = "nnGame2_json.n_zhuangKuang2";
		t.x = 12;
		t.y = -8;
		return t;
	};
	_proto.nickName5_i = function () {
		var t = new eui.Label();
		this.nickName5 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "--";
		t.textAlign = "left";
		t.width = 99;
		t.x = 78;
		t.y = 12;
		return t;
	};
	_proto.score5_i = function () {
		var t = new eui.Label();
		this.score5 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.width = 62;
		t.x = 91;
		t.y = 44;
		return t;
	};
	_proto.cardGroup5_i = function () {
		var t = new eui.Group();
		this.cardGroup5 = t;
		t.x = 195;
		t.elementsContent = [this.cardGroup5_0_i(),this.cardGroup5_1_i(),this.cardGroup5_2_i(),this.cardGroup5_3_i(),this.cardGroup5_4_i()];
		return t;
	};
	_proto.cardGroup5_0_i = function () {
		var t = new eui.Image();
		this.cardGroup5_0 = t;
		t.source = "poker5_json.cardBg2";
		return t;
	};
	_proto.cardGroup5_1_i = function () {
		var t = new eui.Image();
		this.cardGroup5_1 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 20;
		return t;
	};
	_proto.cardGroup5_2_i = function () {
		var t = new eui.Image();
		this.cardGroup5_2 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 40;
		return t;
	};
	_proto.cardGroup5_3_i = function () {
		var t = new eui.Image();
		this.cardGroup5_3 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 60;
		return t;
	};
	_proto.cardGroup5_4_i = function () {
		var t = new eui.Image();
		this.cardGroup5_4 = t;
		t.source = "poker5_json.cardBg2";
		t.x = 80;
		return t;
	};
	_proto.qiangFlag5_i = function () {
		var t = new eui.Image();
		this.qiangFlag5 = t;
		t.source = "nnGame2_json.n_buqiang";
		t.visible = false;
		t.x = 228;
		t.y = 22;
		return t;
	};
	_proto.cardType5_i = function () {
		var t = new eui.Image();
		this.cardType5 = t;
		t.anchorOffsetX = 46;
		t.anchorOffsetY = 24;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "niuniu_json.niu0";
		t.visible = false;
		t.x = 260;
		t.y = 40;
		return t;
	};
	_proto.offline5_i = function () {
		var t = new eui.Image();
		this.offline5 = t;
		t.source = "nnGame2_json.offline";
		t.x = 10;
		t.y = 54;
		return t;
	};
	_proto.e5_i = function () {
		var t = new eui.Image();
		this.e5 = t;
		t.source = "emotion_json.bq1";
		t.x = 9;
		t.y = 8;
		return t;
	};
	_proto.readyed5_i = function () {
		var t = new eui.Image();
		this.readyed5 = t;
		t.source = "nnGame2_json.n_readyed";
		t.x = 222;
		t.y = 30;
		return t;
	};
	_proto.statusTip5_i = function () {
		var t = new eui.Image();
		this.statusTip5 = t;
		t.source = "zjhGame_json.qipaiFlag";
		t.x = 92;
		t.y = -55;
		return t;
	};
	_proto.quitBtn_i = function () {
		var t = new eui.Button();
		this.quitBtn = t;
		t.label = "";
		t.right = 21;
		t.y = 25;
		t.skinName = ZjhBattleSkin$Skin88;
		return t;
	};
	_proto.helpBtn_i = function () {
		var t = new eui.Button();
		this.helpBtn = t;
		t.label = "";
		t.right = 21;
		t.y = 108;
		t.skinName = ZjhBattleSkin$Skin89;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.bottom = 1;
		t.source = "n_bottomeBg_png";
		t.x = 0;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.bottom = 3;
		t.source = "nnGame2_json.nameBg";
		t.x = 191;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.bottom = 3;
		t.source = "nnGame2_json.n_scoreBg";
		t.x = 426;
		return t;
	};
	_proto.setBtn_i = function () {
		var t = new eui.Button();
		this.setBtn = t;
		t.bottom = 3;
		t.label = "";
		t.right = 230;
		t.skinName = ZjhBattleSkin$Skin90;
		return t;
	};
	_proto.chatBtn_i = function () {
		var t = new eui.Button();
		this.chatBtn = t;
		t.bottom = 2;
		t.label = "";
		t.right = 131;
		t.skinName = ZjhBattleSkin$Skin91;
		return t;
	};
	_proto.recordBtn_i = function () {
		var t = new eui.Button();
		this.recordBtn = t;
		t.bottom = 2;
		t.label = "";
		t.right = 41;
		t.skinName = ZjhBattleSkin$Skin92;
		return t;
	};
	_proto.player0_i = function () {
		var t = new eui.Group();
		this.player0 = t;
		t.x = 37;
		t.y = 544;
		t.elementsContent = [this.nickName0_i(),this.score0_i(),this._Image17_i(),this.zhuang0_i(),this.e0_i(),this.statusTip0_i()];
		return t;
	};
	_proto.nickName0_i = function () {
		var t = new eui.Label();
		this.nickName0 = t;
		t.anchorOffsetX = 0;
		t.bottom = 73;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "--";
		t.textAlign = "center";
		t.width = 149;
		t.x = 170.5;
		return t;
	};
	_proto.score0_i = function () {
		var t = new eui.Label();
		this.score0 = t;
		t.anchorOffsetX = 0;
		t.bottom = 9;
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xddc687;
		t.width = 149;
		t.x = 380;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.n_faceKuang";
		return t;
	};
	_proto.zhuang0_i = function () {
		var t = new eui.Image();
		this.zhuang0 = t;
		t.source = "nnGame2_json.n_zhuangKuang";
		t.y = -38;
		return t;
	};
	_proto.e0_i = function () {
		var t = new eui.Image();
		this.e0 = t;
		t.source = "emotion_json.bq1";
		t.x = 18;
		t.y = 20;
		return t;
	};
	_proto.statusTip0_i = function () {
		var t = new eui.Image();
		this.statusTip0 = t;
		t.source = "zjhGame_json.qipaiFlag";
		t.x = 37;
		t.y = -85;
		return t;
	};
	_proto.inviteBtn_i = function () {
		var t = new eui.Button();
		this.inviteBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 241;
		t.skinName = ZjhBattleSkin$Skin93;
		return t;
	};
	_proto.readyBtn_i = function () {
		var t = new eui.Button();
		this.readyBtn = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.y = 324;
		t.skinName = ZjhBattleSkin$Skin94;
		return t;
	};
	_proto.countDown_i = function () {
		var t = new eui.Group();
		this.countDown = t;
		t.bottom = 60;
		t.x = 176;
		t.elementsContent = [this._Image18_i(),this.countDownTF_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.clockBg";
		return t;
	};
	_proto.countDownTF_i = function () {
		var t = new eui.Label();
		this.countDownTF = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.text = "10";
		t.textAlign = "center";
		t.width = 59;
		t.x = 10;
		t.y = 32;
		return t;
	};
	_proto.qiangzhuangGroup_i = function () {
		var t = new eui.Group();
		this.qiangzhuangGroup = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 390;
		t.elementsContent = [this.qiang0_i(),this.qiang1_i(),this.qiang2_i(),this.qiang3_i(),this.qiang4_i()];
		return t;
	};
	_proto.qiang0_i = function () {
		var t = new eui.Button();
		this.qiang0 = t;
		t.label = "";
		t.skinName = ZjhBattleSkin$Skin95;
		return t;
	};
	_proto.qiang1_i = function () {
		var t = new eui.Button();
		this.qiang1 = t;
		t.label = "";
		t.x = 161;
		t.skinName = ZjhBattleSkin$Skin96;
		return t;
	};
	_proto.qiang2_i = function () {
		var t = new eui.Button();
		this.qiang2 = t;
		t.label = "";
		t.x = 325;
		t.skinName = ZjhBattleSkin$Skin97;
		return t;
	};
	_proto.qiang3_i = function () {
		var t = new eui.Button();
		this.qiang3 = t;
		t.label = "";
		t.x = 484;
		t.skinName = ZjhBattleSkin$Skin98;
		return t;
	};
	_proto.qiang4_i = function () {
		var t = new eui.Button();
		this.qiang4 = t;
		t.label = "";
		t.x = 638;
		t.skinName = ZjhBattleSkin$Skin99;
		return t;
	};
	_proto.bankerIcon_i = function () {
		var t = new eui.Image();
		this.bankerIcon = t;
		t.source = "nnGame2_json.n_bankerIcon";
		t.x = 534;
		t.y = 311;
		return t;
	};
	_proto.cardGroup0_i = function () {
		var t = new eui.Group();
		this.cardGroup0 = t;
		t.horizontalCenter = 0;
		t.y = 444;
		t.elementsContent = [this.cardGroup0_0_i(),this.cardGroup0_1_i(),this.cardGroup0_2_i(),this._Image19_i()];
		return t;
	};
	_proto.cardGroup0_0_i = function () {
		var t = new eui.Image();
		this.cardGroup0_0 = t;
		t.source = "poker5_json.cardBg";
		return t;
	};
	_proto.cardGroup0_1_i = function () {
		var t = new eui.Image();
		this.cardGroup0_1 = t;
		t.source = "poker5_json.cardBg";
		t.x = 108;
		return t;
	};
	_proto.cardGroup0_2_i = function () {
		var t = new eui.Image();
		this.cardGroup0_2 = t;
		t.source = "poker5_json.cardBg";
		t.x = 216;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "zjhGame_json.kanpaiTip";
		t.y = 38;
		return t;
	};
	_proto.liangpaiBtn_i = function () {
		var t = new eui.Button();
		this.liangpaiBtn = t;
		t.label = "";
		t.visible = false;
		t.x = 880;
		t.y = 478;
		t.skinName = ZjhBattleSkin$Skin100;
		return t;
	};
	_proto.readyed0_i = function () {
		var t = new eui.Image();
		this.readyed0 = t;
		t.horizontalCenter = 0.5;
		t.source = "nnGame2_json.n_readyed";
		t.y = 495.5;
		return t;
	};
	_proto.qiangFlag0_i = function () {
		var t = new eui.Image();
		this.qiangFlag0 = t;
		t.horizontalCenter = 9;
		t.source = "nnGame2_json.n_qiangzhuang1";
		t.visible = false;
		t.y = 369;
		return t;
	};
	_proto.betGroup_i = function () {
		var t = new eui.Group();
		this.betGroup = t;
		t.horizontalCenter = 0;
		t.y = 390;
		t.elementsContent = [this.bei1_i(),this.bei2_i(),this.bei3_i()];
		return t;
	};
	_proto.bei1_i = function () {
		var t = new eui.Button();
		this.bei1 = t;
		t.label = "";
		t.skinName = ZjhBattleSkin$Skin101;
		return t;
	};
	_proto.bei2_i = function () {
		var t = new eui.Button();
		this.bei2 = t;
		t.label = "";
		t.x = 161;
		t.skinName = ZjhBattleSkin$Skin102;
		return t;
	};
	_proto.bei3_i = function () {
		var t = new eui.Button();
		this.bei3 = t;
		t.label = "";
		t.x = 322;
		t.y = -1;
		t.skinName = ZjhBattleSkin$Skin103;
		return t;
	};
	_proto.bet0_i = function () {
		var t = new eui.Group();
		this.bet0 = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 396;
		t.elementsContent = [this._Image20_i(),this.betScore0_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "nnGame2_json.n_goldBg";
		t.x = 20;
		return t;
	};
	_proto.betScore0_i = function () {
		var t = new eui.Label();
		this.betScore0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 16;
		t.text = "0";
		t.textAlign = "center";
		t.width = 68;
		t.x = 34;
		t.y = 10;
		return t;
	};
	_proto.chat0_i = function () {
		var t = new eui.Group();
		this.chat0 = t;
		t.x = 8;
		t.y = 457;
		t.elementsContent = [this._Image21_i(),this.chatTF0_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "common_json.chatpaopao";
		return t;
	};
	_proto.chatTF0_i = function () {
		var t = new eui.Label();
		this.chatTF0 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "--";
		t.width = 180;
		t.x = 5;
		t.y = 14;
		return t;
	};
	_proto.chat5_i = function () {
		var t = new eui.Group();
		this.chat5 = t;
		t.x = 8;
		t.y = 253;
		t.elementsContent = [this._Image22_i(),this.chatTF5_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "common_json.chatpaopao";
		return t;
	};
	_proto.chatTF5_i = function () {
		var t = new eui.Label();
		this.chatTF5 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "--";
		t.width = 180;
		t.x = 5;
		t.y = 14;
		return t;
	};
	_proto.chat4_i = function () {
		var t = new eui.Group();
		this.chat4 = t;
		t.x = 105;
		t.y = 53;
		t.elementsContent = [this._Image23_i(),this.chatTF4_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "common_json.chatpaopao";
		return t;
	};
	_proto.chatTF4_i = function () {
		var t = new eui.Label();
		this.chatTF4 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "--";
		t.width = 180;
		t.x = 5;
		t.y = 14;
		return t;
	};
	_proto.chat3_i = function () {
		var t = new eui.Group();
		this.chat3 = t;
		t.x = 468;
		t.y = 13;
		t.elementsContent = [this._Image24_i(),this.chatTF3_i()];
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "common_json.chatpaopao";
		return t;
	};
	_proto.chatTF3_i = function () {
		var t = new eui.Label();
		this.chatTF3 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "--";
		t.width = 180;
		t.x = 5;
		t.y = 14;
		return t;
	};
	_proto.chat2_i = function () {
		var t = new eui.Group();
		this.chat2 = t;
		t.x = 800;
		t.y = 40;
		t.elementsContent = [this._Image25_i(),this.chatTF2_i()];
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "common_json.chatpaopao";
		return t;
	};
	_proto.chatTF2_i = function () {
		var t = new eui.Label();
		this.chatTF2 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "--";
		t.width = 180;
		t.x = 5;
		t.y = 14;
		return t;
	};
	_proto.chat1_i = function () {
		var t = new eui.Group();
		this.chat1 = t;
		t.x = 929;
		t.y = 234;
		t.elementsContent = [this._Image26_i(),this.chatTF1_i()];
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.source = "common_json.chatpaopao";
		return t;
	};
	_proto.chatTF1_i = function () {
		var t = new eui.Label();
		this.chatTF1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 20;
		t.text = "--";
		t.width = 180;
		t.x = 5;
		t.y = 14;
		return t;
	};
	_proto.bipaiBtn_i = function () {
		var t = new eui.Button();
		this.bipaiBtn = t;
		t.label = "";
		t.x = 738;
		t.y = 510;
		t.skinName = ZjhBattleSkin$Skin104;
		return t;
	};
	_proto.qipaiBtn_i = function () {
		var t = new eui.Button();
		this.qipaiBtn = t;
		t.label = "";
		t.x = 925;
		t.y = 510;
		t.skinName = ZjhBattleSkin$Skin105;
		return t;
	};
	return ZjhBattleSkin;
})(eui.Skin);