// Components==============
import { Link } from "gatsby";
import React, { useContext } from "react";
import { LocaleContext } from "../global-components/Layout/Layout";
// =========================

export default function MTLink({ children, to }) {
  const locale = useContext(LocaleContext);
  const localeLink = locale === "nl" ? "" : "/en";

  return (
    <Link to={`${localeLink}${to}`}> {children}</Link>

    // <TransitionLink
    //   exit={{ length: 0.4 }}
    //   entry={{ delay: 0.4 }}
    //   {...rest}
    //   to={link}
    //   onClick={handleClick}
    // >

    // </TransitionLink>
  );
}

// MTLink.propTypes = {
//   children: PropTypes.node.isRequired,
//   to: PropTypes.string,
//   language: PropTypes.string
// };

// MTLink.defaultProps = {
//   to: ""
// };
