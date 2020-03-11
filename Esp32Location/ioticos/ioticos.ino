#include <ArduinoJson.h>
#include <WiFi.h>
#include <PubSubClient.h>
 #include <WifiLocation.h>

//**************************************
//*********** MQTT CONFIG **************
//**************************************

/*
const char *mqtt_server = "ioticos.org";
const int mqtt_port = 1883;
const char *mqtt_user = "vWOCdJJAVrNGHSA";
const char *mqtt_pass = "NVwuV6Vpe2Xhrou";
const char *root_topic_subscribe = "XQ1e2ChibMroTao/input";
const char *root_topic_publish = "XQ1e2ChibMroTao/output"; */

const char *mqtt_server = "35.235.119.114";
const int mqtt_port = 1883;
const char *mqtt_user = "Memo";
const char *mqtt_pass = "12345";
const char *root_topic_subscribe = "sus";
const char *root_topic_publish = "prueba";

const char* googleApiKey = "AIzaSyA2tBmbglm9Myu6wvaMCsn0AYqKJNBe1Xo";

int pinLedR = 21;  // pin Rojo del led RGB
int pinLedV = 19  ;  // pin Verde del led RGB
int pinLedA = 18;  // pin Azul del led RGB

String latitud  = "";
String longitud = "";
String exac     = "";

//**************************************
//*********** WIFICONFIG ***************
//**************************************
//const char* ssid = "INFINITUMsktg";
//const char* password =  "3d8d1806f8";

//const char* ssid = "UTCH MOVIL";
//const char* password =  "";
const char* ssid = "HUAWEI P9 lite";
const char* password =  "ccfc5ca89798";


//**************************************
//*********** GLOBALES   ***************
//**************************************
WiFiClient espClient;
PubSubClient client(espClient);

char msg[100];
long count=0;


//************************
//** F U N C I O N E S ***
//************************
void callback(char* topic, byte* payload, unsigned int length);
void reconnect();
void setup_wifi(); 

void setup() {
  Serial.begin(115200);

  pinMode(pinLedR, OUTPUT);    // pone el pinLedR como output
  pinMode(pinLedV, OUTPUT);    // pone el pinLedV como output
  pinMode(pinLedA, OUTPUT);    // pone el pinLedA como output
  
  setup_wifi();
  client.setServer(mqtt_server, mqtt_port);
  client.setCallback(callback);
}

void loop() {
    WifiLocation location(googleApiKey);
    location_t loc = location.getGeoFromWiFi();
    digitalWrite(pinLedV, LOW);
    Serial.println("Location request data");
    digitalWrite(pinLedA, HIGH);
    Serial.println(location.getSurroundingWiFiJson());
    Serial.println("Latitud     : " + String(loc.lat, 7));
    Serial.println("Longitud: " + String(loc.lon, 7));
    Serial.println("Exactitud: " + String(loc.accuracy));


    latitud= String(loc.lat, 7);
    longitud = String(loc.lon, 7);
    exac =  String(loc.accuracy);
  
  StaticJsonDocument<300> JSONbuffer;
  //JsonObject& JSONencoder = JSONbuffer.createObject();
  DynamicJsonDocument JSONencoder(1024);
  JSONencoder["camion"] = "c1";
  JSONencoder["latitud"] = latitud;
  JSONencoder["longitud"] = longitud;

  /*  JsonArray& values = JSONencoder.createNestedArray("values"); //Para crear un arreglo en el objeto
   *   Aqui se insertan valores al arreglo
   *   values.add(20);
   *   values.add(21);
   *   values.add(23);
   */
  if (!client.connected()) {
		reconnect();
	}

  if (client.connected()){
    /*
     * String str = "La cuenta es -> " + String(count);
    str.toCharArray(msg,25);
    client.publish(root_topic_publish,msg);
    count++;
    delay(3000);
    */
    
  char JSONmessageBuffer[100];
  char buffer[512];
  serializeJson(JSONencoder, buffer);
  Serial.println("  Enviando mensaje al topic..");
  client.publish(root_topic_publish,buffer);
  
  Serial.println("Mensaje enviado exitosamente");
  Serial.println("-------------");
  delay(5000);    
  }
  
    
    
  
  client.loop();
}




//*****************************
//***    CONEXION WIFI      ***
//*****************************
void setup_wifi(){
	delay(10);
	// Nos conectamos a nuestra red Wifi
	Serial.println();
	Serial.print("Conectando a ssid: ");
	Serial.println(ssid);

	WiFi.begin(ssid, password);

	while (WiFi.status() != WL_CONNECTED) {
    digitalWrite(pinLedR, HIGH);
		delay(800);
    digitalWrite(pinLedR, LOW);
    delay(400);
		Serial.print(".");
	}

  digitalWrite(pinLedR, LOW);
	Serial.println("");
	Serial.println("Conectado a red WiFi!");
	Serial.println("Direcci�n IP: ");
	Serial.println(WiFi.localIP());
  digitalWrite(pinLedV, HIGH);
}



//*****************************
//***    CONEXION MQTT      ***
//*****************************

void reconnect() {

	while (!client.connected()) {
		Serial.print("Intentando conexi�n Mqtt...");
		// Creamos un cliente ID
		String clientId = "IOTICOS_H_W_";
		clientId += String(random(0xffff), HEX);
		// Intentamos conectar
		if (client.connect(clientId.c_str(),mqtt_user,mqtt_pass)) {
			Serial.println("Conectado!");
			// Nos suscribimos
			if(client.subscribe(root_topic_subscribe)){
        Serial.println("Suscripcion ok");
      }else{
        Serial.println("fallo Suscripcii�n");
      }
		} else {
			Serial.print("fall� :( con error -> ");
			Serial.print(client.state());
			Serial.println(" Intentamos de nuevo en 5 segundos");
			delay(5000);
		}
	}
}


//*****************************
//***       CALLBACK        ***
//*****************************

void callback(char* topic, byte* payload, unsigned int length){
	String incoming = "";
	Serial.print("Mensaje recibido desde -> ");
	Serial.print(topic);
	Serial.println("");
	for (int i = 0; i < length; i++) {
		incoming += (char)payload[i];
	}
	incoming.trim();
	Serial.println("Mensaje -> " + incoming);

}
