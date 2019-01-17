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
        private _gravity: number;

        constructor() {
            super();
            this._velocity = new components.Point(0, 0);
            this._gravity = 0;
        }

        get Velocity(): components.Point {
            return this._velocity;
        }

        set Velocity(velocity: components.Point) {
            this._velocity = velocity;
        }

        get Gravity(): number {
            return this._gravity;
        }

        set Gravity(gravity: number) {
            this._gravity = gravity;
        }

        public Update(): void {
            this.Owner.x += this._velocity.X;
            this.Owner.y += this._velocity.Y - this._gravity;
        }
    }
}