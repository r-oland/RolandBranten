// Components==============
import { graphql, useStaticQuery } from "gatsby";
import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { LocaleContext } from "./Layout";
// =========================

export default function Head({ title, description, keywords, path, noIndex }) {
  const lang = useContext(LocaleContext);
  const canonicalLoc = lang === "en" ? "en/" : "";

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
      <meta name="robots" content={noIndex}></meta>
      <link
        rel="canonical"
        href={`https://www.rolandbranten.nl/${canonicalLoc}${path}`}
      />
      <link
        rel="alternate"
        href={`https://www.rolandbranten.nl/${path}`}
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
      <html lang={lang} />
    </Helmet>
  );
}
