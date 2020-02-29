// Components==============
import { graphql, useStaticQuery } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import React from "react";
import { Helmet } from "react-helmet";
// =========================

export default function Head({ title, description, keywords, path }) {
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

  return (
    <Helmet>
      <meta name="theme-color" content="#FFFFFF" />
      <meta name="author" content="Roland Branten"></meta>
      <meta name="designer" content="Roland Branten"></meta>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={`https://www.rolandbranten.nl/${path}`} />
      <link
        rel="alternate"
        href={`https://www.rolandbranten.nl/nl/${path}`}
        hreflang="nl"
      />
      <link
        rel="alternate"
        href={`https://www.rolandbranten.nl/en/${path}`}
        hreflang="en"
      />
      <link
        rel="alternate"
        href={`https://www.rolandbranten.nl/en/${path}`}
        hreflang="x-default"
      />
      <title>{`${siteTitle} | ${title}`}</title>

      <html lang={intl.locale} />
    </Helmet>
  );
}
