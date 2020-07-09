// Components==============
import React, { useContext } from "react";
import styled from "styled-components";
import { LocaleContext } from "../../global-components/Layout/Layout";
import { Container, H2 } from "../../style/Mixins";
import DesignTech from "./DesignTech";
import DevTech from "./DevTech";
import { Bottom, Top } from "./Svg";
// =========================

const Wrapper = styled.div`
  background: ${({ theme: { gray } }) => gray.s9};
`;

const Title = styled(H2)`
  position: relative;
  text-align: center;
  color: ${({ theme: { white } }) => white};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s7};
  padding-top: 2em;

  @media screen and (min-width: 500px) {
    padding-top: 0;
  }
`;

const Grid = styled.div`
  display: grid;

  @media screen and (min-width: 700px) {
    justify-items: center;
    justify-content: center;
    grid-template-columns: 1fr 1px 1fr;
  }

  @media screen and (min-width: 1300px) {
    grid-template-columns: 1fr 1px 1fr 1px 1fr 1px 1fr;
  }
`;

export default function Technologies({ content }) {
  const { lang } = useContext(LocaleContext);

  return (
    <div style={{ position: "relative" }}>
      <Top />
      <Wrapper>
        <Container>
          <Title>{lang === "en" ? "My tech stack" : "Mijn tech stack"}</Title>
          <Grid>
            <DevTech content={content.development} />
          </Grid>
          <DesignTech content={content.design} />
        </Container>
      </Wrapper>
      <Bottom />
    </div>
  );
}
