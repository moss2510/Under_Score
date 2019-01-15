module levels{
    export class Level1 extends scenes.Play{

        public Init(): void {
            throw new Error("Method not implemented.");
        }

        constructor(bgm: createjs.Bitmap){
            super("Floor 1", bgm);
        }

        public OnSceneEnter(): void {
            console.log("Loadding " + this.Name + "...");
        }

        public Update(): void {
            
        }

        public OnSceneExit(): void {
            
        }
    }
}