module controls {
    export class Button extends createjs.Bitmap implements IControls {

        width: number;
        height: number;

        label: string;
        centerPivot: boolean;
        backgroundImgSrc: createjs.Bitmap;

        constructor(backgroundImgSrc: createjs.Bitmap, x: number, y: number, centerPivot: boolean) {
            super(backgroundImgSrc);
            this.backgroundImgSrc = backgroundImgSrc;
            this.x = x;
            this.y = y;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            if (centerPivot) {
                this.regX = this.width / 2;
                this.regY = this.height / 2;
            }
        }
    }
}