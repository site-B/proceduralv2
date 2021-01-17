import styled from 'styled-components';

export const NavWrapper = styled.nav`
    grid-column: 2 / span 14; 
    grid-row: 1 / 2; 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 

    & img {
        height: 3rem; 
    }

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
`;

export const NavLinksWrapper = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: space-between;

    p {
        margin: 0 0 0 1rem; 
    } 

    h1 {
        margin: 0 1rem; 
    }
`