module levels {
    export class Level3 extends scenes.Play {

        private _player: objects.Player;
        private _numberOfObstacles: number = 10;

        public Init(): void {
            this.SetLevelSize(1600, 1200);
            this.SetLevelBoundarySize(4);

            this._player = new objects.Player();

            this.AddGameObject(new objects.Obstacle());

            this.AddGameObject(this._player);
        }

        constructor(bg: createjs.Bitmap) {
            super("Rooftop", bg);
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
            managers.GameManager.SceneManager.ChangeScene(config.Scene.Menu);
        }
    }
}