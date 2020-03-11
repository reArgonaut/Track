import React, { Component, Fragment } from "react";

import { BrowserRouter as Router, Route } from 'react-router-dom'
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
            latitud:0,
            longitud:0
        }
         }
         componentDidMount() {
            setInterval(() => {this.changeCoor() }, 1000)
       }
         changeCoor(){
            this.setState({
                latitud:parseFloat(window.lat) ,
                longitud:parseFloat(window.lon),
                
            })
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