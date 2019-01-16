// IIFE - Immediately Invoked Function Expression 
(function () {

    let _assetManager: createjs.LoadQueue;

    // Game Objects
    let _sceneManager : managers.SceneManager;

    let _canvas : HTMLCanvasElement;
    let _stage : createjs.Stage;

    function Init(): void {
        _assetManager = new createjs.LoadQueue();
        _assetManager.installPlugin(createjs.Sound);
        _assetManager.loadManifest(managers.GameManager.AssetManifest);


        _canvas = document.getElementsByTagName("canvas")[0]; // get the canvas element
        _stage = new createjs.Stage(_canvas); // create stage
        createjs.Ticker.framerate = 60; // set framerate
        createjs.Ticker.on("tick", Update); // set event handler for tick
        // Call Start after loaded all assets
        _assetManager.on("complete", Start);
    }

    function Start(): void {
        managers.GameManager.AssetManager = _assetManager;
        _sceneManager = new managers.SceneManager();
        managers.GameManager.SceneManager = _sceneManager;
       // managers.SceneManager.Stage = _stage;
        _sceneManager.ChangeScene(config.Scene.Menu);
    }

    function Update(): void{
        if(_sceneManager != null){
            _sceneManager.Update();
        }
    }

    window.onload = Init;
}())