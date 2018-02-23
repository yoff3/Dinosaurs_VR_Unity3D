using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class spin : MonoBehaviour {

    public GameObject cameraObject;                                     // Камера

    private bool first;
    private float time;
    private Vector3 cameraPosition;
    private bool cameraReturn;

    // Use this for initialization
    void Start () {
        first = true;
	    cameraReturn = false;
        time = 0f;
        cameraPosition = new Vector3 (-60, 70, -130);      	
    }

    // Update is called once per frame
    void Update () {
        if (!first && time < 10f)
	    {
	    	cameraObject.transform.RotateAround(cameraPosition, Vector3.up, -20f * Time.deltaTime);
	    	time += Time.deltaTime;
            Debug.Log("rotate");
	    }	
	    else if (!first && time >= 10f && !cameraReturn)
	    {
	    	cameraObject.transform.position = cameraPosition;
	    	cameraReturn = true;
            Debug.Log("stop rotate");
        }
    }	

    public void lalkafunction()
       {
	    if (first)
	    {
	    	cameraObject.transform.position += new Vector3 (-60, 70, -260);
	    	first = false;
            Debug.Log(cameraObject.transform.position);
        }
	    Debug.Log("hello");
    }
}