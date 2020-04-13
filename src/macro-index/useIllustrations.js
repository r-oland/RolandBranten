import React from "react";
import { useInView } from "react-intersection-observer";
import Bounce from "../micro-components/Bounce";
import Castle from "../micro-components/Castle";
import RocketShip from "../micro-components/RocketShip";
import SEO from "../micro-components/SEO";
import Wallet from "../micro-components/Wallet";
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
