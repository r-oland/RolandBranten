// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
// =========================

const Svg = styled.svg`
  display: none;
  width: 32.5px;
  position: absolute;
  bottom: ${({ theme: { spacing } }) => spacing.s10};
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 850px) {
    display: block;
  }
`;

export default function ScrollIndicator() {
  return (
    <Svg
      width="54"
      height="96"
      viewBox="0 0 54 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="48"
        height="90"
        rx="24"
        stroke="white"
        strokeWidth="6"
      />
      <motion.rect
        x="18"
        y="47.5"
        width="17"
        height="30"
        rx="8.5"
        fill="white"
        animate={{ y: [0, -27.5, 0] }}
        transition={{
          loop: Infinity,
          duration: 1.7,
          repeatDelay: 0.4,
        }}
      />
    </Svg>
  );
}
