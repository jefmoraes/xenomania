import { createGlobalStyle } from "styled-components"
export default createGlobalStyle`
  *{
    border: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  
  }

  body{
    background-color: ${props => props.theme.colors.tertiary};
   
    background-repeat: no-repeat;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
  }


`