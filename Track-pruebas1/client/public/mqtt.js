/*
	* MQTT-WebClient example for Web-IO 4.0
*/
//var hostname = "m21.cloudmqtt.com";
var hostname = "ioticos.org"
//var port = 37719;
//var port = 1883;
var port = 8094;
var clientId = "cliente";
clientId += new Date().getUTCMilliseconds();
var username = "vWOCdJJAVrNGHSA";
var password = "NVwuV6Vpe2Xhrou";
var subscription = "XQ1e2ChibMroTao";

mqttClient = new Paho.MQTT.Client(hostname, port, clientId);

mqttClient.onMessageArrived = MessageArrived;
mqttClient.onConnectionLost = ConnectionLost;
Connect();

/*Initiates a connection to the MQTT broker*/
function Connect(){
	mqttClient.connect({
	onSuccess: Connected,
	onFailure: ConnectionFailed,
	keepAliveInterval: 10,
	userName: username,
	useSSL: true,
	password: password});
}

/*Callback for successful MQTT connection */
function Connected() {
	console.log("Conectado");
	mqttClient.subscribe(subscription);
}

/*Callback for failed connection*/
function ConnectionFailed(res) {
	console.log("Conexion fallida: " + res.errorMessage);
}

/*Callback for lost connection*/
function ConnectionLost(res) {
	if (res.errorCode !== 0) {
		console.log("Conexion perdida: " + res.errorMessage);
		Connect();
	}
}

/*Callback for incoming message processing */
function MessageArrived(message) {
	var topic=message.destinationName;
	var payload = message.payloadString;
	console.log(topic +" : " + payload);
	var JSONstring =JSON.parse(payload);
	var rcamion=JSONstring.camion;

	console.log(rcamion)
	window.menss = '{\"camion\":\"c1\",\"latitud\":\"28.6411743\",\"longitud\":\"-106.1482086\"}';
	

	switch(message.payloadString){
		case "ON":
			displayClass = "on";
			break;
		case "OFF":
			displayClass = "off";
			break;
		default:
			displayClass = "unknown";
	}
	var topic = message.destinationName.split("/");
	if (topic.length == 3){
		var ioname = topic[1];
		UpdateElement(ioname, displayClass);
	}
}