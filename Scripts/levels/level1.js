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
    var Level1 = /** @class */ (function (_super) {
        __extends(Level1, _super);
        function Level1(bg) {
            return _super.call(this, "Floor 1", bg) || this;
        }
        Level1.prototype.Init = function () {
            this.SetLevelSize(1920, 1080);
            this.SetLevelBoundarySize(1);
            // Trap
            // for (let i = 0; i < this._numberOfObstacles; i++) {
            //     let enemy = new objects.Obstacle();
            //     this.AddGameObject(enemy);
            // }
            /* Background Music
            this._backgroundMusic = createjs.Sound.play("bgmFloor1");
            this._backgroundMusic.loop = -1; // looping forever
            this._backgroundMusic.volume = 0.3;
            */
            // Platform
            this.AddGameObject(new objects.Platform(0, 80, managers.GameManager.CurrentLevel.LevelWidth - 1, 23));
            this.AddGameObject(new objects.Platform(0, 336, 1770, 23));
            this.AddGameObject(new objects.Platform(0, 540, managers.GameManager.CurrentLevel.LevelWidth - 1, 23));
            this.AddGameObject(new objects.Platform(0, 767, 880, 23));
            this.AddGameObject(new objects.Platform(1020, 767, 900, 23));
            // Ladder
            this.AddGameObject(new objects.Ladder(54, 75, 69, 260));
            this.AddGameObject(new objects.Ladder(90, 537, 66, 229));
            this.AddGameObject(new objects.Ladder(1700, 334, 64, 207));
        };
        Level1.prototype.OnSceneEnter = function () {
            console.log("Loading " + this.Name + "...");
            this.Init();
        };
        Level1.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Level1.prototype.OnSceneExit = function () {
        };
        Level1.prototype.OnLevelCompleted = function () {
            managers.GameManager.SceneManager.LoadLevel(2);
        };
        return Level1;
    }(scenes.Play));
    levels.Level1 = Level1;
})(levels || (levels = {}));
//# sourceMappingURL=level1.js.map