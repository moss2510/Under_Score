module objects {
    export class Player extends objects.GameObject {

        private _movementSpeed: number = 5;
        private _jumpForce: number = 100;

        private _isJumping: boolean = false;

        // GameObject Components
        private _rb2d: components.Rigidbody2D;
        private _hp: components.HealthComponent;
        private _shield: components.HealthComponent;

        // GUI Controls
        private _healthBar: controls.ProgressBar;
        private _shieldBar: controls.ProgressBar;

        constructor() {
            super("player");
            // Add Rigidbody to allow gravity
            this._rb2d = new components.Rigidbody2D();
            this.AddComponent(this._rb2d);
            // Add Health
            this._hp = new components.HealthComponent(100);
            this.AddComponent(this._hp);
            // Add Shield
            this._shield = new components.HealthComponent(80);
            this.AddComponent(this._shield);

            managers.GameManager.CameraManager.Follow(this);
            this._healthBar = new controls.ProgressBar(managers.GameManager.SceneManager.ScreenWidth - 174, 24, 150, 20, "black", "red", 2, "#D3D3D3");
            this._healthBar.Value = this._hp.CurrentValue;

            this._shieldBar = new controls.ProgressBar(managers.GameManager.SceneManager.ScreenWidth - 174, 54, 150, 20, "black", "cyan", 2, "#D3D3D3");
            this._shieldBar.Value = this._shield.CurrentValue;
            managers.GameManager.CurrentLevel.AddInGameGUIControl(this._healthBar);
            managers.GameManager.CurrentLevel.AddInGameGUIControl(this._shieldBar);
        }

        public Init(): void {
            this.SetPivotPoint(this.Width / 2, this.Height / 2);
        }

        public UpdateTransform(): void {
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
            if(managers.InputManager.KeyDown(config.Key.F)){
                this.y -= this._jumpForce;
            }

            // Testing
            if(managers.InputManager.KeyUp(config.Key.G)){
                this._hp.Reduce(10);
                this._healthBar.Value = this._hp.CurrentValue;
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
