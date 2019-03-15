module levels {
    export class Level2 extends scenes.Play {

        private _player: objects.Player;

        public Init(): void {
            this.SetLevelSize(1600, 2400);
            this.SetLevelBoundarySize(4);
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