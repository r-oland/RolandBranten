// Components==============
import React from "react";
import styled from "styled-components";
import { Grid, Wrapper } from "./DevTech";
import Technologie from "./Technologie";
// =========================

const DesignWrapper = styled(Wrapper)`
  margin: 0 auto !important;
`;

const Bar = styled.div`
  height: 1px;
  width: 60%;
  margin: 0 auto;
  background: white;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s6};
`;

const DesignGrid = styled(Grid)`
  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: center;

    img {
      margin: 0 2.5em;
    }
  }
`;

export default function DesignTech({ content }) {
  const technologies = content.map((e, index) => {
    return <Technologie key={index} icon={e.icon.asset.url} name={e.name} />;
  });

  return (
    <DesignWrapper>
      <Bar />
      <h3>Design</h3>
      <DesignGrid>{technologies}</DesignGrid>
    </DesignWrapper>
  );
}
