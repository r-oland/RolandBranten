// Components==============
import { motion } from "framer-motion";
import { Link } from "gatsby";
import { useMediaQ } from "hooks-lib";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  HamburgerContext,
  LocaleContext,
  ObserverContext,
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

const NL = styled.p`
  color: ${({ whiteFont }) => whiteFont && "white"};
  display: inline;
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

const EN = styled.p`
  color: ${({ whiteFont }) => whiteFont && "white"};
  display: inline;
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

const EnglishMessage = styled.p`
  position: absolute;
  right: -60px;
  bottom: -110px;
  width: 80vw;
  font-size: 14px;
  text-align: right;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  pointer-events: none;
  background: ${({ theme: { white } }) => white};
  padding: ${({ theme: { spacing } }) => `${spacing.s4} ${spacing.s4}`};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  box-shadow: ${({ theme: { shadow } }) => shadow.small};

  @media screen and (min-width: 350px) {
    width: 290px;
    bottom: -90px;
  }
  @media screen and (min-width: 850px) {
    right: 0;
    bottom: -80px;
  }
`;

const Switch = ({ children, path }) => {
  const { lang, setLang } = useContext(LocaleContext);
  const [displayMessage, setDisplayMessage] = useState(false);

  const toggleDislayMessage = () => {
    setDisplayMessage(true);
    setTimeout(() => {
      setDisplayMessage(false);
    }, 3500);
  };

  if (!path || path === "/blog/") {
    return (
      <button
        onClick={() => {
          if (lang === "en") {
            setLang("nl");
            toggleDislayMessage();
          }

          if (lang === "nl") setLang("en");
        }}
        style={{ position: "relative" }}
      >
        {children}
        {displayMessage && (
          <EnglishMessage>
            Blog posts are only available in english
          </EnglishMessage>
        )}
      </button>
    );
  } else {
    return (
      <Link to={lang === "en" ? `${path}` : `/en${path}`}>{children}</Link>
    );
  }
};

export default function LanguageSwitch({ path }) {
  const { menuState } = useContext(HamburgerContext);
  const { lang, isBlogPage } = useContext(LocaleContext);
  const { inView, inView2 } = useContext(ObserverContext);
  const query = useMediaQ("min", 850);

  const whiteFont = query && isBlogPage && !inView;

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

  return (
    <Flex
      animate={
        (inView2 === false && menuState === "closed"
          ? "visible"
          : inView2 === false && menuState === "open") || query
          ? "visible"
          : (inView2 === true && menuState === "open") || query
          ? "visible"
          : (inView2 === true && menuState === "closed") || query !== true
          ? "hidden"
          : "hidden"
      }
      variants={variants}
      initial={{
        opacity: 1,
      }}
    >
      <Switch path={path}>
        <NL lang={lang} whiteFont={whiteFont}>
          NL
        </NL>
        <span style={{ color: whiteFont && "white" }}>/</span>
        <EN lang={lang} whiteFont={whiteFont}>
          EN
        </EN>
      </Switch>
    </Flex>
  );
}
