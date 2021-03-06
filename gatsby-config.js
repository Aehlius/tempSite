module.exports = {
  siteMetadata: {
    title: `Portfolio Website`,
    description: `Work in Progress`,
    author: `@aehlius`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-sidebar-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f9f9f9`,
        theme_color: `#f9f9f9`,
        display: `minimal-ui`,
        icon: `src/images/ellipse.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
