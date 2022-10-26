import React, { useEffect, useState } from "react"

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

import Video from "./Video/index"

import headingBg from "../../../assets/images/home/HeadingBgWhite.png"
import dateBg from "../../../assets/images/home/HeadingBgBlack.png"

const Header = ({ date }) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    // clean up code
    window.removeEventListener("scroll", onScroll)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <Section>
      <Container>
        <TextContainer>
          <HeadingContainer>
            <HeadingBg>
              <img src={headingBg} />
            </HeadingBg>
            <Heading>
              A gift opens the door. <br />
              Jesus does the rest.
            </Heading>
          </HeadingContainer>
          <DateContainer>
            <DateBg>
              <img src={dateBg} />
            </DateBg>

            <Date>{date}</Date>
          </DateContainer>
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
