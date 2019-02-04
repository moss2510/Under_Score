module managers {
    export class InputManager {

        private static _keys: utils.Dictionary<number, boolean> = new utils.Dictionary();

        private static _lastKey: number;

        public static Start() {
            document.addEventListener("keydown", this.onKeyDown.bind(this), false);
            document.addEventListener("keyup", this.onKeyUp.bind(this), false);
        }

        private static onKeyDown(event: KeyboardEvent): void {
            if (!this._keys.ContainsKey(event.keyCode.toString())) {
                this._keys.Add(event.keyCode.toString(), true);
            }
            else {
                this._keys.Set(event.keyCode.toString(), true);
            }
        }

        private static onKeyUp(event: KeyboardEvent): void {
            if (this._keys.ContainsKey(event.keyCode.toString())) {
                this._keys.Set(event.keyCode.toString(), false);
                this._lastKey = event.keyCode;
            }
        }

        public static KeyDown(keyCode): boolean {
            return this._keys.GetValue(keyCode.toString());
        }

        public static KeyUp(keyCode): boolean {
            if (this._lastKey == keyCode) {
                this._lastKey = -1;
                return true;
            }
            return false;
        }
    }
}