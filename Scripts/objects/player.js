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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player() {
            var _this = _super.call(this, "player") || this;
            _this._movementSpeed = 5;
            _this._jumpForce = 50;
            var rb2d = new components.Rigidbody2D();
            _this.AddComponent(rb2d);
            return _this;
        }
        Player.prototype.Init = function () {
            this.SetPivotPoint(this.Width / 2, this.Height / 2);
        };
        Player.prototype.UpdateTransform = function () {
            // this.x = managers.GameManager.SceneManager.MouseX;
            // this.y = managers.GameManager.SceneManager.MouseY;
            if (managers.InputManager.KeyDown(config.Key.LEFT)) {
                this.x -= this._movementSpeed;
            }
            if (managers.InputManager.KeyDown(config.Key.RIGHT)) {
                this.x += this._movementSpeed;
            }
            if (managers.InputManager.KeyUp(config.Key.SPACE)) {
                this.y -= this._jumpForce;
            }
        };
        Player.prototype.CheckBoundary = function () {
            if (this.x > managers.GameManager.SceneManager.ScreenWidth - this.PivotX) {
                this.x = managers.GameManager.SceneManager.ScreenWidth - this.PivotX;
            }
            if (this.x < this.PivotX) {
                this.x = this.PivotX;
            }
            if (this.y > managers.GameManager.SceneManager.ScreenHeight - this.PivotY) {
                this.y = managers.GameManager.SceneManager.ScreenHeight - this.PivotY;
            }
            if (this.y < this.PivotY) {
                this.y = this.PivotY;
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map