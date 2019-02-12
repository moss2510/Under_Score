module objects {
    export class Ladder extends objects.GameObject {
        public OnAction(): void {
        }

        constructor(x: number, y: number, width: number, height: number) {
            super(x, y, width, height);
            this.Sprite = new createjs.Sprite(new createjs.SpriteSheet({
                framerate: 1,
                images: [managers.GameManager.AssetManager.getResult("sprite_ladder")],
                frames: { width: width, height: height }
            }));
            this.name = "ladder";
            this.collider = new components.Collider(this, 0, 0, width, height);
            this.AddComponent(this.collider);
        }

        public Init(): void {
        }
        public UpdateTransform(): void {
        }
        public OnCollisionEnter(other: GameObject): void {
        }


    }
}