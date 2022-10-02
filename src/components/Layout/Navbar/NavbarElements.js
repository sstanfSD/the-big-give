import styled from "styled-components"
import { Link } from "gatsby"
import { media } from "../../../../media"

export const Nav = styled.nav`
  display: flex;
  width: 100%;
`
export const LogoContainer = styled.div``

export const Dropdown = styled.ul`
  position: absolute;
  display: none;

  top: 0;
`
export const DropdownItem = styled.li``

export const List = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
`
export const Item = styled.li`
  position: relative;

  &:hover ${Dropdown} {
    display: block;
  }
`
export const InternalLink = styled(Link)``
