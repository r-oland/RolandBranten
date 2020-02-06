// Components==============
import { changeLocale, IntlContextConsumer } from "gatsby-plugin-intl";
import React from "react";
import styled from "styled-components";
// ========================

const Flex = styled.div`
  display: flex;
`;

const NL = styled.button`
  font-weight: ${({ theme: { fontWeight }, language }) =>
    language === "nl" ? fontWeight.bold : fontWeight.normal};
`;

const EN = styled.button`
  font-weight: ${({ theme: { fontWeight }, language }) =>
    language === "en" ? fontWeight.bold : fontWeight.normal};
`;

export default function LanguageSwitch() {
  return (
    <IntlContextConsumer>
      {({ language }) => {
        return (
          <Flex>
            <NL onClick={() => changeLocale("nl")} language={language}>
              NL
            </NL>
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
