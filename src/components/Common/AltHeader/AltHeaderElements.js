import styled from "styled-components"
import { media } from "../../../../media"

export const Header = styled.header``
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  max-width: var(--max-width);

  padding: 5rem 0 6rem;
`

export const TextContainer = styled.div`
  position: relative;

  max-width: 70rem;
  width: 100%;
  text-align: center;

  ${media.laptopsmall`
max-width: 70rem;
`}

  ${media.tabport`
max-width: 60rem;
`}

${media.phone`
max-width: 40rem;
`}

${media.phonesmall`

`}
`
export const Heading = styled.h1`
  padding: 2rem 0 0;

  ${media.phonesmall`
font-size: var(--font-size-headingM);
padding-top: 1rem;
`}
`
export const HeadingBg = styled.div`
  position: absolute;

  width: 100%;
  height: 110%;

  z-index: -1;

  ${media.phonesmall`
 
`}

  & img {
    width: 100%;
    height: 100%;

    object-fit: fill;
  }
`
