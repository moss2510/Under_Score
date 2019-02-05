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
            this.collider.x = this.x;
            this.collider.y = this.collider.y;
            this.collider.Width = this.Width;
            this.collider.Height = this.Height;
            this.collider.EnableCollisionCheck = true;
            this.AddComponent(this.collider);
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