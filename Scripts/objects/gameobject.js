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
var objects;
(function (objects) {
    var GameObject = /** @class */ (function (_super) {
        __extends(GameObject, _super);
        function GameObject(width, height, animationData) {
            var _this = _super.call(this) || this;
            _this._components = new Array();
            _this._width = width;
            _this._height = height;
            _this._animationData = animationData;
            _this.Sprite = new createjs.Sprite(new createjs.SpriteSheet(_this._animationData));
            _this.Init();
            _this._afterInit();
            return _this;
        }
        Object.defineProperty(GameObject.prototype, "PivotX", {
            get: function () {
                return this._pivotX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "PivotY", {
            get: function () {
                return this._pivotY;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "Width", {
            get: function () {
                return this._width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "Height", {
            get: function () {
                return this._height;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "CurrentLevel", {
            get: function () {
                return this._currentLevel;
            },
            set: function (level) {
                this._currentLevel = level;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "Sprite", {
            get: function () {
                return this._sprite;
            },
            set: function (sprite) {
                this._sprite = sprite;
                this._sprite.regX = this._width / 2; // For Filp Sprite
                this._sprite.regY = this._height / 2;
                this.removeAllChildren();
                this.addChild(this._sprite);
            },
            enumerable: true,
            configurable: true
        });
        // Direction 1 for RIGHT, -1 for LEFT
        GameObject.prototype.FlipSprite = function (direction) {
            this._sprite.scaleX = direction;
        };
        GameObject.prototype.SetPivotPoint = function (x, y) {
            this._pivotX = x;
            this._pivotY = y;
            this.regX = x;
            this.regY = y;
        };
        GameObject.prototype._afterInit = function () {
            if (this.x > managers.GameManager.SceneManager.ScreenWidth - this.PivotX) {
                this.x > managers.GameManager.SceneManager.ScreenWidth - this.PivotX;
            }
            if (this.x < this.PivotX) {
                this.x = this.PivotX;
            }
            if (this.y > managers.GameManager.SceneManager.ScreenHeight - this.PivotY) {
                this.y = managers.GameManager.SceneManager.ScreenHeight - this.PivotY;
            }
            if (this.y < this.PivotY) {
                this.y = this.PivotY;
            }
        };
        GameObject.prototype.Update = function () {
            this.UpdateTransform();
            this._updateComponents();
            this.CheckBoundary();
        };
        GameObject.prototype.AddComponent = function (component) {
            component.SetOwner(this);
            this._components.push(component);
        };
        GameObject.prototype.Instanitate = function (gameObject) {
            if (utils.Util.NotNullOrUndefined(this._currentLevel)) {
                this._currentLevel.AddGameObject(gameObject);
            }
        };
        GameObject.prototype._updateComponents = function () {
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var component = _a[_i];
                if (component.Owner == this) {
                    component.Update();
                }
            }
        };
        // Methods to Override
        GameObject.prototype.CheckBoundary = function () {
            var level = managers.GameManager.CurrentLevel;
            var rightBoundary = level.LevelWidth - level.LevelBoundarySize - this.PivotX + this.Sprite.regX;
            var leftBoundary = this.PivotX + level.LevelBoundarySize + this.Sprite.regX;
            var topBoundary = this.PivotY + level.LevelBoundarySize + this.Sprite.regY;
            var bottomBoundary = level.LevelHeight - level.LevelBoundarySize - this.PivotY + this.Sprite.regY;
            if (this.x > rightBoundary) {
                this.x = rightBoundary;
            }
            if (this.x < leftBoundary) {
                this.x = leftBoundary;
            }
            if (this.y > bottomBoundary) {
                this.y = bottomBoundary;
            }
            if (this.y < topBoundary) {
                this.y = topBoundary;
            }
        };
        return GameObject;
    }(createjs.Container));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map