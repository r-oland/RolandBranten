// Components==============
import { motion } from "framer-motion";
import { TransitionState } from "gatsby-plugin-transition-link";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled(motion.div)`
  padding-top: ${({ theme: { spacing }, page }) =>
    page !== "homeOL" ? spacing.s9 : 0};

  @media screen and (min-width: 850px) {
    padding-top: 0;
    margin-top: ${({ theme: { spacing }, page }) =>
      page !== "homeOL" ? spacing.s9 : 0};
  }
`;

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

export default function TransitionEffect({ children, path }) {
  return (
    <TransitionState>
      {({ mount }) => {
        return (
          <Wrapper
            initial={false}
            animate={mount ? "visible" : "hidden"}
            variants={variants}
            path={path}
          >
            {children}
          </Wrapper>
        );
      }}
    </TransitionState>
  );
}
