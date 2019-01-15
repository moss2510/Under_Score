module managers {
    export class GameManager {
        public static AssetManager: createjs.LoadQueue; // handles preload
        public static SceneManager: managers.SceneManager; // handles scenes
        public static AssetManifest = [
            { id: "player", src: "./Assets/sprites/player/placeholder-player.png" },
            { id: "background", src: "./Assets/sprites/environment/placeholder-background.png" },
            { id: "btnStart", src: "./Assets/sprites/menu/gui/btnStart.png" },
            { id: "btnMute", src: "./Assets/sprites/menu/gui/btnMute.png" }
        ];
    }
}