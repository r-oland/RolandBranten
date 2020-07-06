// Components==============
import { Link } from "gatsby";
import React, { useContext } from "react";
import { LocaleContext } from "../global-components/Layout/Layout";
// =========================

export default function MTLink({ children, to }) {
  const { lang } = useContext(LocaleContext);
  const localeLink = lang === "nl" ? "" : "/en";

  return <Link to={`${localeLink}${to}`}> {children}</Link>;
}
