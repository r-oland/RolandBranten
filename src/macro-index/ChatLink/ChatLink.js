// Components==============
import { motion } from "framer-motion";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { S } from "mixins";
import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { LocaleContext } from "../../global-components/Layout/Layout";
import MTLink from "../../micro-components/MTLink";
import Arrow from "./Arrow.svg";
import Cross from "./Cross.svg";
import LeftImp from "./Left.inline.svg";
import RightImp from "./Right.inline.svg";
// =========================

const ChatWrapper = styled.div`
  margin: 0 auto ${({ theme: { spacing } }) => spacing.s11};
  background: ${({ theme: { white } }) => white};
  border-radius: 20px;
  overflow: hidden;
  max-width: 900px;
  box-shadow: ${({ theme: { shadow } }) => shadow.small};
`;

const Top = styled.div`
  background: ${({ theme: { primary } }) => primary.s7};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme: { spacing } }) => ` ${spacing.s2} ${spacing.s5} `};

  @media screen and (min-width: 950px) {
    padding: ${({ theme: { spacing } }) => ` ${spacing.s5} ${spacing.s5} `};
    margin-bottom: ${({ theme: { spacing } }) => spacing.s5};
  }

  p {
    font-size: 18px;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    color: ${({ theme: { black } }) => black};
    padding-left: ${({ theme: { spacing } }) => spacing.s5};

    @media screen and (min-width: 950px) {
      padding-left: ${({ theme: { spacing } }) => spacing.s10};
      font-size: 20px;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const ArrowSVG = styled.img`
  margin-right: ${({ theme: { spacing } }) => spacing.s6};
  width: 16px;
  height: 16px;
`;

const CrossSVG = styled.img`
  width: 14px;
`;

const Circle = styled.div`
  border-radius: 100%;
  overflow: hidden;
  width: 50px;
  height: 50px;

  @media screen and (min-width: 950px) {
    border: ${({ theme: { gray } }) => gray.s9} solid 4px;
    position: absolute;
    top: -8px;
    width: 85px;
    height: 85px;
  }
`;

const Image = styled(Img)`
  width: 50px;

  @media screen and (min-width: 950px) {
    width: 80px;
  }

  position: relative;
  left: 0;
  bottom: 0;
`;

const ChatArea = styled(motion.div)`
  padding: ${({ theme: { spacing } }) =>
    ` ${spacing.s7} ${spacing.s3} ${spacing.s5}`};
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    padding: ${({ theme: { spacing } }) =>
      ` ${spacing.s6} ${spacing.s7} ${spacing.s6}`};
  }

  @media screen and (min-width: 950px) {
    padding: ${({ theme: { spacing } }) =>
      ` ${spacing.s6} ${spacing.s9} ${spacing.s6}`};
  }
`;

const BoxStyling = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 330px;
  height: 100%;
  text-align: left;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s4};

  @media screen and (min-width: 950px) {
    margin-bottom: -20px;
  }
`;

const Left = styled(BoxStyling)`
  padding: ${({ theme: { spacing } }) =>
    `${spacing.s1} ${spacing.s4} ${spacing.s1} ${spacing.s6}`};
  &:hover {
    #color {
      fill: ${({ theme: { primary } }) => primary.s4};
    }
  }
`;

const LeftSvg = styled(LeftImp)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  #color {
    fill: ${({ theme: { primary } }) => primary.s4.replace("1)", "0.4)")};
    transition: 0.2s;
  }
`;

const Right = styled(BoxStyling)`
  position: relative;
  padding: ${({ theme: { spacing } }) =>
    `${spacing.s1} ${spacing.s6} ${spacing.s1} ${spacing.s4}`};
  margin-left: auto;
  @media screen and (min-width: 950px) {
    top: -30px;
  }

  &:hover {
    #color {
      fill: ${({ theme: { primary } }) => primary.s4};
      stroke: ${({ theme: { primary } }) => primary.s4};
    }
  }
`;

const RightSvg = styled(RightImp)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  #color {
    fill: ${({ theme: { gray } }) => gray.s1};
    transition: 0.2s;
  }
`;

const Sender = styled.p`
  padding: ${({ theme: { spacing } }) => `0 ${spacing.s3} `};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  color: ${({ theme: { gray } }) => gray.s7};
  z-index: 10;
  position: relative;
`;

const Message = styled(S)`
  z-index: 10;
  padding: ${({ theme: { spacing } }) =>
    `${spacing.s1} 0 ${spacing.s3} ${spacing.s6}`};
  position: relative;
`;

const To = ({ children, to }) => {
  const isExternal = to.substring(0, 4) === "http";
  const isBlogPost = to.substring(0, 5) === "/blog";

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  } else if (isBlogPost) {
    return <Link to={to}>{children}</Link>;
  } else {
    return <MTLink to={to}>{children}</MTLink>;
  }
};

function Me({ children, to }) {
  return (
    <Left whileHover={{ x: 10 }} variants={child}>
      <To to={to}>
        <LeftSvg />
        <Sender>Me</Sender>
        <Message>{children}</Message>
      </To>
    </Left>
  );
}

function Roland({ children, to }) {
  return (
    <Right whileHover={{ x: -10 }} variants={child}>
      <To to={to}>
        <RightSvg />
        <Sender>Roland</Sender>
        <Message>{children}</Message>
      </To>
    </Right>
  );
}

export default function ChatLink({ img, questions }) {
  const { lang } = useContext(LocaleContext);
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const qna = questions.map((e, i) => {
    return (
      <React.Fragment key={i}>
        <Me to={e.link}>{e.question[lang]}</Me>
        <Roland to={e.link}>{e.answer[lang]}</Roland>
      </React.Fragment>
    );
  });

  return (
    <ChatWrapper>
      <Top>
        <Flex>
          <Circle>
            <Image fluid={img} alt="Roland-headshot" />
          </Circle>
          <p>Roland</p>
        </Flex>
        <Flex>
          <ArrowSVG src={Arrow} alt="Arrow" />
          <CrossSVG src={Cross} alt="Cross" />
        </Flex>
      </Top>
      <ChatArea
        animate={inView && "mount"}
        initial="initial"
        variants={parent}
        ref={ref}
      >
        {qna}
      </ChatArea>
    </ChatWrapper>
  );
}

const parent = {
  mount: {
    transition: { staggerChildren: 0.2 },
  },
};

const child = {
  mount: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: 20,
  },
};
