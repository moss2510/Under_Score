var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
;
var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
    }
    Player.prototype.Move = function () {
    };
    return Player;
}());
//# sourceMappingURL=player.js.map