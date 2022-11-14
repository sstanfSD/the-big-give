import React from "react"

import {
  Section,
  Container,
  MapContainer,
  MapIframe,
} from "./MapSectionElements"

import Map from "./Map"

const MapSection = ({ markers }) => {
  console.log(markers)
  return (
    <Section>
      <Container>
        <MapContainer>
          <Map markers={markers} />
        </MapContainer>
      </Container>
    </Section>
  )
}

export default MapSection
