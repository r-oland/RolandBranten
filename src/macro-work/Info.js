// Components==============
import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { LocaleContext } from "../global-components/Layout/Layout";
import intl from "../intl/intl";
import { Button, H2 } from "../style/Mixins";

// =========================

const Name = styled(H2)`
  line-height: 1.2;
`;

const Work = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing.s4};

  h4 {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s1};
  }

  p {
    line-height: 1.2;
  }
`;

const Bar = styled.div`
  width: 25%;
  height: 1.6px;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background: ${({ theme: { black } }) => black};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s2};

  @media screen and (min-width: 1000px) {
    margin-left: ${({ left }) => !left && "auto"};
  }
`;

const Description = styled.p`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  margin-top: ${({ theme: { spacing } }) => spacing.s2};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
`;

const Source = styled(Button)`
  display: none;

  @media screen and (min-width: 1000px) {
    display: inline-block;
  }
  background: white;
  width: 140px;
  margin-left: ${({ theme: { spacing } }) => spacing.s4};

  &:hover {
    background: black;
    color: white;
  }
`;

const Period = styled.p`
  font-size: 22px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  color: ${({ theme: { primary } }) => primary.s5};
`;

const TechWrapper = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing.s6};

  h4 {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s1};
  }
`;

const Technologie = styled(motion.div)`
  position: relative;

  p {
    width: 400%;
    position: absolute;
    left: -200%;
    transform: translateX(9%);
    text-align: center;
    font-size: 14px;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    cursor: default;

    @media screen and (min-width: 1000px) {
      transform: ${({ left }) => (!left ? "translateX(16%)" : "translate(9%)")};
    }
  }
`;

const Flex = styled.div`
  display: flex;

  @media screen and (min-width: 1000px) {
    justify-content: ${({ left }) => !left && "flex-end"};
  }

  img {
    height: 30px;

    margin-right: ${({ theme: { spacing } }) => spacing.s3};

    @media screen and (min-width: 1000px) {
      margin-left: ${({ theme: { spacing }, left }) => !left && spacing.s3};
      margin-right: ${({ theme: { spacing }, left }) => left && spacing.s3};
    }
  }
`;

const LinkD = styled(Button)`
  display: none;

  @media screen and (min-width: 1000px) {
    display: inline-block;
    width: 140px;

    &:hover {
      background: black;
      color: white;
    }
  }
`;

export default function Info({ content, left }) {
  const { lang } = useContext(LocaleContext);

  const { name, period, source, url, description } = content;

  const technologies = content.technologies.map((e, index) => {
    return (
      <Technologie whileHover="hover" initial="initial" key={index} left={left}>
        <img src={e.icon.asset.url} key={e.name} alt={name} />
        <motion.p variants={techName}>{e.name}</motion.p>
      </Technologie>
    );
  });

  const work = content.work.map((e, index) => {
    return <p key={index}>{e}</p>;
  });

  return (
    <>
      <Period>{period}</Period>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Work>
        <h4>Work</h4>
        <Bar left={left} />
        {work}
      </Work>
      <TechWrapper>
        <h4>Tech</h4>
        <Bar left={left} />
        <Flex left={left}>{technologies}</Flex>
      </TechWrapper>
      <LinkD as="a" href={url} target="_blank" rel="noopener noreferrer">
        {intl[lang].workButton}
      </LinkD>
      {source && (
        <Source as="a" href={source} target="_blank" rel="noopener noreferrer">
          source
        </Source>
      )}
    </>
  );
}

const techName = {
  hover: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  initial: {
    opacity: 0,
  },
};
