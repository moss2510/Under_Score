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
            var _this = _super.call(this, config.Scene.Play) || this;
            _this._levelWidth = 0;
            _this._levelHeight = 0;
            _this._levelBoundarySize = 0;
            _this._gameObjects = new Array();
            _this._guiControls = new Array();
            managers.GameManager.CurrentLevel = _this;
            _this._name = name;
            _this._gameLayer = new createjs.Container();
            _this._gameLayer.addChild(bg);
            _this._guiLayer = new createjs.Container();
            _this.addChild(_this._gameLayer);
            _this.addChild(_this._guiLayer);
            _this.player = new objects.Player();
            _this.AddGameObject(_this.player);
            return _this;
        }
        Object.defineProperty(Play.prototype, "GUILayer", {
            get: function () {
                return this._guiLayer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Play.prototype, "GameLayer", {
            get: function () {
                return this._gameLayer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Play.prototype, "GameObjects", {
            get: function () {
                return this._gameObjects;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Play.prototype, "Name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Play.prototype, "LevelCompleted", {
            set: function (completed) {
                this._levelCompleted = completed;
            },
            enumerable: true,
            configurable: true
        });
        Play.prototype.Update = function () {
            for (var _i = 0, _a = this._gameObjects; _i < _a.length; _i++) {
                var gameObject = _a[_i];
                gameObject.Update();
            }
            for (var _b = 0, _c = this._gameObjects; _b < _c.length; _b++) {
                var go = _c[_b];
                // Skip checking player to player and if collision is disabled
                if (go.name == "player" || !go.Collider.EnableCollisionCheck) {
                    continue;
                }
                if (physics.Physics.CollisionAABB(this.player, go)) {
                    //this.player.Collider.ShowCollision(true);
                    //go.Collider.ShowCollision(true);
                    this.player.OnCollisionEnter(go);
                }
                else {
                    //this.player.Collider.ShowCollision(false);
                    //go.Collider.ShowCollision(false);
                }
                // else{
                //     this._player.OnCollisionExit(go);
                // }
            }
            if (this._levelCompleted) {
                this.OnLevelCompleted();
            }
        };
        Play.prototype.AddGameObject = function (object) {
            console.log("Added " + object.name);
            object.Collider.AddAxis();
            object.CurrentLevel = this;
            this._gameObjects.push(object);
            this._gameLayer.addChild(object);
            this.Update();
        };
        Play.prototype.AddInGameGUIControl = function (control) {
            this._guiControls.push(control);
            this._guiLayer.addChild(control);
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