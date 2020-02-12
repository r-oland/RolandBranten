// Components==============
import { motion } from "framer-motion";
import { useIntl } from "gatsby-plugin-intl";
import { Button, flexUnit, StyledUnderline } from "mixins";
import React, { useContext } from "react";
import styled from "styled-components";
import text from "../data/modal.json";
import { ModalContext } from "../global-components/Layout/Layout";
// =========================

const FormCard = styled(motion.div)`
  position: fixed;
  max-width: 720px;
  width: 90%;
  max-height: 85vh;
  overflow: auto;
  padding: ${({ theme: { spacing } }) =>
    `${spacing.s7} ${spacing.s3} ${spacing.s4}`};
  background: ${({ theme: { white } }) => white};
  border: ${({ theme: { primary } }) => primary.s4} solid 4px;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  top: 50%;
  left: 50%;
  z-index: 401;

  @media screen and (min-width: 500px) {
    padding: ${({ theme: { spacing } }) =>
      `${spacing.s8} ${spacing.s6} ${spacing.s5}`};
  }

  #cross {
    position: absolute;
    width: 30px;
    right: 9px;
    top: 9px;
    cursor: pointer;
  }
`;

const Shader = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  width: 100vw;
  height: 100vh;
  z-index: 400;
`;

const Form = styled.form`
  text-align: left;

  input {
    display: inline;
    border: none;
    border-bottom: ${({ theme: { gray } }) => gray.s6} solid 2px;
    ${flexUnit(2.5, 16, 17, "vw", "font-size")}
  }

  p,
  a {
    display: inline;
    line-height: 2;
    color: ${({ theme: { gray } }) => gray.s8};

    @media screen and (min-width: 500px) {
      ${flexUnit(2.5, 17, 18, "vw", "font-size")}
    }
  }

  textarea {
    width: 100%;
    height: 25vh;
    margin: ${({ theme: { spacing } }) => `${spacing.s4} 0 ${spacing.s4}`};
    padding: ${({ theme: { spacing } }) => spacing.s4};
  }

  #submit {
    display: block;
    margin: ${({ theme: { spacing } }) => `${spacing.s7} auto ${spacing.s1}`};
  }

  span {
    @media screen and (min-width: 500px) {
      ${flexUnit(2.5, 17, 18, "vw", "font-size")}
    }
  }
`;

const formVariants = {
  open: { opacity: 1, x: "-50%", y: "-50%", display: "block" },
  closed: {
    opacity: 0,
    x: "150%",
    y: "-50%",
    transitionEnd: {
      display: "none"
    }
  }
};

const BgVariants = {
  open: {
    opacity: 0.8,
    display: "block"
  },
  closed: {
    opacity: 0,
    transitionEnd: {
      display: "none"
    }
  }
};

export default function SForm() {
  const formName = "Contact form";

  const { modalIsOpen, handleChange } = useContext(ModalContext);

  const intl = useIntl();
  const locale = intl.locale;

  return (
    <div>
      <Shader
        animate={modalIsOpen ? "open" : "closed"}
        variants={BgVariants}
        initial={false}
        onClick={handleChange}
      />
      <FormCard
        animate={modalIsOpen ? "open" : "closed"}
        variants={formVariants}
        initial={false}
      >
        <svg
          onClick={handleChange}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.25 29.25"
          id="cross"
        >
          <path
            fill="#2b2b2b"
            d="M14.625 0A14.625 14.625 0 1029.25 14.625 14.623 14.623 0 0014.625 0zm3.705 19.92l-3.705-3.706-3.705 3.705a1.124 1.124 0 11-1.589-1.589l3.705-3.705-3.705-3.705a1.124 1.124 0 011.589-1.589l3.705 3.705 3.705-3.705a1.124 1.124 0 111.589 1.589l-3.705 3.705 3.705 3.705a1.129 1.129 0 010 1.589 1.116 1.116 0 01-1.589.001z"
          />
        </svg>
        <Form
          id={formName}
          name={formName}
          method="post"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value={formName} />
          {/* The `hidden` fields are required to support form submissions without JavaScript */}
          <p>{text[locale].greeting}</p>{" "}
          <input
            name="Name"
            id="name"
            placeholder={text[locale].yourName}
            required
          />{" "}
          <p>{text[locale].partOf}</p>{" "}
          <input
            name="Company name"
            id="companyName"
            placeholder={text[locale].CompanyName}
          />
          <p>{text[locale].reason}</p>
          <textarea
            name="Message"
            id="message"
            placeholder={text[locale].describe}
            required
          />
          <br />
          <p>{text[locale].kindWords}</p>{" "}
          <input
            type="email"
            name="Email-adres"
            id="email"
            placeholder={text[locale].email}
            required
          />
          <p>.</p>
          <br />
          <Button id="submit">{text[locale].send}</Button>
          <br />
          <p>
            {text[locale].preference}{" "}
            <a href="mailto:roland.branten@gmail.com">
              <StyledUnderline>roland.branten@gmail.com</StyledUnderline>
            </a>
          </p>
        </Form>
      </FormCard>
    </div>
  );
}