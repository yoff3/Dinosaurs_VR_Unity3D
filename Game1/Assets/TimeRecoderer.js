#pragma strict

var worldT : Transform[];
private var count : int = 0;
private var arraySize : int = 0;
private var timeIsStopped : boolean;



function Update () 
{
		
	if (!timeIsStopped && worldT.Length < 200){
		arraySize++;
		System.Array.Resize.<Transform>(worldT, worldT.length + 1);
		for (var i : int = 0; i < worldT.Length; i++)
		{
			var tempTransform = new GameObject();
			var vectorPosition : Vector3 = transform.position;
			var vectorRotation : Quaternion = transform.rotation;
			tempTransform.transform.position = vectorPosition;
			tempTransform.transform.rotation = vectorRotation;
			worldT[count] = tempTransform.transform;	
		}
	count++;
	}
	if (arraySize > 200) 
		timeIsStopped = true;
	if (timeIsStopped)
	{
		transform.position = worldT[count].position;
		transform.rotation = worldT[count].rotation;
	}
	
	if (Input.GetKeyDown(KeyCode.T))
		timeIsStopped = !timeIsStopped;
}


function OnGUI (){
	count = GUI.HorizontalSlider(Rect (25, 25, 100, 30), count, 0.0, 200);
}