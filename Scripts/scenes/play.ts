module scenes {
    export abstract class Play extends scenes.Scene {

        private _name: string; // for levels

        private _levelWidth: number = 0;
        private _levelHeight: number = 0;

        private _levelBoundarySize: number = 0;

        private _gameObjects: objects.GameObject[] = new Array();

        get Name(): string {
            return this._name;
        }

        constructor(name: string, bg: createjs.Bitmap) {
            super(config.Scene.Play, bg);
            this._name = name;
        }

        public Update(): void {
            for (let gameObject of this._gameObjects) {
                gameObject.Update();
            }
            this.x = managers.GameManager.CameraManager.X;
            this.y = managers.GameManager.CameraManager.Y;
        }

        public AddGameObject(object: objects.GameObject) {
            object.CurrentLevel = this;
            this._gameObjects.push(object);
            this.addChild(object);
            this.Update();
        }

        get LevelWidth(): number {
            return this._levelWidth;
        }

        get LevelHeight(): number {
            return this._levelHeight;
        }

        get LevelBoundarySize(): number {
            return this._levelBoundarySize;
        }

        protected SetLevelSize(width: number, height: number) {
            this._levelWidth = width;
            this._levelHeight = height;
        }

        protected SetLevelBoundarySize(newSize: number) {
            this._levelBoundarySize = newSize;
        }
    }
}