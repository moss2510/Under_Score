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
var levels;
(function (levels) {
    var Level3 = /** @class */ (function (_super) {
        __extends(Level3, _super);
        function Level3(bg) {
            var _this = _super.call(this, "Rooftop", bg) || this;
            _this._numberOfObstacles = 10;
            return _this;
        }
        Level3.prototype.Init = function () {
            this.SetLevelSize(1600, 1200);
            this.SetLevelBoundarySize(4);
            this._player = new objects.Player();
            this.AddGameObject(new objects.Obstacle());
            this.AddGameObject(this._player);
        };
        Level3.prototype.OnSceneEnter = function () {
            console.log("Loading " + this.Name + "...");
            this.Init();
        };
        Level3.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Level3.prototype.OnSceneExit = function () {
        };
        Level3.prototype.OnLevelCompleted = function () {
            managers.GameManager.SceneManager.ChangeScene(config.Scene.Menu);
        };
        return Level3;
    }(scenes.Play));
    levels.Level3 = Level3;
})(levels || (levels = {}));
//# sourceMappingURL=level3.js.map