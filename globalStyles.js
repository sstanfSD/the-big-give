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

    /* scroll-behavior: smooth; */

}

body{
  background-color: var(--color-blue);
  font-family: var(--font-body);
}


:root{
--max-width: 192rem;

//FONTS

--font-heading: 'Farro', sans-serif;
--font-body: 'Poppins', sans-serif;

//FONT SIZES

--font-size-headingXXL: clamp(6rem, 5vw, 8rem);
--font-size-headingXL: clamp(3.6rem, 5vw, 5.4rem);
--font-size-headingL: clamp(3rem, 5vw, 4.8rem);
--font-size-headingM: clamp(2.6rem, 5vw, 4rem);
--font-size-headingS: clamp(2rem, 5vw, 3rem);
--font-size-headingXS: clamp(1.8rem, 5vw, 2.6rem);

--font-size-bodyL: clamp(2.2rem, 3vw, 3rem);
--font-size-bodyM: clamp(1.6rem, 3vw, 2.4rem);
--font-size-bodyS: clamp(1.6rem, 3vw, 2rem);
--font-size-bodyXS: clamp(1.4rem, 3vw, 1.6rem);

//COLORS

--color-black: #000;
--color-white: #fff;

--color-blue-dark: #23485B;
--color-blue: #076472;
--color-blue-light: #00AEAB;

--color-red: #E32231;



}

h1, h2, h3, h4, h5, h6{
  font-family: var(--font-heading);
  font-weight: 700;
}

h1{
  font-size: var(--font-size-headingXL);
line-height: 1.4;
}

h2{
font-size: var(--font-size-headingL);
line-height: 1.4;
}


a{
  text-decoration: none;
}

p {
  font-size: var(--font-size-bodyS);
  line-height: 1.6;
  
}

`

export default GlobalStyle
