import React, { Component, Fragment } from "react";

import { BrowserRouter as Router, Route } from 'react-router-dom'

import * as firebase from 'firebase';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";


    
function refreshPage() {
    window.location.reload(false);
  }
 

class Mapa extends Component{
    
    
    static defaultProps = {    googleMapURL: "https://maps.googleapis.com/maps/api/js" }                                                          
    constructor(props) {
           super(props)
           this.state={
            latitud:window.lat,
            longitud:window.lon
        }
         }
         componentDidMount() {
           setInterval(() => {this.changeCoor() }, 1000)
           console.log( window.lat );
           
       }
         changeCoor(){
             this.setState({
                latitud:window.lat,
                longitud:window.lon
             })
             const rootRef = firebase.database().ref().child('react');
             
             const latiRef = rootRef.child('latitud');
             const lonRef = rootRef.child('longitud');
             rootRef.update({'latitud': parseFloat(this.state.latitud) })
             rootRef.update({'longitud': parseFloat(this.state.longitud) })
        //      latiRef.on('value', snap =>{
        //          this.setState({
        //         latitud:snap.val()
        //     })
        //      })
        //      lonRef.on('value', snap =>{
        //         this.setState({
        //        longitud:snap.val()
        //    })
        //     })
            
        }
    CMap = withScriptjs(withGoogleMap(props =>
        <GoogleMap  defaultZoom={18} defaultCenter={{ lat: 28.6411743, lng: -106.14821 }} >
            {props.children}
        </GoogleMap>  ));
        

    render() {
        var lati =this.state.latitud;
        var longi =this.state.longitud;
            return (
                
                <Fragment>
                    <div>pepe {lati}</div>
                    <div>pepe {longi}</div>
                    <this.CMap
                        googleMapURL={this.props.googleMapURL}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `700px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        center= {{ lat: 25.03, lng: 121.6 }} >
                        <Marker position= {{ lat: lati,    lng: longi     }} />
                    </this.CMap>
                </Fragment>);
                
            
}}
export default Mapa;