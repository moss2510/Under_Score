module levels {
    export class Level1 extends scenes.Play {

        private _player: objects.Player;

        public Init(): void {
            this._player = new objects.Player();

            this.AddGameObject(this._player);
        }

        constructor(bg: createjs.Bitmap) {
            super("Floor 1", bg);
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
    }
}