interface IControls {
    x: number;
    y: number;
    readonly width: number;
    readonly height: number;
    centerPivot: boolean;
    label?: string; // optional parmeter to implement
    backgroundImgSrc?: createjs.Bitmap;
}