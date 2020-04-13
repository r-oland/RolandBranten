// Components==============
import { flexUnit } from "mixins";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import intl from "../../../intl/intl.js";
import { LocaleContext } from "../Layout";
import IEModal from "./IEModal";
// =========================

const Text = styled.p`
 ${flexUnit(2, 20, 22, "vw", "font-size")}
  line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
`;

export default function IEWarning() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const lang = useContext(LocaleContext);

  useEffect(() => {
    const isIE = /*@cc_on!@*/ false || !!document.documentMode;
    setModalIsOpen(isIE);
  }, []);

  const handleChange = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <IEModal modalIsOpen={modalIsOpen} handleChange={handleChange}>
        <Text>{intl[lang].IEMessage}</Text>
      </IEModal>
    </div>
  );
}
