import React from 'react';
import { graphql } from 'gatsby'; 
import {Container, AboutContent, FeatureImage, BackButton } from '../components';
import { H1, P } from '../elements';

const aboutThis = ({data}) => {
    const featureImage = data.imageSharp.fixed; 

    return (
        <Container>
            <FeatureImage fixed={featureImage} />
            <AboutContent>
                <H1 textAlign='center' margin='1rem'>
                    About this place
                </H1>
                <P textAlign='center' margin='.5rem'>
                    This is a simple blog project. 
                </P>
                <P textAlign='center' margin='.5rem'>
                    I am using GraphQL, Gatsby, and React. 
                </P>
                <P textAlign='center' margin='.5rem'>
                    So far, nothing has exploded. Yet. 
                </P>
                <P textAlign='center' margin='.5rem 0 2rem 0'>
                    Enjoy. 
                </P>
                <center>
                    <BackButton>Go back</BackButton>
                </center>
                <br></br>
            </AboutContent>
    </Container>
    )
}

export default aboutThis; 

export const aboutQuery = graphql`
query aboutQuery {
    imageSharp(fluid: {originalName: {eq: "about.jpg"}}) {
        fixed(width: 1920) {
            ...GatsbyImageSharpFixed
        }
      }
}
`