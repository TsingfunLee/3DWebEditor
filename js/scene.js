var scene,
	camera,
	renderer,
	currentObject,
	controls,
	transformControl;

init();
animate();

function init() {
	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(75, (window.innerWidth - 150) / window.innerHeight, 0.1, 10000);
	camera.position.z = 500;
	camera.position.x = 0;
	camera.position.y = 0;

	renderer = new THREE.WebGLRenderer({
		antialias: true
	});
	renderer.setSize(window.innerWidth - 150, window.innerHeight);
	renderer.setClearColor(0xf0f0f0);
	renderer.shadowMapEnabled = true;
	document.getElementById('canvas').appendChild(renderer.domElement);

	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.enableDamping = true;
	controls.dampingFactor = 0.25;
	controls.enableZoom = false;
	
	transformControl=new THREE.TransformControls(camera,renderer.domElement);
	transformControl.addEventListener('change',animate);
	scene.add(transformControl);

	var light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(1, 1, 1);
	light.castShadow = true;
	scene.add(light);

	light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(-1, -1, -1);
	light.castShadow = true;
	scene.add(light);

	light = new THREE.SpotLight(0xffffff, 1, 800, 60, 30, 10);
	scene.add(light);

	var geometry = new THREE.PlaneBufferGeometry(1000, 1000);
	geometry.rotateX(-Math.PI / 2);
	var material = new THREE.MeshBasicMaterial({
		color: 0xe0e0e0,
		overdraw: 0.5,
	});
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.y = -100;
	mesh.receiveShadow = true;
	scene.add(mesh);

	window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
	camera.aspect = (window.innerWidth - 150) / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth - 150, window.innerHeight);
	render();
}

function animate() {
	requestAnimationFrame(animate);

	render();
}

function render() {
	transformControl.update();
	renderer.render(scene, camera);
}