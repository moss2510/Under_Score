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
var objects;
(function (objects) {
    var Platform = /** @class */ (function (_super) {
        __extends(Platform, _super);
        function Platform(x, y, width, height) {
            var _this = _super.call(this, width, height) || this;
            _this.x = x;
            _this.y = y;
            _this.Sprite = new createjs.Sprite(new createjs.SpriteSheet({
                framerate: 1,
                images: [managers.GameManager.AssetManager.getResult("sprite_platform")],
                frames: { width: _this.Width, height: _this.Height }
            }));
            _this.name = "platform";
            _this.collider = new components.Collider(_this, 0, 0, width, height);
            _this.AddComponent(_this.collider);
            return _this;
        }
        Platform.prototype.Init = function () {
        };
        Platform.prototype.UpdateTransform = function () {
        };
        Platform.prototype.OnCollisionEnter = function (other) {
            if (other.name == "test") {
            }
        };
        return Platform;
    }(objects.GameObject));
    objects.Platform = Platform;
})(objects || (objects = {}));
//# sourceMappingURL=platform.js.map