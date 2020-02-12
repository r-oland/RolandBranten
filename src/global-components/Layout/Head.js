// Components==============
import { graphql, useStaticQuery } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { ThemeContext } from "styled-components";
// =========================

export default function Head({ title, description, keywords }) {
  const intl = useIntl();
  const themeContext = useContext(ThemeContext);

  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Helmet>
      <meta name="theme-color" content={themeContext.white} />
      <meta name="author" content="Roland Branten"></meta>
      <meta name="designer" content="Roland Branten"></meta>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{`${siteTitle} | ${title}`}</title>

      <html lang={intl.locale} />
    </Helmet>
  );
}
