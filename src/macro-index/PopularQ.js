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

export default function PopularQ({
  title7,
  img,
  question1,
  answer1,
  question2,
  answer2,
  question3,
  answer3,
}) {
  return (
    <Wrapper>
      <Container>
        <Title>{title7}</Title>
        <ChatLink
          img={img}
          question1={question1}
          answer1={answer1}
          question2={question2}
          answer2={answer2}
          question3={question3}
          answer3={answer3}
        />
      </Container>
    </Wrapper>
  );
}
