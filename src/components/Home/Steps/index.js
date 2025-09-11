import React, { useState, useEffect, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import {
  Section,
  Container,
  StepsContainer,
  Step,
  TextContainer,
  Image,
  ImagesContainer,
  MobileImageContainer,
  MobileImage,
} from "./StepsElements"

import { BtnPrimaryExternal, BtnPrimary } from "../../../components/Buttons"

const Steps = ({ toggle, date }) => {
  //SCROLL ANIMATION

  const [imageOneVisible, setImageOneVisible] = useState(true)
  const [imageTwoVisible, setImageTwoVisible] = useState(false)
  const [imageThreeVisible, setImageThreeVisible] = useState(false)

  const stepOneRef = useRef()
  const stepTwoRef = useRef()
  const stepThreeRef = useRef()

  const scrollHandler = () => {
    if (
      stepOneRef.current.getBoundingClientRect().y +
        stepTwoRef.current.getBoundingClientRect().y >
      0
    ) {
      setImageOneVisible(true)
      setImageTwoVisible(false)
      setImageTwoVisible(false)
    }

    if (
      stepOneRef.current.getBoundingClientRect().y +
        stepTwoRef.current.getBoundingClientRect().y <
      0
    ) {
      setImageOneVisible(false)
      setImageTwoVisible(true)
      setImageThreeVisible(false)
    }

    if (
      stepTwoRef.current.getBoundingClientRect().y +
        stepThreeRef.current.getBoundingClientRect().y <
      0
    ) {
      setImageOneVisible(false)
      setImageTwoVisible(false)
      setImageThreeVisible(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true)
    return () => {
      window.removeEventListener("scroll", scrollHandler, true)
    }
  }, [])

  return (
    <Section>
      <Container>
        <StepsContainer>
          <Step id="step-1" ref={stepOneRef}>
            <TextContainer>
              <div>
                <h2>Step 1</h2>
                <p>
                  Understand what the Big Give is by reading our{" "}
                  <Link to="/the-big-give-agreement">church agreement</Link> and{" "}
                  <Link to="/statement-of-faith">statement of faith</Link> and
                  register your church.
                </p>
                <BtnPrimaryExternal
                  text={"register your church"}
                  to="http://weblink.donorperfect.com/Registration_TheBigGive_2025"
                  large
                />
                {/* <BtnPrimary text="register your church" toggle={toggle} large /> */}
              </div>
            </TextContainer>
            <MobileImageContainer>
              <MobileImage id="step-1-image">
                <StaticImage
                  src="../../../assets/images/steps/step-1.jpg"
                  alt="step 1"
                />
              </MobileImage>
            </MobileImageContainer>
          </Step>
          <Step id="step-2" ref={stepTwoRef}>
            <TextContainer>
              <div>
                <h2>Step 2</h2>
                <p>
                  Gather a team at your church to dream and pray over your plans
                  for {date}.{" "}
                </p>
              </div>
            </TextContainer>
            <MobileImageContainer>
              <MobileImage id="step-2-image">
                <StaticImage
                  src="../../../assets/images/steps/step-2.jpg"
                  alt="step 2"
                />
              </MobileImage>
            </MobileImageContainer>
          </Step>
          <Step id="step-3" ref={stepThreeRef}>
            <TextContainer>
              <div>
                <h2>Step 3</h2>
                <p>
                  Pray some more and prepare for the big day using our{" "}
                  <Link to="/get-involved#resources">free resources</Link>.
                </p>
                <BtnPrimaryExternal
                  text={"register your church"}
                  to="http://weblink.donorperfect.com/Registration_TheBigGive_2025"
                  large
                />
                {/* <BtnPrimary text="register your church" toggle={toggle} large /> */}
              </div>
            </TextContainer>
            <MobileImageContainer>
              <MobileImage id="step-3">
                <StaticImage
                  src="../../../assets/images/steps/step-3.jpg"
                  alt="step 1"
                />
              </MobileImage>
            </MobileImageContainer>
          </Step>
        </StepsContainer>
        <ImagesContainer>
          {imageOneVisible && (
            <Image id="step-1-image">
              <StaticImage
                src="../../../assets/images/steps/step-1.jpg"
                alt="step 1"
              />
            </Image>
          )}

          {imageTwoVisible && (
            <Image id="step-2-image">
              <StaticImage
                src="../../../assets/images/steps/step-2.jpg"
                alt="step 2"
              />
            </Image>
          )}

          {imageThreeVisible && (
            <Image id="step-3">
              <StaticImage
                src="../../../assets/images/steps/step-3.jpg"
                alt="step 1"
              />
            </Image>
          )}
        </ImagesContainer>
      </Container>
    </Section>
  )
}

export default Steps
