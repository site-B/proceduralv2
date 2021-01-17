import React from 'react';
import {graphql} from 'gatsby'; 
import {Container, Content, FeatureImage } from '../components';
import { H1, P } from '../elements';

const notFound = ({data}) => {
    const featureImage = data.imageSharp.fluid; 

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
                <P textAlign='center' margin='.5rem'>
                    Until we meet again. 
                </P>
            </Content>
        </Container>
    )
}

export default notFound; 

export const lostAndFoundQuery = graphql`
query notFoundQuery {
    imageSharp(fluid: {originalName: {eq: "office.jpg"}}) {
        fluid(quality: 100) {
            ...GatsbyImageSharpFluid
        }
      }
}
`