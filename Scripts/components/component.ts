module components {
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
}