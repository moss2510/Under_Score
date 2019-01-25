module controls {
    export class InGameGUIControl extends createjs.Container implements IControls {

        width: number;
        height: number;
        centerPivot: boolean;
        label?: string;
        backgroundImgSrc?: createjs.Bitmap;

    }

    export class ProgressBar extends controls.InGameGUIControl implements IControls {

        // Properties
        private _x: number;
        private _y: number;
        private _width: number;
        private _height: number;

        private _border: createjs.Shape;
        private _background: createjs.Shape;
        private _foreground: createjs.Shape;

        private _backgroundColor: string = "black";
        private _foregroundColor: string = "green";

        private _borderWidth: number = 0;
        private _borderColor: string = "black";

        // Control Properties
        private _value = 0;
        private _maxValue = 100;

        get Value(): number {
            return this._value;
        }

        get MaxValue(): number {
            return this._maxValue;
        }

        set Value(value: number) {
            if (value < 0 || value > this._maxValue) {
                return;
            }
            this._value = value;
            // The regenerate speed is slower on increase and faster on decrease
            createjs.Tween.get(this._foreground).to({ scaleX: this._value / this._maxValue }, (value < this._value) ? 1000 : 100, createjs.Ease.quadIn);
        }

        set MaxValue(maxValue: number) {
            if (maxValue < 0) {
                return;
            }
            this._value = maxValue;
        }

        constructor(x: number, y: number, width: number, height: number, maxValue: number, backgroundColor?: string, foregroundColor?: string, borderWidth?: number, borderColor?: string) {
            super();
            this._x = x;
            this._y = y;
            this._width = width;
            this._height = height;
            this._maxValue = maxValue;
            this._backgroundColor = backgroundColor;
            this._foregroundColor = foregroundColor;
            this._borderWidth = borderWidth;
            this._borderColor = borderColor;
            this.Init();
        }

        public Init() {
            this.removeAllChildren();

            this._border = new createjs.Shape();
            this._border.graphics.setStrokeStyle(this._borderWidth).beginStroke(this._borderColor).drawRect(this._x + 1, this._y + 1, this._width + this._borderWidth, this._height + this._borderWidth).endStroke();

            this._background = new createjs.Shape();
            this._background.set({ x: this._x + this._borderWidth, y: this._y + this._borderWidth, scaleX: 1 });
            this._background.graphics.beginFill(this._backgroundColor).drawRect(0, 0, this._width, this._height);

            this._foreground = new createjs.Shape();
            this._foreground.set({ x: this._x + this._borderWidth, y: this._y + this._borderWidth, scaleX: this._value / this._maxValue });
            this._foreground.graphics.beginFill(this._foregroundColor).drawRect(0, 0, this._width, this._height);

            this.addChild(this._border);
            this.addChild(this._background);
            this.addChild(this._foreground);
        }

        public Update(): void {
        }

        public Increase(amount: number): void {
            // Prevent substract amount to go below 0
            if (amount < 0) {
                return;
            }
            if (this._value + amount < this._maxValue) {
                this.Value += amount;
            }
            else {
                this.Value = this._maxValue;
            }
        }

        public Decrease(amount: number): void {
            // Prevent adding amount that will excess maxValue
            if (amount < 0) {
                return;
            }
            if (this._value - amount > 0) {
                this.Value -= amount;
            }
            else {
                this.Value = 0;
            }
        }
    }

}