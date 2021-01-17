import React from 'react'; 
import {Helmet} from 'react-helmet'; 
import { StaticQuery, graphql } from 'gatsby';

export const Seo = ({ description, keywords, title, image, author }) => {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription = description || data.site.siteMetadata.description
                const metaTitle = title || data.site.siteMetadata.title 
                const metaAuthor = author || data.site.siteMetadata.author
                const metaImage = image || data.site.siteMetadata.image 
                const metaKeywords = keywords || ['procedural', 'gatsby, mdx, react, and graphql blog', 'Madrid', 'Víctor Balaguera']

                return  (
                    <Helmet
                        title={title}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription
                            },
                            {
                                name: `og:title`,
                                content: metaTitle
                            },
                            {
                                property: `og:description`,
                                content: metaDescription,
                            },
                            {
                                name: `og:image`,
                                content: metaImage
                            },
                            {
                                property: `og:type`,
                                content: `website`, 
                            },
                            {
                                name: `twitter:card`,
                                content: `summary_large_image`,
                            },
                            {
                                name: `twitter:creator`,
                                content: metaAuthor,
                            },
                            {
                                name: `twitter:title`,
                                content: metaTitle, 
                            },
                            {
                                name: `twitter:description`,
                                content: metaDescription,
                            }, 
                            {
                                name: `twitter:image`,
                                content: metaImage,
                            }, 
                        ].concat(
                            metaKeywords && metaKeywords.length > 0 ? {
                                name: `keywords`,
                                content: metaKeywords.join(`, `),
                            } : []
                        )
                        }
                    />
                )
            }}
        />
    )
};

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                author
                image
            }
        }
    }
`;