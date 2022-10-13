import React from "react"
import { BtnPrimary } from "../../Buttons"

import { Section, Container, TextContainer, Heading, Body } from "./CTAElements"

const CTA = () => {
  return (
    <Section>
      <Container>
        <TextContainer>
          <Heading>Ready to register?</Heading>
          <Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Body>
          <BtnPrimary large to={"/"} text={"register your church"} />
        </TextContainer>
      </Container>
    </Section>
  )
}

export default CTA
