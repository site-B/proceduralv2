import styled from 'styled-components';

export const ContentWrapper = styled.main`
    grid-column: 2 / span 10; 
    grid-row: 4 / span 5; 
    background-color: ${props => props.theme.colors.dark1};
    padding: ${props => `${props.theme.spacings.small} ${props.theme.spacings.xxLarge}`}; 
    border: 1px solid ${props => props.theme.colors.light2};
    z-index: 10; 
    margin-top: 1rem; 


    @media ${props => props.theme.breakpoints.laptop} {
        grid-column: 2 / span 11; 
    }

    @media ${props => props.theme.breakpoints.tablet} {
        padding: ${props => `${props.theme.spacings.xxSmall} ${props.theme.spacings.xSmall}`}; 
        grid-column: 2 / span 6; 
    }

    @media {props => props.theme.breakpoints.mobile} {
        padding: ${props => `${props.theme.spacings.xxSmall} ${props.theme.spacings.small}`}; 
    }
`

export const AboutContentWrapper = styled.main`
    grid-column: 2 / span 14; 
    grid-row: 4 / span 5; 
    background-color: ${props => props.theme.colors.dark1};
    padding: ${props => `${props.theme.spacings.small} ${props.theme.spacings.xxLarge}`}; 
    border: 1px solid ${props => props.theme.colors.light2};
    z-index: 10; 
    margin: 1rem 0; 

    @media ${props => props.theme.breakpoints.tablet} {
        padding: ${props => `${props.theme.spacings.xxSmall} ${props.theme.spacings.xSmall}`}; 
        grid-column: 2 / span 6; 
    }

    @media {props => props.theme.breakpoints.mobile} {
        padding: ${props => `${props.theme.spacings.xxSmall} ${props.theme.spacings.small}`}; 
    }
`


