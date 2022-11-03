import React from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk";

function ContactMap(){
  return (
    <div className="contact_us_map">
      <Map center={{lat: 37.555211497208866,lng: 126.93335808151431}} style={{width: "100%",height: "100%"}}>
        <MapMarker position={{lat: 37.555211497208866,lng: 126.93335808151431}}>
          {/* <div style={{color:"#000"}}>PITAPAT</div> */}
        </MapMarker>
      </Map>
    </div>
  )
}

export default ContactMap;