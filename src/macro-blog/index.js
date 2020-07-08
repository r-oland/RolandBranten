// Components==============
import { motion } from "framer-motion";
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Container } from "../style/Mixins";
import Image from "./Image";
import Info from "./Info";
// =========================

const Wrapper = styled(Container)`
  margin-top: ${({ theme: { spacing } }) => spacing.s8};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s10};
`;

const Post = styled(motion.div)`
  background: ${({ theme: { white } }) => white};
  padding: ${({ theme: { spacing } }) => `${spacing.s7} ${spacing.s6}`};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s8};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  box-shadow: ${({ theme: { shadow } }) => shadow.small};
  overflow: hidden;

  @media screen and (min-width: 1100px) {
    padding: 0;
  }
`;

const Grid = styled.div`
  @media screen and (min-width: 1100px) {
    display: grid;
    grid-template-columns: 1fr 500px;
    grid-column-gap: ${({ theme: { spacing } }) => spacing.s10};
  }
`;

export default function Blog({ content }) {
  const blogPosts = content.map((e, index) => {
    const title = e?.title;
    const subTitle = e?.subTitle;
    const slug = e?.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace("?", "")
      .slice(0, 200);
    const date = e?.date;
    const image = e?.image?.asset?.fluid;
    const readTime = e?.readTime;

    return (
      <Post key={index} whileHover={{ x: 10 }}>
        <Link to={`/blog/${slug}`}>
          <Grid>
            <Info
              title={title}
              subTitle={subTitle}
              date={date}
              readTime={readTime}
            />
            <Image title={title} image={image} />
          </Grid>
        </Link>
      </Post>
    );
  });

  return <Wrapper>{blogPosts}</Wrapper>;
}
