import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React, {Component} from 'react';
import  {Marker}  from 'react-native-maps';
import { db } from './config';
import NavigationBar from 'react-native-navbar';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const styless = {
  container: {
  flex: 1,
  backgroundColor:"red",
  },
  
};
const rightButtonConfig = {
  title: 'Tiempo',
  handler: () => alert('Tu camion llegara en 5 min!'),
};


const titleConfig = {
  title: 'Trackabus',
};
const styles = StyleSheet.create({
 container: {
   backgroundColor:"grey",
  position: 'absolute',
  top:0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'flex-end',
  alignItems: 'center',
 },
 conainer2:{
  position: 'absolute',
  top: 0,
  flex: 1,
  backgroundColor:"red",
 },
 map: {
  position: 'absolute',
  top: 40,
  left: 10,
  right: 10,
  bottom: 10,
 },
})
const { width, height } = Dimensions.get('window');
const LATITUDE_DELTA = 0.01;
const ASPECT_RATIO = width / height;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
window.lat=0;
window.lon=0;


export default class App extends Component {
  
 state = {
    latitud: 0,
    longitud: 0,
    region: {
      latitude: 28.6411935,
      longitude: -106.1481462,
      latitudeDelta: 0.003,
      longitudeDelta: 0.003,
    },
    markers:
    [
      
     
    ]
  }

  componentDidMount() {
    setInterval(() => {
    db.ref('react').on('value',(snapshot)=> {
      const userObj = snapshot.val();     
      window.lat=userObj.latitud;
      window.lon=userObj.longitud;
  });
    this.setState({
      latitud:window.lat,
      longitud:window.lon
    })
        }, 100);
}


shouldComponentUpdate() {return true
}
  render(){
    
    var lati =this.state.latitud;
        var longi =this.state.longitud;
    return(
     
<>
      
      <NavigationBar
        title={titleConfig}         
        rightButton={rightButtonConfig}
      />

       <MapView
              
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}     
       region={ this.state.region } 
     >
      <Marker
        title= 'Camión'
        description= 'En curso !'
        coordinate={{latitude:lati, 
                    longitude:longi}}
        
        image={require('./bus_application_transportation_2930.png')}
      /> 
     </MapView>
      </>
    )
  }
   
};