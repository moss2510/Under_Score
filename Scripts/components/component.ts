module components {
    export abstract class Component {
        private _owner: objects.GameObject;

        get Owner(): objects.GameObject {
            return this._owner;
        }

        public SetOwner(owner: objects.GameObject): void {
            this._owner = owner;
        }

        public abstract Update(): void;
    }

    export class Transform {

        private _position: components.Point;
        private _rotation: components.Point;

        constructor(position?: components.Point, rotation?: components.Point) {
            this._position = position;
            this._rotation = rotation;
        }

        get Position(): components.Point {
            return this._position;
        }

        get Rotation(): components.Point {
            return this._rotation;
        }
    }

    export class Point {
        private _x: number;
        private _y: number;

        constructor(x: number, y: number) {
            this.Set(x, y);
        }

        public Set(x: number, y: number) {
            this._x = x;
            this._y = y;
        }

        get X(): number {
            return this._x;
        }
        set X(x: number) {
            this._x = x;
        }

        get Y(): number {
            return this._y;
        }
        set Y(y: number) {
            this._y = y;
        }
    }

    export class Rigidbody2D extends components.Component {
        private _velocity: components.Point;
        private _gravityScale: number;

        constructor() {
            super();
            this._velocity = new components.Point(0, 0);
            this._gravityScale = 1;
        }

        get Velocity(): components.Point {
            return this._velocity;
        }

        set Velocity(velocity: components.Point) {
            this._velocity = velocity;
        }

        get GravityScale(): number {
            return this._gravityScale;
        }

        set GravityScale(gravityScale: number) {
            this._gravityScale = gravityScale;
        }

        public Update(): void {
            this.Owner.x += this._velocity.X;
            this.Owner.y -= this._velocity.Y;
            this.Owner.y += this._gravityScale * physics.Config.GRAVITY;
        }
    }

    export class HealthComponent extends components.Component {

        private _value: number = 0;
        private _maxValue: number = 0;
        private _regenerateRate: number = 0;
        private _progressBar: controls.ProgressBar;

        constructor(maxHP: number, progressBar?: controls.ProgressBar) {
            super();
            this._maxValue = maxHP;
            this._value = this._maxValue;
            this._progressBar = progressBar;
        }

        set ProgressBar(progressBar: controls.ProgressBar) {
            this._progressBar = progressBar;
        }

        get Value(): number {
            return this._value;
        }

        get MaxValue(): number {
            return this._maxValue;
        }

        get RegenerateRate(): number {
            return this._regenerateRate;
        }
        set RegenerateRate(rate: number) {
            this._regenerateRate = rate;
        }

        public Reduce(amount: number): void {
            if (this._value > 0) {
                this._value -= amount;
            }
            else {
                this._value = 0;
            }
        }

        public Add(amount: number): void {
            if (this._value + amount > this._maxValue) {
                this._value = this._maxValue;
            }
            else {
                this._value += amount;
            }
        }

        public Update(): void {
            if (this._regenerateRate != 0 && this._value < this._maxValue) {
                this._value += this._regenerateRate;
            }
        }
    }

    export class Collider extends components.Component {

        public x: number;
        public y: number;
        private _width: number;
        private _height: number;

        private _enableCollisionCheck: boolean = false;

        set Width(width: number) {
            this._width = width;
        }

        set Height(height: number) {
            this._height = height;
        }

        get Width(): number {
            return this._width;
        }

        get Height(): number {
            return this._height;
        }

        set EnableCollisionCheck(enable: boolean) {
            this._enableCollisionCheck = enable;
        }

        get EnableCollisionCheck(): boolean {
            return this._enableCollisionCheck;
        }

        private _border: createjs.Shape;

        get Border(): createjs.Shape {
            return this._border;
        }

        constructor(x: number, y: number, width: number, height: number) {
            super();
            this.x = x;
            this.y = y;
            this._width = width;
            this._height = height;
        }

        public SetOwner(owner: objects.GameObject): void {
            super.SetOwner(owner);
            this._border = new createjs.Shape();
            this._border.graphics.setStrokeStyle(1).beginStroke("#00FF7F").drawRect(this.Owner.x, this.Owner.y, this.Owner.Width, this.Owner.Height).endStroke();
            this.Owner.addChild(this._border);
            managers.GameManager.CurrentLevel.GameLayer.addChild(this._border);
        }


        public Update(): void {
            this.x = this.Owner.x;
            this.y = this.Owner.y;
            this._border.x = this.x;
        }
    }
}