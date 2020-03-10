// Components==============
import { Link } from "gatsby";
import React, { useContext } from "react";
import { LocaleContext } from "../global-components/Layout/Layout";
// =========================

export default function MTLink({ children, to }) {
  const locale = useContext(LocaleContext);
  const localeLink = locale === "nl" ? "" : "/en";

  return <Link to={`${localeLink}${to}`}> {children}</Link>;
}
