// Components==============
import Img from "gatsby-image";
import React, { useContext } from "react";
import styled from "styled-components";
import { LocaleContext } from "../global-components/Layout/Layout";
import intl from "../intl/intl";
import { Button, Container, flexUnit, StyledUnderline } from "../style/Mixins";
import Images from "./Images";
import Text from "./Text";
// =========================

const Wrapper = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing.s10};
`;

const ProjectWrapper = styled.div`
  position: relative;
  padding-bottom: ${({ theme: { spacing } }) => spacing.s10};

  @media screen and (min-width: 900px) {
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

  @media screen and (min-width: 900px) {
    width: 100%;
    left: 0;
    bottom: 0;
    height: 100%;
  }
`;

const Flex = styled.div`
  @media screen and (min-width: 900px) {
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

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const LinkD = styled(Button)`
  display: none;

  @media screen and (min-width: 900px) {
    display: inline;
  }
`;

const Image = styled(Img)`
  width: 100%;

  @media screen and (min-width: 900px) {
    width: 60%;
    transform: ${({ align }) =>
      align === "left" ? "translate(-40px, 25px)" : "translate(50px, 30px)"};
  }
`;

function isEven(value) {
  if (value % 2 === 0) return false;
  else return true;
}

export default function Content({ content }) {
  const lang = useContext(LocaleContext);

  const Projects = content.jobs.map((edge, index) => {
    const align = isEven(index) ? "left" : "right";

    const textContent = {
      name: edge.name,
      type: edge.type[lang],
      work: edge.work,
    };

    const imageContent = {
      main: edge?.mainImage?.asset.fluid,
      float1: edge?.float1?.asset.fluid,
      float2: edge?.float2?.asset.fluid,
      alt: edge?.name,
    };

    return (
      <ProjectWrapper key={index}>
        <Background />
        <Flex align={align}>
          <div>
            <Text content={textContent} />
            <LinkD
              as="a"
              href={edge.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {intl[lang].workButton}
            </LinkD>
          </div>
          {imageContent?.main && !imageContent?.float1 ? (
            <Image fluid={imageContent.main} alt={edge.name} align={align} />
          ) : imageContent?.main ? (
            <Images content={imageContent} align={align} />
          ) : (
            <></>
          )}
        </Flex>
        <LinkM as="a" href={edge.url} target="_blank" rel="noopener noreferrer">
          {intl[lang].workButton}
        </LinkM>
      </ProjectWrapper>
    );
  });

  return (
    <Wrapper>
      <Container>{Projects}</Container>
    </Wrapper>
  );
}
