module objects {
    export class Player extends objects.GameObject {

        constructor() {
            super("player");
        }

        public Init(): void {
            this.SetPivotPoint(this.Width / 2, this.Height / 2);
            managers.GameManager.SceneManager.CurrentScene.on("keydown", this._handleInput);
        }

        public UpdateTransform(): void {
            this.x = managers.GameManager.SceneManager.MouseX;
            this.y = managers.GameManager.SceneManager.MouseY;
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

        private _handleInput(event): void {
            switch (event.keyCode) {
                case managers.Input.KEYCODE_UP:
                    console.log("KEYCODE_UP");
                    break;
                case managers.Input.KEYCODE_DOWN:
                    console.log("KEYCODE_DOWN");
                    break;
                case managers.Input.KEYCODE_LEFT:
                    console.log("KEYCODE_LEFT");
                    break;
                case managers.Input.KEYCODE_RIGHT:
                    console.log("KEYCODE_RIGHT");
                    break;
                case managers.Input.KEYCODE_SPACE:
                    console.log("KEYCODE_SPACE");
                    break;
            }

        }
    }
}
