// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing.s8};
`;

export default function BlockWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
