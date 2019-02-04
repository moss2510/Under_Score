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

        constructor() {
            super(32, 32, {
                framerate: 1,
                images: [managers.GameManager.AssetManager.getResult("spritesheet_player")],
                frames: { width: 32, height: 32 },
                animations: {
                    stand: 25,
                    run: [0, 3, "run"],
                    jump: [4, 10, "stand"]
                }
            });
            // Add Rigidbody to allow gravity
            this._rb2d = new components.Rigidbody2D();
            this.AddComponent(this._rb2d);
            // Add Health
            this._hp = new components.HealthComponent(100);
            this._hp.RegenerateRate = 0.1;
            this.AddComponent(this._hp);
            // Add Shield
            this._shield = new components.HealthComponent(80);
            this._shield.RegenerateRate = 0.1;
            this.AddComponent(this._shield);

            managers.GameManager.CameraManager.Follow(this);
            this._healthBar = new controls.ProgressBar(managers.GameManager.SceneManager.ScreenWidth - 174, 24, 150, 20, this._hp.Value, "black", "red", 2, "#D3D3D3");
            this._healthBar.Value = 100;

            this._shieldBar = new controls.ProgressBar(managers.GameManager.SceneManager.ScreenWidth - 174, 54, 150, 20, this._shield.Value, "black", "cyan", 2, "#D3D3D3");
            this._shieldBar.Value = this._shield.Value;


            managers.GameManager.CurrentLevel.AddInGameGUIControl(this._healthBar);
            managers.GameManager.CurrentLevel.AddInGameGUIControl(this._shieldBar);
        }

        public Init(): void {
            this.SetPivotPoint(this.Width / 2, this.Height / 2);
        }

        public UpdateTransform(): void {
            this._checkMovementInput();
            this._checkJumpInput();

            // Testing
            if (managers.InputManager.KeyUp(config.Key.G)) {
                this._hp.Reduce(10);
                this._healthBar.Value = this._hp.Value;
            }
        }

        private _checkMovementInput(){
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
            else{
                this.Sprite.gotoAndPlay("stand");
                this._isPlayingAnimation = false;
            }
        }

        private _checkJumpInput(){
            if (managers.InputManager.KeyUp(config.Key.SPACE) && !this._isJumping) {
                this._isJumping = true;
                createjs.Tween.get(this).to({ y: this.y - this._jumpForce }, 300).call(this.onFinishJump);
                this.Sprite.gotoAndPlay("jump");
            }
            if (managers.InputManager.KeyDown(config.Key.F)) {
                this.y -= this._jumpForce;
            }
        }

        public CheckBoundary() {
            super.CheckBoundary();
        }

        public onFinishJump() {
            createjs.Tween.get(this).to({ y: this.y + this._jumpForce }, 500).call(() => this._isJumping = false);
        }
    }
}
