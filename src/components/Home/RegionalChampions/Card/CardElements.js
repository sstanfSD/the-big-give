import styled from "styled-components"
import { media } from "../../../../../media"

export const CardContainer = styled.li`
  width: 40rem;

  box-shadow: 8px 8px 0 0 var(--color-black);

  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 0 0 0 var(--color-black);
    transform: translate(8px, 8px);
  }

  ${media.tabland`
width: calc(100% - .1rem);
`}
`
export const ImageContainer = styled.div`
  width: 40rem;

  ${media.tabland`
width: 100%;
`}
`
export const TextContainer = styled.div`
  padding: 2.5rem 2.5rem 1rem 2.5rem;
`
export const Location = styled.h3`
  color: var(--color-white);
  font-size: 2.4rem;
  font-weight: 700;

  margin-bottom: 2.5rem;
`
export const Champions = styled.div``

export const ChampionInfo = styled.div`
  color: var(--color-white);
  font-size: 1.6rem;
  padding-bottom: 2rem;
  line-height: 1.6;
`
export const Name = styled.div``
export const Email = styled.a`
  color: var(--color-white);
  text-decoration: underline;
`
