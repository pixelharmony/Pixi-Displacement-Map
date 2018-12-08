var width = 2000;
var height = 2000;
var playground = document.getElementById('px-render');

var canvas;
var count = 0;
var raf;


var renderer = PIXI.autoDetectRenderer(width, height, {transparent:true});
renderer.autoResize = true;
var tp, preview;
var displacementSprite,
	displacementFilter,
	stage;

function setScene(url){
			playground.appendChild(renderer.view);

	        stage = new PIXI.Container();

	        tp = PIXI.Texture.fromImage(url);
	        preview = new PIXI.Sprite(tp);

	        preview.anchor.x = 0;
	    
	        displacementSprite = PIXI.Sprite.fromImage('/images/water.png');
          
	        displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

           displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

	        displacementSprite.scale.y = 1;
	        displacementSprite.scale.x = 1.5;


	        stage.addChild(displacementSprite);

	        stage.addChild(preview);

			animate();
}


function animate() {
    raf = requestAnimationFrame(animate);
            
    displacementSprite.x = count*10;
	displacementSprite.y = count*10;

	count += 0.04;

    stage.filters = [displacementFilter];

    renderer.render(stage);

    canvas = playground.querySelector('canvas');
}

setScene('/images/material.png');