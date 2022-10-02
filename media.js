import { css } from "styled-components"

const sizes = {
  laptop: 1600,
  laptopsmall: 1400,
  tabland: 1200,
  tabport: 900,
  phone: 650,
  phonesmall: 450,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})
