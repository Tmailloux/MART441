var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var capsule, capsule2;
var modelObject;

function createCapsule() {

  var geometry = new THREE.CapsuleGeometry(1, 1, 4, 8)
  var material = new THREE.MeshBasicMaterial({
    color: 0x324ca8
  });
  capsule = new THREE.Mesh(geometry, material);
  capsule.position.set(50, 0, 0);
  scene.add(capsule);
  capsule.scale.x = 15; // SCALE
  capsule.scale.y = 15; // SCALE
  capsule.scale.z = 15; // SCALE


  animate();
}


function animate() {
  requestAnimationFrame(animate);
  capsule.rotation.x += 0.01;
  capsule.rotation.y += 0.01;
  renderer.render(scene, camera);

  createCone();

}


function createCone(){
  var geometry = new THREE.ConeGeometry( 25, 25, 32 );
  var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
  var cone = new THREE.Mesh( geometry, material );
  
  capsule.add(cone);
  cone.scale.x = .08;
  cone.scale.y = .08;
  cone.scale.z = .08;

  animateCone();
}

function animateCone(){

  cone.rotation.x += 0.01;
  cone.rotation.x += 0.01;



}

function getScene() {
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0xaaaaaa);
  return scene;
}

function getCamera() {
  var aspectRatio = window.innerWidth / window.innerHeight;
  var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  camera.position.set(0, 90, -10);
  return camera;
}


function getLight(scene) {
  var light = new THREE.PointLight(0xffffff, 1, 0);
  light.position.set(20, 50, 20);
  scene.add(light);

  var ambientLight = new THREE.AmbientLight(0x111111);
  scene.add(ambientLight);
  return light;
}



function getRenderer() {
 
  var renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  return renderer;
}


function getControls(camera, renderer) {
  var controls = new THREE.TrackballControls(camera, renderer.domElement);
  controls.zoomSpeed = 0.4;
  controls.panSpeed = 0.4;
  return controls;
}


function loadModel() {
  loader = new THREE.OBJLoader();
  loader.load('models/WaltHead.obj', function (object) {
    object.rotation.z = Math.PI;
    modelObject = object;
    scene.add(object);
    animateModel();
  });
}

function animateModel() {
  requestAnimationFrame(animateModel);
  modelObject.rotation.x += 0.05;
  modelObject.rotation.y += 0.05;
  modelObject.scale.x = .5;
  modelObject.scale.y = .5;
  modelObject.scale.z = .5;
}




function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  controls.update();
};

var scene = getScene();
var camera = getCamera();
var light = getLight(scene);
var renderer = getRenderer();
var controls = getControls(camera, renderer);
var game1 = createCapsule();


loadModel()

render();