var utils;
(function (utils) {
    // Dictionary From https://stackoverflow.com/questions/15877362/declare-and-initialize-a-dictionary-in-typescript with a few modification.
    var Dictionary = /** @class */ (function () {
        function Dictionary() {
            this._keys = [];
            this._values = [];
        }
        Dictionary.prototype.Add = function (key, value) {
            this[key] = value; // Create a varaible in this class?
            this._keys.push(key);
            this._values.push(value);
        };
        Dictionary.prototype.Remove = function (key) {
            var index = this._keys.indexOf(key, 0);
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
            delete this[typeof (key)];
        };
        Dictionary.prototype.Set = function (key, value) {
            if (this.ContainsKey(key)) {
                var index = this._keys.indexOf(key, 0);
                this._values[index] = value;
            }
        };
        Dictionary.prototype.ContainsKey = function (key) {
            if (typeof this[key] === "undefined") {
                return false;
            }
            return true;
        };
        Dictionary.prototype.GetValue = function (key) {
            if (this.ContainsKey(key)) {
                var index = this._keys.indexOf(key, 0);
                return this._values[index];
            }
            return null;
        };
        Dictionary.prototype.Keys = function () {
            return this._keys;
        };
        Dictionary.prototype.Values = function () {
            return this._values;
        };
        return Dictionary;
    }());
    utils.Dictionary = Dictionary;
})(utils || (utils = {}));
//# sourceMappingURL=utils.js.map