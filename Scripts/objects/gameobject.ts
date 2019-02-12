module objects {
    export enum Action{
        STANDING, WALKING, JUMPING, CLAMPING, INTERACTING
    }
    export enum Direction{
        LEFT = -1, RIGHT = 1
    }
    export abstract class GameObject extends createjs.Container {

        private _transform: components.Transform;

        public position: math.Vector2;

        private _width: number = 0;
        private _height: number = 0;

        private _pivotX: number = 0;
        private _pivotY: number = 0;

        private _components: components.Component[] = new Array();

        private _currentLevel: scenes.Play;

        protected sprite: createjs.Sprite;

        // Animation Data
        private _animationData;

        // Collider
        protected collider: components.Collider;

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
            return this.sprite;
        }

        set CurrentLevel(level: scenes.Play) {
            this._currentLevel = level;
        }

        set Sprite(sprite: createjs.Sprite) {
            this.sprite = sprite;
            this.sprite.regX = this.PivotX;
            this.sprite.regY = this.PivotY;
            this.removeAllChildren();
            this.addChild(this.sprite);
        }

        get Collider(): components.Collider {
            return this.collider;
        }

        // Direction 1 for RIGHT, -1 for LEFT
        public FlipSprite(direction: number) {
            this.sprite.scaleX = direction;
        }

        public SetPivotPoint(x: number, y: number) {
            this._pivotX = x;
            this._pivotY = y;
        }

        constructor(x: number = 0, y: number = 0, width: number, height: number, animationData?: object) {
            super();
            this.x = x;
            this.y = y;
            this._width = width;
            this._height = height;
            this.Init();
            this._animationData = animationData;
            this.Sprite = new createjs.Sprite(new createjs.SpriteSheet(this._animationData));
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

            // Add PivotPoint
            let pivotPoint = new createjs.Shape();
            pivotPoint.graphics.setStrokeStyle(1).beginStroke("#0000FF").drawCircle(0, 0, 1).endStroke();
            this.addChild(pivotPoint);

            // Add PivotPoint
            let position = new createjs.Shape();
            position.graphics.setStrokeStyle(1).beginStroke("#FFFF00").drawCircle(0, 0, 3).endStroke();
            this.addChild(position);
        }

        public Update(): void {
            this.UpdateTransform();
            this.updateComponents();
            this.CheckBoundary();
            this.OnAction();
        }

        public AddComponent(component: components.Component) {
            console.log("Added " + component.name + " to " + this.name);
            this._components.push(component);
        }

        public Instanitate(gameObject: objects.GameObject) {
            if (utils.Util.NotNullOrUndefined(this._currentLevel)) {
                this._currentLevel.AddGameObject(gameObject);
            }
        }

        private updateComponents(): void {
            for (let component of this._components) {
                component.Update();
            }
        }

        public abstract Init(): void;
        public abstract UpdateTransform(): void;
        public abstract OnAction(): void; // Use this method to update action state and animation transition
        public abstract OnCollisionEnter(other: objects.GameObject): void;

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