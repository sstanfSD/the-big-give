import { createGlobalStyle } from "styled-components"
import { media } from "./media"

const GlobalStyle = createGlobalStyle`


*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
    font-size: 62.5%;
    margin: 0 auto;
    height:100%;
    font-family: 'Montserrat', sans-serif;
}


:root{}

`

export default GlobalStyle
