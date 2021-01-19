import styled from 'styled-components';
import { Link } from 'gatsby'; 

export const TagContainer = styled.div`
    margin: .5rem 0 1rem 0; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    
    list-style: none; 
    text-decoration: none; 
`; 

export const Tags = styled(Link)`
    background-color: ${props => props.theme.colors.dark1};
    border: 1px solid crimson;  
    padding: .3rem .6rem; 
    border-radius: 10%; 
    font-weight: 900; 
    transition: filter .3s ease; 
    margin: 0 1rem; 
    color: crimson; 
    text-decoration: none;

    &:hover, 
    &:focus {
        filter: brightness(115%);
    }
`; 

export const TagContainerInPage = styled.div`
    margin: 1.5rem 0; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    
    list-style: none; 
    color: black; 
    text-decoration: none;  
`; 

export const TagsInPage = styled(Link)`
    background-color: ${props => props.theme.colors.dark1};
    border: 1px solid crimson;  
    padding: .3rem .6rem; 
    border-radius: 10%; 
    font-weight: 900; 
    transition: filter .3s ease; 
    margin: 0 1rem; 
    color: crimson; 
    text-decoration: none;

    &:hover, 
    &:focus {
        filter: brightness(115%);
    }
`; 