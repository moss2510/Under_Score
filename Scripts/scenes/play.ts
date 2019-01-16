module scenes {
    export abstract class Play extends scenes.Scene {

        private _name: string; // for levels

        private _gameObjects: objects.GameObject[] = new Array();

        get Name(): string {
            return this._name;
        }

        constructor(name: string, bg: createjs.Bitmap) {
            super(config.Scene.Play, bg);
            this._name = name;
        }

        public Update(): void{
            for(let gameObject of this._gameObjects){
                gameObject.Update();
            }
        }

        public AddGameObject(object: objects.GameObject){
            this._gameObjects.push(object);
            this.addChild(object);
            this.Update();
        }
    }
}