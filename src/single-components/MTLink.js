// Components==============
import { IntlContextConsumer } from "gatsby-plugin-intl";
import TransitionLink from "gatsby-plugin-transition-link";
import PropTypes from "prop-types";
import React from "react";
// =========================

export default function MTLink({ to, language, children, onClick, ...rest }) {
  return (
    <IntlContextConsumer>
      {intl => {
        const languageLink = language || intl.language;
        const link =
          intl.routed || language ? `/${languageLink}${to}` : `${to}`;

        const handleClick = e => {
          if (language) {
            localStorage.setItem("gatsby-intl-language", language);
          }
          if (onClick) {
            onClick(e);
          }
        };

        return (
          <TransitionLink
            entry={{
              delay: 0.2
            }}
            exit={{
              length: 0.2
            }}
            {...rest}
            to={link}
            onClick={handleClick}
          >
            {children}
          </TransitionLink>
        );
      }}
    </IntlContextConsumer>
  );
}

MTLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  language: PropTypes.string
};

MTLink.defaultProps = {
  to: ""
};
