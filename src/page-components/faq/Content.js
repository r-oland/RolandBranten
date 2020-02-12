// Components==============
import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { FaqContext } from "../../global-components/Layout/Layout";
import { Container, H3 } from "../../style/Mixins";
// =========================

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 950px;
`;

const Title = styled(H3)``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr 20px;
  align-items: center;
  grid-column-gap: 10px;

  @media screen and (min-width: 500px) {
    grid-column-gap: 20px;
  }
`;

const Number = styled.p`
  grid-column: 1;
  grid-row: 1;
  font-size: 24px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
`;

const Line = styled.div`
  grid-column: 2/4;
  grid-row: 1;
  height: 0px;
  width: 100%;
  transform: translateY(2px);
  border-bottom: ${({ theme: { gray } }) => gray.s5} 2px solid;
`;

const Sideline = styled(motion.div)`
  justify-self: center;
  grid-column: 1;
  grid-row: 2/4;
  height: 100%;
  width: 3px;
  background: ${({ theme: { primary } }) => primary.s4};
`;

const Question = styled.p`
  grid-column: 2/3;
  grid-row: 2;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  padding: ${({ theme: { spacing } }) => `${spacing.s3} 0 0`};
`;

const Svg = styled.svg`
  grid-column: 3/4;
  grid-row: 2;
  cursor: pointer;
  align-self: start;
  margin-top: ${({ theme: { spacing } }) => `${spacing.s3}`};
`;

const Answer = styled(motion.div)`
  grid-column: 2/4;
  grid-row: 3;
  margin: ${({ theme: { spacing } }) => ` ${spacing.s6} 0 ${spacing.s6}`};
`;

const lineVariants = {
  open: {
    scale: 0.975,
    display: "block"
  },
  closed: {
    scale: 0.1,
    transitionEnd: {
      display: "none"
    }
  }
};

const crossVariants = {
  selected: {
    rotate: 0,
    display: "block"
  },
  ignore: {
    rotate: 90,
    transitionEnd: {
      display: "none"
    }
  }
};

const answerVariants = {
  open: {
    height: "auto",
    opacity: 1,
    visibility: "visible"
  },
  closed: {
    height: 0,
    opacity: 0,
    visibility: "hidden"
  }
};

export default function Content({ FaqList, title }) {
  const { FAQSelected, setFAQSelected } = useContext(FaqContext);

  const list = FaqList.map((edge, index) => {
    const num = index < 9 ? `0${index + 1}` : index + 1;
    const answers = edge.Answers.map((edge, index) => {
      return (
        <p className={edge.class} key={index}>
          {edge.answer}
        </p>
      );
    });

    return (
      <div key={index}>
        <Grid>
          <Number>{num}</Number>
          <Line />
          <Sideline
            animate={FAQSelected === index ? "open" : "closed"}
            variants={lineVariants}
            initial={false}
          />
          <Question>{edge.Question}</Question>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 15 15"
            onClick={() => {
              FAQSelected === index
                ? setFAQSelected(null)
                : setFAQSelected(index);
            }}
          >
            <g fill="#202020" data-name="Layer 1">
              <motion.path
                animate={FAQSelected === index ? "ignore" : "selected"}
                variants={crossVariants}
                initial={false}
                transition={{
                  duration: 0.2
                }}
                d="M5.5 0h4v14.9h-4z"
              />
              <path d="M0 9.5v-4h15v4z" />
            </g>
          </Svg>

          <Answer
            animate={FAQSelected === index ? "open" : "closed"}
            variants={answerVariants}
            initial={false}
          >
            {answers}
          </Answer>
        </Grid>
      </div>
    );
  });

  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        {list}
      </Container>
    </Wrapper>
  );
}
