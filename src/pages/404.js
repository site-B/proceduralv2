import React from 'react';
import {graphql} from 'gatsby'; 
import {Container, Content, FeatureImage, BackButton } from '../components';
import { H1, P } from '../elements';

const notFound = ({data}) => {
    const featureImage = data.imageSharp.fixed; 

    return (
        <Container>
            <FeatureImage fixed={featureImage} />
            <Content>
                <H1 textAlign='center' margin='1rem'>
                    You're not supposed to be here. 
                </H1>
                <P textAlign='center' margin='.5rem'>
                    As a matter of fact, you're not. 
                </P>
                <P textAlign='center' margin='.5rem'>
                    Get back where you belong, and forget all about this.
                </P>
                <P textAlign='center' margin='.5rem 0 1rem 0'>
                    Until we meet again. 
                </P>
                <center>
                    <BackButton>Go back</BackButton>
                </center>
            </Content>
        </Container>
    )
}

export default notFound; 

export const notFoundQuery = graphql`
query notFoundQuery {
    imageSharp(fluid: {originalName: {eq: "404.jpg"}}) {
        fixed(width: 1920) {
            ...GatsbyImageSharpFixed
        }
      }
}
`