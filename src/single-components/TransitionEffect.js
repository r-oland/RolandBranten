// Components==============
import { motion } from "framer-motion";
import { TransitionState } from "gatsby-plugin-transition-link";
import React from "react";
// =========================

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

export default function TransitionEffect({ children }) {
  return (
    <TransitionState>
      {({ mount }) => {
        return (
          <motion.div
            initial={false}
            animate={mount ? "visible" : "hidden"}
            variants={variants}
          >
            {children}
          </motion.div>
        );
      }}
    </TransitionState>
  );
}
