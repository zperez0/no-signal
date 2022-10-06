import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import "../UI/Maps.css"

const MapControl = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />
}

const Map = () => {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), [])


  return (
    <GoogleMap 
  zoom={10} 
  center={center} 
  mapContainerClassName="map-container" >
  <Marker positon={{ lat: 44, lng: -88 }} />
  </GoogleMap>
  )
}

export default MapControl