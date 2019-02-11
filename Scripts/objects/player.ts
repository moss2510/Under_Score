module objects {
    export class Player extends objects.GameObject {

        private _movementSpeed: number = 5;
        private _jumpForce: number = 100;

        private _isJumping: boolean = false;
        private _isMoving: boolean = false;

        // GameObject Components
        private _rb2d: components.Rigidbody2D;
        private _hp: components.HealthComponent;
        private _shield: components.HealthComponent;

        // GUI Controls
        private _healthBar: controls.ProgressBar;
        private _shieldBar: controls.ProgressBar;

        private _isPlayingAnimation: boolean;
        private _movingDirection: number;

        private _isClamping: boolean;

        private _lastLadder: objects.Ladder;

        constructor() {
            super(32, 32, {
                framerate: 1,
                images: [managers.GameManager.AssetManager.getResult("spritesheet_player")],
                frames: { width: 32, height: 32 },
                animations: {
                    standRight: 15,
                    standLeft: 14,
                    runLeft: [16, 18, "runLeft", 0.5], // Frames, next, speed
                    runRight: [19, 21, "runRight", 0.5],
                    jumpLeft: [1, 6, "jumpLeft"],
                    jumpRight: [8, 13, "jumpRight"],
                    clamping: [22, 23]
                }
            });
            this.name = "player";
            this._movingDirection = 1;
            this.y = 730;
            // Add Rigidbody to allow gravity
            this._rb2d = new components.Rigidbody2D(this);
            this.AddComponent(this._rb2d);
            // Add Health
            this._hp = new components.HealthComponent(this, 100);
            this._hp.RegenerateRate = 0.1;
            this.AddComponent(this._hp);
            // Add Shield
            this._shield = new components.HealthComponent(this, 80);
            this._shield.RegenerateRate = 0.1;
            this.AddComponent(this._shield);
            // Add Collider
            this.collider = new components.Collider(this, 0, 0, 32, 32);
            this.AddComponent(this.collider);

            managers.GameManager.CameraManager.Follow(this);
            this._healthBar = new controls.ProgressBar(managers.GameManager.SceneManager.ScreenWidth - 174, 24, 150, 20, this._hp.Value, "black", "red", 2, "#D3D3D3");
            this._healthBar.Value = 100;

            this._shieldBar = new controls.ProgressBar(managers.GameManager.SceneManager.ScreenWidth - 174, 54, 150, 20, this._shield.Value, "black", "cyan", 2, "#D3D3D3");
            this._shieldBar.Value = this._shield.Value;

            managers.GameManager.CurrentLevel.AddInGameGUIControl(this._healthBar);
            managers.GameManager.CurrentLevel.AddInGameGUIControl(this._shieldBar);
        }

        public Init(): void {
            this.SetPivotPoint(this.Width / 2, this.Height);
        }

        public UpdateTransform(): void {
            this.checkMovementInput();
            this.checkJumpInput();

            // Testing
            if (managers.InputManager.KeyUp(config.Key.G)) {
                this._hp.Reduce(10);
                this._healthBar.Value = this._hp.Value;
            }
            this.checkCollision();
        }

        private checkMovementInput() {
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
        }

        private checkJumpInput() {
            if (managers.InputManager.KeyUp(config.Key.SPACE) && !this._isJumping) {
                this._isJumping = true;
                createjs.Tween.get(this).to({ y: this.y - this._jumpForce }, 300).call(this.onFinishJump);
                if (!this._isPlayingAnimation) {
                    this.playAnimation("jump");
                }
                //createjs.Sound.play("sfxHit");
            }
            if (managers.InputManager.KeyDown(config.Key.F)) {
                this.y -= this._jumpForce;
            }
        }

        private playAnimation(animation: string) {
            if (this._movingDirection == 1) {
                this.Sprite.gotoAndPlay(animation + "Right");
            }
            else {
                this.Sprite.gotoAndPlay(animation + "Left");
            }
            this._isPlayingAnimation = true;
        }

        private playAndStopAnimation(animation: string) {
            if (this._movingDirection == 1) {
                this.Sprite.gotoAndStop(animation + "Right");
            }
            else {
                this.Sprite.gotoAndStop(animation + "Left");
            }
            this._isPlayingAnimation = false;
        }

        public CheckBoundary() {
            super.CheckBoundary();
        }

        public onFinishJump() {
            createjs.Tween.get(this).to({ y: this.y + this._jumpForce }, 500).call(() => this._isJumping = false);
        }

        public OnCollisionEnter(other: objects.GameObject) {
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
        }

        public OnCollisionExit(other: objects.GameObject) {
            if (other.name === "ladder" && utils.Util.NotNullOrUndefined(this._lastLadder) && other === this._lastLadder) {
                // //console.log(this.collider.y + " " + other.Collider.y);
                // console.log("Exit");
                // if (this.y < other.y - this.Height) {
                //     this._lastLadder = null;
                //     this._rb2d.GravityScale = 1;
                //     this._isClamping = false;
                // }
            }
        }

        private checkCollision(): void {
            for (let go of managers.GameManager.CurrentLevel.GameObjects) {
                if (go.name == this.name || !go.Collider.EnableCollisionCheck) {
                    continue;
                }
                if(physics.Physics.CollisionAABB(this, go)){
                    console.log("Colliding");
                    this.OnCollisionEnter(go);
                }
                else{
                    this.OnCollisionExit(go);
                }
            }
        }
    }
}
