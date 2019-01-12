module objects {
    export class Player extends objects.GameObject {

        constructor() {
            super("player");
            this.Start();
        }

        public Start(): void {
            this.SetPivotPoint(this.Width / 2, this.Height / 2);
        }

        public Update(): void {
            this.x = managers.Game.stage.mouseX;
            this.y = managers.Game.stage.mouseY;
            if(this.x > managers.Game.stage.getBounds().width - this.PivotX){
                this.x = managers.Game.stage.getBounds().width - this.PivotX;
            }
            
            if(this.x < this.PivotX) {
                this.x = this.PivotX;
            }
        }
    }
}
