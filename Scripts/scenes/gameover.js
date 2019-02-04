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
    var GameOver = /** @class */ (function (_super) {
        __extends(GameOver, _super);
        function GameOver(bgm) {
            return _super.call(this, config.Scene.GameOver, bgm) || this;
        }
        GameOver.prototype.Init = function () {
            throw new Error("Method not implemented.");
        };
        GameOver.prototype.OnSceneEnter = function () {
            console.log("GameOver Scene Enter");
        };
        GameOver.prototype.Update = function () {
            console.log("GameOver Scene Update");
        };
        GameOver.prototype.OnSceneExit = function () {
            console.log("GameOver Scene Exit");
        };
        return GameOver;
    }(scenes.Scene));
    scenes.GameOver = GameOver;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map