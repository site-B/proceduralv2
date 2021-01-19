import styled from 'styled-components'; 

export const FooterWrapper = styled.footer`
    grid-column: 2 / span 14; 
    min-height: 12rem; 
    padding: 2rem 0; 
    display: flex; 
    justify-content: center; 
    align-items: flex-start; 
    border: 1px solid ${props => props.theme.colors.light2};
    margin-bottom: 1rem; 

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6; 
    }
`;

export const FooterSocialWrapper = styled.div`
    display: flex; 
    flex-wrap: wrap; 
    align-items: center;
    text-align: center; 

    & p {
        text-align: center; 
        flex: 0 0 100%; 
    }
`;

export const FooterSocialIcons = styled.div`
    flex: 0 0 100%; 
    margin-bottom: 2rem; 

    & img {
        padding: 0 1rem; 
        transition: filter 0.3s ease; 
        height: 2rem; 
    }

    & img:hover, img:focus {
        filter: brightness(50%); 
    }
`;