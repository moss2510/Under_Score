var managers;
(function (managers) {
    var GameManager = /** @class */ (function () {
        function GameManager() {
        }
        GameManager.AssetManifest = [
            { id: "player", src: "./Assets/sprites/player/placeholder-player.png" },
            { id: "obstacle", src: "./Assets/sprites/player/placeholder-obstacle.png" },
            { id: "background", src: "./Assets/sprites/environment/placeholder-background.png" },
            { id: "btnStart", src: "./Assets/sprites/menu/gui/btnStart.png" },
            { id: "btnUnmute", src: "./Assets/sprites/menu/gui/btnUnmute.png" },
            { id: "btnMuted", src: "./Assets/sprites/menu/gui/btnMuted.png" }
        ];
        return GameManager;
    }());
    managers.GameManager = GameManager;
})(managers || (managers = {}));
//# sourceMappingURL=gamemanager.js.map