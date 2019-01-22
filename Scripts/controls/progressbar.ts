module controls {
    export class ProgressBar extends controls.InGameGUIControl {

        x: number;
        y: number;
        width: number;
        height: number;
        centerPivot: boolean;
        label?: string;
        backgroundImgSrc: createjs.Bitmap;
        foregroundImgSrc: createjs.Bitmap;

        private _currentValue;
        private _maxValue;

        constructor() {
            super("");
        }

        public Update(): void {

        }
    }
}