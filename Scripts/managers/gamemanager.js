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
            { id: "spritesheet_player", src: "./Assets/sprites/player/Fireman/sprites/spritesheet_fireman.png" },
            { id: "spritesheet_obstacle", src: "./Assets/sprites/player/placeholder-obstacle.png" },
            { id: "sprite_platform", src: "./Assets/sprites/environment/platform.png" },
            { id: "sprite_ladder", src: "./Assets/sprites/environment/ladder.png" },
            // Level Backgrounds
            { id: "level1", src: "./Assets/sprites/environment/level1.png" },
            { id: "level2", src: "./Assets/sprites/environment/level2.png" },
            { id: "level3", src: "./Assets/sprites/environment/level3.png" }
        ];
        return GameManager;
    }());
    managers.GameManager = GameManager;
})(managers || (managers = {}));
//# sourceMappingURL=gamemanager.js.map