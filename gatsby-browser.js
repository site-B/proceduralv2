import React from 'react'; 
import { createGlobalStyle, ThemeProvider } from 'styled-components'; 
import Theme from "./src/themes/theme"; 

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
        color: ${props => props.theme.colors.light1}; 
    }

    body, html {
        font-family: ${props => props.theme.fonts.main};
        height: 100%; 
        background-color: ${props => props.theme.colors.dark1}; 
    }
`

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
            {element}
    </ThemeProvider>
)

// gatsby-browser to manage our theme.js styled-components;
//we wrap with ThemeProvider, passing theme with the value Theme (the name we used in theme.js); 
//{element} is going to be the entire final react app built with gatsby  
// more info https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/