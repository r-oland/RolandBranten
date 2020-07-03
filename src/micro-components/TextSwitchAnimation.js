// Components==============
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { flexUnit } from "../style/Mixins";
// =========================

const TextArea = styled(motion.span)`
  font-family: Poppins;
  ${flexUnit(4, 30, 45, "vw", "font-size")};
  font-weight: 700;
  line-height: 1;

  display: inline;
  color: ${({ theme: { white } }) => white};
`;

const variants = {
  done: { opacity: 1 },
  changing: { opacity: 0 },
};

export default function TextSwitchAnimation({ inView }) {
  // unmount with intersection observer to prevent unnecessary reerenders

  const A = "Front-end developer";
  const B = "Designer";
  const C = "Freelancer";
  const D = "Back-end developer";

  const [IsChanging, setIsChanging] = useState(false);
  const [content, setContent] = useState(1);

  useEffect(() => {
    if (inView) {
      const timer1 = setTimeout(() => {
        setIsChanging(true);
      }, 3000);
      const timer2 = setTimeout(() => {
        setContent((prev) => (prev === 4 ? 1 : prev + 1));
        setIsChanging(false);
      }, 3500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [inView, content]);

  return (
    <TextArea animate={IsChanging ? "changing" : "done"} variants={variants}>
      {content === 1
        ? A
        : content === 2
        ? B
        : content === 3
        ? C
        : content === 4
        ? D
        : A}
    </TextArea>
  );
}
