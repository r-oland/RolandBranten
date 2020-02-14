// Components==============
import { useIntl } from "gatsby-plugin-intl";
import { flexUnit } from "mixins";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IEModal from "./IEModal";
// =========================

const Text = styled.p`
 ${flexUnit(2, 20, 22, "vw", "font-size")}
  line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
`;

export default function IEWarning() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const intl = useIntl();

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
        <Text>{intl.formatMessage({ id: "IEMessage" })}</Text>
      </IEModal>
    </div>
  );
}
