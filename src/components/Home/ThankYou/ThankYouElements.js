import styled from "styled-components"
import { media } from "../../../../media"
import { Link } from "gatsby"

export const Section = styled.section`
  background-color: var(--color-white);
`
export const Container = styled.div`
  margin: 0 auto;
  max-width: 160rem;
  padding: 10rem 5rem;
  display: grid;
  grid-template-columns: 40% 55%;
  column-gap: 5%;
  padding: 10rem 5rem;

  margin: 0 auto;

  overflow: hidden;

  ${media.tabland`
  column-gap: 5rem;
  padding: 10rem 2.5rem;
  `}

  ${media.tabport`
grid-template-columns: 1fr;
  `}

  ${media.phonesmall`
  padding: 5rem 1rem;
  `}
`
export const TextContainer = styled.div`
  max-width: 50rem;

  ${media.tabport`
  margin-bottom: 10rem;
  `}
`
export const Heading = styled.h2``
export const Body = styled.p``
export const List = styled.ul`
  list-style: none;
  margin-bottom: 10rem;

  ${media.tabport`
  margin-bottom: 5rem;
  `}
  & li {
    margin: 1rem 0;

    font-size: var(--font-size-bodyS);

    & a {
      text-decoration: underline;
      color: var(--color-black);
    }
  }
`
export const StoryLink = styled(Link)``

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 4rem;

  ${media.laptopsmall`
width: 120%;
transform: translateX(-5%);
`}

  ${media.tabland`
row-gap: 2rem;
transform: translateX(0%);
  `}

  ${media.tabport`
  width: 130%;
  `}
`
export const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4rem;

  overflow: hidden;

  transform: translateX(10%);

  ${media.tabland`
  column-gap: 2rem;
  transform: translateX(5%);
  `}

  ${media.tabport`
  transform: translateX(-10%);

  & .gatsby-image-wrapper{
    max-height: 25rem
  }
  `}
`
export const BottomRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4rem;

  ${media.tabland`
  column-gap: 2rem;
  `}

  ${media.tabport`
  transform: translateX(-15%);

  & .gatsby-image-wrapper{
    max-height: 25rem
  }
  `}
`
