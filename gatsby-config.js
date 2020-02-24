require("dotenv").config();
const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Roland Branten`,
    description: `I'm a freelance web developer/designer from Eindhoven. I develop next level React websites by utilizing the JAMstack`,
    author: `Roland Branten`,
    siteUrl: `https://rolandbranten.nl`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-transition-link`,
    "gatsby-transformer-json",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [
          `/nl/dev-404-page`,
          `/nl/404`,
          `/nl/404.html`,
          `/nl/offline-plugin-app-shell-fallback`,
          `/en/dev-404-page`,
          `/en/404`,
          `/en/404.html`,
          `/en/offline-plugin-app-shell-fallback`,
          `/success`,
          `/nl/success`,
          `/en/success`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/data/intl`,
        languages: [`en`, `nl`],
        defaultLanguage: `en`,
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
        lang: `en`,
        start_url: `/`,
        background_color: `#FFC719`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
        icon: `icon/icon.png`,
        localize: [
          {
            start_url: `/nl/`,
            lang: `nl`
          }
        ]
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
