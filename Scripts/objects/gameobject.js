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
        function GameObject(imageId) {
            var _this = _super.call(this, managers.GameManager.AssetManager.getResult(imageId)) || this;
            _this._init();
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
        GameObject.prototype.SetPivotPoint = function (x, y) {
            this._pivotX = x;
            this._pivotY = y;
            this.regX = x;
            this.regY = y;
        };
        GameObject.prototype._init = function () {
            this._width = this.getBounds().width;
            this._height = this.getBounds().height;
        };
        GameObject.prototype.Start = function () {
        };
        GameObject.prototype.Update = function () {
        };
        return GameObject;
    }(createjs.Bitmap));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map