// Components==============
import React, { useContext } from "react";
import styled from "styled-components";
import { LocaleContext } from "../global-components/Layout/Layout";
import { Container } from "../style/Mixins";
import Project from "./Project";
// =========================

const Wrapper = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing.s10};
`;

function isEven(value) {
  if (value % 2 === 0) return false;
  else return true;
}

export default function Content({ content }) {
  const { lang } = useContext(LocaleContext);

  const Projects = content.map((edge, index) => {
    const left = !isEven(index);

    const info = {
      name: edge.name,
      period: edge.period,
      url: edge.url,
      source: edge.source,
      technologies: edge.technologies,
      type: edge.type,
      work: edge.work,
      smallPage: edge.smallPage,
      description: edge.description[lang],
    };

    const images = {
      main: edge?.mainImage?.asset.fluid,
      float1: edge?.float1?.asset.fluid,
      float2: edge?.float2?.asset.fluid,
    };

    return <Project key={index} info={info} images={images} left={left} />;
  });

  return (
    <Wrapper>
      <Container>{Projects}</Container>
    </Wrapper>
  );
}
