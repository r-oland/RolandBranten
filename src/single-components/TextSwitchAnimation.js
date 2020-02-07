// Components==============
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// =========================

const TextArea = styled(motion.span)``;

const variants = {
  done: { opacity: 1 },
  changing: { opacity: 0 }
};

export default function TextSwitchAnimation() {
  // unmount with intersection observer to prevent unnecessary reerenders

  const A = "A";
  const B = "B";

  const [IsChanging, setIsChanging] = useState(false);
  const [Content, setContent] = useState(A);

  useEffect(() => {
    setTimeout(() => {
      setIsChanging(true);
    }, 4000);
    setTimeout(() => {
      Content === A ? setContent(B) : setContent(A);
      setIsChanging(false);
    }, 4500);
  }, [Content]);

  return (
    <TextArea animate={IsChanging ? "changing" : "done"} variants={variants}>
      {Content}
    </TextArea>
  );
}
