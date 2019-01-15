module scenes {
    export class Menu extends scenes.Scene {

        private _lbGameName: controls.Label;
        private _lbVersion: controls.Label;
        private _btnStart: controls.Button;
        private _btnMute: controls.Button;

        constructor(bgm: createjs.Bitmap) {
            super(config.Scene.Menu, bgm);
        }

        public OnSceneEnter(): void {
            console.log("Menu Scene Enter");
            this.Init();
        }

        public Init() {
            let centerX = managers.GameManager.SceneManager.ScreenWidth / 2;
            let centerY = managers.GameManager.SceneManager.ScreenHeight / 2;

            this._lbGameName = new controls.Label(config.GameInfo.GameName, centerX, centerY - 15, 15, "Arial bold", "#000000", true);
            this._lbVersion = new controls.Label(config.GameInfo.Version, centerX + 30, centerY - 5, 10, "Arial bold", "#000000", true);
            this._btnStart = new controls.Button(<createjs.Bitmap>managers.GameManager.AssetManager.getResult("btnStart"), centerX, centerY + 40, true);
            this._btnMute = new controls.Button(<createjs.Bitmap>managers.GameManager.AssetManager.getResult("btnMute"), managers.GameManager.SceneManager.ScreenWidth - 40, managers.GameManager.SceneManager.ScreenHeight - 40, true);

            this._btnStart.on('click', this._onStartClicked);
            this._btnMute.on('click', this._onMuteClicked);
            
            this.addChild(this._lbGameName);
            this.addChild(this._lbVersion);
            this.addChild(this._btnStart);
            this.addChild(this._btnMute);
        }

        public Update(): void {
            console.log("Menu Scene Update");
        }

        public OnSceneExit(): void {
            console.log("Menu Scene Exit");
            this.removeAllChildren();
        }

        //#region UI Handler
        private _onStartClicked(): void {
            console.log("Start Game");
            managers.GameManager.SceneManager.ChangeScene(config.Scene.Play);
        }
        private _onMuteClicked(): void {
            console.log("Music muted");
        }
        //#endregion
    }
}