import React from "react"

import { Section, Container, MapContainer, Heading } from "./MapSectionElements"

import Map from "./Map"
import {useTranslation} from "gatsby-plugin-react-i18next"

const MapSection = ({ markers }) => {

  const {t} = useTranslation()

  const year = new Date()

  return (
    <Section>
      <Container>
        <Heading>{t("nav.church")}</Heading>
        <MapContainer>
          <Map markers={markers} />
        </MapContainer>
      </Container>
    </Section>
  )
}

export default MapSection