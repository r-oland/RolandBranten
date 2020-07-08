// Components==============
import BlockContent from "@sanity/block-content-to-react";
import urlBuilder from "@sanity/image-url";
import { Link } from "gatsby";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import React from "react";
import CustomImage from "../template/CustomImage";
// =========================

const sanityConfig = { projectId: "mlhs3v8e", dataset: "production" };

export default function Block({ content }) {
  const serializers = {
    // Types

    types: {
      customImage: ({ node }) => {
        const fluid = getFluidGatsbyImage(
          node?.image?.asset._ref,
          { maxWidth: 500, toFormat: "webp" },
          sanityConfig
        );

        const urlFor = (source) => urlBuilder(sanityConfig).image(source);
        const image = urlFor(node?.image?.asset?._ref).width(500);

        return (
          <CustomImage
            fluid={fluid}
            name={node?.name}
            type={node?.type}
            image={image}
          />
        );
      },
    },

    // MARKS

    marks: {
      externalLink: ({ children, mark: { link, newTab } }) => (
        <a
          href={link}
          target={newTab ? "_blank" : ""}
          rel={newTab ? "noopener noreferrer" : ""}
        >
          {children}
        </a>
      ),
      internalLink: ({ children, mark: { link = "/" } }) => (
        <Link to={link}>{children}</Link>
      ),
    },
  };

  return <BlockContent blocks={content} serializers={serializers} />;
}
