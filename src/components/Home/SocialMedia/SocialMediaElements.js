import styled from "styled-components"
import { media } from "../../../../media"

export const Section = styled.section`
  background-color: var(--color-blue-light);
`
export const Container = styled.div`
  padding: 10rem 0;
  margin: 0 10rem;

  & iframe {
    overflow: hidden !important;
  }

  @media (max-width: 970px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${media.phonesmall`
  margin: 0 5rem;
  `}
`

export const Heading = styled.h2`
  text-align: center;
  margin-bottom: 5rem;
`

export const SocialContainer = styled.div`
  @media (max-width: 970px) {
    max-width: 60rem;
  }
`

export const BtnContainer = styled.div`
  margin: 5rem auto;
  display: flex;
  justify-content: center;
`

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5rem;

  max-width: 100rem;
  margin: 0 auto;
`

export const IconBg = styled.div`
  background-color: var(--color-black);
  height: calc(100% - 1px);
  width: 200px;
  transform: translate(10px, 10px);
  position: absolute;
  top: 0;
  z-index: 0;
  border-radius: 20px;
`

export const Icon = styled.div`
  position: relative;
  height: 200px;
  width: 200px;

  border-radius: 20px;

  & .gatsby-image-wrapper {
    position: relative;
    z-index: 2;

    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
      transform: translate(10px, 10px);
    }
  }

  &:hover {
    /* box-shadow: 0 0 0 0 var(--color-black);
    transform: translate(4px, 4px); */
  }
`
