// Components==============
import React, { useContext } from "react";
import styled from "styled-components";
import { LocaleContext } from "../global-components/Layout/Layout";
import intl from "../intl/intl";
import { flexUnit, StyledUnderline } from "../style/Mixins";
import Images from "./Images";
import Info from "./Info";

// =========================

const Wrapper = styled.div`
  position: relative;
  padding-bottom: ${({ theme: { spacing } }) => spacing.s10};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s10};

  @media screen and (min-width: 1000px) {
    max-width: 1200px;
    padding: ${({ theme: { spacing } }) => `${spacing.s4} ${spacing.s9}`};
    margin: ${({ theme: { spacing } }) => `${spacing.s11} auto ${spacing.s12}`};
  }

  @media screen and (min-width: 1600px) {
    margin: ${({ theme: { spacing } }) => `${spacing.s11} auto ${spacing.s12}`};
  }
`;

const Background = styled.div`
  position: absolute;
  bottom: 70px;
  left: -5%;
  width: 100vw;
  height: 40%;
  background: ${({ theme: { gray } }) => gray.s2.replace("1)", "0.2)")};
  z-index: -1;

  @media screen and (min-width: 768px) {
    left: -8%;
  }

  @media screen and (min-width: 1000px) {
    width: 100%;
    left: 0;
    bottom: 0;
    height: 100%;
  }
`;

const Grid = styled.div`
  align-items: center;
  grid-template-columns: ${({ left }) => (!left ? "1.5fr 1fr" : "1fr 1.5fr")};

  @media screen and (min-width: 1000px) {
    display: grid;
    text-align: ${({ left }) => !left && "right"};
  }
`;

const LinkM = styled(StyledUnderline)`
  ${flexUnit(2.5, 18, 19, "vw", "font-size")};
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

export default function Project({ left, info, images }) {
  const { lang } = useContext(LocaleContext);

  return (
    <Wrapper>
      <div id={info.url} style={{ position: "absolute", top: -200 }} />
      <Background />
      <Grid left={left}>
        <div style={{ gridColumn: !left && 2, gridRow: 1 }}>
          <Info content={info} left={left} />
        </div>
        <div>
          <Images
            style={{ gridColumn: !left && 1, gridRow: 1 }}
            left={left}
            images={images}
            alt={info.name}
            smallPage={info.smallPage}
          />
        </div>
      </Grid>
      <LinkM as="a" href={info.url} target="_blank" rel="noopener noreferrer">
        {intl[lang].workButton}
      </LinkM>
    </Wrapper>
  );
}
