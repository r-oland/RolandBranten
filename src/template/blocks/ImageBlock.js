// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
// =========================

const Image = styled(Img)`
  width: 300px;
`;

export default function ImageBlock({ content }) {
  return (
    <>
      {content.image ? (
        <Image fluid={content.image.asset.fluid} alt={content.name} />
      ) : (
        <> </>
      )}
    </>
  );
}
