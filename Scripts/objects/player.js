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
            var _this = _super.call(this, 32, 32, {
                framerate: 1,
                images: [managers.GameManager.AssetManager.getResult("spritesheet_player")],
                frames: { width: 32, height: 32 },
                animations: {
                    stand: 25,
                    run: [0, 3, "run"],
                    jump: [4, 10, "stand"]
                }
            }) || this;
            _this._movementSpeed = 5;
            _this._jumpForce = 100;
            _this._isJumping = false;
            _this._isMoving = false;
            // Add Rigidbody to allow gravity
            _this._rb2d = new components.Rigidbody2D();
            _this.AddComponent(_this._rb2d);
            // Add Health
            _this._hp = new components.HealthComponent(100);
            _this._hp.RegenerateRate = 0.1;
            _this.AddComponent(_this._hp);
            // Add Shield
            _this._shield = new components.HealthComponent(80);
            _this._shield.RegenerateRate = 0.1;
            _this.AddComponent(_this._shield);
            managers.GameManager.CameraManager.Follow(_this);
            _this._healthBar = new controls.ProgressBar(managers.GameManager.SceneManager.ScreenWidth - 174, 24, 150, 20, _this._hp.Value, "black", "red", 2, "#D3D3D3");
            _this._healthBar.Value = 100;
            _this._shieldBar = new controls.ProgressBar(managers.GameManager.SceneManager.ScreenWidth - 174, 54, 150, 20, _this._shield.Value, "black", "cyan", 2, "#D3D3D3");
            _this._shieldBar.Value = _this._shield.Value;
            managers.GameManager.CurrentLevel.AddInGameGUIControl(_this._healthBar);
            managers.GameManager.CurrentLevel.AddInGameGUIControl(_this._shieldBar);
            return _this;
        }
        Player.prototype.Init = function () {
            this.SetPivotPoint(this.Width / 2, this.Height / 2);
        };
        Player.prototype.UpdateTransform = function () {
            this._checkMovementInput();
            this._checkJumpInput();
            // Testing
            if (managers.InputManager.KeyUp(config.Key.G)) {
                this._hp.Reduce(10);
                this._healthBar.Value = this._hp.Value;
            }
        };
        Player.prototype._checkMovementInput = function () {
            if (managers.InputManager.KeyDown(config.Key.LEFT)) {
                this.x -= this._movementSpeed;
                this._isMoving = true;
                this.FlipSprite(-1);
            }
            else {
                this._isMoving = false;
            }
            if (managers.InputManager.KeyDown(config.Key.RIGHT)) {
                this.x += this._movementSpeed;
                this._isMoving = true;
                this.FlipSprite(1);
            }
            else {
                this._isMoving = false;
            }
            if (this._isMoving) {
                if (!this._isPlayingAnimation) {
                    this.Sprite.gotoAndPlay("run");
                    this._isPlayingAnimation = true;
                }
            }
            else {
                this.Sprite.gotoAndPlay("stand");
                this._isPlayingAnimation = false;
            }
        };
        Player.prototype._checkJumpInput = function () {
            if (managers.InputManager.KeyUp(config.Key.SPACE) && !this._isJumping) {
                this._isJumping = true;
                createjs.Tween.get(this).to({ y: this.y - this._jumpForce }, 300).call(this.onFinishJump);
                this.Sprite.gotoAndPlay("jump");
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