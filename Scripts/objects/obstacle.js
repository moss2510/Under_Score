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
    var Obstacle = /** @class */ (function (_super) {
        __extends(Obstacle, _super);
        function Obstacle() {
            var _this = _super.call(this, 32, 32, {
                framerate: 10,
                images: [managers.GameManager.AssetManager.getResult("spritesheet_obstacle")],
                frames: { width: 32, height: 32 },
                animations: {
                    stand: 0
                }
            }) || this;
            _this._direction = 1;
            return _this;
        }
        Obstacle.prototype.Init = function () {
            this.SetPivotPoint(this.Width / 2, this.Height / 2);
            this.x = Math.floor(Math.random() * (managers.GameManager.SceneManager.ScreenWidth) - this.PivotX);
            this.y = Math.floor(Math.random() * (managers.GameManager.SceneManager.ScreenHeight) + this.PivotY);
            var rb2d = new components.Rigidbody2D();
            this.AddComponent(rb2d);
        };
        Obstacle.prototype.UpdateTransform = function () {
            this.x += this._direction;
        };
        Obstacle.prototype.CheckBoundary = function () {
            _super.prototype.CheckBoundary.call(this);
            if (this.x >= this.CurrentLevel.LevelWidth - this.CurrentLevel.LevelBoundarySize - this.PivotX || this.x <= this.PivotX + this.CurrentLevel.LevelBoundarySize) {
                this._direction *= -1;
            }
        };
        return Obstacle;
    }(objects.GameObject));
    objects.Obstacle = Obstacle;
})(objects || (objects = {}));
//# sourceMappingURL=obstacle.js.map