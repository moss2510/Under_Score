module objects {
    export abstract class GameObject extends createjs.Bitmap {

        private _width: number;
        private _height: number;

        private _pivotX: number;
        private _pivotY: number;

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

        public SetPivotPoint(x: number, y: number) {
            this._pivotX = x;
            this._pivotY = y;
            this.regX = x;
            this.regY = y;
        }

        constructor(imageId: string) {
            super(managers.GameManager.AssetManager.getResult(imageId));
            this._init();
        }

        private _init(): void {
            this._width = this.getBounds().width;
            this._height = this.getBounds().height;
        }

        public Start(): void {

        }

        public Update(): void {

        }
    }
}