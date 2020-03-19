/*
	* Web-IO 4.0: MQTT WebSocket example
	*/

/* Updates the CSS class of an DOM element */
function UpdateElement(ioname, displayClass){
	var cell = document.getElementById(ioname);
	if (cell){
		cell.className = displayClass;
	}
	}

	/* Toggles an input in the web interfaces and
	* initiates an MQTT publish */
function ToggleOutput(ioname){
	var cell = document.getElementById(ioname);
	switch (cell.className){
	case "on":
		var message = new Paho.MQTT.Message("OFF");
		message.destinationName = "webio/" + ioname + "/set";
		mqttClient.send(message);
		cell.className = "set_off";
		break;
	case "off":
		var message = new Paho.MQTT.Message("ON");
		message.destinationName = "webio/" + ioname + "/set";
		mqttClient.send(message);
		cell.className = "set_on";
		break;
	default:
		cell.className = "unknown";
		break;
	}

};

/* Adds an Click-Event-Listener to a table cell, so that after
	* a click the element can is toggeled */
function EnableToggle(ioname){
		var cell = document.getElementById(ioname)
		if (cell){
			cell.addEventListener("click",
				function(){
				ToggleOutput(ioname)
			},
				true);
		}
	}

/*Initialize elements that can be toggled my by click*/
EnableToggle("output0");
EnableToggle("output1");