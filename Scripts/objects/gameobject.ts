module objects {
    export abstract class GameObject extends createjs.Container {

        private _transform: components.Transform;

        private _width: number;
        private _height: number;

        private _pivotX: number;
        private _pivotY: number;

        private _components: components.Component[] = new Array();

        private _currentLevel: scenes.Play;

        private _sprite: createjs.Sprite;

        // Animation Data
        private _animationData;

        get PivotX(): number {
            return this._pivotX;
        }

        get PivotY(): number {
            return this._pivotY;
        }

        get Width(): number {
            return this._width;
        }

        get Height(): number {
            return this._height;
        }

        get CurrentLevel(): scenes.Play {
            return this._currentLevel;
        }

        get Sprite(): createjs.Sprite {
            return this._sprite;
        }

        set CurrentLevel(level: scenes.Play) {
            this._currentLevel = level;
        }

        set Sprite(sprite: createjs.Sprite) {
            this._sprite = sprite;
            this._sprite.regX = this._width / 2; // For Filp Sprite
            this._sprite.regY = this._height / 2;
            this.removeAllChildren();
            this.addChild(this._sprite);
        }

        // Direction 1 for RIGHT, -1 for LEFT
        public FlipSprite(direction: number) {
            this._sprite.scaleX = direction;
        }

        public SetPivotPoint(x: number, y: number) {
            this._pivotX = x;
            this._pivotY = y;
            this.regX = x;
            this.regY = y;
        }

        constructor(width: number, height: number, animationData: object) {
            super();
            this._width = width;
            this._height = height;
            this._animationData = animationData;
            this.Sprite = new createjs.Sprite(new createjs.SpriteSheet(this._animationData));
            this.Init();
            this._afterInit();
        }

        private _afterInit(): void {
            if (this.x > managers.GameManager.SceneManager.ScreenWidth - this.PivotX) {
                this.x > managers.GameManager.SceneManager.ScreenWidth - this.PivotX;
            }
            if (this.x < this.PivotX) {
                this.x = this.PivotX;
            }
            if (this.y > managers.GameManager.SceneManager.ScreenHeight - this.PivotY) {
                this.y = managers.GameManager.SceneManager.ScreenHeight - this.PivotY;
            }
            if (this.y < this.PivotY) {
                this.y = this.PivotY;
            }
        }

        public Update(): void {
            this.UpdateTransform();
            this._updateComponents();
            this.CheckBoundary();
        }

        public AddComponent(component: components.Component) {
            component.SetOwner(this);
            this._components.push(component);
        }

        public Instanitate(gameObject: objects.GameObject) {
            if (utils.Util.NotNullOrUndefined(this._currentLevel)) {
                this._currentLevel.AddGameObject(gameObject);
            }
        }

        private _updateComponents(): void {
            for (let component of this._components) {
                if (component.Owner == this) {
                    component.Update();
                }
            }
        }

        public abstract Init(): void;
        public abstract UpdateTransform(): void;

        // Methods to Override
        public CheckBoundary(): void {
            let level = managers.GameManager.CurrentLevel;

            let rightBoundary = level.LevelWidth - level.LevelBoundarySize - this.PivotX + this.Sprite.regX;
            let leftBoundary = this.PivotX + level.LevelBoundarySize + this.Sprite.regX;
            let topBoundary = this.PivotY + level.LevelBoundarySize + this.Sprite.regY;
            let bottomBoundary = level.LevelHeight - level.LevelBoundarySize - this.PivotY + this.Sprite.regY;

            if (this.x > rightBoundary) {
                this.x = rightBoundary;
            }

            if (this.x < leftBoundary) {
                this.x = leftBoundary;
            }

            if (this.y > bottomBoundary) {
                this.y = bottomBoundary;
            }

            if (this.y < topBoundary) {
                this.y = topBoundary;
            }
        }
    }
}