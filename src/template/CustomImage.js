// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
// =========================

const Image = styled(Img)`
  width: 300px;
`;

export default function CustomImage({ fluid, image, type, name }) {
  return (
    <>
      {type === "gatsby-image" && fluid ? (
        <Image fluid={fluid} alt={name} />
      ) : type === "image" && image ? (
        <img src={image} alt={name} />
      ) : (
        <> </>
      )}
    </>
  );
}
