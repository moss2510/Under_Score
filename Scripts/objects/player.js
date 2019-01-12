var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player() {
            var _this = _super.call(this, "player") || this;
            _this.Start();
            return _this;
        }
        Player.prototype.Start = function () {
            this.SetPivotPoint(this.Width / 2, this.Height / 2);
        };
        Player.prototype.Update = function () {
            this.x = managers.Game.stage.mouseX;
            this.y = managers.Game.stage.mouseY;
            if (this.x > managers.Game.stage.getBounds().width - this.PivotX) {
                this.x = managers.Game.stage.getBounds().width - this.PivotX;
            }
            if (this.x < this.PivotX) {
                this.x = this.PivotX;
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map