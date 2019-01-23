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
        function HealthComponent(maxHP) {
            var _this = _super.call(this) || this;
            _this._maxValue = maxHP;
            _this._currentValue = _this._maxValue;
            return _this;
        }
        Object.defineProperty(HealthComponent.prototype, "CurrentValue", {
            get: function () {
                return this._currentValue;
            },
            enumerable: true,
            configurable: true
        });
        HealthComponent.prototype.Reduce = function (amount) {
            if (this._currentValue > 0) {
                this._currentValue -= amount;
            }
            else {
                this._currentValue = 0;
            }
        };
        HealthComponent.prototype.Add = function (amount) {
            if (this._currentValue + amount > this._maxValue) {
                this._currentValue = this._maxValue;
            }
            else {
                this._currentValue += amount;
            }
        };
        HealthComponent.prototype.Update = function () {
        };
        return HealthComponent;
    }(components.Component));
    components.HealthComponent = HealthComponent;
})(components || (components = {}));
//# sourceMappingURL=component.js.map