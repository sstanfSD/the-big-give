import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import EmbedSocialWidget from "./Widget"

import {
  Section,
  Container,
  Heading,
  BtnContainer,
  SocialContainer,
  IconsContainer,
  Icon,
  IconBg,
} from "./SocialMediaElements"
import { BtnPrimaryLink } from "../../Buttons"

const index = () => {
  return (
    <Section>
      <Container>
        <SocialContainer>
          <IconsContainer>
            <a
              href="https://www.instagram.com/the.big.give/ "
              target="_blank"
              rel="noreferrer"
            >
              <Icon>
                <StaticImage
                  src="../../../assets/images/home/instagram.png"
                  alt="Instagram"
                  quality={100}
                />
                <IconBg />
              </Icon>
            </a>
            <a
              href="https://www.facebook.com/thebiggivedotca"
              target="_blank"
              rel="noreferrer"
            >
              <Icon>
                <StaticImage
                  src="../../../assets/images/home/facebook.png"
                  alt="Facebook"
                  quality={100}
                />

                <IconBg />
              </Icon>
            </a>
            <a
              href="https://www.youtube.com/@thebiggivecanada8174"
              target="_blank"
              rel="noreferrer"
            >
              <Icon>
                <StaticImage
                  src="../../../assets/images/home/youtube.png"
                  alt="Youtube"
                  quality={100}
                />
                <IconBg />
              </Icon>
            </a>
          </IconsContainer>
        </SocialContainer>
      </Container>
    </Section>
  )
}

export default index
