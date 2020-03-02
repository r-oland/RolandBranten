// Components==============
import { Location } from "@reach/router";
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

  const noIndex = location => {
    const url = location.pathname;

    if (url.includes("nl") || url.includes("en")) {
      return ``;
    } else {
      return `noindex`;
    }
  };

  return (
    <Location>
      {({ location }) => (
        <Helmet>
          <meta name="robots" content={noIndex(location)} />
          <meta name="theme-color" content="#FFFFFF" />
          <meta name="author" content="Roland Branten"></meta>
          <meta name="designer" content="Roland Branten"></meta>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <link
            rel="canonical"
            href={`https://www.rolandbranten.nl/${intl.locale}/${path}`}
          />
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
            href={`https://www.rolandbranten.nl/${path}`}
            hreflang="x-default"
          />
          <title>{`${siteTitle} | ${title}`}</title>
          <html lang={intl.locale} />
        </Helmet>
      )}
    </Location>
  );
}
