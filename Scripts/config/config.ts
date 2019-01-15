module config {
    export enum Scene { Menu, Play, GameOver };
    export class GameInfo {
        public static readonly GameName: string = "Game Name";
        public static readonly Version: string = "v1.0";
    }
}