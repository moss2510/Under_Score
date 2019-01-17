module managers {
    export class Input {

        public static KeyDown : utils.Dictionary<number, boolean> = new utils.Dictionary();

        public static Start() {
            document.addEventListener("keydown", this.onKeyDown.bind(this), false);
            document.addEventListener("keyup", this.onKeyUp.bind(this), false);
        }

        public static onKeyDown(event: KeyboardEvent): void {
            if(!this.KeyDown.ContainsKey(event.keyCode)){
                this.KeyDown.Add(event.keyCode, true);
            }
        }

        public static onKeyUp(event: KeyboardEvent): void {
            if(this.KeyDown.ContainsKey(event.keyCode)){
                this.KeyDown.Set(event.keyCode, false);
            }
        }
    }
}