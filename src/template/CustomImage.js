// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
// =========================

const Image = styled.div`
  width: 100%;
  margin: ${({ theme: { spacing } }) => `${spacing.s9} auto `};

  img {
    width: 100%;
  }

  @media screen and (min-width: 700px) {
    width: ${({ fullWidth }) => (fullWidth ? "100%" : "50%")};
  }
`;

export default function CustomImage({ fluid, image, type, name, fullWidth }) {
  return (
    <Image fullWidth={fullWidth}>
      {type === "gatsby-image" && fluid ? (
        <Img fluid={fluid} alt={name} />
      ) : type === "image" && image ? (
        <img src={image} alt={name} />
      ) : (
        <> </>
      )}
    </Image>
  );
}
