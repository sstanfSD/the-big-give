import styled from "styled-components"
import { media } from "../../../../media"
import { Link } from "gatsby"

export const FooterElement = styled.footer`
  background-color: var(--color-blue-dark);
  width: 100%;
  margin: 0 auto;
`
export const Container = styled.div`
  margin: 0 auto;
  max-width: var(--max-width);

  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-around;

  padding: 7.5rem 5rem;

  ${media.tabland`
  grid-template-columns: repeat(3, 1fr);
  `}

  ${media.tabport`
  padding: 5rem;
  grid-template-columns: 1fr;
  `}

  ${media.phone`
  padding: 5rem 2.5rem;
  `}
`
export const Column = styled.div`
  ${media.tabland`
&:first-of-type {
    grid-column: 2;
    grid-row: 2;
  }
  `}

  ${media.tabport`
  &:first-of-type {
    grid-column: 1;
    grid-row: 5;
  }
  `}
`

export const LogoContainer = styled.div`
  width: 16rem;
`

export const List = styled.ul`
  list-style: none;
`
export const Item = styled.li`
  margin-bottom: 1.5rem;

  & a,
  p {
    font-size: 1.6rem;
    color: var(--color-white);
  }
`
export const ListHeading = styled(Link)`
  font-size: 2.4rem !important;
  color: var(--color-blue-light) !important;
  font-weight: bold;
`
export const ListLink = styled(Link)`
  font-size: 1.6rem;
  color: var(--color-white);
`
