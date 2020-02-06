// Components==============
import { graphql, useStaticQuery } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import React from "react";
import { Helmet } from "react-helmet";
// =========================

export default function Head({ title, description, keywords }) {
  const intl = useIntl();

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
  const primaryColor = ({ theme: { primary } }) => primary.s4;

  return (
    <Helmet>
      <meta name="theme-color" content={primaryColor} />
      <meta name="author" content="Roland Branten"></meta>
      <meta name="designer" content="Roland Branten"></meta>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{`${siteTitle} | ${title}`}</title>

      <html lang={intl.locale} />
    </Helmet>
  );
}
