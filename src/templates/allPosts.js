//
import React from 'react';
import { Link, graphql } from 'gatsby';
import { Container, Content, ContentCard, MainImage, Pagination, Sidebar } from '../components';

import Img from 'gatsby-image'; 

import { ImgCardWrapper, H1, P } from '../elements'; 

const AllPosts = ({pageContext, data}) => {
    const {currentPage, numPages} = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : '/' + (currentPage - 1).toString(); 
    const nextPage = '/' + (currentPage + 1).toString(); 

    const posts = data.allMdx.edges

    return (
        <Container>
            <MainImage />
            <Content>
            <br></br>
                <H1 textAlign='center' margin='0 0 1rem 0'>
                    The story so far
                </H1>
                <P color='light2' textAlign='center'></P>
                {posts.map( post => (
                        <ImgCardWrapper>
                            <Link 
                                to={post.node.frontmatter.slug} itemAlign='center'>
                                <Img fixed={post.node.frontmatter.thumbnail.childImageSharp.fixed}>

                                </Img>
                            </Link>
                            <ContentCard 
                                key={post.node.frontmatter.slug}
                                date={post.node.frontmatter.date}
                                title={post.node.frontmatter.title}
                                excerpt={post.node.frontmatter.excerpt}
                                slug={post.node.frontmatter.slug}
                                tags={post.node.frontmatter.tags}
                                fluid={post.node.frontmatter.thumbnail.childImageSharp.fluid}
                            /> 
                        </ImgCardWrapper>

                ))}
            </Content>
            <Sidebar>
                
            </Sidebar>
            <Pagination 
                isFirst={isFirst}
                isLast={isLast}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </Container>
    )
    
}

export default AllPosts; 

export const pageQuery = graphql`
    query AllPostsQuery($skip: Int!, $limit: Int!) {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: $skip, 
            limit: $limit) {
            edges {
              node {
                  id
                frontmatter {
                    slug
                    title
                    date
                    excerpt
                    tags
                    thumbnail {
                        childImageSharp{
                            fluid(maxWidth: 900){
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
              }
            }
          }
    }
`