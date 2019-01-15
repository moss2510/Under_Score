var managers;
(function (managers) {
    var GameManager = /** @class */ (function () {
        function GameManager() {
        }
        GameManager.AssetManifest = [
            { id: "player", src: "./Assets/sprites/player/placeholder-player.png" },
            { id: "background", src: "./Assets/sprites/environment/placeholder-background.png" },
            { id: "btnStart", src: "./Assets/sprites/menu/gui/btnStart.png" },
            { id: "btnMute", src: "./Assets/sprites/menu/gui/btnMute.png" }
        ];
        return GameManager;
    }());
    managers.GameManager = GameManager;
})(managers || (managers = {}));
//# sourceMappingURL=gamemanager.js.map