module objects {
    export class Player extends objects.GameObject {

        private _transform: components.Transform;

        constructor() {
            super("player");
            this._transform = new components.Transform(new components.Point(0, 0), new components.Point(0, 0));
        }

        public Init(): void {
            this.SetPivotPoint(this.Width / 2, this.Height / 2);
        }

        public Update(): void {
            super.Update();
            this.UpdateTransform();
            this.CheckBoundary();
        }

        public UpdateTransform(): void {
            this.x = managers.GameManager.SceneManager.MouseX;
            this.y = managers.GameManager.SceneManager.MouseY;
        }

        public CheckBoundary(){
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
