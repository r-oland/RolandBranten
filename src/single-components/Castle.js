// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
// =========================

const Svg = styled.svg`
  position: relative;
  max-width: 450px;
  left: -10%;

  @media screen and (min-width: 475px) {
    left: 0;
  }
  @media screen and (min-width: 1200px) {
    max-width: 500px;
  }

  #ClipPathCastle {
    clip-path: url(#clipPathCastle);
    -webkit-clip-path: url(#clipPathCastle);
  }
`;

export default function Castle({ castle, castleInView }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 559.6861 355.5483"
      ref={castle}
      className="tempRight"
    >
      <defs>
        <clipPath id="clipPathCastle" transform="translate(0 -0.8983)">
          <rect id="clipmask" x="409.6861" width="84" height="51" fill="none" />
        </clipPath>
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
      <g id="castle">
        <g id="plateau">
          <path
            d="M19.6961,292.77c23.87-9.93,54.4-17.97,88.9-24.05,1.68-.3,3.37-.6,5.07-.88,11.83-2.01,24.11-3.79,36.72-5.34q5.175-.63,10.42-1.22c21.95-2.46,44.8-4.24,68.03-5.34q2.565-.135,5.13-.24c1.75-.08,3.51-.15,5.27-.21,1.72-.07,3.45-.14,5.18-.19q12.075-.435,24.22-.59c1.75-.03,3.5-.06,5.25-.06,8.04-.09,16.1-.09,24.13-.01,1.74.02,3.48.04,5.21.07,1.75.02,3.51.05,5.26.08,1.71.03,3.43.07,5.15.11,28.44.66,56.49,2.34,83.18,5.06q8.04.825,15.93,1.78,7.515.9,14.86,1.93c1.7.23,3.39.47,5.08.73,31.58,4.61,60.33,10.87,84.36,18.81C717.4261,358.46-138.8039,372.51,19.6961,292.77Z"
            transform="translate( -0.8983)"
            fill="#fff"
            filter="url(#dropshadow)"
          />
          <path
            id="Path_1214-2"
            data-name="Path 1214-2"
            d="M445.0651,290.6877c-126.2857-42.8027-224.1169-37.7494-344.1574,3.5031S571.35,333.4905,445.0651,290.6877Z"
            transform="translate(0 -0.8983)"
            fill="#fab710"
            opacity="0.19"
          />
        </g>
        <g id="castle-2" data-name="castle">
          <g id="white_bg" data-name="white bg">
            <polygon
              points="426.076 69.342 426.076 106.652 319.506 106.652 319.506 70.792 326.036 70.792 326.036 85.292 347.066 85.292 347.066 70.792 362.286 70.792 362.286 85.292 384.766 85.292 384.766 70.792 398.536 70.792 398.536 85.292 421.016 85.292 421.016 69.342 426.076 69.342"
              fill="#fff"
            />
            <path
              d="M425.0261,112.63l-8.74,12.71h-84.01c-.3-.33-.71-.79-1.21-1.35-.16-.19-.34-.39-.52-.59-.18-.21-.38-.43-.58-.66-.21-.23-.42-.47-.63-.71-.87-1-1.87-2.13-2.95-3.36-1.61-1.85-3.42-3.92-5.26-6.04Z"
              transform="translate(0 -0.8983)"
              fill="#fff"
            />
            <polygon
              points="416.656 129.512 416.656 169.392 402.946 169.392 402.946 183.892 390.636 183.892 390.636 169.392 359.446 169.392 359.446 183.892 348.586 183.892 348.586 169.392 330.386 169.392 330.386 129.512 416.656 129.512"
              fill="#fff"
            />
            <polygon
              points="222.426 70.792 222.426 106.652 115.846 106.652 115.846 69.342 120.916 69.342 120.916 85.292 143.396 85.292 143.396 70.792 157.166 70.792 157.166 85.292 179.646 85.292 179.646 70.792 194.876 70.792 194.876 85.292 215.906 85.292 215.906 70.792 222.426 70.792"
              fill="#fff"
            />
            <path
              d="M220.8061,112.63c-1.84,2.12-3.64,4.19-5.26,6.04-1.08,1.23-2.08,2.36-2.95,3.36-.21.24-.42.48-.63.71-.2.23-.4.45-.58.66-.18.2-.36.4-.52.59-.5.56-.91,1.02-1.21,1.35h-84.01l-8.74-12.71Z"
              transform="translate(0 -0.8983)"
              fill="#fff"
            />
            <polygon
              points="211.546 129.512 211.546 169.392 194.146 169.392 194.146 183.892 180.376 183.892 180.376 169.392 150.646 169.392 150.646 183.892 138.326 183.892 138.326 169.392 125.266 169.392 125.266 129.512 211.546 129.512"
              fill="#fff"
            />
            <polygon
              points="427.606 174.462 427.606 295.562 356.566 295.882 314.116 296.072 309.036 296.102 303.846 296.122 298.766 296.142 273.886 296.262 268.636 296.282 243.966 296.392 238.886 296.412 233.686 296.442 228.606 296.462 113.666 296.982 113.666 174.462 133.246 174.462 133.246 189.142 155.726 189.142 155.726 174.462 175.296 174.462 175.296 189.142 199.226 189.142 199.226 174.462 218.796 174.462 218.796 189.142 239.826 189.142 239.826 174.462 259.406 174.462 259.406 189.142 281.876 189.142 281.876 174.462 301.456 174.462 301.456 189.142 323.936 189.142 323.936 174.462 343.506 174.462 343.506 189.142 364.536 189.142 364.536 174.462 385.556 174.462 385.556 189.142 408.036 189.142 408.036 174.462 427.606 174.462"
              fill="#fff"
            />
          </g>
          <g id="bricks_n_windows" data-name="bricks n windows">
            <rect
              x="396.7969"
              y="257.4788"
              width="15.9471"
              height="5.8072"
              rx="1.7792"
              fill="#1a1a1a"
            />
            <path
              d="M405.7919,207.01l-3.2784-1.96a6.8548,6.8548,0,0,0-7.0922,0l-3.2783,1.96a5.3811,5.3811,0,0,0-2.5948,4.5963V226.483h18.8466V211.6067A5.3889,5.3889,0,0,0,405.7919,207.01Zm-1.7463,15.1151H393.8892V211.6067a1.01,1.01,0,0,1,.4942-.8649l3.2785-1.9686a2.5348,2.5348,0,0,1,2.6194,0l3.2783,1.9686a1.02,1.02,0,0,1,.486.8649Z"
              transform="translate(0 -0.8983)"
              fill="#1a1a1a"
            />
            <path
              d="M404.0457,211.6054v10.5233H393.8932V211.6054a1.0109,1.0109,0,0,1,.4889-.863l3.2781-1.9655a2.5349,2.5349,0,0,1,2.6185,0l3.2781,1.9655A1.0107,1.0107,0,0,1,404.0457,211.6054Z"
              transform="translate(0 -0.8983)"
              fill="#fdc61a"
            />
            <path
              d="M379.9573,91.8008h12.39a1.7785,1.7785,0,0,1,1.7785,1.7785v2.2444a1.7785,1.7785,0,0,1-1.7785,1.7785h-12.39a1.7818,1.7818,0,0,1-1.7818-1.7818V93.5826A1.7818,1.7818,0,0,1,379.9573,91.8008Z"
              fill="#1a1a1a"
            />
            <rect
              x="367.794"
              y="273.4341"
              width="15.9471"
              height="5.799"
              rx="1.7792"
              fill="#1a1a1a"
            />
            <path
              d="M382.9466,146.3525v14.8743H364.0953V146.3525a5.3841,5.3841,0,0,1,2.6021-4.5939l3.2781-1.9655a6.8826,6.8826,0,0,1,7.0942,0l3.2748,1.9655A5.3841,5.3841,0,0,1,382.9466,146.3525Zm-4.3478,10.5233V146.3525a1.0181,1.0181,0,0,0-.4889-.863l-3.278-1.9655a2.5351,2.5351,0,0,0-2.6186,0l-3.278,1.9655a1.0107,1.0107,0,0,0-.4889.863v10.5233Z"
              transform="translate(0 -0.8983)"
              fill="#1a1a1a"
            />
            <path
              d="M378.5988,146.3525v10.5233H368.4464V146.3525a1.0107,1.0107,0,0,1,.4889-.863l3.278-1.9655a2.5351,2.5351,0,0,1,2.6186,0l3.278,1.9655A1.0181,1.0181,0,0,1,378.5988,146.3525Z"
              transform="translate(0 -0.8983)"
              fill="#fdc61a"
            />
            <rect
              x="354.7464"
              y="282.1325"
              width="15.9471"
              height="5.799"
              rx="1.7792"
              fill="#1a1a1a"
            />
            <path
              d="M369.2437,219.5555v2.2488a1.7753,1.7753,0,0,1-1.7792,1.771H355.0676a1.7683,1.7683,0,0,1-1.771-1.771v-2.2488a1.7753,1.7753,0,0,1,1.771-1.7792h12.3969A1.7823,1.7823,0,0,1,369.2437,219.5555Z"
              transform="translate(0 -0.8983)"
              fill="#1a1a1a"
            />
            <rect
              x="339.4458"
              y="153.08"
              width="15.9506"
              height="5.7981"
              rx="1.7785"
              fill="#1a1a1a"
            />
            <path
              d="M334.7384,207.01l-3.2784-1.96a6.8548,6.8548,0,0,0-7.0922,0l-3.2784,1.96a5.4,5.4,0,0,0-2.5947,4.5963V226.483h18.8466V211.6067A5.3889,5.3889,0,0,0,334.7384,207.01Zm-1.7463,15.1151H322.844V211.6067a1.0016,1.0016,0,0,1,.486-.8649l3.2783-1.9686a2.5348,2.5348,0,0,1,2.6194,0l3.2784,1.9686a1.02,1.02,0,0,1,.486.8649Z"
              transform="translate(0 -0.8983)"
              fill="#1a1a1a"
            />
            <path
              d="M332.9914,211.6054v10.5233H322.8422V211.6054a1.0107,1.0107,0,0,1,.4889-.863l3.2748-1.9655a2.5349,2.5349,0,0,1,2.6185,0l3.2781,1.9655A1.0109,1.0109,0,0,1,332.9914,211.6054Z"
              transform="translate(0 -0.8983)"
              fill="#fdc61a"
            />
            <rect
              x="232.9356"
              y="202.3807"
              width="15.9553"
              height="5.7989"
              rx="1.7792"
              fill="#1a1a1a"
            />
            <path
              d="M219.46,206.2855l-3.2784-1.9687a6.8923,6.8923,0,0,0-7.0921,0l-3.2784,1.9687a5.389,5.389,0,0,0-2.603,4.5964v14.8762h18.8549V210.8819A5.3892,5.3892,0,0,0,219.46,206.2855Zm-1.7463,15.1152H207.5653V210.8819a1.0018,1.0018,0,0,1,.486-.8649l3.2783-1.9687a2.5352,2.5352,0,0,1,2.6194,0l3.2784,1.9687a1.02,1.02,0,0,1,.486.8649Z"
              transform="translate(0 -0.8983)"
              fill="#1a1a1a"
            />
            <path
              d="M217.711,210.88v10.5233H207.5618V210.88a1.0109,1.0109,0,0,1,.4889-.863l3.2748-1.9655a2.5409,2.5409,0,0,1,2.6218,0l3.2781,1.9655A1.0149,1.0149,0,0,1,217.711,210.88Z"
              transform="translate(0 -0.8983)"
              fill="#fdc61a"
            />
            <path
              d="M188.3134,153.08h12.3937a1.7785,1.7785,0,0,1,1.7785,1.7785v2.2379a1.7818,1.7818,0,0,1-1.7818,1.7818h-12.39a1.7785,1.7785,0,0,1-1.7785-1.7785v-2.2412A1.7785,1.7785,0,0,1,188.3134,153.08Z"
              fill="#1a1a1a"
            />
            <path
              d="M179.6146,95.0756h12.39a1.7818,1.7818,0,0,1,1.7818,1.7818v2.2379a1.7818,1.7818,0,0,1-1.7818,1.7818h-12.39a1.7785,1.7785,0,0,1-1.7785-1.7785V96.8541A1.7785,1.7785,0,0,1,179.6146,95.0756Z"
              fill="#1a1a1a"
            />
            <path
              d="M177.8361,146.3525v14.8743H158.9847V146.3525a5.3843,5.3843,0,0,1,2.6021-4.5939l3.2748-1.9655a6.8827,6.8827,0,0,1,7.0943,0l3.2781,1.9655A5.3841,5.3841,0,0,1,177.8361,146.3525Zm-4.3511,10.5233V146.3525a1.0107,1.0107,0,0,0-.4889-.863l-3.2781-1.9655a2.5349,2.5349,0,0,0-2.6185,0l-3.2748,1.9655a1.0107,1.0107,0,0,0-.4889.863v10.5233Z"
              transform="translate(0 -0.8983)"
              fill="#1a1a1a"
            />
            <path
              d="M173.485,146.3525v10.5233H163.3358V146.3525a1.0107,1.0107,0,0,1,.4889-.863L167.1,143.524a2.5349,2.5349,0,0,1,2.6185,0l3.2781,1.9655A1.0107,1.0107,0,0,1,173.485,146.3525Z"
              transform="translate(0 -0.8983)"
              fill="#fdc61a"
            />
            <rect
              x="150.2843"
              y="260.3865"
              width="15.9471"
              height="5.7989"
              rx="1.7792"
              fill="#1a1a1a"
            />
            <rect
              x="140.1361"
              y="250.2301"
              width="15.9471"
              height="5.7989"
              rx="1.7792"
              fill="#1a1a1a"
            />
            <path
              d="M149.131,207.01l-3.2783-1.96a6.8548,6.8548,0,0,0-7.0922,0l-3.2784,1.96a5.4,5.4,0,0,0-2.5947,4.5963V226.483H151.734V211.6067A5.3888,5.3888,0,0,0,149.131,207.01Zm-1.7462,15.1151H137.2366V211.6067a1.002,1.002,0,0,1,.486-.8649l3.2784-1.9686a2.5348,2.5348,0,0,1,2.6194,0l3.2784,1.9686a1.02,1.02,0,0,1,.486.8649Z"
              transform="translate(0 -0.8983)"
              fill="#1a1a1a"
            />
            <path
              d="M134.6667,138.5764h12.39a1.7785,1.7785,0,0,1,1.7785,1.7785v2.2444a1.7785,1.7785,0,0,1-1.7785,1.7785h-12.39a1.7818,1.7818,0,0,1-1.7818-1.7818v-2.2379A1.7818,1.7818,0,0,1,134.6667,138.5764Z"
              fill="#1a1a1a"
            />
            <path
              d="M147.3852,211.6054v10.5233H137.2327V211.6054a1.0107,1.0107,0,0,1,.4889-.863L141,208.7769a2.5349,2.5349,0,0,1,2.6185,0l3.2781,1.9655A1.0109,1.0109,0,0,1,147.3852,211.6054Z"
              transform="translate(0 -0.8983)"
              fill="#fdc61a"
            />
          </g>
          <g id="door">
            <path
              d="M314.1161,261.65v35.32l-5.08.03V261.65a40.1639,40.1639,0,0,0-12.3-29.41,36.6034,36.6034,0,0,0-25.81-9.93h-.29c-16.71.1-26.06,9.23-30.96,16.88a39.43,39.43,0,0,0-5.99,21.41v36.74l-5.08.02V260.6a44.5772,44.5772,0,0,1,6.79-24.16,41.5149,41.5149,0,0,1,14.3-13.84,42.1165,42.1165,0,0,1,20.91-5.37c11.53-.08,21.49,3.72,29.59,11.29A45.2853,45.2853,0,0,1,314.1161,261.65Z"
              transform="translate(0 -0.8983)"
              fill="#1a1a1a"
            />
            <path
              d="M309.0361,261.65V297l-5.19.02V261.38a34.3689,34.3689,0,0,0-10.57-25.13,31.5257,31.5257,0,0,0-22.23-8.59h-.25a32.02,32.02,0,0,0-15.89,4.09,31.6317,31.6317,0,0,0-10.87,10.52,33.8342,33.8342,0,0,0-5.15,18.34v36.7l-5.2.03V260.6a39.43,39.43,0,0,1,5.99-21.41c4.9-7.65,14.25-16.78,30.96-16.88h.29a36.6034,36.6034,0,0,1,25.81,9.93A40.1639,40.1639,0,0,1,309.0361,261.65Z"
              transform="translate(0 -0.8983)"
              fill="#fdc61a"
            />
            <path
              d="M303.8461,261.38v35.64l-5.08.02V261.38a29.29,29.29,0,0,0-8.96-21.42,26.1749,26.1749,0,0,0-15.92-7.09c-.93-.09-1.88-.13-2.85-.13h-.21q-1.125,0-2.19.09a25.6307,25.6307,0,0,0-20.32,12.18,28.7459,28.7459,0,0,0-4.35,15.6v36.68l-5.08.02v-36.7a33.8342,33.8342,0,0,1,5.15-18.34,31.6317,31.6317,0,0,1,10.87-10.52,32.02,32.02,0,0,1,15.89-4.09h.25a31.5257,31.5257,0,0,1,22.23,8.59A34.3689,34.3689,0,0,1,303.8461,261.38Z"
              transform="translate(0 -0.8983)"
              fill="#1a1a1a"
            />
            <polygon
              points="273.886 230.132 273.886 296.262 268.636 296.282 268.636 230.132 273.886 230.132"
              fill="#1a1a1a"
            />
          </g>
          <path
            d="M427.6061,263.67v32.79l-58.65.26-12.39.06-42.45.19-5.08.03-5.19.02-5.08.02-24.88.12-5.25.02-24.67.11-5.08.02-5.2.03-5.08.02-114.94.52V267.84c-1.7.28-3.39.58-5.07.88v34.26l324.09-1.46V264.4C430.9961,264.14,429.3061,263.9,427.6061,263.67Z"
            transform="translate(0 -0.8983)"
            fill="#1a1a1a"
          />
        </g>
        <g id="clipgroup">
          <g id="ClipPathCastle">
            <motion.g
              id="flag"
              animate={castleInView ? "animate" : "stop"}
              variants={{
                animate: {
                  x: ["-5%", "10%"]
                },
                stop: {
                  x: ["0%", "0%"]
                }
              }}
              transition={{
                duration: 2.8,
                loop: Infinity,
                ease: "linear"
              }}
            >
              <path
                d="M518.2961,9.6v.04a2.3484,2.3484,0,0,1-.26-.01V9.61C518.1261,9.61,518.2061,9.6,518.2961,9.6Z"
                transform="translate(0 -0.8983)"
                fill="#fdc61a"
              />
              <path
                d="M518.2961,4.52v.03h-.07a1.3664,1.3664,0,0,1-.19-.02A2.26,2.26,0,0,0,518.2961,4.52Z"
                transform="translate(0 -0.8983)"
                fill="#fdc61a"
              />
              <path
                d="M518.2961,45.52v.03h-.07a1.3664,1.3664,0,0,1-.19-.02A2.26,2.26,0,0,0,518.2961,45.52Z"
                transform="translate(0 -0.8983)"
                fill="#fdc61a"
              />
              <path
                d="M518.2961,45.52v.03h-.07a1.3664,1.3664,0,0,1-.19-.02A2.26,2.26,0,0,0,518.2961,45.52Z"
                transform="translate(0 -0.8983)"
                fill="#fdc61a"
              />
              <path
                d="M518.2961,9.6v.04a2.3484,2.3484,0,0,1-.26-.01V9.61C518.1261,9.61,518.2061,9.6,518.2961,9.6Z"
                transform="translate(0 -0.8983)"
                fill="#fdc61a"
              />
              <path
                d="M559.6861,9.6V45.52c-.74.04-1.54.06-2.42.03a20.2942,20.2942,0,0,1-7.64-1.63,25.8,25.8,0,0,0-9.99-2.02,34.3429,34.3429,0,0,0-11.78,2.08c-3.04.96-5.68,1.81-9.56,1.57v-.03a2.26,2.26,0,0,1-.26.01c-.67.03-1.38.05-2.17.02a20.2827,20.2827,0,0,1-7.63-1.63,25.8141,25.8141,0,0,0-10-2.02,34.3272,34.3272,0,0,0-11.77,2.08c-3.06.97-5.71,1.82-9.63,1.57a1.1076,1.1076,0,0,1-.19-.02v-.01c-.74.04-1.54.06-2.43.03a20.2827,20.2827,0,0,1-7.63-1.63,25.8141,25.8141,0,0,0-10-2.02,34.28,34.28,0,0,0-11.77,2.08c-3.06.97-5.71,1.82-9.63,1.57a1.3552,1.3552,0,0,1-.2-.02v-.01c-.74.04-1.54.06-2.42.03a20.2827,20.2827,0,0,1-7.63-1.63,25.858,25.858,0,0,0-10-2.02,34.2335,34.2335,0,0,0-11.77,2.08c-3.06.97-5.71,1.82-9.63,1.57a1.3552,1.3552,0,0,1-.2-.02v-.01c-.74.04-1.54.06-2.42.03a20.19,20.19,0,0,1-7.63-1.63,25.858,25.858,0,0,0-10-2.02,34.2335,34.2335,0,0,0-11.77,2.08c-3.06.97-5.72,1.82-9.63,1.57a1.3552,1.3552,0,0,1-.2-.02V9.63c.53.04,1.04.05,1.52.05a32.33,32.33,0,0,0,10.54-1.97,27.8907,27.8907,0,0,1,9.45-1.73,18.966,18.966,0,0,1,7.51,1.55,27.0021,27.0021,0,0,0,9.99,2.09c.94.03,1.82.02,2.64-.02v.03c.53.04,1.04.05,1.52.05a32.33,32.33,0,0,0,10.54-1.97,27.8907,27.8907,0,0,1,9.45-1.73,18.886,18.886,0,0,1,7.51,1.55,27.0515,27.0515,0,0,0,9.99,2.09c.94.03,1.82.02,2.64-.02v.03c.53.04,1.04.05,1.53.05a32.4372,32.4372,0,0,0,10.54-1.97,27.7832,27.7832,0,0,1,9.44-1.73,18.886,18.886,0,0,1,7.51,1.55,27.101,27.101,0,0,0,9.99,2.09c.95.03,1.82.02,2.65-.02v.03c.52.04,1.03.05,1.52.05a32.4372,32.4372,0,0,0,10.54-1.97,27.83,27.83,0,0,1,9.44-1.73,18.98,18.98,0,0,1,7.52,1.55,26.99,26.99,0,0,0,9.98,2.09c.85.03,1.64.02,2.39-.01v.02a2.3484,2.3484,0,0,0,.26.01c.44.03.86.04,1.26.04a32.3837,32.3837,0,0,0,10.54-1.97,27.83,27.83,0,0,1,9.44-1.73,18.98,18.98,0,0,1,7.52,1.55,27.0021,27.0021,0,0,0,9.99,2.09C557.9861,9.65,558.8661,9.64,559.6861,9.6Z"
                transform="translate(0 -0.8983)"
                fill="#fdc61a"
              />
              <path
                d="M559.6861,4.52V9.6c-.82.04-1.7.05-2.64.02a27.0021,27.0021,0,0,1-9.99-2.09,18.98,18.98,0,0,0-7.52-1.55,27.83,27.83,0,0,0-9.44,1.73,32.3837,32.3837,0,0,1-10.54,1.97c-.4,0-.82-.01-1.26-.04V9.6c-.09,0-.17.01-.26.01-.75.03-1.54.04-2.39.01a26.99,26.99,0,0,1-9.98-2.09,18.98,18.98,0,0,0-7.52-1.55,27.83,27.83,0,0,0-9.44,1.73,32.4372,32.4372,0,0,1-10.54,1.97c-.49,0-1-.01-1.52-.05V9.6c-.83.04-1.7.05-2.65.02a27.101,27.101,0,0,1-9.99-2.09,18.886,18.886,0,0,0-7.51-1.55,27.7832,27.7832,0,0,0-9.44,1.73,32.4372,32.4372,0,0,1-10.54,1.97c-.49,0-1-.01-1.53-.05V9.6c-.82.04-1.7.05-2.64.02a27.0515,27.0515,0,0,1-9.99-2.09,18.886,18.886,0,0,0-7.51-1.55,27.8907,27.8907,0,0,0-9.45,1.73,32.33,32.33,0,0,1-10.54,1.97c-.48,0-.99-.01-1.52-.05V9.6c-.82.04-1.7.05-2.64.02a27.0021,27.0021,0,0,1-9.99-2.09,18.966,18.966,0,0,0-7.51-1.55,27.8907,27.8907,0,0,0-9.45,1.73,32.33,32.33,0,0,1-10.54,1.97c-.48,0-.99-.01-1.52-.05V4.53a1.3552,1.3552,0,0,0,.2.02,23.6911,23.6911,0,0,0,9.63-1.57A34.4739,34.4739,0,0,1,373.2861.9a25.858,25.858,0,0,1,10,2.02,20.19,20.19,0,0,0,7.63,1.63c.88.02,1.68.01,2.42-.03v.01a1.3552,1.3552,0,0,0,.2.02,23.6618,23.6618,0,0,0,9.63-1.57A34.4739,34.4739,0,0,1,414.9361.9a25.858,25.858,0,0,1,10,2.02,20.2827,20.2827,0,0,0,7.63,1.63c.88.02,1.68.01,2.42-.03v.01a1.3552,1.3552,0,0,0,.2.02,23.6618,23.6618,0,0,0,9.63-1.57A34.5214,34.5214,0,0,1,456.5861.9a25.8141,25.8141,0,0,1,10,2.02,20.2827,20.2827,0,0,0,7.63,1.63c.89.02,1.69.01,2.43-.03v.01a1.1076,1.1076,0,0,0,.19.02,23.6618,23.6618,0,0,0,9.63-1.57A34.5689,34.5689,0,0,1,498.2361.9a25.8141,25.8141,0,0,1,10,2.02,20.2827,20.2827,0,0,0,7.63,1.63c.79.02,1.5.01,2.17-.02a1.3664,1.3664,0,0,0,.19.02h.07a23.7152,23.7152,0,0,0,9.56-1.57A34.5844,34.5844,0,0,1,539.6361.9a25.8,25.8,0,0,1,9.99,2.02,20.2942,20.2942,0,0,0,7.64,1.63C558.1461,4.57,558.9461,4.56,559.6861,4.52Z"
                transform="translate(0 -0.8983)"
                fill="#1a1a1a"
              />
              <path
                d="M559.6861,45.52V50.6c-.82.04-1.7.05-2.64.02a27.0021,27.0021,0,0,1-9.99-2.09,18.98,18.98,0,0,0-7.52-1.55,27.59,27.59,0,0,0-9.44,1.73,32.3837,32.3837,0,0,1-10.54,1.97c-.48,0-.99-.01-1.52-.05v-.02c-.75.03-1.54.04-2.39.01a26.99,26.99,0,0,1-9.98-2.09,18.98,18.98,0,0,0-7.52-1.55,27.59,27.59,0,0,0-9.44,1.73,32.4372,32.4372,0,0,1-10.54,1.97c-.49,0-1-.01-1.52-.05V50.6c-.83.04-1.7.05-2.65.02a27.101,27.101,0,0,1-9.99-2.09,18.886,18.886,0,0,0-7.51-1.55,27.5432,27.5432,0,0,0-9.44,1.73,32.4372,32.4372,0,0,1-10.54,1.97c-.49,0-1-.01-1.53-.05V50.6c-.82.04-1.7.05-2.64.02a27.0515,27.0515,0,0,1-9.99-2.09,18.886,18.886,0,0,0-7.51-1.55,27.6493,27.6493,0,0,0-9.45,1.73,32.33,32.33,0,0,1-10.54,1.97c-.48,0-.99-.01-1.52-.05V50.6c-.82.04-1.7.05-2.64.02a27.0021,27.0021,0,0,1-9.99-2.09,18.966,18.966,0,0,0-7.51-1.55,27.6493,27.6493,0,0,0-9.45,1.73,32.33,32.33,0,0,1-10.54,1.97c-.48,0-.99-.01-1.52-.05v-5.1a1.3552,1.3552,0,0,0,.2.02c3.91.25,6.57-.6,9.63-1.57a34.2335,34.2335,0,0,1,11.77-2.08,25.858,25.858,0,0,1,10,2.02,20.19,20.19,0,0,0,7.63,1.63c.88.03,1.68.01,2.42-.03v.01a1.3552,1.3552,0,0,0,.2.02c3.92.25,6.57-.6,9.63-1.57a34.2335,34.2335,0,0,1,11.77-2.08,25.858,25.858,0,0,1,10,2.02,20.2827,20.2827,0,0,0,7.63,1.63c.88.03,1.68.01,2.42-.03v.01a1.3552,1.3552,0,0,0,.2.02c3.92.25,6.57-.6,9.63-1.57a34.28,34.28,0,0,1,11.77-2.08,25.8141,25.8141,0,0,1,10,2.02,20.2827,20.2827,0,0,0,7.63,1.63c.89.03,1.69.01,2.43-.03v.01a1.1076,1.1076,0,0,0,.19.02c3.92.25,6.57-.6,9.63-1.57a34.3272,34.3272,0,0,1,11.77-2.08,25.8141,25.8141,0,0,1,10,2.02,20.2827,20.2827,0,0,0,7.63,1.63c.79.03,1.5.01,2.17-.02a1.3664,1.3664,0,0,0,.19.02h.07c3.88.24,6.52-.61,9.56-1.57a34.3429,34.3429,0,0,1,11.78-2.08,25.8,25.8,0,0,1,9.99,2.02,20.2942,20.2942,0,0,0,7.64,1.63C558.1461,45.58,558.9461,45.56,559.6861,45.52Z"
                transform="translate(0 -0.8983)"
                fill="#1a1a1a"
              />
            </motion.g>
          </g>
        </g>
        <path
          d="M421.7361,170.29V126.37l9.43-13.71.02-.03h-.02V65.16h-15.23V81.11h-12.33V66.61h-23.93v14.5h-12.32V66.61h-25.38v14.5h-10.86V66.61h-16.69v46.02h-.03c3.55,4.08,7.98,9.18,11.09,12.71h-.18v44.95h-6.46v14.5h-12.31v-14.5h-29.74v14.5h-12.31v-14.5h-29.74v14.5h-10.87v-14.5h-7.25V125.34h-.18c3.11-3.53,7.54-8.63,11.09-12.71h-.04V66.61h-16.67v14.5h-10.87V66.61h-25.39v14.5h-12.31V66.61h-23.94v14.5h-12.31V65.16h-15.24v47.47h-.02l.02.03,9.43,13.71v43.92h-11.6v98.43c1.68-.3,3.37-.6,5.07-.88V175.36h19.58v14.51h22.48V175.36h19.57v14.51h23.93V175.36h19.57v14.51h21.03V175.36h19.58v14.51h22.47V175.36h19.58v14.51h22.48V175.36h19.57v14.51h21.03V175.36h21.02v14.51h22.48V175.36h19.57v88.31c1.7.23,3.39.47,5.08.73V170.29ZM115.8461,70.24h5.07V86.19h22.48V71.69h13.77v14.5h22.48V71.69h15.23v14.5h21.03V71.69h6.52v35.86h-106.58Zm95.7,100.05h-17.4v14.5h-13.77v-14.5h-29.73v14.5h-12.32v-14.5h-13.06V130.41h86.28Zm1.05-48.26c-.21.24-.42.48-.63.71-.2.23-.39.45-.58.66-.18.2-.35.4-.52.59-.5.56-.91,1.02-1.21,1.35h-84.01l-8.74-12.71h103.9c-1.84,2.12-3.64,4.19-5.26,6.04C214.4661,119.9,213.4661,121.03,212.5961,122.03Zm106.91-50.34h6.53v14.5h21.03V71.69h15.22v14.5h22.48V71.69h13.77v14.5h22.48V70.24h5.06v37.31h-106.57Zm9.83,50.34c-.87-1-1.87-2.13-2.95-3.36-1.61-1.85-3.42-3.92-5.26-6.04h103.9l-8.74,12.71h-84.01c-.3-.33-.71-.79-1.21-1.35-.17-.19-.34-.39-.52-.59-.19-.21-.38-.43-.58-.66C329.7561,122.51,329.5461,122.27,329.3361,122.03Zm87.32,48.26h-13.71v14.5h-12.31v-14.5h-31.19v14.5h-10.86v-14.5h-18.2V130.41h86.27Z"
          transform="translate(0 -0.8983)"
          fill="#1a1a1a"
        />
        <rect
          x="406.6861"
          y="0.1017"
          width="5.57"
          height="80.11"
          fill="#1a1a1a"
        />
        <motion.path
          d="M497.2561,4.2388v41.7a2.0508,2.0508,0,0,1-2.0447,2.0509L491.6861,48V2h3.3312A2.2387,2.2387,0,0,1,497.2561,4.2388Z"
          transform="translate(0 -0.8983)"
          fill="#1a1a1a"
          animate={castleInView ? "animate" : "stop"}
          variants={{
            animate: {
              y: ["0.3%", "-0.3%", "0.3%"]
            },
            stop: {
              y: ["0%", "0%", "0%"]
            }
          }}
          transition={{
            duration: 1.4,
            loop: Infinity,
            ease: "linear"
          }}
        />
      </g>
    </Svg>
  );
}
