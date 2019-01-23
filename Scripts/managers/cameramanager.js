var managers;
(function (managers) {
    var CameraManager = /** @class */ (function () {
        function CameraManager() {
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
        };
        CameraManager.prototype.Update = function () {
            // Check if has target to follow and there is a level
            if (utils.Util.NotNullOrUndefined(this._targetToFollow)) {
                var level = managers.GameManager.CurrentLevel;
                if (utils.Util.NotNullOrUndefined(level)) {
                    // Check Horizontal Movement
                    // Check if player is inside ViewPort, the order matters, and it check from right to left
                    if (this._targetToFollow.x + this._targetToFollow.PivotX > level.LevelWidth - managers.GameManager.SceneManager.ScreenWidth / 2) { // Check Right Side
                        level.GameLayer.x = -(level.LevelWidth - managers.GameManager.SceneManager.ScreenWidth);
                    }
                    else if (this._targetToFollow.x + this._targetToFollow.PivotX > managers.GameManager.SceneManager.ScreenWidth / 2) { // Check Inside
                        level.GameLayer.x = -(this._targetToFollow.x + this._targetToFollow.PivotX - managers.GameManager.SceneManager.ScreenWidth / 2);
                    }
                    else { // Check Left Side
                        level.GameLayer.x = 0;
                    }
                    // Check Vertical Movement
                    if (this._targetToFollow.y + this._targetToFollow.PivotY > level.LevelHeight - managers.GameManager.SceneManager.ScreenHeight / 2) { // Check Up
                        level.GameLayer.y = -(level.LevelHeight - managers.GameManager.SceneManager.ScreenHeight);
                    }
                    else if (this._targetToFollow.y + this._targetToFollow.PivotY > managers.GameManager.SceneManager.ScreenHeight / 2) { // Check Center
                        level.GameLayer.y = -(this._targetToFollow.y + this._targetToFollow.PivotY - managers.GameManager.SceneManager.ScreenHeight / 2);
                    }
                    else { // Check Bottom
                        level.GameLayer.y = 0;
                    }
                }
            }
        };
        return CameraManager;
    }());
    managers.CameraManager = CameraManager;
})(managers || (managers = {}));
//# sourceMappingURL=cameramanager.js.map