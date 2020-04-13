// Components==============
import React from "react";
import styled from "styled-components";
import { H2, H3, L } from "../style/Mixins";
// =========================

const Name = styled(H2)`
  margin: ${({ theme: { spacing } }) => `${spacing.s7} 0 ${spacing.s3}`};

  @media screen and (min-width: 800px) {
    margin: ${({ theme: { spacing } }) => `${spacing.s6} 0 ${spacing.s1}`};
  }
`;

const Type = styled(H3)``;

const Work = styled(L)`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  margin: ${({ theme: { spacing } }) => `${spacing.s2} 0 ${spacing.s8}`};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.wide};

  @media screen and (min-width: 800px) {
    margin: ${({ theme: { spacing } }) => `${spacing.s6} 0 ${spacing.s7}`};
  }
`;

export default function Text({ content }) {
  return (
    <>
      <Name>{content.name}</Name>
      <Type>{content.type}</Type>
      <Work>{content.work}</Work>
    </>
  );
}
