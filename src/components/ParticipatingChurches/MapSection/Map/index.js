import React, { useState, useMemo } from "react"
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"
import { MapContainer, ChurchName, ChurchAddress } from "./MapElements"
import { Marker, InfoWindow } from "@react-google-maps/api"

const containerStyle = {
  width: "70vw",
  height: "70vh",
}

const center = {
  lat: 44.64881,
  lng: -77.121505,
}

const zoom = 6

function MyComponent({ markers }) {
  console.log(markers)

  const [activeMarker, setActiveMarker] = useState(null)
  const handleActiveMarker = marker => {
    if (marker === activeMarker) {
      return
    }
    setActiveMarker(marker)
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCIAPG8Kpuq_dM_---QwIgq7nvwkqIXdTA",
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <MapContainer>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={() => setActiveMarker(null)}
      >
        {markers.marker.map((m, i) => (
          <Marker
            key={i}
            position={JSON.parse(
              JSON.stringify({
                lat: m.latitude,
                lng: m.longitude,
              })
            )}
            onClick={() => handleActiveMarker(i)}
          >
            {activeMarker === i ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div>
                  <ChurchName>{m.churchName}</ChurchName>
                  <br />
                  <ChurchAddress>{m.churchAddress}</ChurchAddress>
                </div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
      </GoogleMap>
    </MapContainer>
  ) : (
    <></>
  )
}

export default React.memo(MyComponent)
