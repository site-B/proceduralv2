import styled from 'styled-components';
import { Link } from 'gatsby'; 

export const TagContainer = styled.ul`
    margin: 0 0 1rem 0; 
    display: flex; 
    
    list-style: none; 
    color: red; 
    text-decoration: none; 
`; 

export const Tags = styled(Link)`
    background-color: red; 
    padding: .1rem .6rem; 
    border-radius: 10%; 
    font-weight: 900; 
    margin: 0 1rem; 
    color: black; 
    text-decoration: none;
`; 