module objects {
    export class Player extends objects.GameObject {

        private _movementSpeed: number = 5;
        private _jumpForce: number = 100;

        private _isJumping: boolean = false;

        constructor() {
            super("player");
            // Add Rigidbody to allow gravity
            let rb2d = new components.Rigidbody2D();
            this.AddComponent(rb2d);
            // Add Health
            let hc = new components.HealthComponent(100);
            this.AddComponent(hc);
            // Add Shield
            let sc = new components.HealthComponent(80);
            this.AddComponent(hc);

            managers.GameManager.CameraManager.Follow(this);
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
        }

        public CheckBoundary() {
            super.CheckBoundary();
        }

        public onFinishJump() {
            createjs.Tween.get(this).to({ y: this.y + this._jumpForce }, 500).call(() => this._isJumping = false);
        }
    }
}
