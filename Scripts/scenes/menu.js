var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Menu = /** @class */ (function (_super) {
        __extends(Menu, _super);
        function Menu(bgm) {
            return _super.call(this, config.Scene.Menu, bgm) || this;
        }
        Menu.prototype.OnSceneEnter = function () {
            console.log("Menu Scene Enter");
            this.Init();
        };
        Menu.prototype.Init = function () {
            var centerX = managers.GameManager.SceneManager.ScreenWidth / 2;
            var centerY = managers.GameManager.SceneManager.ScreenHeight / 2;
            this._lbGameName = new controls.Label(config.GameInfo.GameName, centerX, centerY - 15, 15, "Arial bold", "#000000", true);
            this._lbVersion = new controls.Label(config.GameInfo.Version, centerX + 30, centerY - 5, 10, "Arial bold", "#000000", true);
            this._btnStart = new controls.Button(managers.GameManager.AssetManager.getResult("btnStart"), centerX, centerY + 40, true);
            this._btnMute = new controls.Button(managers.GameManager.AssetManager.getResult("btnMute"), managers.GameManager.SceneManager.ScreenWidth - 40, managers.GameManager.SceneManager.ScreenHeight - 40, true);
            this._btnStart.on('click', this._onStartClicked);
            this._btnMute.on('click', this._onMuteClicked);
            this.addChild(this._lbGameName);
            this.addChild(this._lbVersion);
            this.addChild(this._btnStart);
            this.addChild(this._btnMute);
        };
        Menu.prototype.Update = function () {
            console.log("Menu Scene Update");
        };
        Menu.prototype.OnSceneExit = function () {
            console.log("Menu Scene Exit");
            this.removeAllChildren();
        };
        //#region UI Handler
        Menu.prototype._onStartClicked = function () {
            console.log("Start Game");
            managers.GameManager.SceneManager.ChangeScene(config.Scene.Play);
        };
        Menu.prototype._onMuteClicked = function () {
            console.log("Music muted");
        };
        return Menu;
    }(scenes.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map