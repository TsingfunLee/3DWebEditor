var translateButton = document.getElementById('translate');
var rotateButton = document.getElementById('rotate');
var scaleButton = document.getElementById('scale');

translateButton.addEventListener('click',function(){
	transformControl.attach(currentObject);
	transformControl.setMode("translate");
},false);

rotateButton.addEventListener('click',function(){
	transformControl.attach(currentObject);
	transformControl.setMode("rotate");
},false);

scaleButton.addEventListener('click',function(){
	transformControl.attach(currentObject);
	transformControl.setMode("scale");
},false);