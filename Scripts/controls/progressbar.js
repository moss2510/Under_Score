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
    var ProgressBar = /** @class */ (function (_super) {
        __extends(ProgressBar, _super);
        function ProgressBar() {
            return _super.call(this, "") || this;
        }
        ProgressBar.prototype.Update = function () {
        };
        return ProgressBar;
    }(controls.InGameGUIControl));
    controls.ProgressBar = ProgressBar;
})(controls || (controls = {}));
//# sourceMappingURL=progressbar.js.map