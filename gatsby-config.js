module.exports = {
  siteMetadata: {
    title: `Салон краси BloomMe`,
    menuItems: ["Головна", "Послуги", "Команда", "Записатись"],
    address: "Львів, вул.Болгарська, 1",
    phone: "+380(067)123-45-67",
    description: `Ваша краса - наша професія. З любов'ю до Вас`,
    author: `OksLutsiv`,
  },
  pathPrefix: "/facial-demo",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#113978, #f51f89`,
        display: `minimal-ui`,
        icon: `src/images/lotus-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
