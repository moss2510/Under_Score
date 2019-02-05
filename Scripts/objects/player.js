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
                    standRight: 15,
                    standLeft: 14,
                    runLeft: [16, 18, "runLeft", 0.5],
                    runRight: [19, 21, "runRight", 0.5],
                    jumpLeft: [1, 6, "jumpLeft"],
                    jumpRight: [8, 13, "jumpRight"],
                    clamping: [22, 23]
                }
            }) || this;
            _this._movementSpeed = 5;
            _this._jumpForce = 100;
            _this._isJumping = false;
            _this._isMoving = false;
            _this.name = "player";
            _this._movingDirection = 1;
            _this.y = 730;
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
            // Add Collider
            _this.collider = new components.Collider(_this.x, _this.y, 32, 32);
            _this.collider.EnableCollisionCheck = true;
            _this.AddComponent(_this.collider);
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
            this.checkMovementInput();
            this.checkJumpInput();
            // Testing
            if (managers.InputManager.KeyUp(config.Key.G)) {
                this._hp.Reduce(10);
                this._healthBar.Value = this._hp.Value;
            }
            this.checkCollision();
            //this.x = managers.GameManager.SceneManager.CurrentStage.mouseX;
            //this.y = managers.GameManager.SceneManager.CurrentStage.mouseY;
        };
        Player.prototype.checkMovementInput = function () {
            if (managers.InputManager.KeyDown(config.Key.LEFT)) {
                this._isMoving = true;
                this._movingDirection = -1;
            }
            else if (managers.InputManager.KeyDown(config.Key.RIGHT)) {
                this._isMoving = true;
                this._movingDirection = 1;
            }
            else {
                this._isMoving = false;
                this.playAndStopAnimation("stand");
            }
            if (this._isMoving) {
                this.x += this._movementSpeed * this._movingDirection;
                if (!this._isPlayingAnimation) {
                    this.playAnimation("run");
                }
            }
        };
        Player.prototype.checkJumpInput = function () {
            if (managers.InputManager.KeyUp(config.Key.SPACE) && !this._isJumping) {
                this._isJumping = true;
                createjs.Tween.get(this).to({ y: this.y - this._jumpForce }, 300).call(this.onFinishJump);
                if (!this._isPlayingAnimation) {
                    this.playAnimation("jump");
                }
            }
            if (managers.InputManager.KeyDown(config.Key.F)) {
                this.y -= this._jumpForce;
            }
        };
        Player.prototype.playAnimation = function (animation) {
            if (this._movingDirection == 1) {
                this.Sprite.gotoAndPlay(animation + "Right");
            }
            else {
                this.Sprite.gotoAndPlay(animation + "Left");
            }
            this._isPlayingAnimation = true;
        };
        Player.prototype.playAndStopAnimation = function (animation) {
            if (this._movingDirection == 1) {
                this.Sprite.gotoAndStop(animation + "Right");
            }
            else {
                this.Sprite.gotoAndStop(animation + "Left");
            }
            this._isPlayingAnimation = false;
        };
        Player.prototype.CheckBoundary = function () {
            _super.prototype.CheckBoundary.call(this);
        };
        Player.prototype.onFinishJump = function () {
            var _this = this;
            createjs.Tween.get(this).to({ y: this.y + this._jumpForce }, 500).call(function () { return _this._isJumping = false; });
        };
        Player.prototype.OnCollisionEnter = function (other) {
            if (other.name === "platform") {
                if (this.Collider.y < other.Collider.y) {
                    if (!this._isClamping) {
                        this.y = other.y - this.regY;
                    }
                }
            }
            else if (other.name === "ladder") {
                if (managers.InputManager.KeyDown(config.Key.UP)) {
                    console.log("clamping");
                    this._lastLadder = other;
                    this.y -= this._movementSpeed;
                    this._rb2d.GravityScale = 0;
                    this._isClamping = true;
                    this.Sprite.gotoAndPlay("clamping");
                }
            }
        };
        Player.prototype.OnCollisionExit = function (other) {
            if (other.name === "ladder" && utils.Util.NotNullOrUndefined(this._lastLadder) && other === this._lastLadder) {
                // //console.log(this.collider.y + " " + other.Collider.y);
                // console.log("Exit");
                // if (this.y < other.y - this.Height) {
                //     this._lastLadder = null;
                //     this._rb2d.GravityScale = 1;
                //     this._isClamping = false;
                // }
            }
        };
        Player.prototype.checkCollision = function () {
            for (var _i = 0, _a = managers.GameManager.CurrentLevel.GameObjects; _i < _a.length; _i++) {
                var go = _a[_i];
                if (go.name == this.name || !go.Collider.EnableCollisionCheck) {
                    continue;
                }
                if (this.Collider.x < go.Collider.x + go.Collider.Width &&
                    this.Collider.x + this.Collider.Width > go.Collider.x &&
                    this.Collider.y < go.Collider.y + go.Collider.Height &&
                    this.Collider.y + this.Collider.Height > go.Collider.y) {
                    this.OnCollisionEnter(go);
                }
                else {
                    this.OnCollisionExit(go);
                }
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map