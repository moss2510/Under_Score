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
            _this._components = new Array();
            _this._beforeInit();
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
        GameObject.prototype.SetPivotPoint = function (x, y) {
            this._pivotX = x;
            this._pivotY = y;
            this.regX = x;
            this.regY = y;
        };
        GameObject.prototype._beforeInit = function () {
            this._width = this.getBounds().width;
            this._height = this.getBounds().height;
            //this._transform = new components.Transform(new components.Point(0, 0), new components.Point(0, 0));
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
            this.CheckBoundary();
            this._updateComponents();
        };
        GameObject.prototype.AddComponent = function (component) {
            component.SetOwner(this);
            this._components.push(component);
        };
        GameObject.prototype._updateComponents = function () {
            for (var _i = 0, _a = this._components; _i < _a.length; _i++) {
                var component = _a[_i];
                if (component.Owner == this) {
                    component.Update();
                }
            }
        };
        return GameObject;
    }(createjs.Bitmap));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map