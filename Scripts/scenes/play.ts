module scenes {
    export abstract class Play extends scenes.Scene {

        private _name: string; // for levels

        get Name(): string {
            return this._name;
        }

        constructor(name: string, bgm: createjs.Bitmap) {
            super(config.Scene.Play, bgm);
            this._name = name;
        }
    }
}