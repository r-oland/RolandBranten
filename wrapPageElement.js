import React from "react";
import Layout from "./src/global-components/Layout/Layout";

export default function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
