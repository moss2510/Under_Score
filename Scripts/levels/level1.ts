module levels {
    export class Level1 extends scenes.Play {

        private _player: objects.Player;
        private _numberOfObstacles: number = 10;

        public Init(): void {
            this.SetLevelSize(1920, 1080);
            this.SetLevelBoundarySize(1);

            this._player = new objects.Player();

            for (let i = 0; i < this._numberOfObstacles; i++) {
                let enemy = new objects.Obstacle();
                this.AddGameObject(enemy);
            }

            this.AddGameObject(new objects.Platform(0, 78, managers.GameManager.CurrentLevel.LevelWidth - 1, 23));
            this.AddGameObject(new objects.Platform(0, 336, 1770, 23));
            this.AddGameObject(new objects.Platform(0, 540, managers.GameManager.CurrentLevel.LevelWidth - 1, 23));
            this.AddGameObject(new objects.Platform(0, 767, 880, 23));
            this.AddGameObject(new objects.Platform(1020, 765, 900, 23));

            this.AddGameObject(this._player);
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