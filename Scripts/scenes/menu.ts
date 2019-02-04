module scenes {
    export class Menu extends scenes.Scene {

        private _lbGameName: controls.Label;
        private _lbVersion: controls.Label;
        private _btnStart: controls.Button;
        private _btnMute: controls.Button;

        private _musicMuted: boolean = false;

        constructor(bgm: createjs.Bitmap) {
            super(config.Scene.Menu, bgm);
            this.Init();
        }

        public OnSceneEnter(): void {
            console.log("Menu Scene Enter");
            this.Init();
        }

        public Init() {
            let centerX = managers.GameManager.SceneManager.ScreenWidth / 2;
            let centerY = managers.GameManager.SceneManager.ScreenHeight / 2;

            this._lbGameName = new controls.Label(config.GameInfo.GameName, centerX, centerY / 2, 50, "Arial bold", "#000000", true);
            this._lbVersion = new controls.Label(config.GameInfo.Version, 0, 0, 15, "Arial bold", "#000000", true);
            this._lbVersion.x = this._lbVersion.getMeasuredWidth();
            this._lbVersion.y = managers.GameManager.SceneManager.ScreenHeight - this._lbVersion.getMeasuredHeight();
            this._btnStart = new controls.Button(<createjs.Bitmap>managers.GameManager.AssetManager.getResult("btnStart"), centerX, centerY + 40, true);
            this._btnMute = new controls.Button(<createjs.Bitmap>managers.GameManager.AssetManager.getResult("btnUnmute"), managers.GameManager.SceneManager.ScreenWidth - 40, managers.GameManager.SceneManager.ScreenHeight - 40, true);

            this._btnStart.on('click', this._onStartClicked);
            //Three types of event handling and 'this' keyword inside the function actually refers to different object
            // this._btnMute.on('click', this._onMuteClicked); //  'this' refers to button
            // this._btnMute.addEventListener('click', this._onMuteClicked); //  'this' refers to windows
            this._btnMute.on('click', () => this._onMuteClicked()); //  'this' refers to menu

            this.addChild(this._lbGameName);
            this.addChild(this._lbVersion);
            this.addChild(this._btnStart);
            this.addChild(this._btnMute);
        }

        public Update(): void {
        }

        public OnSceneExit(): void {
            console.log("Menu Scene Exit");
            this.removeAllChildren();
        }

        //#region UI Handler
        private _onStartClicked(): void {
            console.log("Start Game");
            managers.GameManager.SceneManager.LoadLevel(1);
        }
        
        private _onMuteClicked(): void {
            if (this._musicMuted) {
                this._btnMute = new controls.Button(<createjs.Bitmap>managers.GameManager.AssetManager.getResult("btnUnmute"), managers.GameManager.SceneManager.ScreenWidth - 40, managers.GameManager.SceneManager.ScreenHeight - 40, true);
                this._btnMute.SetBackgroundImage(<createjs.Bitmap>managers.GameManager.AssetManager.getResult("btnUnmute"));
            }
            else {
                this._btnMute = new controls.Button(<createjs.Bitmap>managers.GameManager.AssetManager.getResult("btnMuted"), managers.GameManager.SceneManager.ScreenWidth - 40, managers.GameManager.SceneManager.ScreenHeight - 40, true);
            //      this._btnMute.SetBackgroundImage(<createjs.Bitmap>managers.GameManager.AssetManager.getResult("btnMuted"));
            
            //   this._btnMute.image =(<createjs.Bitmap>managers.GameManager.AssetManager.getResult("btnMuted")).image;
              this.stage.addChild(this._btnMute);
              this.stage.update();
            }
            this._musicMuted = !this._musicMuted;
        }
        //#endregion
    }
}