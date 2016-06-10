var addCubeButton = document.getElementById('cube'),
	addSphereButton = document.getElementById('sphere'),
	addCylinderButton = document.getElementById('cylinder');

addCubeButton.addEventListener('click', function() {
	addCube(scene);
}, false);

addSphereButton.addEventListener('click', function() {
	addSphere(scene);
}, false);

addCylinderButton.addEventListener('click', function() {
	addCylinder(scene);
}, false);

function addCube(scene) {
	var geometry = new THREE.CubeGeometry(200, 200, 200);
	var material = new THREE.MeshBasicMaterial({
		color: 0xffffff,
		overdraw: 0.5
	});
	var cube = new THREE.Mesh(geometry, material);
	cube.receiveShadow = true;
	currentObject = cube;
	scene.add(cube);
}

function addSphere(scene) {
	var geometry = new THREE.SphereGeometry(100, 32, 32);
	var material = new THREE.MeshBasicMaterial({
		color: 0xffffff,
		overdraw: 0.5
	});
	var sphere = new THREE.Mesh(geometry, material);
	sphere.position.x = -250;
	sphere.receiveShadow = true;
	currentObject = sphere;
	scene.add(sphere);
}

function addCylinder(scene) {
	var geometry = new THREE.CylinderGeometry(100, 100, 200, 32);
	var material = new THREE.MeshBasicMaterial({
		color: 0xffffff,
		overdraw: 0.5
	});
	var cylinder = new THREE.Mesh(geometry, material);
	cylinder.position.x = 250;
	cylinder.receiveShadow = true;
	currentObject = cylinder;
	scene.add(cylinder);
}