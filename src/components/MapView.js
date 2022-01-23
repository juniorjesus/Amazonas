import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react';
import {Button } from 'react-bootstrap';


function MapView(posicion1) {
  let posicionIni = "";
        posicion1.history.location.posicion1 ?
        posicionIni = posicion1.history.location.posicion1
          :
          posicionIni = { center: {
            lat:0,
            lng:0,
          },
          zoom: 0
        }
          const [posicion, setPosicion] = useState(posicionIni);
            useEffect(() => {
              posAct()
            }, [])

            const posAct = () => {          
            navigator.geolocation.getCurrentPosition(
              function (position) {
                setPosicion({
                  center: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                  },
                  zoom: 15
                });
              },
              function (error) {
                console.error("Error Code = " + error.code + " - " + error.message);
              },
              {
                enableHighAccuracy: true,
               }
               );
              }
    const  _onClick = ({x, y, lat, lng, event}) => {
      
      console.log(x, y, lat, lng, event)
      setPosicion({
        center: {
          lat: lat,
          lng: lng,
        },
        zoom: 15
      });
    }

    const Marker = props => {
      return <>
        <div className="pin"></div>
        <div className="pulse"></div>
      </>
    }

    return (
      
        <div className='animate__animated animate__fadeIn animate__faster'>
        <div style={{ height: '70vh', width: '130vh', display: 'flex', margin: "5rem auto", border:"5px solid" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyAVJ8ohZk2QG-3vHyrUMTwih-e87uRrcGU" }}
          defaultCenter={posicion.center}
          defaultZoom={posicion.zoom}
          yesIWantToUseGoogleMapApiInternals={true}
          onClick={_onClick}
        >

        <Marker lat={posicion.center.lat} lng={posicion.center.lng} />    
        </GoogleMapReact>
      </div>
      <Button
      onClick={posAct}
                style={{ marginLeft:"480px",width:"330px", height:"50px"  }}
                 variant="success"
                 type="button">
                    Editar Registro
                </Button>
 </div>

    )
}

export default MapView
