// Components==============

import React from "react";
import styled from "styled-components";
import { Container } from "../style/Mixins";
import ChatLink from "./ChatLink/ChatLink";
// =========================

const Wrapper = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing.s10};

  @media screen and (min-width: 768px) {
    margin-top: ${({ theme: { spacing } }) => spacing.s12};
  }
`;

export default function PopularQ({ content }) {
  return (
    <Wrapper>
      <Container>
        <ChatLink img={content.headshot} questions={content.questions} />
      </Container>
    </Wrapper>
  );
}
