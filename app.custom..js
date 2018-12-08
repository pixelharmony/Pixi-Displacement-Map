var scene = new THREE.Scene();

var W = window.innerWidth;
var H = window.innerHeight;

var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x17293a);
renderer.setSize(W, H);

var camera = new THREE.PerspectiveCamera(40, W / H, 0.5, 100);
camera.position.set(0, 0, 30);
camera.lookAt(scene.position);

var flagImage = '/images/material.png';

var texture = new THREE.TextureLoader().load(flagImage);

var material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
var geometry = new THREE.PlaneGeometry(15, 10, 32);

var plane = new THREE.Mesh(geometry, material);
scene.add(plane);

document.body.appendChild(renderer.domElement);

function renderScene() {

    var center = new THREE.Vector2(0,0);
    window.requestAnimationFrame(drawFrame);
    var vLength = plance.geometry.vertices.length;
    for (var i = 0; i < vLength; i++) {
        var v = plane.geometry.vertices[i];
        var dist = new THREE.Vector2(v.x, v.y).sub(center);
        var size = 2.0;
        var magnitude = 4;
        v.z = Math.sin(dist.length() / -size + (ts / 900)) * magnitude;
    }

    plane.geometry.verticesNeedUpdate = true;
    renderer.render(scene, camera);
}

renderScene();