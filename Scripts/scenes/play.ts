module scenes {
    export abstract class Play extends scenes.Scene {

        private _name: string; // for levels

        private _levelWidth: number = 0;
        private _levelHeight: number = 0;

        private _levelBoundarySize: number = 0;

        private _levelCompleted;

        private _gameObjects: objects.GameObject[] = new Array();
        private _guiControls: createjs.Container[] = new Array();

        private _guiLayer: createjs.Container;
        private _gameLayer: createjs.Container;

        protected player: objects.Player;

        get GUILayer(): createjs.Container {
            return this._guiLayer;
        }

        get GameLayer(): createjs.Container {
            return this._gameLayer;
        }

        get GameObjects(): objects.GameObject[] {
            return this._gameObjects;
        }

        get Name(): string {
            return this._name;
        }

        set LevelCompleted(completed: boolean) {
            this._levelCompleted = completed;
        }

        constructor(name: string, bg: createjs.Bitmap) {
            super(config.Scene.Play);
            managers.GameManager.CurrentLevel = this;

            this._name = name;
            this._gameLayer = new createjs.Container();
            this._gameLayer.addChild(bg);
            this._guiLayer = new createjs.Container();
            this.addChild(this._gameLayer);
            this.addChild(this._guiLayer);

            this.player = new objects.Player();
            this.AddGameObject(this.player);
        }

        public Update(): void {
            for (let gameObject of this._gameObjects) {
                gameObject.Update();
            }

            for (let go of this._gameObjects) {
                // Skip checking player to player and if collision is disabled
                if (go.name == "player" || !go.Collider.EnableCollisionCheck) {
                    continue;
                }
                if (physics.Physics.CollisionAABB(this.player, go)) {
                    //this.player.Collider.ShowCollision(true);
                    //go.Collider.ShowCollision(true);
                    this.player.OnCollisionEnter(go);
                }
                else {
                    //this.player.Collider.ShowCollision(false);
                    //go.Collider.ShowCollision(false);
                }
                // else{
                //     this._player.OnCollisionExit(go);
                // }
            }
            if (this._levelCompleted) {
                this.OnLevelCompleted();
            }
        }

        public AddGameObject(object: objects.GameObject) {
            console.log("Added " + object.name);
            object.Collider.AddAxis();
            object.CurrentLevel = this;
            this._gameObjects.push(object);
            this._gameLayer.addChild(object);
            this.Update();
        }

        public AddInGameGUIControl(control: createjs.Container) {
            this._guiControls.push(control);
            this._guiLayer.addChild(control);
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

        public abstract OnLevelCompleted(): void;
    }
}