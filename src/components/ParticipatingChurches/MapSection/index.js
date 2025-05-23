import React from "react"

import { Section, Container, MapContainer, Heading } from "./MapSectionElements"

import Map from "./Map"

const MapSection = ({ markers }) => {
  const year = new Date()

  return (
    <Section>
      <Container>
        <Heading>Participating Churches 2025</Heading>
        <MapContainer>
          <Map markers={markers} />
        </MapContainer>
      </Container>
    </Section>
  )
}

export default MapSection
