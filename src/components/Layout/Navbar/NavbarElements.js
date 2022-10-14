import styled from "styled-components"
import { Link } from "gatsby"
import { media } from "../../../../media"

export const Nav = styled.nav`
  background-color: var(--color-white);
  width: 100%;
  border-bottom: solid 0.2rem var(--color-black);
`
export const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;

  padding: 1rem 5rem;

  display: grid;
  width: 100%;
  grid-template-columns: 30% 70%;
  align-items: center;

  ${media.tabland`
  grid-template-columns: 20% 80%;
  padding: 1rem 2.5rem;
`}

  ${media.tabport`
  display: flex;
  justify-content: space-between;
`}
`

export const LogoContainer = styled.div`
  width: 100%;
  ${media.tabland`
    max-width: 15rem
`}

  ${media.tabport`
    max-width: 12.5rem
`}
`

export const Dropdown = styled.ul`
  position: absolute;
  display: none;

  z-index: 5;

  list-style: none;
  top: 2.4rem;
  flex-direction: column;

  background-color: var(--color-white);
  border: solid 0.2rem var(--color-black);
`
export const DropdownItem = styled.li`
  padding: 1rem;
`

export const List = styled.ul`
  display: flex;

  width: 100%;
  justify-content: space-between;
  align-items: center;

  list-style: none;

  ${media.tabport`
  display: none;
`}
`
export const Item = styled.li`
  position: relative;

  font-size: 1.6rem;
  font-weight: bold;

  &:hover ${Dropdown} {
    display: flex;
  }
`
export const InternalLink = styled(Link)`
  text-decoration: none;
  color: var(--color-black);
`

export const MobileMenuBtn = styled.div`
  display: none;

  z-index: 999;

  width: 3.2rem;
  height: 2.4rem;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${media.tabport`
  display: flex;
  `}

  ${media.phone`
  top: 2.4rem;
  `}

  & div {
    width: 100%;
    height: 0.4rem;
    background-color: var(--color-black);

    transition: all 0.3s ease;
  }

  & div:nth-of-type(1) {
    transform-origin: top left;
    transform: ${props =>
      props.open ? "rotate(45deg) translateY(-.1rem)" : "rotate(0)"};
  }

  & div:nth-of-type(3) {
    transform-origin: bottom left;
    transform: ${props =>
      props.open ? "rotate(-45deg) translateY(.1rem)" : "rotate(0)"};
  }

  & div:nth-of-type(2) {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "translateX(-100%)" : "translateX(0)")};
  }
`
