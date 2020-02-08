// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
// =========================

const Svg = styled.svg`
  position: relative;
  max-width: 450px;

  @media screen and (min-width: 1200px) {
    max-width: 500px;
  }
`;

export default function RocketShip({ ship, shipInView }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 653.99 376.17"
      ref={ship}
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
      <g id="spaceship">
        <g id="background">
          <path
            id="Path_1114-2"
            data-name="Path 1114-2"
            d="M584.92,273.55C272.07,449.3,174.69,364,16.5,110S897.77,97.8,584.92,273.55Z"
            fill="#212121"
            filter="url(#dropshadow)"
          />
          <ellipse cx="151.39" cy="87.58" rx="46" ry="45.5" fill="#fbfbfb" />
          <path
            id="Path_1116"
            data-name="Path 1116"
            d="M357.23,214.31l-12.72,2.85c-2.74.62-3.07,2.89-3.68,5.63L338,235.31v.06l0-.06-2.81-12.52c-.61-2.74-.94-5-3.68-5.63l-12.72-2.85,12.62-3.2c2.58-.66,2.78-1.49,3.44-4.08L338,194.59l0-.05v.05L341.17,207c.66,2.59.86,3.42,3.44,4.08Z"
            fill="#fff"
          />
          <path
            id="Path_1119"
            data-name="Path 1119"
            d="M317.17,306.93l-12.06-5c-2.6-1.07-4.17.6-6.24,2.5l-9.49,8.64-.05,0,0-.06,4.88-11.87c1.07-2.6,2.11-4.64.21-6.72l-8.77-9.64,12.17,4.62c2.49.95,3.13.38,5.15-1.36l9.73-8.38,0,0,0,.05-4.56,12c-.95,2.5-1.26,3.29.48,5.31Z"
            fill="#fff"
          />
          <path
            id="Path_1117"
            data-name="Path 1117"
            d="M225.25,211.39l-13.82-4.58c-3-1-4.6,1-6.77,3.27l-9.9,10.37,0,.05,0-.06,4.52-13.61c1-3,2-5.34-.29-7.51l-10.54-10.06,13.92,4.2c2.86.86,3.53.18,5.65-1.92l10.18-10.11,0,0,0,.06-4.14,13.73c-.86,2.86-1.14,3.77,1,5.88Z"
            fill="#fab710"
          />
          <path
            id="Path_1118"
            data-name="Path 1118"
            d="M524.93,185.76l-11.54,9.37c-2.49,2-1.53,5.37-.6,9.51L517,223.55l0,.09,0-.08L506.94,207c-2.21-3.62-3.85-6.7-7-6.43l-14.81,1.29,11.24-9.81c2.3-2,2-3.28,1.24-7.21l-3.85-18.94,0-.08,0,.07,10.39,16.3c2.16,3.38,2.84,4.48,5.9,4.32Z"
            fill="#fab710"
          />
        </g>
        <motion.g
          id="ship"
          animate={shipInView ? "animate" : "stop"}
          variants={{
            animate: {
              x: [0, 20, 20, 0],
              y: [0, 5, 0]
            },
            stop: {
              x: [0, 0, 0, 0],
              y: [0, 0, 0]
            }
          }}
          transition={{
            loop: Infinity,
            duration: 5,
            ease: "easeInOut"
          }}
        >
          <path
            d="M535.29,30.57a3.72,3.72,0,0,1,2,6.21C520.54,54.39,460.61,114.24,411,126.17a229,229,0,0,1-22.89,4.26l-.29,0c-1.06.16-2.12.29-3.18.42q-6.53.78-13.3,1.25t-14.06.58q-6.6.1-13.42-.12h0s0,0,0-.05c.42-12.93.13-25.07-3.72-35.61-3.12-8.56-10-21.24-18-31.71q5.31-4,10.61-7.75,5.88-4.09,11.76-7.73h0q5.77-3.58,11.57-6.76c3.71-2,7.45-4,11.19-5.75q6.57-3.18,13.17-5.84C427.74,12.19,511.41,26,535.29,30.57Z"
            fill="#fff"
          />
          <circle cx="464.36" cy="54.37" r="14.81" fill="#fdc61a" />
          <circle cx="404.93" cy="75.56" r="23.8" fill="#fdc61a" />
          <path
            d="M344.55,49.73h0q-5.9,3.65-11.76,7.73-5.31,3.7-10.61,7.75h0a112.13,112.13,0,0,0-34.6-10.46L299,44.69h0L310.5,34.6C314.7,35.22,344.56,48.31,344.55,49.73Z"
            fill="#fff"
          />
          <path
            d="M380,31l.49.34q-6.6,2.67-13.17,5.84c-3.74,1.78-7.48,3.7-11.19,5.75a204.7,204.7,0,0,0-34.92-17.6l-.09-.1,9.13-8L338,10.42a5.61,5.61,0,0,1,6.51-.64l1.63,1,.53.31,4.3,2.51,1.2.71,1,.59,1.3.77,1.18.69,1.49.87,1.36.81.07,0,1.31.77.69.41c.24.14.46.28.7.41l2.06,1.23.68.41,1.37.81,1,.6c.34.19.68.4,1,.6l4.77,2.87.63.38a.76.76,0,0,0,.19.12l2.54,1.56.7.44.85.53C378.29,29.92,379.27,30.55,380,31Z"
            fill="#fff"
          />
          <path
            d="M356.12,43q-5.81,3.18-11.57,6.76c0-1.42-29.85-14.51-34.05-15.13l10.61-9.33.09.1A204.7,204.7,0,0,1,356.12,43Z"
            fill="#fdc61a"
          />
          <path
            d="M387.86,130.47c-1.06.16-2.12.29-3.18.42l0-.06Z"
            fill="#fdc61a"
          />
          <path
            d="M383.84,132.87a204.92,204.92,0,0,1-17.64,32.42l0,.11-14-1.56c3-2.8,18.92-28.9,19.24-31.7a.32.32,0,0,0,0-.21c4.52-.25,9-.62,13.35-1.1l0,.06Z"
            fill="#fdc61a"
          />
          <path
            d="M371.38,132.14q-6.92.47-14.06.58a.48.48,0,0,0,0-.38c4.78,0,9.46-.15,14.07-.42h0A.32.32,0,0,1,371.38,132.14Z"
            fill="#fdc61a"
          />
          <path
            d="M357.32,132.72q-6.6.1-13.42-.12h0s0,0,0-.05l.26-.46h0q6.67.28,13.14.27A.48.48,0,0,1,357.32,132.72Z"
            fill="#fff"
          />
          <path
            d="M411.32,126.36c-2.13,5.91-15,33.87-18.09,40.54a2.22,2.22,0,0,1-2.24,1.26l-12.72-1.41-12.09-1.35,0-.11a204.92,204.92,0,0,0,17.64-32.42c.29-.66.56-1.32.84-2,1.06-.13,2.12-.26,3.18-.42l.29,0c3.05-.37,6.05-.81,9-1.3Q404.4,128,411.32,126.36Z"
            fill="#fff"
          />
          <path
            d="M371.38,132.14c-.32,2.8-16.25,28.9-19.24,31.7L337,162.17h0l-15.16-1.69a112.2,112.2,0,0,0,22.09-27.94s0,0,0,.05h0q6.81.22,13.42.12Q364.48,132.62,371.38,132.14Z"
            fill="#fff"
          />
          <motion.g
            id="beam1"
            animate={shipInView ? "animate" : "stop"}
            variants={{
              animate: {
                x: [3, 0, 3]
              },
              stop: {
                x: [0, 0, 0]
              }
            }}
            transition={{
              duration: 2,
              loop: Infinity,
              delay: 1
            }}
          >
            <rect
              x="290.33"
              y="69.57"
              width="5.49"
              height="35.31"
              rx="2.61"
              transform="translate(287.7 -218.5) rotate(72.42)"
              fill="#fdc61a"
            />
            <path
              d="M278.05,96.05a4.35,4.35,0,0,1-1.21-.42,4.14,4.14,0,0,1-2.07-2.46l-.08-.25a4.19,4.19,0,0,1,2.73-5.28l28.69-9.09a4.21,4.21,0,0,1,5.27,2.74l.09.25a4.22,4.22,0,0,1-.28,3.21,4.17,4.17,0,0,1-2.46,2.07L280,95.91A4.22,4.22,0,0,1,278.05,96.05Zm29.5-14.5a1.12,1.12,0,0,0-.48,0l-28.68,9.09a1,1,0,0,0-.6.5,1,1,0,0,0-.07.78l.08.25a1,1,0,0,0,.51.6,1,1,0,0,0,.77.06l28.69-9.09a1,1,0,0,0,.66-1.27h0l-.08-.26a1,1,0,0,0-.5-.6A1.51,1.51,0,0,0,307.55,81.55Z"
              fill="#1a1a1a"
            />
          </motion.g>
          <motion.g
            id="beam2"
            animate={shipInView ? "animate" : "stop"}
            variants={{
              animate: {
                x: [3, 0, 3]
              },
              stop: {
                x: [0, 0, 0]
              }
            }}
            transition={{
              duration: 2,
              loop: Infinity
            }}
          >
            <rect
              x="292.03"
              y="78.32"
              width="5.49"
              height="44.4"
              rx="2.74"
              transform="matrix(0.3, 0.95, -0.95, 0.3, 301.55, -210.85)"
              fill="#fdc61a"
            />
            <path
              d="M275.48,110.67a4.34,4.34,0,0,1-.56-8.41L312,90.51a4.34,4.34,0,0,1,5.45,2.82h0a4.35,4.35,0,0,1-2.83,5.45l-37.09,11.75A4.27,4.27,0,0,1,275.48,110.67Zm38-17.16a1.24,1.24,0,0,0-.54,0l-37.1,11.76a1.15,1.15,0,0,0,.7,2.2l37.09-11.76a1.14,1.14,0,0,0,.75-1.45h0a1.11,1.11,0,0,0-.57-.67A1.17,1.17,0,0,0,313.52,93.51Z"
              fill="#1a1a1a"
            />
          </motion.g>
          <motion.g
            id="beam3"
            animate={shipInView ? "animate" : "stop"}
            variants={{
              animate: {
                x: [3, 0, 3]
              },
              stop: {
                x: [0, 0, 0]
              }
            }}
            transition={{
              duration: 2,
              loop: Infinity,
              delay: 0.6
            }}
          >
            <rect
              x="294.48"
              y="93.42"
              width="5.49"
              height="38.85"
              rx="2.74"
              transform="translate(315.01 -204.59) rotate(72.42)"
              fill="#fdc61a"
            />
            <path
              d="M280.57,122.16a4.35,4.35,0,0,1-1.24-.43,4.28,4.28,0,0,1-2.14-2.54,4.32,4.32,0,0,1,2.82-5.44l31.81-10.08a4.34,4.34,0,0,1,5.44,2.82h0a4.34,4.34,0,0,1-2.82,5.45L282.64,122A4.42,4.42,0,0,1,280.57,122.16Zm32.76-15.49a1.15,1.15,0,0,0-.55,0L281,116.78a1.17,1.17,0,0,0-.68.57,1.15,1.15,0,0,0,1.37,1.63l31.81-10.08a1.11,1.11,0,0,0,.67-.57,1.15,1.15,0,0,0,.08-.87h0A1.15,1.15,0,0,0,313.33,106.67Z"
              fill="#1a1a1a"
            />
          </motion.g>
          <motion.g
            id="beam4"
            animate={shipInView ? "animate" : "stop"}
            variants={{
              animate: {
                x: [3, 0, 3]
              },
              stop: {
                x: [0, 0, 0]
              }
            }}
            transition={{
              duration: 2,
              loop: Infinity,
              delay: 0.3
            }}
          >
            <rect
              x="305.17"
              y="107.74"
              width="5.49"
              height="33.99"
              rx="2.58"
              transform="translate(333.81 -206.47) rotate(72.42)"
              fill="#fdc61a"
            />
            <path
              d="M293.49,133.36a4.14,4.14,0,0,1-1.2-.4,4.19,4.19,0,0,1-2.05-2.45l-.1-.31a4.18,4.18,0,0,1,2.71-5.24l27.5-8.71a4.17,4.17,0,0,1,5.23,2.72l.1.31a4.14,4.14,0,0,1-.27,3.18,4.18,4.18,0,0,1-2.44,2.06l-27.49,8.71A4.09,4.09,0,0,1,293.49,133.36Zm28.29-14.1a.93.93,0,0,0-.47,0L293.82,128a1,1,0,0,0-.65,1.24l.1.31a1,1,0,0,0,.49.58,1,1,0,0,0,.75.06L322,121.48a1,1,0,0,0,.58-.48,1.05,1.05,0,0,0,.07-.76h0l-.1-.31A1,1,0,0,0,321.78,119.26Z"
              fill="#1a1a1a"
            />
          </motion.g>
          <g>
            <path
              d="M540.65,32.27a6.36,6.36,0,0,0-4.86-4.3C511.48,23.32,429,9.7,380.81,28.4l-2.34-1.5q-.39-.22-.81-.51l-3.75-2.3-.35-.21L368.81,21c-.34-.21-.68-.42-1-.59l0,0h0L365.36,19h0l-.66-.39c-.64-.39-1.29-.78-1.95-1.16l-.43-.25a4.23,4.23,0,0,0-.4-.24l-2.06-1.22-1.34-.79L357,14l-2.44-1.44-1-.62L348,8.75l-.49-.29-.39-.23-1.26-.74-1.1-.64-.66-.39a5.43,5.43,0,0,0-6.32.61l-9.3,8.17h0l-9.14,8h0l-12.52,11L281.45,56.6l5.75.79a110.09,110.09,0,0,1,33.24,10c8.13,10.75,14.5,23,17.23,30.49,3.71,10.17,3.94,22.29,3.58,33.94A110,110,0,0,1,320,158.53l-4.26,3.94,30.39,3.38h0l22.31,2.47h0l22.27,2.47a4.86,4.86,0,0,0,4.93-2.76v0c5.64-12.22,15.14-33,17.78-39.71,50-13.06,108.79-71.82,125.79-89.69A6.37,6.37,0,0,0,540.65,32.27ZM339.77,12.41a3,3,0,0,1,3.45-.32c.38.22.78.45,1.2.71l.48.28.45.26,5.57,3.26c.29.17.6.34.94.55l2.52,1.49c.48.27,1,.56,1.42.83l1.16.69L360.05,22l2,1.18,3,1.78h0l.77.46.26.16,4.81,2.89.54.33.3.18,3.11,1.91-.74.33-2.85,1.27L370,33c-1.3.6-2.6,1.21-3.88,1.83-1.8.85-3.59,1.75-5.38,2.66-.59.3-1.16.61-1.75.92-.94.49-1.89,1-2.82,1.48a209.19,209.19,0,0,0-30.15-15.43Zm-18.18,16a203,203,0,0,1,29.3,14.48l-.62.35-.76.44c-1.45.84-2.9,1.71-4.34,2.58l-.43.26-.05,0-.13-.08-.33-.21-.17-.09-.35-.21-.2-.11-.37-.21-.23-.12-.4-.22-.27-.14-.43-.22-.3-.16-.45-.23-.34-.17-.49-.24-.37-.18-.52-.26-.41-.19-.57-.27-.43-.21-.61-.29-.48-.22-.66-.31-.5-.22-.7-.32-.55-.26-.77-.34-.56-.25-1-.44-.44-.2-1.51-.67-.22-.09-.22-.1h0c-2-.89-8.9-3.88-13.94-5.75ZM311.22,37.5l.38.12.15.05.6.2.28.1.43.15.34.13.44.16.39.14.45.17.42.16.46.18.94.37.39.15.58.24.41.16.63.26.37.15.69.28.24.1,1.78.74h0l.77.32.36.15.77.33.32.14.83.36.22.09q1.44.62,2.88,1.26l.15.06.85.38.26.11.85.38.24.11.84.38.21.09,2.55,1.17.3.14.67.31.36.17.62.29.36.17.58.28.42.2.81.39.47.23.38.19.42.22.36.18.17.09c-.62.39-1.24.81-1.85,1.21l-1.49,1c-1.68,1.12-3.36,2.25-5,3.4s-3.37,2.38-5.06,3.61l-1.68,1.24c-.89.66-1.79,1.31-2.67,2A114.49,114.49,0,0,0,293.54,53Zm68,99.2c-.36.78-.73,1.55-1.1,2.33l-.77,1.59-1.2,2.39-.76,1.49c-.45.88-.92,1.75-1.38,2.62l-.66,1.22c-.69,1.26-1.39,2.53-2.11,3.78l-.26.44c-.64,1.11-1.29,2.21-2,3.31-.25.43-.52.86-.79,1.29-.49.81-1,1.62-1.5,2.42-.3.48-.61,1-.92,1.44s-.67,1-1,1.55l-7.71-.85.15-.21.68-1,.29-.43c.25-.37.51-.75.77-1.15l.32-.48.76-1.16.47-.72.51-.79.54-.85.23-.36,1.34-2.13.23-.36.78-1.26v0a172.11,172.11,0,0,0,9.08-16.14c2.34-.17,4.69-.38,7-.62l0,.05.15,0c-.14.34-.29.67-.44,1Zm-33.84-1.4c1.14,0,2.3,0,3.45.06.7,0,1.4,0,2.11,0,2.14,0,4.29,0,6.43,0s4.24-.1,6.35-.19l1.69-.07,1.79-.07,0,.07c-.06.12-.13.24-.19.37s-.15.27-.23.41-.14.27-.22.4l-.23.43-.24.43c-.1.18-.21.36-.31.55l-.36.63-.32.58c-.1.15-.19.32-.28.48l-.29.49c-.09.17-.19.34-.29.5s-.19.34-.29.51-.2.35-.31.52l-.36.61-.33.58-.51.84-.27.46-.37.62-.3.5-.37.62c-.1.15-.19.31-.29.47s-.31.51-.47.77l-.19.32-.66,1.07-.21.35c-.16.25-.32.5-.47.76l-.24.38-.48.77c-.06.1-.12.2-.19.3-.2.32-.4.65-.61,1l-.06.1c-.23.36-.46.72-.68,1.08l-.08.12-.58.9-.15.23c-.17.27-.33.53-.5.78l-.14.22c-.2.31-.4.62-.6.91h0c-.42.63-.81,1.22-1.19,1.77l-.09.14-.44.65-.1.14-.46.65,0,0c-.31.45-.6.85-.86,1.19l-.08.1-.17.21-23.38-2.58A114.78,114.78,0,0,0,345.37,135.3ZM391,165.48l-20.25-2.25.3-.47c.29-.47.58-.94.88-1.41l1.45-2.36c.3-.49.59-1,.89-1.49.46-.78.91-1.55,1.36-2.34l.87-1.51c.45-.79.89-1.58,1.32-2.38.27-.5.55-1,.81-1.49q.68-1.25,1.32-2.49l.73-1.41c.46-.9.9-1.8,1.35-2.7.2-.41.41-.82.61-1.24.51-1,1-2.09,1.49-3.14.12-.28.26-.55.38-.83.62-1.34,1.22-2.69,1.8-4l0-.06.25-.54h0l1.62-.22h.07l.25,0h0c3-.36,6-.79,9.09-1.31s6.2-1.07,9.35-1.72C404.15,136.61,398.65,148.8,391,165.48ZM535.36,35c-16.94,17.82-76,76.87-124.94,88.64a229.34,229.34,0,0,1-22.57,4.21h-.1l-.14,0h-.1l-3,.34h-.11c-4,.45-8.22.8-12.51,1h0l-.71,0c-4.56.27-9.25.41-13.93.42-3.48,0-7-.07-10.65-.2.26-11.42-.22-23.2-4-33.47-3.24-8.89-9.84-20.76-16.77-30.26l2.1-1.57,1.5-1.1q2.41-1.76,4.82-3.44C338.12,57,342,54.42,345.94,52l.65-.41h0l.32-.19q2.47-1.53,5-3l.32-.19c1.74-1,3.48-2,5.2-2.94,3.61-2,7.33-3.9,11.06-5.68,1.48-.71,3-1.41,4.48-2.09,2.81-1.29,5.67-2.52,8.54-3.68,46.61-18.93,129.13-5.29,153.31-.66a1,1,0,0,1,.81.72A1,1,0,0,1,535.36,35Z"
              fill="#1a1a1a"
            />
            <path
              d="M471.36,39.53a16.41,16.41,0,1,0-14,29.68A16.4,16.4,0,0,0,479.8,48.83,16.3,16.3,0,0,0,471.36,39.53ZM476.31,60a13.23,13.23,0,1,1,.48-10.1A13.15,13.15,0,0,1,476.31,60Z"
              fill="#1a1a1a"
            />
            <path
              d="M416.18,51.72a26.37,26.37,0,1,0,12.59,35.09h0a26.37,26.37,0,0,0-12.59-35.09Zm7.95,32.9h0a21.23,21.23,0,1,1,.78-16.23A21.26,21.26,0,0,1,424.13,84.62Z"
              fill="#1a1a1a"
            />
          </g>
        </motion.g>
      </g>
    </Svg>
  );
}
