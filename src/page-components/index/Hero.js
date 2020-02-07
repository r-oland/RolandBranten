// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  height: calc(100vh - 4em);
  background: ${({ theme: { primary } }) => primary.s4};

  @media screen and (min-width: 800px) {
    height: 100vh;
  }
`;

export default function Hero({
  title,
  description,
  keywords,
  hello,
  explanation
}) {
  return <Wrapper></Wrapper>;
}
