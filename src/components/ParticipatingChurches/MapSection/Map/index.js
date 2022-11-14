import React, { useState, useMemo } from "react"
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"
import { MapContainer, ChurchName, ChurchAddress } from "./MapElements"
import { Marker, InfoWindow } from "@react-google-maps/api"

const containerStyle = {
  width: "70vw",
  height: "70vh",
}

const center = {
  lat: 49.8954,
  lng: -97.1385,
}

function MyComponent({ markers }) {
  const [activeMarker, setActiveMarker] = useState(null)
  const handleActiveMarker = marker => {
    if (marker === activeMarker) {
      return
    }
    setActiveMarker(marker)
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    map.setZoom(4.5)
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
        zoom={6}
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
                  {m.churchLink ? (
                    <a href={m.churchLink.url} target="_blank" rel="noreferrer">
                      <ChurchName
                        dangerouslySetInnerHTML={{ __html: m.churchName }}
                      />
                    </a>
                  ) : (
                    <ChurchName
                      dangerouslySetInnerHTML={{ __html: m.churchName }}
                    />
                  )}

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
