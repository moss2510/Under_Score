module levels {
    export class Level2 extends scenes.Play {

        private _player: objects.Player;
        private _numberOfObstacles: number = 10;

        public Init(): void {
            this.SetLevelSize(1600, 2400);
            this.SetLevelBoundarySize(4);

            this._player = new objects.Player();

            for (let i = 0; i < this._numberOfObstacles; i++) {
                this.AddGameObject(new objects.Obstacle());
            }

            this.AddGameObject(this._player);
        }

        constructor(bg: createjs.Bitmap) {
            super("Floor 2", bg);
        }

        public OnSceneEnter(): void {
            console.log("Loadding " + this.Name + "...");
            this.Init();
        }

        public Update(): void {
            super.Update();
        }

        public OnSceneExit(): void {

        }

        public OnLevelCompleted(): void {
            managers.GameManager.SceneManager.LoadLevel(3);
        }
    }
}