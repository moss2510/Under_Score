module controls {
    export class Label extends createjs.Text implements IControls {

        width: number;
        height: number;
        centerPivot: boolean;
        label?: string;
        backgroundImgSrc?: createjs.Bitmap;

        constructor(text: string, x: number, y: number, size: number, font: string, color: string, centerPivot: boolean) {
            super(text, size + "px " + font, color);
            this.label = text;
            this.width = this.getMeasuredWidth();
            this.height = this.getMeasuredHeight();
            this.x = x;
            this.y = y;
            this.centerPivot = centerPivot;
            // Center the pivot point of the label by divide the width and height by 2;
            if (centerPivot) {
                this.regX = this.width / 2;
                this.regY = this.height / 2;
            }
        }
    }
}