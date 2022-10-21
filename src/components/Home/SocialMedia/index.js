import React from "react"
import EmbedSocialWidget from "./Widget"

import {
  Section,
  Container,
  Heading,
  BtnContainer,
} from "./SocialMediaElements"
import { BtnPrimary } from "../../Buttons"

const index = () => {
  return (
    <Section>
      <Container>
        <Heading>See our work on social media</Heading>

        <EmbedSocialWidget refId="d92dcbe74f730552b8a9dd4325fdf089cd2d91de" />

        <BtnContainer>
          <BtnPrimary to={"/big-stories"} text={"read full stories"} large />
        </BtnContainer>
      </Container>
    </Section>
  )
}

export default index
