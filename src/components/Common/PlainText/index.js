import React from "react"

import { Section, Container, TextContainer } from "./PlainTextElements"

const PlainText = ({ children }) => {
  return (
    <Section>
      <Container>
        <TextContainer>{children}</TextContainer>
      </Container>
    </Section>
  )
}

export default PlainText
