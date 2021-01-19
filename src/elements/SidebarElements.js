import styled from 'styled-components'; 

export const SidebarContent = styled.div`
    grid-column: 12 / span 4; 
    grid-row: 4 / span 5; 
    background-color: ${props => props.theme.colors.light1};
    padding: ${props => `${props.theme.spacings.small} ${props.theme.spacings.xxLarge}`}; 
    border: 1px solid ${props => props.theme.colors.light2};
    z-index: 10; 
    margin-top: 1rem; 


    @media ${props => props.theme.breakpoints.laptop} {
        grid-column: 13 / span 3; 
    }

    @media ${props => props.theme.breakpoints.tablet} {
        padding: ${props => `${props.theme.spacings.xxSmall} ${props.theme.spacings.xSmall}`}; 
        display: none; 
    }

    @media ${props => props.theme.breakpoints.mobile} {
        display: none; 
    }
`

export const SidebarContentCard = styled.div`
    width: 100%;
    height: 10rem;
    background-color: black; 
    margin: 1rem 0; 
`

/* AFTER BURGER MENU ACTIVATION: 

grid-column: 2 / span 6; 
        grid-row: 1 / span 15; 
        
        */ 