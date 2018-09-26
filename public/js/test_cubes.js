var camera, scene, renderer;
var geometry, material, mesh;
var avant = true;

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 100 );
	camera.position.z = 1;

	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	material = new THREE.MeshNormalMaterial();

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
  document.addEventListener( 'mousedown', addCube, false );
}

function addCube(event){
		event.preventDefault();
		if(event.which == 1){
				let x = ( event.clientX / window.innerWidth ) * 2 - 1;
				let y = - ( event.clientY / window.innerHeight ) * 2 + 1;
				let geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
				let material = new THREE.MeshNormalMaterial();
				geometry.translate(x, y, 0)
				let mesh = new THREE.Mesh( geometry, material );
				scene.add( mesh );
		}
}


function animate() {

	requestAnimationFrame( animate );

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.02;

  if(avant){
    camera.position.z -= 0.01;
  } else {
    camera.position.z += 0.01;
  }

  if(avant && camera.position.z <= 1){
    avant = false;
  } else if (!avant && camera.position.z >= 1.5) {
    avant = true;
  }

	renderer.render( scene, camera );

}
