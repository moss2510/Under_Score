module objects {
    export class Platform extends objects.GameObject {

        constructor(x: number, y: number, width: number, height: number) {
            super(width, height);
            this.x = x;
            this.y = y;
            this.regX = this.Width / 2;
            this.regY = this.Height / 2;
            this.Sprite = new createjs.Sprite(new createjs.SpriteSheet({
                framerate: 1,
                images: [managers.GameManager.AssetManager.getResult("sprite_platform")],
                frames: { width: this.Width, height: this.Height }
            }));
            this.name = "platform";
            this.AddComponent(new components.Collider(this.x, this.y - this.regY, this.Width, this.Height));
        }

        public Init(): void {
        }

        public UpdateTransform(): void {
        }

        public OnCollisionEnter(other: objects.GameObject) {
            if (other.name == "test") {
                
            }
        }
    }
}