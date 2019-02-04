var managers;
(function (managers) {
    var InputManager = /** @class */ (function () {
        function InputManager() {
        }
        InputManager.Start = function () {
            document.addEventListener("keydown", this.onKeyDown.bind(this), false);
            document.addEventListener("keyup", this.onKeyUp.bind(this), false);
        };
        InputManager.onKeyDown = function (event) {
            if (!this._keys.ContainsKey(event.keyCode.toString())) {
                this._keys.Add(event.keyCode.toString(), true);
            }
            else {
                this._keys.Set(event.keyCode.toString(), true);
            }
        };
        InputManager.onKeyUp = function (event) {
            if (this._keys.ContainsKey(event.keyCode.toString())) {
                this._keys.Set(event.keyCode.toString(), false);
                this._lastKey = event.keyCode;
            }
        };
        InputManager.KeyDown = function (keyCode) {
            return this._keys.GetValue(keyCode.toString());
        };
        InputManager.KeyUp = function (keyCode) {
            if (this._lastKey == keyCode) {
                this._lastKey = -1;
                return true;
            }
            return false;
        };
        InputManager._keys = new utils.Dictionary();
        return InputManager;
    }());
    managers.InputManager = InputManager;
})(managers || (managers = {}));
//# sourceMappingURL=inputmanager.js.map