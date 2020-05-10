// Components==============
import { motion } from "framer-motion";
import Img from "gatsby-image";
import { S } from "mixins";
import React, { useContext } from "react";
import styled from "styled-components";
import {
  FaqContext,
  LocaleContext,
} from "../../global-components/Layout/Layout";
import MTLink from "../../micro-components/MTLink";
import Arrow from "./Arrow.svg";
import Cross from "./Cross.svg";
import LeftImp from "./Left.inline.svg";
import RightImp from "./Right.inline.svg";
// =========================

const ChatWrapper = styled.div`
  margin: 0 auto ${({ theme: { spacing } }) => spacing.s12};
  background: ${({ theme: { white } }) => white};
  border-radius: 20px;
  overflow: hidden;
  max-width: 900px;
  box-shadow: ${({ theme: { shadow } }) => shadow.small};
`;

const Top = styled.div`
  background: ${({ theme: { gray } }) => gray.s9};
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
    color: white;
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
    border: ${({ theme: { gray } }) => gray.s9} solid 6px;
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

const ChatArea = styled.div`
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
  padding: ${({ theme: { spacing } }) =>
    `${spacing.s1} ${spacing.s6} ${spacing.s1} ${spacing.s4}`};
  margin-left: auto;
  @media screen and (min-width: 950px) {
    transform: translateY(-30px);
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
    `${spacing.s1} 0 ${spacing.s1} ${spacing.s6}`};
  position: relative;
`;

export default function ChatLink({ img, questions }) {
  const { setFAQSelected } = useContext(FaqContext);
  const lang = useContext(LocaleContext);

  function Me({ children, to, faq }) {
    return (
      <Left
        onClick={() => {
          setFAQSelected(faq);
        }}
      >
        <MTLink to={to}>
          <LeftSvg />
          <Sender>Me</Sender>
          <Message>{children}</Message>
        </MTLink>
      </Left>
    );
  }

  function Roland({ children, to, faq }) {
    return (
      <Right
        onClick={() => {
          setFAQSelected(faq);
        }}
      >
        <MTLink to={to}>
          <RightSvg />
          <Sender>Roland</Sender>
          <Message>{children}</Message>
        </MTLink>
      </Right>
    );
  }

  const qna = questions.map((e, i) => {
    const faqSelector = i === 0 ? 1 : i === 1 ? 0 : i === 2 ? 2 : null;

    return (
      <div key={i}>
        <Me to="/faq" faq={faqSelector}>
          {e.question[lang]}
        </Me>
        <Roland to="/faq" faq={faqSelector}>
          {e.answer[lang]}
        </Roland>
      </div>
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
      <ChatArea>{qna}</ChatArea>
    </ChatWrapper>
  );
}