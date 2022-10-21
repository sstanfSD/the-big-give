import styled from "styled-components"
import { media } from "../../../../media"

export const Section = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 40%;
  column-gap: 10%;

  max-width: 160rem;
  margin: 0 auto;

  padding: 10rem;

  ${media.laptopsmall`
  padding: 10rem 5rem;`}

  ${media.tabland`
  grid-template-columns: 1fr;
  row-gap: 10rem;
  padding: 5rem 5rem 7.5rem;
  `}

  ${media.phone`
  padding: 2.5rem 2.5rem 7.5rem;
 `}
`

export const ImageContainer = styled.div`
  justify-self: flex-end;

  ${media.laptop`
  .gatsby-image-wrapper {
    width: 80%;
    margin-left: 20%;
  }`}

  ${media.laptopsmall`
  .gatsby-image-wrapper {
    width: 70%;
    margin-left: 30%;
  }`}

  ${media.tabland`
  .gatsby-image-wrapper {
    width: 100%;
    margin-left: 0%;
  }`}

  ${media.tabland`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 grid-template-rows: 1fr 1fr 1fr;
 `}
`
export const ImageTop = styled.div`
  ${media.tabland`
 grid-column: 2/4;
 grid-row: 1/3;
 `}
`
export const ImageBottom = styled.div`
  transform: translate(-50%, -50%);

  ${media.tabland`
  transform: translate(0);`}
  grid-column: 1/3;
  grid-row: 2/4;
`

export const TextContainer = styled.div`
  color: var(--color-white);

  max-width: 60rem;

  ${media.tabland`
  max-width: 80rem;`}
`
export const Heading = styled.h2`
  margin-bottom: 2.5rem;
`
export const Body = styled.p`
  margin-bottom: 5rem;
  font-size: var(--font-size-bodyS);

  ${media.phone`
  margin-bottom: 5rem;
 `}
`
export const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;

  max-width: 80%;

  ${media.phone`
  max-width: 100%;
 justify-content: center;
 `}
`

export const Top = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  column-gap: 2rem;

  ${media.phone`
  grid-template-columns: 1fr;
  row-gap: 2rem;
  max-width: 80%;
  margin: 0 10%;
 `}

  ${media.phonesmall`
  max-width: 100%;
  margin: 0;
 `}
`
export const Bottom = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  column-gap: 2rem;

  ${media.phone`
  grid-template-columns: 1fr;
  row-gap: 2rem;
  max-width: 80%;
  margin: 0 10%;
 `}

  ${media.phonesmall`
  max-width: 100%;
  margin: 0;
 `}
`

export const Btn = styled.div`
  text-align: center;

  background-color: var(--color-white);
  color: var(--color-black);

  border: 2px solid var(--color-black);
  box-shadow: 4px 4px 0 0 var(--color-black);

  padding: 1.5rem 4rem;

  white-space: nowrap;

  font-weight: bold;
  font-size: 2.2rem;

  transition: all 0.2s ease;

  cursor: pointer;

  ${media.phone`
  padding: 1rem 3rem;
  font-size:1.6rem;
  `}

  &:hover {
    box-shadow: 0 0 0 0 var(--color-black);
    transform: translate(4px, 4px);
  }
`
