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
            _this._jumpForce = 100;
            _this._isJumping = false;
            // Add Rigidbody to allow gravity
            var rb2d = new components.Rigidbody2D();
            _this.AddComponent(rb2d);
            // Add Health
            var hc = new components.HealthComponent(100);
            _this.AddComponent(hc);
            // Add Shield
            var sc = new components.HealthComponent(80);
            _this.AddComponent(hc);
            managers.GameManager.CameraManager.Follow(_this);
            return _this;
        }
        Player.prototype.Init = function () {
            this.SetPivotPoint(this.Width / 2, this.Height / 2);
        };
        Player.prototype.UpdateTransform = function () {
            if (managers.InputManager.KeyDown(config.Key.LEFT)) {
                this.x -= this._movementSpeed;
            }
            if (managers.InputManager.KeyDown(config.Key.RIGHT)) {
                this.x += this._movementSpeed;
            }
            if (managers.InputManager.KeyUp(config.Key.SPACE) && !this._isJumping) {
                this._isJumping = true;
                createjs.Tween.get(this).to({ y: this.y - this._jumpForce }, 300).call(this.onFinishJump);
            }
            if (managers.InputManager.KeyDown(config.Key.F)) {
                this.y -= this._jumpForce;
            }
        };
        Player.prototype.CheckBoundary = function () {
            _super.prototype.CheckBoundary.call(this);
        };
        Player.prototype.onFinishJump = function () {
            var _this = this;
            createjs.Tween.get(this).to({ y: this.y + this._jumpForce }, 500).call(function () { return _this._isJumping = false; });
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map