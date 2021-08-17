import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    font-family: 'Segoe UI', 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

a{
  text-decoration: none;
  
}
  .df-lc{
    display:flex;
    align-self:center;
  }
`
export default GlobalStyle