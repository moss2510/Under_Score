module scenes {
    export abstract class Scene extends createjs.Container {
        private _type: config.Scene;
        private _backgroundImage: createjs.Bitmap;

        get ViewPortX(): number {
            return this.x;
        }

        get ViewPortY(): number {
            return this.y;
        }

        get BackgroundImage(): createjs.Bitmap {
            return this._backgroundImage;
        }

        get Type(): config.Scene {
            return this._type;
        }

        constructor(type: config.Scene, backgroundImage: createjs.Bitmap) {
            super();
            this._type = type;
            this._backgroundImage = backgroundImage;
            this.addChild(this._backgroundImage);
        }

        public abstract Init(): void;
        public abstract OnSceneEnter(): void;
        public abstract Update(): void;
        public abstract OnSceneExit(): void;
    }
}