import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  Section,
  Container,
  TextContainer,
  TextBg,
  TextContent,
  Heading,
  Body,
  ImageContainer,
  TopRow,
  BottomRow,
} from "./HeaderElements"

import { BtnPrimaryExternal, BtnPrimaryBlue, BtnPrimary } from "../../Buttons"

import bg from "../../../assets/images/about/header/text-bg-png.png"
import {useTranslation} from "gatsby-plugin-react-i18next"

const Header = ({ header, toggle }) => {

  const {t} = useTranslation()

  return (
    <Section>
      <Container>
        <TextContainer>
          <TextBg>
            <img src={bg} alt="white background image" />
          </TextBg>
          <TextContent>
            <Heading>{t("about.page.title")}</Heading>
            {/* <Body dangerouslySetInnerHTML={{ __html: header.body }} /> */}
            <Body>
              <p>{t("about.hero.intro")}</p>
              <p>{t("about.testimonial.quote")}</p>
              <p>{t("about.cta.text")}</p>
            </Body>

            {/* <div style={{ marginBottom: "2rem" }}>
              {header.redButton && (
                <BtnPrimary text={header.redButtonText} toggle={toggle} />
              )}
            </div> */}
            <BtnPrimaryExternal
              text={t("about.cta.button")}
              to="http://weblink.donorperfect.com/Registration_TheBigGive_2025"
              minWidth={true}
            />

            {header.blueButton && (
              <BtnPrimaryBlue
                to={header.blueButtonLink}
                text={header.blueButtonText}
              />
            )}
          </TextContent>
        </TextContainer>
        <ImageContainer>
          <TopRow>
            <GatsbyImage
              image={header.images[0].localFile.childImageSharp.gatsbyImageData}
              alt={header.images[0].altText}
            />
            <GatsbyImage
              image={header.images[1].localFile.childImageSharp.gatsbyImageData}
              alt={header.images[1].altText}
            />
          </TopRow>

          <BottomRow>
            <GatsbyImage
              image={header.images[2].localFile.childImageSharp.gatsbyImageData}
              alt={header.images[2].altText}
            />
            <GatsbyImage
              image={header.images[3].localFile.childImageSharp.gatsbyImageData}
              alt={header.images[3].altText}
            />
          </BottomRow>
        </ImageContainer>
      </Container>
    </Section>
  )
}

export default Header
