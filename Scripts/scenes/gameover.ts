module scenes{
    export class GameOver extends scenes.Scene{
        public Init(): void {
            throw new Error("Method not implemented.");
        }

        constructor(bgm: createjs.Bitmap){
            super(config.Scene.GameOver, bgm);
        }

        public OnSceneEnter(): void {
            console.log("GameOver Scene Enter");
        }
        public Update(): void {
            console.log("GameOver Scene Update");
        }
        public OnSceneExit(): void {
            console.log("GameOver Scene Exit");
        }
    }
}