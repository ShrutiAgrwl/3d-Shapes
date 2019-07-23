swal({
     text: "Click to change the shapes",
     button: false,
     timer: 2000
     });
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 55, window.innerWidth/window.innerHeight, 0.1, 1000 );

function initStats(){
  var stats = new Stats();
  stats.setMode(0);
  document.body.appendChild(stats.domElement);
  return stats;
}

var stat = initStats();

var material = new THREE.MeshNormalMaterial();

//Cube
var cube = new THREE.BoxGeometry(1, 1, 1);

//Cuboid
var cuboid = new THREE.BoxGeometry(2, 1, 1);

//circle
var circle = new THREE.CircleGeometry(1, 30);

//sphere
var sphere = new THREE.SphereGeometry(1, 20, 20);

//Cone
var cone = new THREE.ConeGeometry(1, 2, 30);

//tetrahedron
var tetrahedron = new THREE.TetrahedronGeometry(1);

//cylinder
var cylinder = new THREE.CylinderGeometry(1, 1, 1, 35);

//icosahedron
var icosahedron = new THREE.IcosahedronGeometry(1);

//torus
var torus = new THREE.TorusGeometry(1, 0.3, 16, 100);

//OctaHedron
var octahedron = new THREE.OctahedronGeometry(1);

//dodecahedron
var dodecahedron = new THREE.DodecahedronGeometry(1);

var obj = new THREE.Mesh(cube, material);
scene.add(obj);
obj.position.set(0, 0, -6);
var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('canvas'), antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

//shapes array 
shapes = [cuboid, dodecahedron, circle, icosahedron, sphere, cone, tetrahedron, cylinder, torus, octahedron];

function change(event){
  event.preventDefault();
  
	x = shapes[shapes.length - 1];
	//console.log(x);
	scene.remove(obj);
	obj = new THREE.Mesh(x, material);
	scene.add(obj);
	obj.position.set(0, 0, -6);



	if(shapes.length > 1){
		shapes.pop(x);
		//console.log(shapes);
	}
	
	if(y == 'o')
  {
    swal('Thanks for trying it...Please reload to see the shapes again');
    window.removeEventListener('click', change);
  }
	
	//console.log('yes');
}

window.addEventListener('click', change);

function animate(){
	requestAnimationFrame(animate);
  stat.update();
	renderer.render(scene, camera);
	obj.rotation.x += 0.01;
	obj.rotation.y += 0.01;
	obj.rotation.z += 0.01;
	if(x == cuboid){y = 'o'}
}
animate();
