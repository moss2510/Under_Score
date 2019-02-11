module objects {
    export abstract class GameObject extends createjs.Container {

        private _transform: components.Transform;

        public position: math.Vector2;

        protected width: number;
        protected height: number;

        private _pivotX: number;
        private _pivotY: number;

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
            return this.width;
        }

        get Height(): number {
            return this.height;
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
            this.regX = x;
            this.regY = y;
        }

        constructor(width: number, height: number, animationData?: object) {
            super();
            this.x = 0;
            this.y = 0;
            this.width = width;
            this.height = height;
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
            let positionPoint = new createjs.Shape();
            positionPoint.graphics.setStrokeStyle(1).beginStroke("#FF0000").drawCircle(this.x, this.y, 1).endStroke();
            this.addChild(positionPoint);
        }

        public Update(): void {
            this.UpdateTransform();
            this.updateComponents();
            this.CheckBoundary();
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