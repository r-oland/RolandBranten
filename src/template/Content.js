// Components==============
import React from "react";
import styled from "styled-components";
import Block from "../micro-components/Block";
import { BlockStyling } from "../micro-components/BlockStyling";
import { Container } from "../style/Mixins";
import Author from "./Author";
// =========================

const Wrapper = styled(BlockStyling)`
  margin: 0 auto;
  margin-top: ${({ theme: { spacing } }) => `calc(15vh - ${spacing.s9})`};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s10};
  max-width: 750px;
  overflow: hidden;
`;

export default function Content({ content }) {
  return (
    <Container>
      <Wrapper>
        <Block content={content} />
        <Author />
      </Wrapper>
    </Container>
  );
}
