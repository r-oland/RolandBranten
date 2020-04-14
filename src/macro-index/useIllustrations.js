import React from "react";
import { useInView } from "react-intersection-observer";
import Bounce from "./svg/Bounce";
import Castle from "./svg/Castle";
import RocketShip from "./svg/RocketShip";
import SEO from "./svg/SEO";
import Wallet from "./svg/Wallet";
// =========================

export default function useIllustrations() {
  const [ship, shipInView] = useInView({ threshold: 0, triggerOnce: false });

  const [castle, castleInView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  const [wallet, walletInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [seo, seoInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const [bounce, bounceInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const illustrations = [
    <RocketShip ship={ship} shipInView={shipInView} />,
    <Castle castle={castle} castleInView={castleInView} />,
    <Wallet wallet={wallet} walletInView={walletInView} />,
    <SEO seo={seo} seoInView={seoInView} />,
    <Bounce bounce={bounce} bounceInView={bounceInView} />,
  ];

  return illustrations;
}
