import styled from "styled-components"
import { media } from "../../../../media"
import { Link } from "gatsby"

export const Section = styled.section``
export const Container = styled.div`
  margin: 0 auto;

  display: grid;
  grid-template-columns: 30% 70%;

  ${media.tabland`
  grid-template-columns: 40% 60%;
  `}

  ${media.tabport`
  grid-template-columns: 1fr;
  `}
`

export const Sidebar = styled.div`
  width: 100%;
  background-color: var(--color-blue-light);

  padding: 10rem 5rem;

  position: relative;
  margin-left: auto;

  ${media.laptopsmall`
  padding: 2.5rem;
  `}

  ${media.tabport`
  text-align:center;
  padding-bottom: 7.5rem;  
  `}
`
export const ContentContainer = styled.div`
  position: sticky;
  top: 5rem;

  ${media.tabport`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items:center;
  `}
`

export const Heading = styled.h2`
  line-height: 1.6;
`

export const Body = styled.p``

export const BtnList = styled.ul`
  list-style: none;
`
export const BtnListItem = styled.li`
  margin: 3rem 0;
`
export const BtnWhite = styled.button`
  cursor: pointer;
  text-transform: capitalize;

  width: 100%;
  background-color: ${props =>
    props.active ? "#D9D9D9" : "var(--color-white)"};
  border: 2px solid var(--color-black);

  padding: ${props => (props.large ? "1.5rem 4rem" : "1rem 3rem")};

  font-weight: bold;
  font-size: ${props => (props.large ? "2.2rem" : "1.6rem")};

  transition: all 0.2s ease;

  box-shadow: 0 0 0 0 var(--color-black);
  box-shadow: ${props =>
    props.active
      ? "0 0 0 0 var(--color-black)"
      : "4px 4px 0 0 var(--color-black)"};
  transform: ${props =>
    props.active ? "translate(4px, 4px)" : "translate(0)"};

  ${media.tabport`
  max-width: 40rem;
  `}

  ${media.phone`
padding: 1rem 3rem;
font-size:1.6rem;
`}

  &:hover {
    box-shadow: 0 0 0 0 var(--color-black);
    transform: translate(4px, 4px);
  }
`

export const RegisterBtn = styled.button`
  cursor: pointer;
  display: block;
  text-align: center;
  background-color: var(--color-red);
  color: var(--color-white);

  width: 100%;

  border: 2px solid var(--color-black);
  box-shadow: 4px 4px 0 0 var(--color-black);

  padding: ${props => (props.large ? "1.5rem 4rem" : "1rem 3rem")};

  font-weight: bold;
  font-size: ${props => (props.large ? "2.2rem" : "1.6rem")};

  transition: all 0.2s ease;

  ${media.tabport`
  max-width: 40rem;
  `}

  ${media.phone`
padding: 1rem 3rem;
font-size:1.6rem;
`}

  &:hover {
    box-shadow: 0 0 0 0 var(--color-black);
    transform: translate(4px, 4px);
  }
`

export const ListContainer = styled.div`
  background-color: var(--color-white);

  padding: 10rem;

  ${media.tabport`
padding: 5rem 10rem;
`}

  ${media.phone`
padding: 5rem 5rem;
`}

${media.phonesmall`
padding:  2.5rem;
`}
`
export const ListHeading = styled.h3`
  font-size: var(--font-size-headingM);
  font-family: var(--font-body);
  text-transform: capitalize;

  margin-bottom: 5rem;

  ${media.tabport`
margin-top: 5rem;
  `}
`

export const StoryListElement = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5rem;

  ${media.laptop`
  grid-template-columns: 1fr 1fr;
  `}

  ${media.tabland`
  grid-template-columns: 1fr;
  `}

  ${media.tabport`
  grid-template-columns: 1fr 1fr;
  `}

  ${media.phone`
  grid-template-columns: 1fr;
  justify-items: center;
  `}

  & li {
    width: 30rem;
    box-shadow: 8px 8px 0 0 var(--color-black);
    transition: all 0.2s ease;

    ${media.tabport`
    width: 100%;
  `}

    ${media.phonesmall`
  width: 27rem;
  `}
  }

  & li:hover {
    box-shadow: 0 0 0 0 var(--color-black);
    transform: translate(4px, 4px);
  }

  & li:nth-of-type(1n - 1) {
    background-color: var(--color-blue);
  }

  & li:nth-of-type(2n - 2) {
    background-color: var(--color-blue-dark);
  }

  & li:nth-of-type(3n - 3) {
    background-color: var(--color-red);
  }
`
export const StoryListItem = styled.li`
  max-width: 70rem;
`

export const Card = styled.article`
  cursor: pointer;
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  min-width: 30rem;

  ${media.phonesmall`
  min-width: 27rem;
  `}

  & img {
    min-width: 30rem;

    ${media.phonesmall`
  min-width: 27rem;
  `}
  }
`

export const TextContainer = styled.div`
  padding: 2rem;
  color: var(--color-white);
`

export const Title = styled.h4`
  font-size: var(--font-size-bodyS);
  margin-bottom: 0rem;
  font-family: var(--font-body);

  text-transform: capitalize !important;
`
export const Location = styled.p`
  font-size: var(--font-size-bodyXS);
  margin-bottom: 2rem;
`

export const Excerpt = styled.div`
  & p {
    font-size: var(--font-size-bodyXS);
  }
`
