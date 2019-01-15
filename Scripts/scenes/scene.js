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
var scenes;
(function (scenes) {
    var Scene = /** @class */ (function (_super) {
        __extends(Scene, _super);
        function Scene(type, backgroundImage) {
            var _this = _super.call(this) || this;
            _this._type = type;
            _this._backgroundImage = backgroundImage;
            _this.addChild(_this._backgroundImage);
            return _this;
        }
        Object.defineProperty(Scene.prototype, "BackgroundImage", {
            get: function () {
                return this._backgroundImage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "Type", {
            get: function () {
                return this._type;
            },
            enumerable: true,
            configurable: true
        });
        return Scene;
    }(createjs.Container));
    scenes.Scene = Scene;
})(scenes || (scenes = {}));
//# sourceMappingURL=scene.js.map