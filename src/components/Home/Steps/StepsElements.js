import styled from "styled-components"
import { media } from "../../../../media"

export const Section = styled.section`
  width: 100%;
`
export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const StepsContainer = styled.div`
  width: 100%;
  position: relative;

  ${media.tabport`
  grid-column: 1/3;
  `}
`

export const Step = styled.div`
  display: grid;

  width: 100%;
  height: 100vh;

  ${media.tabport`
  height: min-content;
  `}
`
export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-blue-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10rem;
  text-align: left;

  ${media.phone`
  padding: 5rem;
  `}

  ${media.phonesmall`
  padding: 5rem 2.5rem;
  `}

  & h2 {
    margin-bottom: 2rem;
  }

  & p {
    font-size: var(--font-size-bodyM);
    margin-bottom: 5rem;
  }

  & a {
    text-decoration: underline;
    color: var(--color-black);
  }
`
export const ImagesContainer = styled.div`
  width: 100%;

  ${media.tabport`
  display: none;
  `}
`

export const Image = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;

  & .gatsby-image-wrapper {
    height: 100%;
  }
`

export const MobileImageContainer = styled.div`
  display: none;

  ${media.tabport`
  height: min-content;
  display: block;
  `};
`

export const MobileImage = styled.div``
