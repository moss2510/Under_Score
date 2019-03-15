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
        function Component(owner) {
            this.owner = owner;
        }
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
    var Rigidbody2D = /** @class */ (function (_super) {
        __extends(Rigidbody2D, _super);
        function Rigidbody2D(owner) {
            var _this = _super.call(this, owner) || this;
            _this.name = "Rigidbody2D";
            _this._velocity = new math.Vector2(0, 0);
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
            this.owner.x += this._velocity.x;
            this.owner.y -= this._velocity.y;
            this.owner.y += this._gravityScale * physics.Config.GRAVITY;
        };
        return Rigidbody2D;
    }(components.Component));
    components.Rigidbody2D = Rigidbody2D;
    var HealthComponent = /** @class */ (function (_super) {
        __extends(HealthComponent, _super);
        function HealthComponent(owner, maxHP, progressBar) {
            var _this = _super.call(this, owner) || this;
            _this._value = 0;
            _this._maxValue = 0;
            _this._regenerateRate = 0;
            _this.name = "Health Component";
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
        function Collider(owner, offsetX, offsetY, width, height) {
            var _this = _super.call(this, owner) || this;
            _this._enableCollisionCheck = true;
            _this.name = "Collider";
            _this._offsetX = offsetX;
            _this._offsetY = offsetY;
            _this._width = width;
            _this._height = height;
            _this._border = new createjs.Shape();
            _this._border.graphics.setStrokeStyle(1).beginStroke("#00FF7F").drawRect(-_this._offsetX, -_this._offsetY, width, height).endStroke();
            _this.owner.addChild(_this._border);
            console.log("Collider Info:");
            console.log(_this);
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
        Object.defineProperty(Collider.prototype, "Top", {
            get: function () {
                return this.owner.y - this._offsetY;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Collider.prototype, "Bottom", {
            get: function () {
                return this.owner.y + this._offsetY + this.Height;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Collider.prototype, "Left", {
            get: function () {
                return this.owner.x - this._offsetX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Collider.prototype, "Right", {
            get: function () {
                return this.owner.x + this._offsetX + this.Width;
            },
            enumerable: true,
            configurable: true
        });
        Collider.prototype.AddAxis = function () {
            var axisX = new createjs.Shape();
            var axisY = new createjs.Shape();
            axisX.graphics.setStrokeStyle(1).beginStroke("#00FF00").drawRect(0, 0, 15, 1).endStroke();
            axisY.graphics.setStrokeStyle(1).beginStroke("#FF0000").drawRect(0, -15, 1, 15).endStroke();
            this.owner.addChild(axisX);
            this.owner.addChild(axisY);
        };
        Collider.prototype.ShowCollision = function (b) {
            this._border.graphics.setStrokeStyle(1).beginStroke(b ? "#FF0000" : "#00FF7F").drawRect(-this._offsetX, -this._offsetY, this._width, this._height).endStroke();
        };
        Collider.prototype.Update = function () {
        };
        return Collider;
    }(components.Component));
    components.Collider = Collider;
})(components || (components = {}));
//# sourceMappingURL=component.js.map