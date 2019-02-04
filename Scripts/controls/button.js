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
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        function Button(backgroundImage, x, y, centerPivot) {
            var _this = _super.call(this, backgroundImage) || this;
            _this._backgroundImage = backgroundImage;
            _this.x = x;
            _this.y = y;
            _this.width = _this.getBounds().width;
            _this.height = _this.getBounds().height;
            if (centerPivot) {
                _this.regX = _this.width / 2;
                _this.regY = _this.height / 2;
            }
            return _this;
        }
        Button.prototype.SetBackgroundImage = function (newBackgroundImage) {
            this._backgroundImage = newBackgroundImage;
        };
        return Button;
    }(createjs.Bitmap));
    controls.Button = Button;
})(controls || (controls = {}));
//# sourceMappingURL=button.js.map