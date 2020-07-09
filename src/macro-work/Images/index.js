// Components==============
import React from "react";
import Long from "./Long";
import Short from "./Short";
import Single from "./Single";
// =========================

export default function Images({ left, images, alt, smallPage }) {
  if (images.float1 !== undefined && !smallPage) {
    return <Long left={left} images={images} alt={alt} />;
  } else if (images.float1 !== undefined && smallPage) {
    return <Short left={left} images={images} alt={alt} />;
  } else {
    return <Single left={left} images={images} alt={alt} />;
  }
}
