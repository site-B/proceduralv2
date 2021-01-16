//
import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { H1 } from '../elements';
import { Container, Post, FeatureImage, BackButton } from '../components';

const singlePost = ({ data }) => {
    const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fluid

    return (
        <Container>
            <FeatureImage fixed={featureImage} />
            <Post>
                <H1 margin="0 0 1.6rem 0">
                    {data.mdx.frontmatter.title}
                </H1>
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
                <br></br>
                <br></br>
                <BackButton>
                    Back to main
                </BackButton>
            </Post>
        </Container>

    )
}

export default singlePost; 

export const pageQuery = graphql`
    query SinglePostQuery($id: String!){
        mdx(id: {eq: $id }) {
            body
            frontmatter {
              date
              excerpt
              slug
              title
              featureImage {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
    }
`