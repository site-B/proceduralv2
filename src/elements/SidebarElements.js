import styled from 'styled-components'; 

export const SidebarContent = styled.div`
    grid-column: 10 / span 6; 
    grid-row: 4 / span 5; 
    background-color: ${props => props.theme.colors.light1};
    padding: ${props => `${props.theme.spacings.small} ${props.theme.spacings.xxLarge}`}; 
    border: 1px solid ${props => props.theme.colors.light2};
    z-index: 10; 
    margin-top: 1rem; 

    @media ${props => props.theme.breakpoints.tablet} {
        padding: ${props => `${props.theme.spacings.xxSmall} ${props.theme.spacings.xSmall}`}; 
        grid-column: 2 / span 6; 
    }

    @media {props => props.theme.breakpoints.mobile} {
        padding: ${props => `${props.theme.spacings.xxSmall} ${props.theme.spacings.small}`}; 
    }
`