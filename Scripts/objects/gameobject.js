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
    var Action;
    (function (Action) {
        Action[Action["STANDING"] = 0] = "STANDING";
        Action[Action["WALKING"] = 1] = "WALKING";
        Action[Action["JUMPING"] = 2] = "JUMPING";
        Action[Action["CLAMPING"] = 3] = "CLAMPING";
        Action[Action["INTERACTING"] = 4] = "INTERACTING";
    })(Action = objects.Action || (objects.Action = {}));
    var Direction;
    (function (Direction) {
        Direction[Direction["LEFT"] = -1] = "LEFT";
        Direction[Direction["RIGHT"] = 1] = "RIGHT";
    })(Direction = objects.Direction || (objects.Direction = {}));
    var GameObject = /** @class */ (function (_super) {
        __extends(GameObject, _super);
        function GameObject(x, y, width, height, animationData) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var _this = _super.call(this) || this;
            _this._width = 0;
            _this._height = 0;
            _this._pivotX = 0;
            _this._pivotY = 0;
            _this._components = new Array();
            _this.x = x;
            _this.y = y;
            _this._width = width;
            _this._height = height;
            _this.Init();
            _this._animationData = animationData;
            _this.Sprite = new createjs.Sprite(new createjs.SpriteSheet(_this._animationData));
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
                return this.sprite;
            },
            set: function (sprite) {
                this.sprite = sprite;
                this.sprite.regX = this.PivotX;
                this.sprite.regY = this.PivotY;
                this.removeAllChildren();
                this.addChild(this.sprite);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "Collider", {
            get: function () {
                return this.collider;
            },
            enumerable: true,
            configurable: true
        });
        // Direction 1 for RIGHT, -1 for LEFT
        GameObject.prototype.FlipSprite = function (direction) {
            this.sprite.scaleX = direction;
        };
        GameObject.prototype.SetPivotPoint = function (x, y) {
            this._pivotX = x;
            this._pivotY = y;
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
            // Add PivotPoint
            var pivotPoint = new createjs.Shape();
            pivotPoint.graphics.setStrokeStyle(1).beginStroke("#0000FF").drawCircle(0, 0, 1).endStroke();
            this.addChild(pivotPoint);
            // Add PivotPoint
            var position = new createjs.Shape();
            position.graphics.setStrokeStyle(1).beginStroke("#FFFF00").drawCircle(0, 0, 3).endStroke();
            this.addChild(position);
        };
        GameObject.prototype.Update = function () {
            this.UpdateTransform();
            this.updateComponents();
            this.CheckBoundary();
            this.OnAction();
        };
        GameObject.prototype.AddComponent = function (component) {
            console.log("Added " + component.name + " to " + this.name);
            this._components.push(component);
        };
        GameObject.prototype.Instanitate = function (gameObject) {
            if (utils.Util.NotNullOrUndefined(this._currentLevel)) {
                this._currentLevel.AddGameObject(gameObject);
            }
        };
        GameObject.prototype.updateComponents = function () {
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var component = _a[_i];
                component.Update();
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