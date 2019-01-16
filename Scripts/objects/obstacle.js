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
            var _this = _super.call(this, "obstacle") || this;
            _this._direction = 1;
            return _this;
        }
        Obstacle.prototype.Init = function () {
            this.SetPivotPoint(this.Width / 2, this.Height / 2);
            this.x = Math.floor(Math.random() * (managers.GameManager.SceneManager.ScreenWidth) - this.PivotX);
            this.y = Math.floor(Math.random() * (managers.GameManager.SceneManager.ScreenHeight) + this.PivotY);
        };
        Obstacle.prototype.UpdateTransform = function () {
            this.x += this._direction;
        };
        Obstacle.prototype.CheckBoundary = function () {
            if (this.x > managers.GameManager.SceneManager.ScreenWidth - this.PivotX || this.x < this.PivotX) {
                this._direction *= -1;
            }
        };
        return Obstacle;
    }(objects.GameObject));
    objects.Obstacle = Obstacle;
})(objects || (objects = {}));
//# sourceMappingURL=obstacle.js.map