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
            var _this = _super.call(this, "Floor 1", bg) || this;
            _this._numberOfObstacles = 10;
            return _this;
        }
        Level1.prototype.Init = function () {
            this._player = new objects.Player();
            for (var i = 0; i < this._numberOfObstacles; i++) {
                this.AddGameObject(new objects.Obstacle());
            }
            this.AddGameObject(this._player);
        };
        Level1.prototype.OnSceneEnter = function () {
            console.log("Loadding " + this.Name + "...");
            this.Init();
        };
        Level1.prototype.Update = function () {
            _super.prototype.Update.call(this);
        };
        Level1.prototype.OnSceneExit = function () {
        };
        return Level1;
    }(scenes.Play));
    levels.Level1 = Level1;
})(levels || (levels = {}));
//# sourceMappingURL=level1.js.map