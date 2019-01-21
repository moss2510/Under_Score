var managers;
(function (managers) {
    var CameraManager = /** @class */ (function () {
        function CameraManager() {
            this._offset = new components.Point(0, 0);
        }
        Object.defineProperty(CameraManager.prototype, "X", {
            get: function () {
                return this._x;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CameraManager.prototype, "Y", {
            get: function () {
                return this._y;
            },
            enumerable: true,
            configurable: true
        });
        CameraManager.prototype.Follow = function (target) {
            this._targetToFollow = target;
            this._offset.X = target.x - managers.GameManager.SceneManager.CurrentScene.x;
            this._offset.Y = target.y - managers.GameManager.SceneManager.CurrentScene.y;
        };
        CameraManager.prototype.Update = function () {
            if (this._targetToFollow != null || this._targetToFollow != undefined) {
                managers.GameManager.SceneManager.CurrentScene.x = this._targetToFollow.x + this._offset.X;
                managers.GameManager.SceneManager.CurrentScene.y = this._targetToFollow.y + this._offset.Y;
            }
        };
        return CameraManager;
    }());
    managers.CameraManager = CameraManager;
})(managers || (managers = {}));
//# sourceMappingURL=cameramanager.js.map