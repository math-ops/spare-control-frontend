import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background: #009add;
    background-image: linear-gradient(to bottom, #009add, #017db3);
  }

  a {
    text-decoration: none;
  }
`;