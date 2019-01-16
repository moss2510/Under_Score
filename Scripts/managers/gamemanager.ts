module managers {
    export class GameManager {
        public static AssetManager: createjs.LoadQueue; // handles preload
        public static SceneManager: managers.SceneManager; // handles scenes
        public static AssetManifest = [
            { id: "player", src: "./Assets/sprites/player/placeholder-player.png" },
            { id: "obstacle", src: "./Assets/sprites/player/placeholder-obstacle.png" },
            { id: "background", src: "./Assets/sprites/environment/placeholder-background.png" },
            { id: "btnStart", src: "./Assets/sprites/menu/gui/btnStart.png" },
            { id: "btnUnmute", src: "./Assets/sprites/menu/gui/btnUnmute.png" },
            { id: "btnMuted", src: "./Assets/sprites/menu/gui/btnMuted.png" }
        ];
    }
}