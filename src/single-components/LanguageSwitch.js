// Components==============
import { changeLocale, IntlContextConsumer } from "gatsby-plugin-intl";
import React from "react";
// ========================

const languageName = {
  en: "English",
  nl: "Nederlands"
};

export default function LanguageSwitch() {
  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        languages.map(language => (
          <button
            key={language}
            onClick={() => changeLocale(language)}
            style={{
              color: currentLocale === language ? `black` : `gray`,
              margin: 10,
              textDecoration: `underline`,
              cursor: `pointer`
            }}
          >
            {languageName[language]}
          </button>
        ))
      }
    </IntlContextConsumer>
  );
}
