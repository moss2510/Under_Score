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
var components;
(function (components) {
    var Component = /** @class */ (function () {
        function Component() {
        }
        Object.defineProperty(Component.prototype, "Owner", {
            get: function () {
                return this._owner;
            },
            enumerable: true,
            configurable: true
        });
        Component.prototype.SetOwner = function (owner) {
            this._owner = owner;
        };
        return Component;
    }());
    components.Component = Component;
    var Transform = /** @class */ (function () {
        function Transform(position, rotation) {
            this._position = position;
            this._rotation = rotation;
        }
        Object.defineProperty(Transform.prototype, "Position", {
            get: function () {
                return this._position;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Transform.prototype, "Rotation", {
            get: function () {
                return this._rotation;
            },
            enumerable: true,
            configurable: true
        });
        return Transform;
    }());
    components.Transform = Transform;
    var Point = /** @class */ (function () {
        function Point(x, y) {
            this.Set(x, y);
        }
        Point.prototype.Set = function (x, y) {
            this._x = x;
            this._y = y;
        };
        Object.defineProperty(Point.prototype, "X", {
            get: function () {
                return this._x;
            },
            set: function (x) {
                this._x = x;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Point.prototype, "Y", {
            get: function () {
                return this._y;
            },
            set: function (y) {
                this._y = y;
            },
            enumerable: true,
            configurable: true
        });
        return Point;
    }());
    components.Point = Point;
    var Rigidbody2D = /** @class */ (function (_super) {
        __extends(Rigidbody2D, _super);
        function Rigidbody2D() {
            var _this = _super.call(this) || this;
            _this._velocity = new components.Point(0, 0);
            _this._gravityScale = 1;
            return _this;
        }
        Object.defineProperty(Rigidbody2D.prototype, "Velocity", {
            get: function () {
                return this._velocity;
            },
            set: function (velocity) {
                this._velocity = velocity;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rigidbody2D.prototype, "GravityScale", {
            get: function () {
                return this._gravityScale;
            },
            set: function (gravityScale) {
                this._gravityScale = gravityScale;
            },
            enumerable: true,
            configurable: true
        });
        Rigidbody2D.prototype.Update = function () {
            this.Owner.x += this._velocity.X;
            this.Owner.y -= this._velocity.Y;
            this.Owner.y += this._gravityScale * physics.Config.GRAVITY;
        };
        return Rigidbody2D;
    }(components.Component));
    components.Rigidbody2D = Rigidbody2D;
    var HealthComponent = /** @class */ (function (_super) {
        __extends(HealthComponent, _super);
        function HealthComponent(maxHP, progressBar) {
            var _this = _super.call(this) || this;
            _this._value = 0;
            _this._maxValue = 0;
            _this._regenerateRate = 0;
            _this._maxValue = maxHP;
            _this._value = _this._maxValue;
            _this._progressBar = progressBar;
            return _this;
        }
        Object.defineProperty(HealthComponent.prototype, "ProgressBar", {
            set: function (progressBar) {
                this._progressBar = progressBar;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HealthComponent.prototype, "Value", {
            get: function () {
                return this._value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HealthComponent.prototype, "MaxValue", {
            get: function () {
                return this._maxValue;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HealthComponent.prototype, "RegenerateRate", {
            get: function () {
                return this._regenerateRate;
            },
            set: function (rate) {
                this._regenerateRate = rate;
            },
            enumerable: true,
            configurable: true
        });
        HealthComponent.prototype.Reduce = function (amount) {
            if (this._value > 0) {
                this._value -= amount;
            }
            else {
                this._value = 0;
            }
        };
        HealthComponent.prototype.Add = function (amount) {
            if (this._value + amount > this._maxValue) {
                this._value = this._maxValue;
            }
            else {
                this._value += amount;
            }
        };
        HealthComponent.prototype.Update = function () {
            if (this._regenerateRate != 0 && this._value < this._maxValue) {
                this._value += this._regenerateRate;
            }
        };
        return HealthComponent;
    }(components.Component));
    components.HealthComponent = HealthComponent;
    var Collider = /** @class */ (function (_super) {
        __extends(Collider, _super);
        function Collider(x, y, width, height) {
            var _this = _super.call(this) || this;
            _this._enableCollisionCheck = false;
            _this.x = x;
            _this.y = y;
            _this._width = width;
            _this._height = height;
            return _this;
        }
        Object.defineProperty(Collider.prototype, "Width", {
            get: function () {
                return this._width;
            },
            set: function (width) {
                this._width = width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Collider.prototype, "Height", {
            get: function () {
                return this._height;
            },
            set: function (height) {
                this._height = height;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Collider.prototype, "EnableCollisionCheck", {
            get: function () {
                return this._enableCollisionCheck;
            },
            set: function (enable) {
                this._enableCollisionCheck = enable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Collider.prototype, "Border", {
            get: function () {
                return this._border;
            },
            enumerable: true,
            configurable: true
        });
        Collider.prototype.SetOwner = function (owner) {
            _super.prototype.SetOwner.call(this, owner);
            this._border = new createjs.Shape();
            this._border.graphics.setStrokeStyle(1).beginStroke("#00FF7F").drawRect(this.Owner.x, this.Owner.y, this.Owner.Width, this.Owner.Height).endStroke();
            this.Owner.addChild(this._border);
            managers.GameManager.CurrentLevel.GameLayer.addChild(this._border);
        };
        Collider.prototype.Update = function () {
            this.x = this.Owner.x;
            this.y = this.Owner.y;
            this._border.x = this.x;
        };
        return Collider;
    }(components.Component));
    components.Collider = Collider;
})(components || (components = {}));
//# sourceMappingURL=component.js.map