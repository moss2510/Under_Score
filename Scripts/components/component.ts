module components {
    export abstract class Component {
        public name: string;
        protected owner: objects.GameObject;

        constructor(owner: objects.GameObject) {
            this.owner = owner;
        }

        public abstract Update(): void;
    }

    export class Transform {

        private _position: math.Vector2;
        private _rotation: math.Vector2;

        constructor(position?: math.Vector2, rotation?: math.Vector2) {
            this._position = position;
            this._rotation = rotation;
        }

        get Position(): math.Vector2 {
            return this._position;
        }

        get Rotation(): math.Vector2 {
            return this._rotation;
        }
    }

    export class Rigidbody2D extends components.Component {
        private _velocity: math.Vector2;
        private _gravityScale: number;

        constructor(owner: objects.GameObject) {
            super(owner);
            this.name = "Rigidbody2D";
            this._velocity = new math.Vector2(0, 0);
            this._gravityScale = 1;
        }

        get Velocity(): math.Vector2 {
            return this._velocity;
        }

        set Velocity(velocity: math.Vector2) {
            this._velocity = velocity;
        }

        get GravityScale(): number {
            return this._gravityScale;
        }

        set GravityScale(gravityScale: number) {
            this._gravityScale = gravityScale;
        }

        public Update(): void {
            this.owner.x += this._velocity.x;
            this.owner.y -= this._velocity.y;
            this.owner.y += this._gravityScale * physics.Config.GRAVITY;
        }
    }

    export class HealthComponent extends components.Component {

        private _value: number = 0;
        private _maxValue: number = 0;
        private _regenerateRate: number = 0;
        private _progressBar: controls.ProgressBar;

        constructor(owner: objects.GameObject, maxHP: number, progressBar?: controls.ProgressBar) {
            super(owner);
            this.name = "Health Component";
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
        private _offsetX: number;
        private _offsetY: number;
        private _width: number;
        private _height: number;

        private _enableCollisionCheck: boolean = true;

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

        get Top(): number {
            return this.owner.y - this._offsetY - this.Height / 2;
        }

        get Bottom(): number {
            return this.owner.y + this._offsetY + this.Height / 2;
        }

        get Left(): number {
            return this.owner.x - this._offsetX;
        }

        get Right(): number {
            return this.owner.x + this._offsetY + this.Width;
        }

        private _border: createjs.Shape;

        get Border(): createjs.Shape {
            return this._border;
        }

        constructor(owner: objects.GameObject, offsetX: number, offsetY: number, width: number, height: number) {
            super(owner);
            this.name = "Collider";
            this._offsetX = offsetX;
            this._offsetY = offsetY;
            this._width = width;
            this._height = height;
            this._border = new createjs.Shape();
            this._border.graphics.setStrokeStyle(1).beginStroke("#00FF7F").drawRect(0, 0, width, height).endStroke();
            this.owner.addChild(this._border);

            console.log(this.owner.x + " - " + this.owner.y);
            console.log(this.Width + " - " + this.Height);
            console.log(this.Left);
            console.log(this.Right);
            console.log(this.Top);
            console.log(this.Bottom);
        }


        public Update(): void {
        }
    }
}