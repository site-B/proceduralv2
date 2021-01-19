//
import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { H1, TagContainerInPage, TagsInPage } from '../elements';
import { Container, Post, FeatureImage, BackButton, Seo } from '../components';
import { slugify } from '../utils/utilityFunctions'; 
/* import Img from 'gatsby-image';  */

const singlePost = ({ data }) => {
    const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed
/*     const thumbnailImage = data.mdx.frontmatter.image.childImageSharp.fluid */

    const seoImage = data.mdx.frontmatter.featureImage.publickURL

    return (
        <Container>
        <Seo 
          title={data.mdx.frontmatter.title}
          image={seoImage}
          description={data.mdx.frontmatter.excerpt}
        />
{/*             <Img fluid={thumbnailImage} /> */}
            <FeatureImage fixed={featureImage} />
            <Post>
                <H1 margin="0 0 1.6rem 0">
                    {data.mdx.frontmatter.title}
                </H1>
                <h3>
                  {data.mdx.frontmatter.excerpt}
                </h3>
                <h3>
                By: {data.mdx.frontmatter.author} || Posted on: {data.mdx.frontmatter.date}
                </h3>
                <br></br>
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
                <br></br>
                <br></br>
                <TagContainerInPage>
                {data.mdx.frontmatter.tags.map(tag => (
                    <li>
                        <TagsInPage to={`/tag/${slugify(tag)}`}>
                                {tag}
                        </TagsInPage>
                    </li>
                ))}
                </TagContainerInPage>
                <center>
                  <BackButton>
                      Back to main
                  </BackButton>
                </center>
            </Post>
        </Container>

    )
}

export default singlePost; 

export const postQuery = graphql`
    query SinglePostQuery($id: String!){
        mdx(id: {eq: $id }) {
            body
            frontmatter {
              author
              date
              excerpt
              slug
              title
              tags
              featureImage {
                publicURL
                childImageSharp {
                  fixed(width: 1920) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 100) {
                      ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
    }
`