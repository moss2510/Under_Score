var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var controls;
(function (controls) {
    var InGameGUIControl = /** @class */ (function (_super) {
        __extends(InGameGUIControl, _super);
        function InGameGUIControl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return InGameGUIControl;
    }(createjs.Container));
    controls.InGameGUIControl = InGameGUIControl;
    var ProgressBar = /** @class */ (function (_super) {
        __extends(ProgressBar, _super);
        function ProgressBar(x, y, width, height, maxValue, backgroundColor, foregroundColor, borderWidth, borderColor) {
            var _this = _super.call(this) || this;
            _this._backgroundColor = "black";
            _this._foregroundColor = "green";
            _this._borderWidth = 0;
            _this._borderColor = "black";
            // Control Properties
            _this._value = 0;
            _this._maxValue = 100;
            _this._x = x;
            _this._y = y;
            _this._width = width;
            _this._height = height;
            _this._maxValue = maxValue;
            _this._backgroundColor = backgroundColor;
            _this._foregroundColor = foregroundColor;
            _this._borderWidth = borderWidth;
            _this._borderColor = borderColor;
            _this.Init();
            return _this;
        }
        Object.defineProperty(ProgressBar.prototype, "Value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                if (value < 0 || value > this._maxValue) {
                    return;
                }
                this._value = value;
                // The regenerate speed is slower on increase and faster on decrease
                createjs.Tween.get(this._foreground).to({ scaleX: this._value / this._maxValue }, (value < this._value) ? 1000 : 100, createjs.Ease.quadIn);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressBar.prototype, "MaxValue", {
            get: function () {
                return this._maxValue;
            },
            set: function (maxValue) {
                if (maxValue < 0) {
                    return;
                }
                this._value = maxValue;
            },
            enumerable: true,
            configurable: true
        });
        ProgressBar.prototype.Init = function () {
            this.removeAllChildren();
            this._border = new createjs.Shape();
            this._border.graphics.setStrokeStyle(this._borderWidth).beginStroke(this._borderColor).drawRect(this._x + 1, this._y + 1, this._width + this._borderWidth, this._height + this._borderWidth).endStroke();
            this._background = new createjs.Shape();
            this._background.set({ x: this._x + this._borderWidth, y: this._y + this._borderWidth, scaleX: 1 });
            this._background.graphics.beginFill(this._backgroundColor).drawRect(0, 0, this._width, this._height);
            this._foreground = new createjs.Shape();
            this._foreground.set({ x: this._x + this._borderWidth, y: this._y + this._borderWidth, scaleX: this._value / this._maxValue });
            this._foreground.graphics.beginFill(this._foregroundColor).drawRect(0, 0, this._width, this._height);
            this.addChild(this._border);
            this.addChild(this._background);
            this.addChild(this._foreground);
        };
        ProgressBar.prototype.Update = function () {
        };
        ProgressBar.prototype.Increase = function (amount) {
            // Prevent substract amount to go below 0
            if (amount < 0) {
                return;
            }
            if (this._value + amount < this._maxValue) {
                this.Value += amount;
            }
            else {
                this.Value = this._maxValue;
            }
        };
        ProgressBar.prototype.Decrease = function (amount) {
            // Prevent adding amount that will excess maxValue
            if (amount < 0) {
                return;
            }
            if (this._value - amount > 0) {
                this.Value -= amount;
            }
            else {
                this.Value = 0;
            }
        };
        return ProgressBar;
    }(controls.InGameGUIControl));
    controls.ProgressBar = ProgressBar;
})(controls || (controls = {}));
//# sourceMappingURL=ingameguicontrol.js.map