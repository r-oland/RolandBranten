// Components==============
import React from "react";
import Block from "../../micro-components/Block";
// =========================

export default function TextBlock({ content }) {
  return <Block content={content._rawText} />;
}
