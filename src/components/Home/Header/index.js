import React, { useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

import {
  Section,
  Container,
  TextContainer,
  HeadingContainer,
  HeadingBg,
  Heading,
  DateContainer,
  DateBg,
  Date,
  VideoContainer,
  VideoWrapper,
} from "./HeaderElements"

import { BtnPrimaryExternal } from "../../Buttons"

import Video from "./Video/index"

import headingBg from "../../../assets/images/home/HeadingBgWhite.png"
import dateBg from "../../../assets/images/home/HeadingBgBlack.png"

const Header = ({ date, toggleModal }) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    // clean up code
    window.removeEventListener("scroll", onScroll)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  console.log(toggleModal)

  return (
    <Section>
      <Container>
        <TextContainer>
          <HeadingContainer>
            {/* <HeadingBg>
              <StaticImage
                src={"../../../assets/images/home/HeadingBgWhite.png"}
                alt="Heading background"
                loading="eager"
                objectFit="fill"
              />
            </HeadingBg> */}
            <Heading>Outreach is easy when it starts with GIVING</Heading>
          </HeadingContainer>
          <DateContainer>
            {/* <DateBg>
              <StaticImage
                src={"../../../assets/images/home/HeadingBgBlack.png"}
                alt="Date backgroud"
                loading="eager"
              />
            </DateBg> */}

            <Date>{date}</Date>
          </DateContainer>

          <BtnPrimaryExternal
            // toggle={toggleModal}
            text="REGISTER TODAY"
            to="http://weblink.donorperfect.com/Registration_TheBigGive_2025"
            large
          />
        </TextContainer>
        <VideoContainer>
          <VideoWrapper offset={offset}>
            <Video />
          </VideoWrapper>
        </VideoContainer>
      </Container>
    </Section>
  )
}

export default Header
