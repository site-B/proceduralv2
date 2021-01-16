import styled from 'styled-components';

export const ContentWrapper = styled.main`
    grid-column: 4 / span 8; 
    grid-row: 4 / span 5; 
    background-color: ${props => props.theme.colors.dark1};
    padding: ${props => `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`}; 
    border: 1px solid ${props => props.theme.colors.light2};
    z-index: 10; 
    margin-top: 1rem; 

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6; 
    }

    @media {props => props.theme.breakpoints.mobile} {
        padding: ${props => `${props.theme.spacings.medium} ${props.theme.spacings.large}`}; 
    }
`