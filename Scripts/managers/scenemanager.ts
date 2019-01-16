module managers {
    // SceneManager class to handle scene transitions
    export class SceneManager {

        //#region variables
        private _canvas: HTMLCanvasElement; // The canvas element of the HTML document
        private _stage: createjs.Stage; // Container for the scenes, think this as the Game Window
        private _currentScene: scenes.Scene; // Scene that holds the objects of the current screen, same as Unity scene

        private _screenWidth: number;
        private _screenHeight: number;
        //#endregion

        // Constructor
        constructor() {
            this._canvas = document.getElementsByTagName("canvas")[0];
            this._screenWidth = this._canvas.width;
            this._screenHeight = this._canvas.height;

            this._stage = new createjs.Stage(this._canvas);
        }

        //#region Getter funcions
        get CurrentScene(): scenes.Scene {
            return this._currentScene;
        }

        get ScreenWidth(): number {
            return this._screenWidth;
        }

        get ScreenHeight(): number {
            return this._screenHeight;
        }

        get MouseX(): number {
            return this._stage.mouseX;
        }

        get MouseY(): number {
            return this._stage.mouseY;
        }

        //#endregion

        //#region Functions
        public OnSceneEnter(): void {
        }
        public Update(): void {
            this._stage.update();
            this._currentScene.Update();
        }

        public ChangeScene(sceneType: config.Scene): void {
            // Call the on scene exit function to do a proper dispose
            if (this._currentScene != undefined || this._currentScene != null) {
                this._currentScene.OnSceneExit(); // handle destory
            }
            // Call the on scene enter function to do a proper init
            let newScene = this._createNewScene(sceneType);
            if (newScene != undefined || newScene != null) {
                this._currentScene = newScene; // set to new scene
                this._currentScene.OnSceneEnter(); // Init scene
                this._stage.removeAllChildren(); // free memory
                this._stage.addChild(this._currentScene); // Add to the screen
            }
        }

        private _createNewScene(type: config.Scene): scenes.Scene {
            let result: scenes.Scene;
            switch (type) {
                case config.Scene.Menu:
                    result = new scenes.Menu(new createjs.Bitmap(managers.GameManager.AssetManager.getResult("background")));
                    break;
                case config.Scene.Play:
                    result = new levels.Level1(new createjs.Bitmap(managers.GameManager.AssetManager.getResult("background")));
                    break;
                case config.Scene.GameOver:
                    result = new scenes.GameOver(new createjs.Bitmap(managers.GameManager.AssetManager.getResult("background")));
                    break;
            }
            return result;
        }
        //#endregion
    }
}