import React from "react"

import { Section, Container, MapContainer, Heading } from "./MapSectionElements"

import Map from "./Map"

const MapSection = ({ markers }) => {
  console.log(markers)
  return (
    <Section>
      <Container>
        <Heading>Churches that participated in 2022</Heading>
        <MapContainer>
          <Map markers={markers} />
        </MapContainer>
      </Container>
    </Section>
  )
}

export default MapSection
