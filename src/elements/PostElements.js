import styled from 'styled-components';

export const PostWrapper = styled.main`
    grid-column: 4 / span 8; 
    grid-row: 4 / span 5; 
    background-color: ${props => props.theme.colors.dark1};
    padding: ${props => `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`}; 
    border: 1px solid ${props => props.theme.colors.light2};
    z-index: 10; 
    margin-top: 1rem; 

    /* styles for all future exported html elements from mdx here */

    h1, h2, h3, h4, h5, h6 {
        color: ${props => props.theme.colors.light1}; 
    }

    h1:not(:first-child), h2, h3, h4, h5, h6 {
        margin-top: 2rem; 
    }

    h1 {
        font-size: 2.3rem; 
        line-height: 2.6rem;
        font-weight: 900; 
    }

    h2 {
        font-size: 1.6rem;
        line-height: 1.95rem;
        font-weight: 600; 
    }

    h3 {
        font-size: 1.4rem;
        line-height: 1.7rem;
        font-weight: 600; 
    }

    h5 {
        font-size: 1.3rem;
        line-height: 1.5rem;
        font-weight: 400; 
    }

    h5 {
        font-size: 1.2rem;
        line-height: 1.4rem;
        font-weight: 400; 
    }

    h6 {
        font-size: 1rem;
        line-height: 1.2rem; 
        font-weight: 400; 
        text-transform: uppercase; 
    }

    p {
        font-size: 1.15rem;
        line-height: 1.9rem;
        font-weight: 400;
        color: ${props => props.theme.colors.light2};
        margin-top: 2rem; 
    }

    a {
        color: ${props => props.theme.colors.blood}; 
        text-decoration: underline; 
    }

    strong {
        font-weight: 900; 
    }

    em {
        font-style: italic; 
    }

    del { 
        text-decoration: line-through; 
    }

    blockquote p {
        font-style: italic; 
        font-size: 1.5rem; 
        line-height: 2.2rem; 
        text-align: center; 
        max-width: 36rem; 
        margin: 2rem auto; 
    }

    ul, ol {
        color: ${props => props.theme.colors.light2};
        margin: 1rem 0 1rem 2rem; 
    }

    li {
        margin: 0.3rem 0; 
    }

    code {
        font-family: ${props => props.theme.fonts.code}; 
        font-size: 1.1rem;
        font-weight: 500;  
        line-height: 1.9rem; 
        color: ${props => props.theme.colors.dark1};
        background-color: ${props => props.theme.colors.light2};
        padding: 0 .2rem; 
    }

    hr {
        border: 0;
        height: 1px; 
        background: ${props => props.theme.colors.light1};
        opacity: .1;
        margin-top: 2rem; 
    }

    table {
        width: 100;
        border-spacing: .3rem;
        border-collapse: collapse; 
        font-size: 1rem;
        line-height: 1.6rem; 
        font-weight: 400; 
    }

    th {
        font-weight: 600; 

    }

    table, th, td {
        border: 1px solid ${props => props.theme.colors.light2}; 
    }

    th, td {
        text-align: left; 
        padding: .6rem; 
    }

    /* responsive */

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6; 
    }

    @media {props => props.theme.breakpoints.mobile} {
        padding: ${props => `${props.theme.spacings.medium} ${props.theme.spacings.large}`}; 
    }
`