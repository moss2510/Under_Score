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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        function Play(name, bg) {
            var _this = _super.call(this, config.Scene.Play, bg) || this;
            _this._levelWidth = 0;
            _this._levelHeight = 0;
            _this._levelBoundarySize = 0;
            _this._gameObjects = new Array();
            _this._name = name;
            return _this;
        }
        Object.defineProperty(Play.prototype, "Name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Play.prototype.Update = function () {
            for (var _i = 0, _a = this._gameObjects; _i < _a.length; _i++) {
                var gameObject = _a[_i];
                gameObject.Update();
            }
            this.x = managers.GameManager.CameraManager.X;
            this.y = managers.GameManager.CameraManager.Y;
        };
        Play.prototype.AddGameObject = function (object) {
            object.CurrentLevel = this;
            this._gameObjects.push(object);
            this.addChild(object);
            this.Update();
        };
        Object.defineProperty(Play.prototype, "LevelWidth", {
            get: function () {
                return this._levelWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Play.prototype, "LevelHeight", {
            get: function () {
                return this._levelHeight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Play.prototype, "LevelBoundarySize", {
            get: function () {
                return this._levelBoundarySize;
            },
            enumerable: true,
            configurable: true
        });
        Play.prototype.SetLevelSize = function (width, height) {
            this._levelWidth = width;
            this._levelHeight = height;
        };
        Play.prototype.SetLevelBoundarySize = function (newSize) {
            this._levelBoundarySize = newSize;
        };
        return Play;
    }(scenes.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map