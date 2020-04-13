// Components==============
import { motion } from "framer-motion";
import { Link } from "gatsby";
import React, { useContext } from "react";
import styled from "styled-components";
import {
  HamburgerContext,
  LocaleContext,
} from "../global-components/Layout/Layout";
// ========================

const Flex = styled(motion.div)`
  cursor: pointer;
  display: flex;
  position: fixed;
  z-index: 153;
  top: 23.5px;
  right: 85px;

  @media screen and (min-width: 850px) {
    position: initial;
    padding-left: ${({ theme: { spacing } }) => spacing.s8};
  }

  span {
    display: none;
    font-size: 18px;

    @media screen and (min-width: 850px) {
      display: inline;
      padding: 2px 3px 0px;
    }
  }
`;

const NL = styled.button`
  position: absolute;
  right: 0;
  font-size: 18px;
  opacity: ${({ lang }) => (lang === "nl" ? 1 : 0)};

  @media screen and (min-width: 850px) {
    position: initial;

    opacity: 1;
  }

  font-weight: ${({ theme: { fontWeight }, lang }) =>
    lang === "nl" ? fontWeight.bold : fontWeight.normal};
`;

const EN = styled.button`
  position: absolute;
  right: 0;
  font-size: 18px;
  opacity: ${({ lang }) => (lang === "en" ? 1 : 0)};

  @media screen and (min-width: 850px) {
    position: initial;
    opacity: 1;
  }

  font-weight: ${({ theme: { fontWeight }, lang }) =>
    lang === "en" ? fontWeight.bold : fontWeight.normal};
`;

export default function LanguageSwitch({ inView2, path }) {
  const { menuState } = useContext(HamburgerContext);
  const lang = useContext(LocaleContext);

  const variants = {
    visible: {
      opacity: 1,
      visibility: "visible",
    },

    hidden: {
      opacity: 0,
      visibility: "hidden",
    },
  };

  const query =
    typeof window !== "undefined" && window.matchMedia("(min-width: 850px)");

  return (
    <Link to={lang === "en" ? `${path}` : `/en${path}`}>
      <Flex
        animate={
          (inView2 === false && menuState === "closed"
            ? "visible"
            : inView2 === false && menuState === "open") || query.matches
            ? "visible"
            : (inView2 === true && menuState === "open") || query.matches
            ? "visible"
            : (inView2 === true && menuState === "closed") ||
              query.matches !== true
            ? "hidden"
            : "hidden"
        }
        variants={variants}
        initial={{
          opacity: 1,
        }}
      >
        <NL lang={lang}>NL</NL>
        <span>/</span>
        <EN lang={lang}>EN</EN>
      </Flex>
    </Link>
  );
}
