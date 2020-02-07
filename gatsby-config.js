require("dotenv").config();
const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Roland Branten`,
    description: `undefined`,
    author: `Roland Branten`,
    siteUrl: `https://rolandbranten.nl/`
  },
  plugins: [
    // `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-transition-link`,
    "gatsby-transformer-json",
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/data/intl`,
        // supported language
        languages: [`en`, `nl`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets: path.join(__dirname, "src/assets"),
        mixins: path.join(__dirname, "src/style/Mixins")
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Roland Branten`,
        short_name: `Roland`,
        start_url: `https://rolandbranten.nl/`,
        background_color: `#FFC719`,
        theme_color: `#FFC719`,
        display: `standalone`,
        icon: `icon/icon.png`
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    }
  ]
};
