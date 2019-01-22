module controls{
    export class InGameGUIControl extends createjs.Bitmap implements IControls{

        x: number;
        y: number;
        width: number;
        height: number;
        centerPivot: boolean;
        label?: string;
        backgroundImgSrc?: createjs.Bitmap;


    }
}