import React from "react"
import { BtnPrimary } from "../../Buttons"

import { Section, Container, TextContainer, Heading, Body } from "./CTAElements"

const CTA = ({ toggle }) => {
  return (
    <Section>
      <Container>
        <TextContainer>
          <Heading>Ready to register?</Heading>
          <Body>
            Join us on the last Saturday of June and see what happens in your
            town.
          </Body>
          <BtnPrimary large toggle={toggle} text={"register your church"} />
        </TextContainer>
      </Container>
    </Section>
  )
}

export default CTA
