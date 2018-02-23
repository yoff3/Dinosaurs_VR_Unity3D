#pragma strict


var worldT : GameObject[];


function Start (){

	var objects = FindObjectsOfType(GameObject);
	var world = new Array();
	for (var object : GameObject in objects){
		if (object.tag == "world"){
			world.Add(object);
		}
	}
	worldT = world;
}


