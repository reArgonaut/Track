/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import MapView, {PROVIDER_GOOGLE}  from 'react-native-maps';
import  {Marker}  from 'react-native-maps';
import React, {Component} from 'react';
import { db } from './config';

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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const { width, height } = Dimensions.get('window');
const LATITUDE_DELTA = 0.01;
const ASPECT_RATIO = width / height;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class App extends Component {

    constructor(props) {
    super(props);
  this.state = {
    region: {
      latitude: 28.6411935,
      longitude: -106.1481462,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO,
    },
markers:
    [
      {
        latitude: 28.6411935,
      longitude: -106.1481462,
      title: 'HOLA',
      description: 'hola'
      },
      {}
    
    ],
  };
  }
  
  componentDidMount() {

    db.ref('/react/').once('value').then(function(snapshot) {
        userData = snapshot.val()
     const nueva = {
        latitude: userData.latitud,
        longitude: userData.longitud,
        title: "nuevo",
        description: "description",
      };
       console.log('soy el objeto', nueva)
      this.setState({markers: this.state.markers.push(nueva)}); 
     
      });
    
      
    
  };
  render(){
  return (
    <>
    <View style={styles.container}>
    <MapView
    provider= {PROVIDER_GOOGLE}
    style={styles.map}
     region= {this.state.region }
     >
      {this.state.markers.map(marker => (
    <Marker
      latitude= {marker.latitude}
      longitude= {marker.longitude}
      title={marker.title}
      description={marker.description}
    />
  ))}
   </MapView>
  </View>
  </>
  );
}
};