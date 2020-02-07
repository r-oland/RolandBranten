// Components==============
import { changeLocale, IntlContextConsumer } from "gatsby-plugin-intl";
import React, { useContext } from "react";
import styled from "styled-components";
import { HamburgerContext } from "../global-components/Layout/Layout";
// ========================

const Flex = styled.div`
  cursor: pointer;
  display: flex;
  position: ${({ menuState }) => (menuState === "open" ? "fixed" : "absolute")};
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
  opacity: ${({ language }) => (language === "nl" ? 1 : 0)};

  @media screen and (min-width: 850px) {
    position: initial;

    opacity: 1;
  }

  font-weight: ${({ theme: { fontWeight }, language }) =>
    language === "nl" ? fontWeight.bold : fontWeight.normal};
`;

const EN = styled.button`
  position: absolute;
  right: 0;
  font-size: 18px;
  opacity: ${({ language }) => (language === "en" ? 1 : 0)};

  @media screen and (min-width: 850px) {
    position: initial;
    opacity: 1;
  }

  font-weight: ${({ theme: { fontWeight }, language }) =>
    language === "en" ? fontWeight.bold : fontWeight.normal};
`;

export default function LanguageSwitch() {
  const { menuState } = useContext(HamburgerContext);

  return (
    <IntlContextConsumer>
      {({ language }) => {
        return (
          <Flex
            onClick={() =>
              language === "en" ? changeLocale("nl") : changeLocale("en")
            }
            menuState={menuState}
          >
            <NL language={language}>NL</NL>
            <span>/</span>
            <EN onClick={() => changeLocale("en")} language={language}>
              EN
            </EN>
          </Flex>
        );
      }}
    </IntlContextConsumer>
  );
}
