import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const ButtonWrapper = styled(props => <Link {...props} />)`
    padding: .5rem .75rem;
    background-color: crimson;
    border-radius: .5rem; 
    color: ${props => props.theme.colors.dark1};
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