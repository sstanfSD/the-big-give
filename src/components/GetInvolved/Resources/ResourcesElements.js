import styled from "styled-components"
import { media } from "../../../../media"

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
export const Body = styled.p`
  margin-bottom: 5rem;
`

export const BtnList = styled.ul`
  list-style: none;
`
export const BtnListItem = styled.li`
  margin: 3rem 0;
`
export const BtnWhite = styled.a`
  cursor: pointer;
  display: block;
  text-align: center;

  color: var(--color-black);

  width: 100%;
  background-color: var(--color-white);
  border: 2px solid var(--color-black);

  padding: ${props => (props.large ? "1.5rem 4rem" : "1rem 3rem")};

  font-weight: bold;
  font-size: ${props => (props.large ? "1.8rem" : "1.6rem")};

  transition: all 0.2s ease;

  box-shadow: 4px 4px 0 0 var(--color-black);

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

export const EnglishResourceList = styled.ul`
  list-style: none;
`

export const FrenchResourceList = styled.ul`
  list-style: none;
`

export const ResourceListItem = styled.li`
  margin: 4rem 0;

  max-width: 70rem;
`

export const Type = styled.h4`
  font-size: var(--font-size-bodyS);
  margin-bottom: 0.5rem;
  font-family: var(--font-body);
`

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`

export const Icon = styled.div`
  margin-right: 1rem;

  & img {
    height: 2rem;
    width: 2rem;
  }
`

export const Link = styled.a`
  font-size: var(--font-size-bodyXS);
  color: var(--color-black);
`
