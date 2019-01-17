var managers;
(function (managers) {
    var Input = /** @class */ (function () {
        function Input() {
        }
        Input.Start = function () {
            document.addEventListener("keydown", this.onKeyDown.bind(this), false);
            document.addEventListener("keyup", this.onKeyUp.bind(this), false);
        };
        Input.onKeyDown = function (event) {
            if (!this.KeyDown.ContainsKey(event.keyCode)) {
                this.KeyDown.Add(event.keyCode, true);
            }
        };
        Input.onKeyUp = function (event) {
            if (this.KeyDown.ContainsKey(event.keyCode)) {
                this.KeyDown.Set(event.keyCode, false);
            }
        };
        Input.KeyDown = new utils.Dictionary();
        return Input;
    }());
    managers.Input = Input;
})(managers || (managers = {}));
//# sourceMappingURL=input.js.map