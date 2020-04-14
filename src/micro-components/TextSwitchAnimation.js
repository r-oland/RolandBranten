// Components==============
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { flexUnit } from "../style/Mixins";
// =========================

const TextArea = styled(motion.span)`
  font-family: Poppins;
  ${flexUnit(4, 40, 55, "vw", "font-size")};
  font-weight: 700;

  display: inline;
  color: ${({ theme: { white } }) => white};
`;

const variants = {
  done: { opacity: 1 },
  changing: { opacity: 0 }
};

export default function TextSwitchAnimation({ inView }) {
  // unmount with intersection observer to prevent unnecessary reerenders

  const A = "Developer";
  const B = "Designer";

  const [IsChanging, setIsChanging] = useState(false);
  const [Content, setContent] = useState(A);

  useEffect(() => {
    if (inView) {
      const timer1 = setTimeout(() => {
        setIsChanging(true);
      }, 4000);
      const timer2 = setTimeout(() => {
        Content === A ? setContent(B) : setContent(A);
        setIsChanging(false);
      }, 4500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [inView, Content]);

  return (
    <TextArea animate={IsChanging ? "changing" : "done"} variants={variants}>
      {Content}
    </TextArea>
  );
}