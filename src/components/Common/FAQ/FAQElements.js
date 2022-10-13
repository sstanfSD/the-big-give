import styled from "styled-components"
import { media } from "../../../../media"

export const Section = styled.section`
  max-width: var(--max-width);
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`
export const Container = styled.div`
  padding: 10rem 5rem;
  max-width: 150rem;
  width: 100%;

  color: var(--color-white);

  display: grid;
  grid-template-columns: 30% 60%;
  gap: 10%;

  ${media.tabport`
    grid-template-columns: 1fr;
    gap: 3rem;
  `}

  ${media.phone`
  padding: 10rem 2.5rem;
  `}
`
export const HeadingContainer = styled.div`
  height: 100%;
  width: 100%;
`
export const Heading = styled.h2`
  width: 100%;
`
export const Contact = styled.div`
  margin-top: 100%;
  font-size: 1.8rem;

  & a {
    color: var(--color-white);
    text-decoration: underline;
  }

  ${media.tabport`
   display: none;
  `}
`

export const ContactMobile = styled(Contact)`
  display: none;
  margin-top: 5rem;
  ${media.tabport`
   display: block
  `}
`

export const QuestionsContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
`

export const QuestionContainer = styled.div`
  width: 100%;
`
