import styled from "styled-components"
import { Link } from "gatsby"
import { media } from "../../../../media"

export const ActionsRight = styled.div`
  display: none;
  align-items: center;
  gap: 12px;

  @media (max-width: 900px) {
    display: flex;
    margin-left: auto; /* pushes this group to the far right */
  }
`;

export const Nav = styled.nav`
  background-color: var(--color-white);
  width: 100%;
  border-bottom: solid 0.2rem var(--color-black);

  padding: 1rem 5rem;

  ${media.tabland`
 
  padding: 1rem 2.5rem;
`}
`
export const Container = styled.div`
  position: relative;
  max-width: var(--max-width);
  margin: 0 auto;

  display: grid;
  width: 100%;
  grid-template-columns: 30% 70%;
  align-items: center;

  ${media.tabland`
  grid-template-columns: 20% 80%;
`}

  ${media.tabport`
  display: flex;
  justify-content: space-between;
`}
`

export const LogoContainer = styled.div`
  width: 100%;
  max-width: 22rem;
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
  white-space: nowrap;
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
  list-style: none;
  display: inline-block;
  font-size: 1.6rem;
  font-weight: bold;

  &.lang-mobile {
    display: none; /* hidden by default on large screens */
  }

  @media (max-width: 768px) {
    &.lang-mobile {
      display: block; /* show only on mobile */
      float: right;
    }

    &.lang-desktop {
      display: none; /* hide the desktop version */
    }
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

  cursor: pointer;

  position: ${props => (props.openMobile ? "fixed" : "relative")};

  right: ${props => (props.openMobile ? "2.5rem" : "0")};

  ${media.tabport`
  display: flex;
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
      props.openMobile ? "rotate(45deg) translateY(-.1rem)" : "rotate(0)"};
  }

  & div:nth-of-type(3) {
    transform-origin: bottom left;
    transform: ${props =>
      props.openMobile ? "rotate(-45deg) translateY(.1rem)" : "rotate(0)"};
  }

  & div:nth-of-type(2) {
    opacity: ${props => (props.openMobile ? "0" : "1")};
    transform: ${props =>
      props.openMobile ? "translateX(-100%)" : "translateX(0)"};
  }
`
