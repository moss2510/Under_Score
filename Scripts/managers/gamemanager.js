var managers;
(function (managers) {
    var GameManager = /** @class */ (function () {
        function GameManager() {
        }
        GameManager.AssetManifest = [
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
        return GameManager;
    }());
    managers.GameManager = GameManager;
})(managers || (managers = {}));
//# sourceMappingURL=gamemanager.js.map