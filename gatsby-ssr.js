import React from 'react'; 
import { createGlobalStyle, ThemeProvider } from 'styled-components'; 
import { MDXProvider } from '@mdx-js/react'; 
import Theme from "./src/themes/theme"; 
import { Table, Code} from './src/components'; 
import './language-tabs.css'; // from https://codesandbox.io/s/language-tabs-mdx-g03g6?file=/language-tabs.css:0-978 
// additional info: https://www.christopherbiscardi.com/post/codeblocks-mdx-and-mdx-utils 

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

// to replace html elements with components we created 

const components = {
    table: Table,
    pre: preProps => {
        const props = preToCodeBlock(preProps)
        if (props) {
            return <Code {...props} />
        }
        return <pre {...preProps} /> 
    },
    wrapper: ({ children }) => <>{children}</>,
}

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
            {element}
    </ThemeProvider>
    </MDXProvider>
)

// gatsby-browser to manage our theme.js styled-components;
//we wrap with ThemeProvider, passing theme with the value Theme (the name we used in theme.js); 
//{element} is going to be the entire final react app built with gatsby  
// more info https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/