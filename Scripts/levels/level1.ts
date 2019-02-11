module levels {
    export class Level1 extends scenes.Play {

        private _player: objects.Player;
        private _numberOfObstacles: number = 10;
        private _backgroundMusic : createjs.AbstractSoundInstance;

        public Init(): void {
            this.SetLevelSize(1920, 1080);
            this.SetLevelBoundarySize(1);

            this._player = new objects.Player();

            // Trap
            // for (let i = 0; i < this._numberOfObstacles; i++) {
            //     let enemy = new objects.Obstacle();
            //     this.AddGameObject(enemy);
            // }

            
            /* Background Music
            this._backgroundMusic = createjs.Sound.play("bgmFloor1");
            this._backgroundMusic.loop = -1; // looping forever
            this._backgroundMusic.volume = 0.3;
            */ 

            
            // Platform
         //   this.AddGameObject(new objects.Platform(0, 70, managers.GameManager.CurrentLevel.LevelWidth - 1, 23));
         //   this.AddGameObject(new objects.Platform(0, 336, 1770, 23));
         //   this.AddGameObject(new objects.Platform(0, 540, managers.GameManager.CurrentLevel.LevelWidth - 1, 23));
            this.AddGameObject(new objects.Platform(30, 767, 880, 23));
         //   this.AddGameObject(new objects.Platform(1020, 767, 900, 23));
/*
            // Ladder
            this.AddGameObject(new objects.Ladder(54, 108, 64, 224));
            this.AddGameObject(new objects.Ladder(90, 569, 64, 196));
            this.AddGameObject(new objects.Ladder(1700, 363, 64, 178));
*/
            // Player
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