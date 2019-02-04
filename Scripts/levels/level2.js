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
    var Level2 = /** @class */ (function (_super) {
        __extends(Level2, _super);
        function Level2(bg) {
            var _this = _super.call(this, "Floor 2", bg) || this;
            _this._numberOfObstacles = 10;
            return _this;
        }
        Level2.prototype.Init = function () {
            this.SetLevelSize(1600, 2400);
            this.SetLevelBoundarySize(4);
            this._player = new objects.Player();
            for (var i = 0; i < this._numberOfObstacles; i++) {
                this.AddGameObject(new objects.Obstacle());
            }
            this.AddGameObject(this._player);
        };
        Level2.prototype.OnSceneEnter = function () {
            console.log("Loadding " + this.Name + "...");
            this.Init();
        };
        Level2.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Level2.prototype.OnSceneExit = function () {
        };
        Level2.prototype.OnLevelCompleted = function () {
            managers.GameManager.SceneManager.LoadLevel(3);
        };
        return Level2;
    }(scenes.Play));
    levels.Level2 = Level2;
})(levels || (levels = {}));
//# sourceMappingURL=level2.js.map