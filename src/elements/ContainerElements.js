import styled from 'styled-components';

export const ContainerWrapper = styled.div`
    height: 100%; 
    display: grid; 
    grid-template-columns: 1fr repeat(12, minmax(auto, 5rem)) 1fr;
    grid-template-rows: 7rem 25rem 6rem auto; 
    /* first row: nav; second row: first section image; third: rest. no overlaping crap*/
    gap: 0 2rem; 


    @media ${props => props.theme.breakpoints.tablet} {
        grid-template-columns: 2rem repeat(6, 1fr) 2rem; 
        grid-gap: 0 1rem; 
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-template-columns: 1rem repeat(6, 1fr) 1rem; 
    }
`