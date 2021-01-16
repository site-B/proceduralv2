import styled from 'styled-components';

export const NavWrapper = styled.nav`
    grid-column: 2 / span 12; 
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