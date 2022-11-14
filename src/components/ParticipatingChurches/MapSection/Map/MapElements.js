import styled from "styled-components"
import { media } from "../../../../../media"

export const MapContainer = styled.div`
  border: solid 1rem var(--color-blue-light);

  & a {
    text-decoration: underline;
    color: var(--color-black);

    &:active {
      color: var(--color-black);
    }
  }

  ${media.phone`
  & > div {
   width: 80vw;
  }
  `}
`

export const ChurchName = styled.p`
  font-family: var(--font-body);
  font-weight: bold;
`
export const ChurchAddress = styled.span`
  font-family: var(--font-body);
`
