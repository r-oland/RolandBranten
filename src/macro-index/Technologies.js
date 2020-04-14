// Components==============
import Divider3DImp from "assets/Divider3D.inline.svg";
import Divider3MImp from "assets/Divider3M.inline.svg";
import React, { useContext } from "react";
import styled from "styled-components";
import { LocaleContext } from "../global-components/Layout/Layout";
import Block from "../micro-components/Block";
import { Container, H2 } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  position: relative;

  color: ${({ theme: { white } }) => white};

  p {
    line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  }

  img {
    width: 50px;
  }

  #sanity {
    width: 45px;
  }

  margin-bottom: ${({ theme: { spacing } }) => spacing.s12};
`;

const Title = styled(H2)`
  text-align: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s6};
`;

const TextWrapper = styled.div`
  margin: 0 auto ${({ theme: { spacing } }) => spacing.s7};
  max-width: 900px;

  p {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
  }
`;

const NameTags = styled.p`
  font-family: Poppins;
  font-weight: 700;
  font-size: 19px;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
  @media screen and (min-width: 900px) {
    grid-row: 1;
  }
`;

const Grid = styled.div`
  max-width: 900px;
  display: Grid;
  justify-content: center;
  justify-items: center;
  align-items: center;

  @media screen and (min-width: 900px) {
    justify-content: initial;
    margin: 0 auto;
    transform: translateX(-1.5vw);
  }
`;

const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 125px;

  @media screen and (min-width: 900px) {
    grid-row: 2;
    grid-column: 1;
  }
`;

const ToolWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 125px;
  @media screen and (min-width: 900px) {
    grid-row: 2;
    grid-column: 3;
  }
`;

const Netlify = styled.img`
  transform: scale(1.2);

  @media screen and (min-width: 900px) {
    grid-row: 2;
    grid-column: 5;
  }
`;

const Data = styled(NameTags)`
  @media screen and (min-width: 900px) {
    grid-column: 1;
  }
`;

const Tools = styled(NameTags)`
  @media screen and (min-width: 900px) {
    grid-column: 3;
  }
`;

const Deploy = styled(NameTags)`
  @media screen and (min-width: 900px) {
    grid-column: 5;
  }
`;

const Arrow1 = styled.svg`
  width: 20px;
  transform: rotate(90deg);
  margin: ${({ theme: { spacing } }) => `${spacing.s7} 0 ${spacing.s5}`};
  @media screen and (min-width: 900px) {
    grid-row: 2;
    transform: rotate(0deg);
    grid-column: 2;
  }
`;
const Arrow2 = styled.svg`
  width: 20px;
  transform: rotate(90deg);
  margin: ${({ theme: { spacing } }) => `${spacing.s7} 0 ${spacing.s5}`};
  @media screen and (min-width: 900px) {
    grid-row: 2;
    grid-column: 4;
    transform: rotate(0deg);
  }
`;

const Divider3DSvg = styled(Divider3DImp)`
  display: none;
  position: absolute;
  width: 100vw;
  bottom: -125px;
  z-index: -1;

  @media screen and (min-width: 900px) {
    display: block;
  }
`;

const Divider3MSvg = styled(Divider3MImp)`
  position: absolute;
  width: 100vw;
  bottom: -125px;
  z-index: -1;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export default function Technologies({ content }) {
  const lang = useContext(LocaleContext);

  return (
    <Wrapper>
      <Container>
        <Title>{content.title[lang]}</Title>
        <TextWrapper>
          <Block content={content.text[lang]} />
        </TextWrapper>
        <Grid>
          <Data>Data</Data>
          <DataWrapper>
            <img src={content.illustrations.data1.asset.url} alt="GraphQL" />
            <img
              src={content.illustrations.data2.asset.url}
              alt="Sanity"
              id="sanity"
            />
          </DataWrapper>
          <Arrow1 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.75 28.75">
            <path
              id="Icon_material-keyboard-arrow-right"
              fill="#e8e8e8"
              d="M12.88 34l10.98-11-10.97-11 3.37-3.38L30.64 23 16.26 37.37z"
              transform="translate(-12.88 -8.63)"
            />
          </Arrow1>
          <Tools>Tools</Tools>
          <ToolWrapper>
            <img src={content.illustrations.tools1.asset.url} alt="Gatsby" />
            <img src={content.illustrations.tools2.asset.url} alt="React" />
          </ToolWrapper>
          <Arrow2 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.75 28.75">
            <path
              id="Icon_material-keyboard-arrow-right"
              fill="#e8e8e8"
              d="M12.88 34l10.98-11-10.97-11 3.37-3.38L30.64 23 16.26 37.37z"
              transform="translate(-12.88 -8.63)"
            />
          </Arrow2>
          <Deploy>Deploy</Deploy>

          <Netlify src={content.illustrations.deploy.asset.url} alt="Netlify" />
        </Grid>
      </Container>
      <Divider3DSvg />
      <Divider3MSvg />
    </Wrapper>
  );
}