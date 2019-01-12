// IIFE - Immediately Invoked Function Expression 
(function () {
    let canvas: HTMLCanvasElement;
    let stage: createjs.Stage;

    let assetManager: createjs.LoadQueue;
    let assetManifest: any;

    // Game Objects
    let player: objects.Player;

    let background: createjs.Bitmap;

    assetManifest = [
        { id: "player", src: "./Assets/sprites/player/placeholder-player.png" },
        { id: "background", src: "./Assets/sprites/environment/placeholder-background.png" }
    ];

    function Init(): void {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetManagger = assetManager;

        assetManager.installPlugin(createjs.Sound);

        assetManager.loadManifest(assetManifest);

        // Call Start after loaded all assets
        assetManager.on("complete", Start);
    }

    function Start(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage;
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }

    function Update(): void {
        player.Update();
        stage.update();
    }

    function Main(): void {
        player = new objects.Player();

        background = new createjs.Bitmap(assetManager.getResult("background"));

        stage.addChild(background);
        stage.addChild(player);
    }

    window.onload = Init;
}())