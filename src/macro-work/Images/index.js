// Components==============
import React from "react";
import LongPage from "./LongPage";
import ShortPage from "./ShortPage";
import Single from "./Single";
// =========================

export default function Images({ left, images, alt, smallPage }) {
  if (images.float1 !== undefined && !smallPage) {
    return <LongPage left={left} images={images} alt={alt} />;
  } else if (images.float1 !== undefined && smallPage) {
    return <ShortPage left={left} images={images} alt={alt} />;
  } else {
    return <Single left={left} images={images} alt={alt} />;
  }
}
