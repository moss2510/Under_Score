var components;
(function (components) {
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
})(components || (components = {}));
//# sourceMappingURL=component.js.map