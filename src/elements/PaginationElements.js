import React from 'react';
//we're passing in Link into the pagination element; 
import styled from 'styled-components'; 
import { Link } from 'gatsby'; 

export const PaginationWrapper = styled.div`
    grid-column: 2 / span 12; 
    padding: 2.5rem 0; 
    margin: auto; 
    display: flex; 
    align-items: center; 
    justify-content: center; 


    a:nth-child(1) {
        color: ${props => props.isFirst ? props.theme.colors.light2 : props.theme.colors.light1}
        pointer-events: ${props => props.isFirst ? "none" : "auto"}
        cursor: ${props => props.isFirst ? "default" : "pointer"}
    }

    a:nth-child(2) {
        color: ${props => props.isLast ? props.theme.colors.light2 : props.theme.colors.light1}
        pointer-events: ${props => props.isLast ? "none" : "auto"}
        cursor: ${props => props.isLast ? "default" : "pointer"}
    }

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6; 
    }

`;

export const PaginationElement = styled(props => <Link {...props}/>)`
    font-size: .7rem; 
    line-height: 1.2rem;
    font-weight: 400;  
    text-decoration: none; 
    margin: 0 2rem; 

    &:hover, 
    &:focus {
        text-decoration: underline; 
    }

`

export const PaginationElementDisabled = styled(props => <Link {...props}/>)`
    font-size: .7rem; 
    line-height: 1.2rem;
    font-weight: 400;  
    text-decoration: none; 
    margin: 0 2rem; 

    &:hover, 
    &:focus {
        text-decoration: none; 
        cursor: default; 
    }

`