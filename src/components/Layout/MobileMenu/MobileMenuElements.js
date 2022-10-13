import styled from "styled-components"
import { media } from "../../../../media"

import { Link } from "gatsby"

export const Nav = styled.nav`
  position: fixed;
  z-index: 500;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;

  background-color: var(--color-blue);

  transform: ${props => (props.open ? "translate(0%)" : "translate(-100%)")};
  transition: transform 0.3s ease;

  display: flex;
  flex-direction: column;

  justify-content: center;

  padding: 0 5rem;

  overflow: hidden;
`
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  & li {
    margin: 1rem 0;
  }

  ${media.phonesmall`
  margin: .5rem 0!important;
  `}
`
export const Item = styled.li`
  font-weight: bold;
`
export const InternalLink = styled(Link)`
  color: var(--color-white) !important;
  text-decoration: none;
  position: relative;
  font-size: var(--font-size-bodyL);

  ${media.phonesmall`
  font-size: var(--font-size-bodyM);
  `}
`

export const SecondaryList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 100%;

  margin-left: 1rem;
`

export const SecondaryItem = styled.li`
  margin: 1rem 0;
  font-weight: 400 !important;

  ${media.phonesmall`
  margin: .5rem 0 !important;
  `}
`
