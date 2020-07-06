// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(147deg)
    brightness(104%) contrast(101%);

  &:hover {
    filter: invert(78%) sepia(91%) saturate(2470%) hue-rotate(343deg)
      brightness(104%) contrast(98%);
  }

  img {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s1};
    height: 45px;
  }

  p {
    font-size: 15px;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    position: absolute;
    bottom: -22.5px;
    width: 200%;
  }
`;

export default function Technologie({ icon, name }) {
  return (
    <Wrapper
      whileHover="hover"
      variants={motionIcon}
      initial="initial"
      whileTap="tap"
    >
      <img src={icon} alt={name} />
      <motion.p variants={motionName}>{name}</motion.p>
    </Wrapper>
  );
}

const motionIcon = {
  initial: { scale: 1, opacity: 0.8 },
  hover: { scale: 1.1, opacity: 1 },
  tap: { scale: 0.9, opacity: 1 },
};

const motionName = {
  initial: { opacity: 0 },
  hover: { opacity: 1 },
};
