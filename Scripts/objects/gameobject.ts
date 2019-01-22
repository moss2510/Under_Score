module objects {
    export abstract class GameObject extends createjs.Bitmap {

        private _transform: components.Transform;

        private _width: number;
        private _height: number;

        private _pivotX: number;
        private _pivotY: number;

        private _components: components.Component[] = new Array();

        private _currentLevel: scenes.Play;

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

        set CurrentLevel(level: scenes.Play) {
            this._currentLevel = level;
        }

        public SetPivotPoint(x: number, y: number) {
            this._pivotX = x;
            this._pivotY = y;
            this.regX = x;
            this.regY = y;
        }

        constructor(imageId: string) {
            super(managers.GameManager.AssetManager.getResult(imageId));
            this._beforeInit();
            this.Init();
            this._afterInit();
        }

        private _beforeInit(): void {
            this._width = this.getBounds().width;
            this._height = this.getBounds().height;
            //this._transform = new components.Transform(new components.Point(0, 0), new components.Point(0, 0));
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

            if (this.x > level.LevelWidth - level.LevelBoundarySize - this.PivotX) {
                this.x = level.LevelWidth - level.LevelBoundarySize - this.PivotX;
            }

            if (this.x < this.PivotX + level.LevelBoundarySize) {
                this.x = this.PivotX + level.LevelBoundarySize;
            }

            if (this.y > level.LevelHeight - level.LevelBoundarySize - this.PivotY) {
                this.y = level.LevelHeight - level.LevelBoundarySize - this.PivotY;
            }

            if (this.y < this.PivotY + level.LevelBoundarySize) {
                this.y = this.PivotY + level.LevelBoundarySize;
            }
        }
    }
}