// Components==============
import React, { useContext } from "react";
import styled from "styled-components";
import intl from "../data/intl/intl.json";
import Head from "../global-components/Layout/Head";
import { LocaleContext } from "../global-components/Layout/Layout";
// ========================

const Wrapper = styled.div`
  display: flex;
  height: 80vh;
  max-width: 800px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default function Success() {
  const locale = useContext(LocaleContext);

  return (
    <>
      <Head title="Success" path="success" />
      <Wrapper>
        <h2>{intl[locale].success}</h2>;
      </Wrapper>
    </>
  );
}
