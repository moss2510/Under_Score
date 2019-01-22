module managers {
    export class GameManager {
        public static AssetManager: createjs.LoadQueue; // handles preload
        public static SceneManager: managers.SceneManager; // handles scenes
        public static CameraManager: managers.CameraManager; // handles camera movement
        public static CurrentLevel: scenes.Play; // handles level
        public static AssetManifest = [
            // UI - Main Menu
            { id: "btnStart", src: "./Assets/sprites/menu/gui/btnStart.png" },
            { id: "btnUnmute", src: "./Assets/sprites/menu/gui/btnUnmute.png" },
            { id: "btnMuted", src: "./Assets/sprites/menu/gui/btnMuted.png" },

            // UI - In Game

            // Game Objects
            { id: "player", src: "./Assets/sprites/player/placeholder-player.png" },
            { id: "obstacle", src: "./Assets/sprites/player/placeholder-obstacle.png" },

            // Level Backgrounds
            { id: "level1", src: "./Assets/sprites/environment/level1.png" }
        ];
    }
}