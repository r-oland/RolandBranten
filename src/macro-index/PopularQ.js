// Components==============

import React from "react";
import styled from "styled-components";
import ChatLink from "../micro-components/ChatLink/ChatLink";
import { Container, H2 } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing.s12};
`;

const Title = styled(H2)`
  text-align: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s6};
`;

export default function PopularQ({ content }) {
  return (
    <Wrapper>
      <Container>
        <Title>{content.title}</Title>
        <ChatLink img={content.headshot} questions={content.questions} />
      </Container>
    </Wrapper>
  );
}
