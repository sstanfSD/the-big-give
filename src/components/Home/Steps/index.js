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
import {useTranslation} from "gatsby-plugin-react-i18next"

const Steps = ({ toggle, date }) => {

  const {t} = useTranslation()

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
                <h2>{t("step1.title")}</h2>
                <p>
                  {t("step1.desc1")}{" "}
                  <Link to="/the-big-give-agreement">{t("step1.desc2")}</Link> {t("step1.desc3")}{" "}
                  <Link to="/statement-of-faith">{t("step1.desc4")}</Link> {t("step1.desc5")}
                </p>
                <BtnPrimaryExternal
                  text={t("step1.cta")}
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
                <h2>{t("step2.title")}</h2>
                <p>
                  {t("step2.desc")}.{" "}
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
                <h2>{t("step3.title")}</h2>
                <p>
                  {t("step3.desc1")}{" "}
                  <Link to="/get-involved#resources">{t("step3.desc2")}</Link>
                </p>
                <BtnPrimaryExternal
                  text={t("step3.cta")}
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
