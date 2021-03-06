require("dotenv").config();
const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Roland Branten`,
    description: `I'm a freelance web developer/designer from Eindhoven. I develop next level React websites by utilizing the JAMstack`,
    author: `Roland Branten`,
    siteUrl: `https://rolandbranten.nl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "mlhs3v8e",
        dataset: "production",
        token: process.env.SANITY_TOKEN,
        graphqlTag: "default",
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [
          `/*/dev-404-page`,
          `/*/404`,
          `/*/404.html`,
          `/*/offline-plugin-app-shell-fallback`,
          `/*/success`,
          `/success`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets: path.join(__dirname, "src/assets"),
        mixins: path.join(__dirname, "src/style/Mixins"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Roland Branten`,
        short_name: `Roland`,
        lang: `nl`,
        start_url: `/`,
        background_color: `#FFC719`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
        icon: `icon/icon.png`,
        localize: [
          {
            start_url: `/en/`,
            lang: `en`,
          },
        ],
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
};
