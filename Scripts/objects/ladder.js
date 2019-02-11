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
    var Ladder = /** @class */ (function (_super) {
        __extends(Ladder, _super);
        function Ladder(x, y, width, height) {
            var _this = _super.call(this, width, height) || this;
            _this.Sprite = new createjs.Sprite(new createjs.SpriteSheet({
                framerate: 1,
                images: [managers.GameManager.AssetManager.getResult("sprite_ladder")],
                frames: { width: width, height: height }
            }));
            _this.name = "ladder";
            _this.collider = new components.Collider(_this, 0, 0, _this.Width, _this.Height);
            _this.AddComponent(_this.collider);
            return _this;
        }
        Ladder.prototype.Init = function () {
        };
        Ladder.prototype.UpdateTransform = function () {
        };
        Ladder.prototype.OnCollisionEnter = function (other) {
        };
        return Ladder;
    }(objects.GameObject));
    objects.Ladder = Ladder;
})(objects || (objects = {}));
//# sourceMappingURL=ladder.js.map