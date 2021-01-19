import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const ButtonWrapper = styled(props => <Link {...props} />)`
    padding: .5rem .75rem;
    background-color: ${props => props.theme.colors.dark1};
    border-radius: .5rem; 
    border: 1px solid crimson; 
    color: crimson; 
    font-weight: 600; 
    font-size: .9rem;
    width: fit-content;
    transition: filter .3s ease; 
    text-decoration: none;
    margin-bottom: 1rem; 

    &:hover, 
    &:focus {
        filter: brightness(115%);
    }
`