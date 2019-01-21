module managers {
    export class CameraManager {

        private _x: number;
        private _y: number;

        private _targetToFollow: objects.GameObject;
        private _offset: components.Point = new components.Point(0, 0);

        constructor() {
        }

        get X(): number {
            return this._x;
        }

        get Y(): number {
            return this._y;
        }

        public Follow(target: objects.GameObject) {
            this._targetToFollow = target;
            this._offset.X = target.x - managers.GameManager.SceneManager.CurrentScene.x;
            this._offset.Y = target.y - managers.GameManager.SceneManager.CurrentScene.y;
        }

        public Update() {
            if (this._targetToFollow != null || this._targetToFollow != undefined) {
                managers.GameManager.SceneManager.CurrentScene.x = this._targetToFollow.x + this._offset.X;
                managers.GameManager.SceneManager.CurrentScene.y = this._targetToFollow.y + this._offset.Y;
            }
        }
    }
}