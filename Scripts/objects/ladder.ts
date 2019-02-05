module objects {
    export class Ladder extends objects.GameObject {

        constructor(x: number, y: number, width: number, height: number) {
            super(width, height);
            this.x = x;
            this.y = y;
            this.Sprite = new createjs.Sprite(new createjs.SpriteSheet({
                framerate: 1,
                images: [managers.GameManager.AssetManager.getResult("sprite_ladder")],
                frames: { width: width, height: height }
            }));
            this.name = "ladder";
            this.collider = new components.Collider(this.x, this.y, this.Width, this.Height);
            this.collider.EnableCollisionCheck = true;
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