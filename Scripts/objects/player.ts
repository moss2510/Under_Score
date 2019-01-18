module objects {
    export class Player extends objects.GameObject {

        private _movementSpeed: number = 5;
        private _jumpForce: number = 50;

        constructor() {
            super("player");
            let rb2d = new components.Rigidbody2D();
            this.AddComponent(rb2d);
        }

        public Init(): void {
            this.SetPivotPoint(this.Width / 2, this.Height / 2);
        }

        public UpdateTransform(): void {
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
        }

        public CheckBoundary() {
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
        }
    }
}
