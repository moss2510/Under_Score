module objects{
    export class Obstacle extends GameObject{

        private _direction : number = 1;

        constructor(){
            super("obstacle");
        }

        public Init(): void {
            this.SetPivotPoint(this.Width / 2, this.Height / 2);
            this.x = Math.floor(Math.random() * (managers.GameManager.SceneManager.ScreenWidth) - this.PivotX);
            this.y = Math.floor(Math.random() * (managers.GameManager.SceneManager.ScreenHeight) + this.PivotY);
            let rb2d = new components.Rigidbody2D();
            this.AddComponent(rb2d);
        }

        public UpdateTransform(): void {
            this.x += this._direction;
        }
        public CheckBoundary(): void {
            super.CheckBoundary();

            if (this.x >= this.CurrentLevel.LevelWidth - this.CurrentLevel.LevelBoundarySize - this.PivotX || this.x <= this.PivotX + this.CurrentLevel.LevelBoundarySize) {
                this._direction *= -1;
            }
        }
    }
}