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
    var Label = /** @class */ (function (_super) {
        __extends(Label, _super);
        function Label(text, x, y, size, font, color, centerPivot) {
            var _this = _super.call(this, text, size + "px " + font, color) || this;
            _this.label = text;
            _this.width = _this.getMeasuredWidth();
            _this.height = _this.getMeasuredHeight();
            _this.x = x;
            _this.y = y;
            _this.centerPivot = centerPivot;
            // Center the pivot point of the label by divide the width and height by 2;
            if (centerPivot) {
                _this.regX = _this.width / 2;
                _this.regY = _this.height / 2;
            }
            return _this;
        }
        return Label;
    }(createjs.Text));
    controls.Label = Label;
})(controls || (controls = {}));
//# sourceMappingURL=label.js.map