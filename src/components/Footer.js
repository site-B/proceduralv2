import React from 'react';
/* import {useStaticQuery, graphql } from 'gatsby';  */
import { 
    FooterWrapper, 
    FooterSocialWrapper, 
    /* FooterSocialIcons, */
    P
 } from '../elements';


export const Footer = () => {

/*     const data = useStaticQuery(graphql`
    
        query {
            github: file(relativePath: {eq: "github.svg"}) {
                publicURL
            }
            instagram: file(relativePath: {eq: "instagram.svg"}) {
                publicURL
            }
            youtube: file(relativePath: {eq: "youtube.svg"}) {
                publicURL
            }
            twitter: file(relativePath: {eq: "twitter.svg"}) {
                publicURL
            }
        }

    `) */
    return <FooterWrapper>
                <FooterSocialWrapper>

                    <P size="small" color="light1" margin='1rem' textAlign='center'>
                    Copyright © 2021 all original text chunks and miscellaneous shenanigans.
                    </P>
                    <P size="small" color="light1" margin='1rem' textAlign='center'>
                        Everything else belongs to their respective owners.
                    </P>
                    <P size="small" color="light1" margin='1rem'  textAlign='center'>
                        Made in Madrid.
                    </P>
                </FooterSocialWrapper>
            </FooterWrapper>
};

/* DISCARDED: 

                    <FooterSocialIcons>
                        <a href="https://github.com/VBalaguera" target="_blank" rel="noopener noreferrer">
                            <img src={data.github.publicURL} /> 
                        </a>
                        <a href="https://www.instagram.com/vbalaguera/" target="_blank" rel="noopener noreferrer">
                            <img src={data.instagram.publicURL} /> 
                        </a>
                        <a href="https://www.youtube.com/channel/UCT5Xa9Qgeo-Lpc_Q4Vg3CuQ" target="_blank" rel="noopener noreferrer">
                            <img src={data.youtube.publicURL} /> 
                        </a>
                        <a href="https://twitter.com/Balaguera" target="_blank" rel="noopener noreferrer">
                            <img src={data.twitter.publicURL} /> 
                        </a>
                    </FooterSocialIcons>
                    */