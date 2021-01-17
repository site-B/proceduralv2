module.exports = {
  siteMetadata: {
    title: "procedural",
    description: "Pet project of a blog. Made with graphql, gatsby, and React. Expect many surprises.",
    image: "/office.jpg",
    twitterUsername: "@balaguera",
    author: "Víctor Balaguera"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Playfair Display`,
          `serif\:400,400i,600i,900`,
          `Roboto Mono`, 
          `monospace\: 400,500,700`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `procedural`,
        short_name: `procedural`,
        start_url: `/`,
        background_color: `#121011`,
        theme_color: `#8a0c1f`,
        display: `standalone`,
        icon: `src/images/logo.png`, 
      },
    },
  ],
}
// could I add as many pages as needed with source-filesystem? 

//gatsby-transformer-sharp https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/
//gatsby-plugin-sharp
//gatsby-plugin-mdx https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/
// Gatsby remark plugins: https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#installation
// gatsby-remark-images https://www.gatsbyjs.com/plugins/gatsby-remark-images/?=gatsby-remark-
// gatsby-plugin-google-fonts https://www.gatsbyjs.com/plugins/gatsby-plugin-google-fonts/
// gatsby with styled components https://www.gatsbyjs.com/docs/how-to/styling/styled-components/