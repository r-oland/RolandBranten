// Components==============

import React from "react";
import styled from "styled-components";
import { Container } from "../style/Mixins";
import ChatLink from "./ChatLink/ChatLink";
// =========================

const Wrapper = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing.s13};
`;

// const Title = styled(H2)`
//   text-align: center;
//   margin-bottom: ${({ theme: { spacing } }) => spacing.s6};
//   color: ${({ theme: { white } }) => white};
// `;

export default function PopularQ({ content }) {
  return (
    <Wrapper>
      <Container>
        {/* <Title>{content.title}</Title> */}
        <ChatLink img={content.headshot} questions={content.questions} />
      </Container>
    </Wrapper>
  );
}
