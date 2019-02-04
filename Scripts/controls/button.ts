module controls {
    export class Button extends createjs.Bitmap implements IControls {

        width: number;
        height: number;

        label: string;
        centerPivot: boolean;
        private _backgroundImage: createjs.Bitmap;

        constructor(backgroundImage: createjs.Bitmap, x: number, y: number, centerPivot: boolean) {
            super(backgroundImage);
            this._backgroundImage = backgroundImage;
            this.x = x;
            this.y = y;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            if (centerPivot) {
                this.regX = this.width / 2;
                this.regY = this.height / 2;
            }
        }

        public SetBackgroundImage(newBackgroundImage: createjs.Bitmap): void {
            this._backgroundImage = newBackgroundImage;
        }
    }
}