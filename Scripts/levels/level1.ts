module levels {
    export class Level1 extends scenes.Play {

        private _player: objects.Player;
        private _numberOfObstacles: number = 10;

        public Init(): void {
            this.SetLevelSize(1600, 2400);
            this.SetLevelBoundarySize(4);

            this._player = new objects.Player();

            for (let i = 0; i < this._numberOfObstacles; i++) {
                let enemy = new objects.Obstacle();
                this.AddGameObject(enemy);
            }

            this.AddGameObject(this._player);

            this.AddInGameGUIControl(new controls.ProgressBar());
        }

        constructor(bg: createjs.Bitmap) {
            super("Floor 1", bg);
        }

        public OnSceneEnter(): void {
            console.log("Loading " + this.Name + "...");
            this.Init();
        }

        public Update(): void {
            super.Update();
        }

        public OnSceneExit(): void {

        }

        public OnLevelCompleted(): void {
            managers.GameManager.SceneManager.LoadLevel(2);
        }
    }
}