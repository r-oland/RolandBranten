// Components==============
import React from "react";
import styled from "styled-components";
import { Container } from "../style/Mixins";
import ImageBlock from "./blocks/ImageBlock";
import TextBlock from "./blocks/TextBlock";
import BlockWrapper from "./BlockWrapper";
// =========================

const Wrapper = styled(Container)`
  margin-top: ${({ theme: { spacing } }) => spacing.s4};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s10};
`;

export default function ContentBlock({ content }) {
  const blogContent = content.map((e, index) => {
    const type = e.__typename;

    return (
      <BlockWrapper key={index}>
        {type === "SanityTextBlock" ? (
          <TextBlock content={e} />
        ) : type === "SanityImageBlock" ? (
          <ImageBlock content={e} />
        ) : (
          <>Unknown block type</>
        )}
      </BlockWrapper>
    );
  });

  return <Wrapper>{blogContent}</Wrapper>;
}
