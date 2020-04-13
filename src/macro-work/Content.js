// Components==============
import React from "react";
import styled from "styled-components";
import { Button, Container, flexUnit, StyledUnderline } from "../style/Mixins";
import { Images, Text } from "./TextImages";
// =========================

const Wrapper = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing.s10};
`;

const ProjectWrapper = styled.div`
  position: relative;
  padding-bottom: ${({ theme: { spacing } }) => spacing.s10};

  @media screen and (min-width: 800px) {
    max-width: 1200px;
    padding: ${({ theme: { spacing } }) => `${spacing.s4} ${spacing.s9}`};
    margin: ${({ theme: { spacing } }) => `${spacing.s10} auto ${spacing.s11}`};
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

  @media screen and (min-width: 800px) {
    width: 100%;
    left: 0;
    bottom: 0;
    height: 100%;
  }
`;

const Flex = styled.div`
  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: space-between;

    flex-direction: ${({ align }) =>
      align === "left" ? "row-reverse" : "row"};
  }
`;

const LinkM = styled(StyledUnderline)`
  ${flexUnit(2.5, 18, 19, "vw", "font-size")};
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

const LinkD = styled(Button)`
  display: none;

  @media screen and (min-width: 800px) {
    display: inline;
  }
`;

export default function Content({
  button,
  BizData,
  BrantenData,
  ComponentsData,
  RogierData,
  biz,
  bizFloat,
  bizFloat2,
  Branten,
  BrantenFloat,
  BrantenFloat2,
  Components,
  ComponentsFloat,
  ComponentsFloat2,
  Rogier,
  RogierFloat,
  RogierFloat2,
}) {
  const Project = (text, image, link, align) => {
    return (
      <ProjectWrapper>
        <Background />
        <Flex align={align}>
          <div>
            {text}
            <LinkD as="a" href={link} target="_blank" rel="noopener noreferrer">
              {button}
            </LinkD>
          </div>
          {image}
        </Flex>
        <LinkM as="a" href={link} target="_blank" rel="noopener noreferrer">
          {button}
        </LinkM>
      </ProjectWrapper>
    );
  };

  const BizText = Text(BizData);
  const BizImages = Images(biz, bizFloat, bizFloat2, "Biz-logistics", "right");

  const BrantenText = Text(BrantenData);
  const BrantenImages = Images(
    Branten,
    BrantenFloat,
    BrantenFloat2,
    "Branten-maatwerk",
    "left"
  );

  const ComponentsText = Text(ComponentsData);
  const ComponentsImages = Images(
    Components,
    ComponentsFloat,
    ComponentsFloat2,
    "Components",
    "right"
  );

  const RogierText = Text(RogierData);
  const RogierImages = Images(
    Rogier,
    RogierFloat,
    RogierFloat2,
    "Components",
    "right"
  );

  const BizLogisticsSection = Project(
    BizText,
    BizImages,
    "https://www.bizlogistics.nl/",
    "left"
  );

  const BrantenMaatwerkSection = Project(
    BrantenText,
    BrantenImages,
    "https://www.brantenmaatwerk.nl/",
    "right"
  );

  const ComponentsSection = Project(
    ComponentsText,
    ComponentsImages,
    "https://componentsrb.netlify.com/",
    "left"
  );

  const RogierSection = Project(
    RogierText,
    RogierImages,
    "https://rogierovervliet.nl/",
    "right"
  );

  return (
    <Wrapper>
      <Container>
        {RogierSection}
        {BizLogisticsSection}
        {BrantenMaatwerkSection}
        {ComponentsSection}
      </Container>
    </Wrapper>
  );
}
