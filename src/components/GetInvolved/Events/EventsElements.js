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
  background-color: var(--color-blue);

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
  color: var(--color-white);
  ${media.tabport`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items:center;
  `};
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
  transform: translate(4px, 4px);

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
  background-color: #f6f6f6;

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

  ${media.tabport`
margin-top: 5rem;
  `}
`

export const EventListElement = styled.ul`
  list-style: none;
`
export const EventListItem = styled.li`
  margin: 4rem 0;

  display: grid;
  grid-template-columns: 40% 60%;

  column-gap: 5rem;

  ${media.tabland`
  grid-template-columns: 1fr;
  `}
`

export const ImageContainer = styled.div`
  ${media.tabland`
 margin-bottom: 2rem;
  `}
`
export const TextContainer = styled.div``

export const Name = styled.h4`
  font-size: var(--font-size-bodyS);
  margin-bottom: 0.5rem;
  font-family: var(--font-body);
`
export const Address = styled.p`
  font-size: var(--font-size-bodyXS);
  margin-bottom: 1rem;
`
export const Time = styled.span`
  font-size: var(--font-size-bodyXS);
  color: var(--color-blue);
  font-weight: bold;
  margin-bottom: 0.5rem;
`
export const Details = styled.div`
  & p {
    margin: 1rem 0;
    font-size: var(--font-size-bodyXS);
  }

  & a {
    text-decoration: underline;
    color: var(--color-black);
  }
`
