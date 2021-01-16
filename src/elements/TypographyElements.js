import styled from 'styled-components'; 

export const P = styled.p`
    margin: ${props => props.margin ? props.margin : 0};
    font-size: ${props => {
        switch(props.size) {
            case "medium": 
            return "1.2rem"
            case "small":
            return ".99rem"
            case "xSmall":
            return "0.851rem"
            default: 
            return "1.2rem"
        }
    }};
    line-height: ${props => {
        switch(props.size) {
            case "medium": 
            return "1.5rem"
            case "small":
            return ".4rem"
            case "xSmall":
            return "1.2rem"
            default: 
            return "1.5rem"
        }
    }};
    text-decoration: ${props => props.textDecoration ? props.textDecoration : "none"}; 
    font-weight: ${props => {
        switch(props.weight) {
            case "normal": 
            return 400
            case "medium":
            return 600
            case "bold":
            return 900
            default: 
            return 400
        }
    }};
    color: ${props => {
        switch(props.color) {
            case "dark1":
            return props.theme.colors.dark1
            case "dark2":
            return props.theme.colors.dark2
            case "dark3":
            return props.theme.colors.dark3
            case "light1": 
            return props.theme.colors.light1
            case "light2":
            return props.theme.colors.light2
            default: 
            return props.theme.colors.light1
        }
    }};
    text-align: ${props => props.textAlign ? props.textAlign : "left"}
`;

export const TITLE = styled.h1`
    font-size: 2.3rem; 
    line-height: 2.6rem; 
    color: ${props => props.theme.colors.blood}; 
    font-weight: 900; 
    letter-spacing: .2rem; 
    text-align: ${props => props.textAlign ? props.textAlign : "left"};
    margin: ${props => props.margin ? props.margin : 0};
`;

export const H1 = styled.h1`
    font-size: 2.3rem; 
    line-height: 2.6rem; 
    color: ${props => {
        switch(props.color) {
            case "dark1":
            return props.theme.colors.dark1
            case "dark2":
            return props.theme.colors.dark2
            case "dark3":
            return props.theme.colors.dark3
            case "light1": 
            return props.theme.colors.light1
            case "light2":
            return props.theme.colors.light2
            case "blood":
            return props.theme.colors.blood
            default: 
            return props.theme.colors.light1
        }
    }};
    font-weight: 900; 
    letter-spacing: .1rem; 
    text-align: ${props => props.textAlign ? props.textAlign : "left"};
    margin: ${props => props.margin ? props.margin : 0};
`;

export const H2 = styled.h2`
    font-size: 1.5rem; 
    line-height: 1.88rem; 
    color: ${props => {
        switch(props.color) {
            case "dark1":
            return props.theme.colors.dark1
            case "dark2":
            return props.theme.colors.dark2
            case "dark3":
            return props.theme.colors.dark3
            case "light1": 
            return props.theme.colors.light1
            case "light2":
            return props.theme.colors.light2
            default: 
            return props.theme.colors.light1
        }
    }};
    font-weight: 400; 
    text-align: ${props => props.textAlign ? props.textAlign : "left"};
    margin: ${props => props.margin ? props.margin : 0};
`;