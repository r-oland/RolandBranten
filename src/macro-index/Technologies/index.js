// Components==============
import React, { useContext } from "react";
import styled from "styled-components";
import { LocaleContext } from "../../global-components/Layout/Layout";
import { Container, H2 } from "../../style/Mixins";
import Technologie from "./Technologie";
// =========================

const Wrapper = styled.div`
  position: relative;
`;

const Title = styled(H2)`
  text-align: center;
  color: ${({ theme: { white } }) => white};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s7};
`;

const Svg = styled.svg`
  position: absolute;
  width: 100vw;
  height: 1200px;
  top: -250px;
  z-index: -1;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12vw, 1fr));
  grid-column-gap: ${({ theme: { spacing } }) => spacing.s8};
  grid-row-gap: ${({ theme: { spacing } }) => spacing.s6};

  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    grid-column-gap: ${({ theme: { spacing } }) => spacing.s8};
    grid-row-gap: ${({ theme: { spacing } }) => spacing.s6};
  }
`;

export default function Technologies({ content }) {
  const { lang } = useContext(LocaleContext);

  const technologies = content.map((e, index) => {
    return <Technologie key={index} icon={e.icon.asset.url} name={e.name} />;
  });

  return (
    <Wrapper>
      <Container>
        <Title>{lang === "en" ? "My tech stack" : "Mijn tech stack"}</Title>
        <Grid>{technologies}</Grid>
      </Container>

      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="1536"
        height="1313.026"
        viewBox="0 0 1536 1313.026"
        preserveAspectRatio="none"
      >
        <path
          id="Path_1102"
          data-name="Path 1102"
          d="M0-278.522S375.523-61.808,793.543-101.211,1536-13.28,1536-13.28V1005.543s-251.6,60.639-593.465,0S0,1034.5,0,1034.5Z"
          transform="translate(0 278.522)"
          fill="#2b2b2b"
        />
      </Svg>
    </Wrapper>
  );
}
