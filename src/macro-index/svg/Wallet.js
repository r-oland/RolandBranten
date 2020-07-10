// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
// =========================

const Svg = styled.svg`
  position: relative;
  max-width: 450px;
  overflow: none;

  @media screen and (min-width: 1200px) {
    max-width: 500px;
  }
`;

export default function Wallet({ wallet, walletInView }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-10 120 580 410"
      ref={wallet}
      className="right"
    >
      <defs>
        <filter id="dropshadow" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="2" dy="4" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g id="wallet">
        <g id="plateau">
          <g id="Path_745-2" data-name="Path 745-2">
            <path
              d="M529.6341,359.4975C335.3805,571.38,232.3653,537.0428,29.9653,398.6406S723.8877,147.6149,529.6341,359.4975Z"
              id="shadow"
              fill="#fbfbfb"
              filter="url(#dropshadow)"
            />
          </g>
        </g>
        <g style={{ transform: `translateY(50px)` }}>
          <path
            d="M433.8068,135.252v16.13h-7.63v-16.13a9.2056,9.2056,0,0,0-9.19-9.2h-257.25a9.2163,9.2163,0,0,0-9.21,9.2v1.74h.03l-.03,3.75v1.52a9.21,9.21,0,0,0,8.03,9.12h-15.71l.06-10.69v-5.44a16.847,16.847,0,0,1,16.83-16.82h257.25A16.845,16.845,0,0,1,433.8068,135.252Z"
            fill="#1a1a1a"
          />
          <path
            d="M426.1768,135.252v16.21h-266.44a9.2441,9.2441,0,0,1-9.21-9.2v-1.52l.03-3.75h-.03v-1.74a9.2163,9.2163,0,0,1,9.21-9.2h257.25A9.2056,9.2056,0,0,1,426.1768,135.252Z"
            fill="#fdc61a"
          />
          <motion.g
            animate={walletInView ? "animate" : "stop"}
            initial="stop"
            variants={{
              animate: {
                y: 135,
                rotate: -4,
                opacity: 1,
              },
              stop: {
                y: 0,
                rotate: -50,
                opacity: 0.2,
              },
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <path
              d="M398.9579,87.68a2.153,2.153,0,0,1-1.9356,1.216l-89.4742.2718-9.9455.0386-101.3418.3081a2.18,2.18,0,0,1-2.1782-2.1758l-.2375-77.76a2.1654,2.1654,0,0,1,2.1661-2.18L278.86,7.1433l20.4068-.0623,20.4578-.0629.4276-.0017,76.62-.2363a1.8151,1.8151,0,0,1,.4005.034,2.173,2.173,0,0,1,1.7777,2.1419l.0441,12.754-.0048.0805.01,3.8774.0116,3.8676.1627,50.4334.016,6.737A1.988,1.988,0,0,1,398.9579,87.68Z"
              fill="#fce6ad"
            />
            <path
              d="M405.9782,86.6893l-.0207-5.4562-.1529-50.4316-.0116-3.8676-.01-3.8774.0048-.0805L405.7407,8.93A8.9688,8.9688,0,0,0,398.4351.1525,8.86,8.86,0,0,0,396.7444,0L284.3391.342l-.4275.0017L263.4439.4048,243.0371.4671,195.9945.6108a8.9659,8.9659,0,0,0-8.9392,8.9944l.2393,77.75a8.9708,8.9708,0,0,0,7.3137,8.7888,8.6923,8.6923,0,0,0,1.6808.1505l97.2-.2969,8.7217-.0224,94.8285-.2913a8.99,8.99,0,0,0,8.6627-6.7471A9.1011,9.1011,0,0,0,405.9782,86.6893Zm-7.02.99a2.153,2.153,0,0,1-1.9356,1.216l-89.4742.2718-9.9455.0386-101.3418.3081a2.18,2.18,0,0,1-2.1782-2.1758l-.2375-77.76a2.1654,2.1654,0,0,1,2.1661-2.18L278.86,7.1433l20.4068-.0623,20.4578-.0629.4276-.0017,76.62-.2363a1.8151,1.8151,0,0,1,.4005.034,2.173,2.173,0,0,1,1.7777,2.1419l.0441,12.754-.0048.0805.01,3.8774.0116,3.8676.1627,50.4334.016,6.737A1.988,1.988,0,0,1,398.9579,87.68Z"
              fill="#1a1a1a"
            />
          </motion.g>
          <path
            d="M323.2667,314.052a9.7988,9.7988,0,0,1-9.79-9.79v-47.33a48.2432,48.2432,0,0,1,1.83-13.19c.35-1.25.76-2.47,1.21-3.68.47-1.27,1-2.53,1.59-3.75a48.3354,48.3354,0,0,1,43.67-27.69h79.65v-36.84c0-9.38-3.99-12.71-15.25-12.71h-266.44a16.7111,16.7111,0,0,1-9.3-2.81l-1.15,189.06c0,13.68,5.08,16.49,12.71,16.49h263.57c11.97,0,17.79-6.03,17.79-18.42v-29.34Zm-137.71,30.36a2.5028,2.5028,0,0,1-.39.47,3.1762,3.1762,0,0,1-2.24.93h-20.33a3.1876,3.1876,0,0,1-3.03-2.23,3.2366,3.2366,0,0,1-.12-.62c-.01-.11-.02-.22-.02-.33a3.171,3.171,0,0,1,3.17-3.17h20.33a3.1346,3.1346,0,0,1,2.24.93h.01a.5059.5059,0,0,1,.07.08c.01.01.02.03.03.04a1.6224,1.6224,0,0,1,.17.2,1.4181,1.4181,0,0,1,.11.15,1.3989,1.3989,0,0,1,.16.26,1.9723,1.9723,0,0,1,.15.33.4923.4923,0,0,1,.06.17,2.607,2.607,0,0,1,.11.37,2.73,2.73,0,0,1,.07.64A3.102,3.102,0,0,1,185.5568,344.412Zm231.07-.78a2.2834,2.2834,0,0,1-.1.52,3.04,3.04,0,0,1-.8,1.36c-.07.07-.14.14-.22.21a2.826,2.826,0,0,1-.51.34,3.4369,3.4369,0,0,1-.88.32,1.6461,1.6461,0,0,1-.32.05c-.1,0-.21.01-.32.01h-207.05c-.11,0-.22-.01-.32-.01a1.7732,1.7732,0,0,1-.32-.05,3.3058,3.3058,0,0,1-.88-.32,1.5142,1.5142,0,0,1-.2-.12,2.1562,2.1562,0,0,1-.19-.13,2.0079,2.0079,0,0,1-.22-.19,1.1877,1.1877,0,0,1-.12-.11,3.1749,3.1749,0,0,1,2.25-5.42h207.05a3.2,3.2,0,0,1,.83.11c.1.03.19.06.29.09a3.4074,3.4074,0,0,1,.6.31,2.1414,2.1414,0,0,1,.19.13,1.0539,1.0539,0,0,1,.11.09.5266.5266,0,0,1,.11.1,1.1985,1.1985,0,0,1,.12.11,3.1762,3.1762,0,0,1,.93,2.24A2.1863,2.1863,0,0,1,416.6268,343.632Zm40.06-127.39h-94.91a40.8441,40.8441,0,0,0-36.19,22.1,40.075,40.075,0,0,0-1.71,3.78,40.4952,40.4952,0,0,0-2.79,14.81v47.33a2.1766,2.1766,0,0,0,2.18,2.17h133.42a2.1766,2.1766,0,0,0,2.18-2.17v-85.85A2.1831,2.1831,0,0,0,456.6868,216.242Zm-87.67,66.06c-.44,0-.88-.01-1.32-.05-.34-.01-.68-.04-1.02-.08a2.1622,2.1622,0,0,1-.25-.04c-.3-.03-.6-.08-.89-.13a2.3767,2.3767,0,0,1-.26-.05q-.36-.06-.72-.15c-.17-.03-.33-.07-.5-.11a20.27,20.27,0,0,1-2.05-.63q-.5249-.195-1.05-.42a1.1052,1.1052,0,0,0-.16-.07c-.28-.12-.55-.25-.82-.39a1.8646,1.8646,0,0,1-.2-.1c-.3-.15-.6-.31-.9-.49-.28-.16-.57-.33-.84-.51a20.2164,20.2164,0,0,1-2.69-2.07c-.14-.12-.27-.25-.4-.38-.16-.15-.32-.31-.48-.47-.33-.34-.66-.7-.96-1.06q-.27-.315-.51-.63c-.1-.12-.18-.23-.27-.34-.14-.19-.28-.38-.41-.57a21.4585,21.4585,0,0,1-1.17-1.9,18.0116,18.0116,0,0,1-.85-1.77c-.16-.37-.3-.74-.44-1.12a.5638.5638,0,0,0-.04-.12c-.11-.31-.21-.63-.3-.95-.09-.31-.18-.62-.25-.93-.05-.21-.1-.41-.14-.62-.07-.36-.14-.72-.2-1.08a19.7061,19.7061,0,0,1-.2-2.05q-.03-.525-.03-1.05t.03-1.05a19.5146,19.5146,0,0,1,.2-2.04c.06-.37.12-.73.2-1.08.04-.19.08-.39.13-.58.04-.19.09-.37.14-.55.04-.16.09-.32.14-.48.08-.28.17-.56.26-.84a1.4727,1.4727,0,0,0,.07-.19c.1-.28.21-.56.32-.83.03-.09.07-.19.11-.28a19.1726,19.1726,0,0,1,.85-1.77c.32-.57.66-1.14,1.02-1.68.18-.27.36-.52.56-.78a21.1875,21.1875,0,0,1,3.36-3.53,19.3639,19.3639,0,0,1,1.57-1.17c.31-.21.63-.41.96-.61h.01c.33-.2.66-.39,1-.56.19-.1.39-.2.58-.29.3-.15.6-.28.9-.41.38-.16.77-.31,1.16-.45.35-.12.7-.24,1.06-.34.1-.03.2-.06.31-.09.22-.06.44-.12.67-.17a2.5865,2.5865,0,0,1,.4-.09c.04-.01.09-.02.14-.03a19.1244,19.1244,0,0,1,3.05-.39.623.623,0,0,1,.19-.01.6146.6146,0,0,1,.13-.01c.27-.01.54-.02.8-.02.35,0,.71.01,1.06.03a19.5733,19.5733,0,0,1,2.04.2c.36.06.72.13,1.08.2.21.04.41.09.62.14.17.04.34.08.51.13.14.04.28.07.42.12.32.09.64.19.95.3a.5664.5664,0,0,0,.12.04c.38.14.75.28,1.12.44a20.1444,20.1444,0,0,1,3.45,1.87,19.3464,19.3464,0,0,1,1.57,1.17c.33.28.66.57.99.88a.3821.3821,0,0,1,.09.09c.29.27.58.56.85.86.07.06.12.13.18.19.29.31.56.63.82.96.27.34.53.68.78,1.04a.5621.5621,0,0,1,.06.08l.15.21c.2.31.41.63.6.95.15.24.29.48.42.73q.24.435.45.87v.01c.14.28.27.57.39.85.26.62.49,1.26.7,1.92q.15.48.27.96c.08.29.14.57.2.87.01.05.03.11.04.17.03.18.07.36.1.54q.105.615.18,1.23c.01.17.03.34.04.51.03.24.04.48.05.71.02.34.03.7.03,1.05A20.3274,20.3274,0,0,1,369.0167,282.302Z"
            fill="#fff"
          />
          <path
            d="M456.6868,208.622h-7.63v-36.84c0-14.1-8.29-18.41-15.25-19.73v-.67h-7.63v.08h-266.44a9.23,9.23,0,0,1-1.18-.08h-15.71l-1.19,193.92c0,16.01,6.85,24.13,20.34,24.13h263.57c16.15,0,25.4-9.49,25.4-26.04v-29.34h5.72a9.8009,9.8009,0,0,0,9.8-9.79v-85.85A9.8074,9.8074,0,0,0,456.6868,208.622Zm-13.33,134.77c0,12.39-5.82,18.42-17.79,18.42h-263.57c-7.63,0-12.71-2.81-12.71-16.49l1.15-189.06a16.7111,16.7111,0,0,0,9.3,2.81h266.44c11.26,0,15.25,3.33,15.25,12.71v36.84h-79.65a48.3354,48.3354,0,0,0-43.67,27.69c-.59,1.22-1.12,2.48-1.59,3.75-.45,1.21-.86,2.43-1.21,3.68a48.2432,48.2432,0,0,0-1.83,13.19v47.33a9.7988,9.7988,0,0,0,9.79,9.79h120.09Zm15.51-39.13a2.1766,2.1766,0,0,1-2.18,2.17h-133.42a2.1766,2.1766,0,0,1-2.18-2.17v-47.33a40.4952,40.4952,0,0,1,2.79-14.81,40.075,40.075,0,0,1,1.71-3.78,40.8441,40.8441,0,0,1,36.19-22.1h94.91a2.1831,2.1831,0,0,1,2.18,2.17Z"
            fill="#1a1a1a"
          />
          <circle cx="369.0209" cy="261.974" r="20.3241" fill="#fdc61a" />
          <path
            d="M203.2493,343.2721a3.1761,3.1761,0,0,0,3.1754,3.1753H413.4805a3.1754,3.1754,0,0,0,0-6.3507H206.4247A3.1754,3.1754,0,0,0,203.2493,343.2721Z"
            fill="#1a1a1a"
          />
          <path
            d="M182.9253,339.4607H162.6a3.1762,3.1762,0,0,0,0,6.3523h20.3258a3.1762,3.1762,0,0,0,0-6.3523Z"
            fill="#1a1a1a"
          />
          <path
            d="M369.0208,237.8392a24.1348,24.1348,0,1,0,24.135,24.1349A24.1624,24.1624,0,0,0,369.0208,237.8392Zm0,40.6479a16.5132,16.5132,0,1,1,16.5134-16.513A16.5318,16.5318,0,0,1,369.0208,278.4871Z"
            fill="#1a1a1a"
          />
          <polyline
            points="158.557 151.382 288.787 151.382 306.987 151.382 325.217 151.382 405.417 151.382 408.867 151.382 412.327 151.382 426.177 151.382"
            fill="none"
          />
        </g>
      </g>
    </Svg>
  );
}
