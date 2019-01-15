var managers;
(function (managers) {
    // SceneManager class to handle scene transitions
    var SceneManager = /** @class */ (function () {
        //#endregion
        // Constructor
        function SceneManager() {
            this._canvas = document.getElementsByTagName("canvas")[0];
            this._screenWidth = this._canvas.width;
            this._screenHeight = this._canvas.height;
        }
        Object.defineProperty(SceneManager.prototype, "CurrentScene", {
            //#region Getter funcions
            get: function () {
                return this._currentScene;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SceneManager.prototype, "ScreenWidth", {
            get: function () {
                return this._screenWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SceneManager.prototype, "ScreenHeight", {
            get: function () {
                return this._screenHeight;
            },
            enumerable: true,
            configurable: true
        });
        SceneManager.prototype.OnSceneEnter = function () {
        };
        //#endregion
        //#region Functions
        SceneManager.prototype.Update = function () {
            // console.log("Stage Updating");
            //   console.log(this._currentScene == null);
            if (SceneManager.Stage != undefined || SceneManager.Stage != null) {
                SceneManager.Stage.update();
                this._currentScene.Update();
                //   console.log("Stage Updating");
                //  this._stage.update();
                console.log(this._currentScene == null);
                if (this._currentScene != undefined || this._currentScene != null) {
                    console.log("Scene Updating");
                    //   this._currentScene.Update();
                }
            }
        };
        SceneManager.prototype.ChangeScene = function (sceneType) {
            // Call the on scene exit function to do a proper dispose
            if (this._currentScene != undefined || this._currentScene != null) {
                this._currentScene.OnSceneExit(); // handle destory
            }
            // Call the on scene enter function to do a proper init
            var newScene = this._createNewScene(sceneType);
            if (newScene != undefined || newScene != null) {
                this._currentScene = newScene; // set to new scene
                this._currentScene.OnSceneEnter(); // Init scene
                SceneManager.Stage.removeAllChildren(); // free memory
                SceneManager.Stage.addChild(this._currentScene); // Add to the screen
            }
        };
        SceneManager.prototype._createNewScene = function (type) {
            var result;
            switch (type) {
                case config.Scene.Menu:
                    result = new scenes.Menu(new createjs.Bitmap(managers.GameManager.AssetManager.getResult("background")));
                    break;
                case config.Scene.Play:
                    result = new levels.Level1(new createjs.Bitmap(managers.GameManager.AssetManager.getResult("background")));
                    break;
            }
            return result;
        };
        return SceneManager;
    }());
    managers.SceneManager = SceneManager;
})(managers || (managers = {}));
//# sourceMappingURL=scenemanager.js.map