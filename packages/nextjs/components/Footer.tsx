import { hardhat } from "wagmi/chains";
import { useGlobalState } from "~~/services/store/store";
import { getTargetNetwork } from "~~/utils/scaffold-eth";

/**
 * Site footer
 */
export const Footer = () => {
  return (
    <div>
      <svg width="100%" height="100%" viewBox="0 0 1280 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1280 31.2231H0V100H1280V31.2231Z" fill="#7C4D29" />
        <path
          d="M104.278 51.1154C104.278 56.1431 99.0568 60.2172 92.6155 60.2172H68.4764C62.0351 60.2172 56.8154 56.1431 56.8154 51.1154C56.8154 46.0864 62.0351 42.0122 68.4764 42.0122H92.6155C99.0568 42.0122 104.278 46.0877 104.278 51.1154Z"
          fill="#56331B"
        />
        <path
          d="M1260.41 77.6481C1260.41 82.6758 1255.19 86.7499 1248.75 86.7499H1224.61C1218.17 86.7499 1212.95 82.6758 1212.95 77.6481C1212.95 72.6191 1218.17 68.5449 1224.61 68.5449H1248.75C1255.19 68.5449 1260.41 72.6205 1260.41 77.6481Z"
          fill="#56331B"
        />
        <path
          d="M288.765 51.1154C288.765 56.1431 283.543 60.2172 277.104 60.2172H252.965C246.525 60.2172 241.304 56.1431 241.304 51.1154C241.304 46.0864 246.523 42.0122 252.965 42.0122H277.104C283.543 42.0122 288.765 46.0877 288.765 51.1154Z"
          fill="#56331B"
        />
        <path
          d="M336.227 77.6481C336.227 82.6758 331.006 86.7499 324.566 86.7499H300.427C293.986 86.7499 288.766 82.6758 288.766 77.6481C288.766 72.6191 293.986 68.5449 300.427 68.5449H324.566C331.006 68.5449 336.227 72.6205 336.227 77.6481Z"
          fill="#56331B"
        />
        <path
          d="M563.85 77.6481C563.85 82.6758 558.628 86.7499 552.189 86.7499H528.05C521.61 86.7499 516.389 82.6758 516.389 77.6481C516.389 72.6191 521.61 68.5449 528.05 68.5449H552.189C558.628 68.5449 563.85 72.6205 563.85 77.6481Z"
          fill="#56331B"
        />
        <path
          d="M159.412 77.6481C159.412 82.6758 154.19 86.7499 147.749 86.7499H102.876C96.435 86.7499 91.2153 82.6758 91.2153 77.6481C91.2153 72.6191 96.435 68.5449 102.876 68.5449H147.749C154.19 68.5449 159.412 72.6205 159.412 77.6481Z"
          fill="#56331B"
        />
        <path
          d="M877.708 51.1154C877.708 56.1431 872.488 60.2172 866.045 60.2172H841.906C835.463 60.2172 830.243 56.1431 830.243 51.1154C830.243 46.0864 835.463 42.0122 841.906 42.0122H866.045C872.488 42.0122 877.708 46.0877 877.708 51.1154Z"
          fill="#56331B"
        />
        <path
          d="M748.357 77.6481C748.357 82.6758 743.136 86.7499 736.695 86.7499H691.822C685.379 86.7499 680.159 82.6758 680.159 77.6481C680.159 72.6191 685.379 68.5449 691.822 68.5449H736.695C743.136 68.5449 748.357 72.6205 748.357 77.6481Z"
          fill="#56331B"
        />
        <path
          d="M647.719 51.1154C647.719 56.1431 642.498 60.2172 636.058 60.2172H591.186C584.744 60.2172 579.523 56.1431 579.523 51.1154C579.523 46.0864 584.744 42.0122 591.186 42.0122H636.058C642.498 42.0122 647.719 46.0877 647.719 51.1154Z"
          fill="#56331B"
        />
        <path
          d="M441.334 60.2184C441.334 65.2461 436.113 69.3202 429.673 69.3202H384.801C378.359 69.3202 373.14 65.2461 373.14 60.2184C373.14 55.1894 378.359 51.1152 384.801 51.1152H429.673C436.113 51.1152 441.334 55.1908 441.334 60.2184Z"
          fill="#56331B"
        />
        <path
          d="M1036.9 51.1154C1036.9 56.1431 1031.68 60.2172 1025.24 60.2172H1001.1C994.662 60.2172 989.442 56.1431 989.442 51.1154C989.442 46.0864 994.662 42.0122 1001.1 42.0122H1025.24C1031.68 42.0122 1036.9 46.0877 1036.9 51.1154Z"
          fill="#56331B"
        />
        <path
          d="M1084.37 77.6481C1084.37 82.6758 1079.14 86.7499 1072.7 86.7499H1048.56C1042.12 86.7499 1036.9 82.6758 1036.9 77.6481C1036.9 72.6191 1042.12 68.5449 1048.56 68.5449H1072.7C1079.14 68.5449 1084.37 72.6205 1084.37 77.6481Z"
          fill="#56331B"
        />
        <path
          d="M1189.47 60.2184C1189.47 65.2461 1184.25 69.3202 1177.81 69.3202H1132.94C1126.5 69.3202 1121.28 65.2461 1121.28 60.2184C1121.28 55.1894 1126.5 51.1152 1132.94 51.1152H1177.81C1184.25 51.1152 1189.47 55.1908 1189.47 60.2184Z"
          fill="#56331B"
        />
        <path d="M1280 14.2632H0V31.2234H1280V14.2632Z" fill="#56331B" />
        <path d="M1280 0H0V16.9603H1280V0Z" fill="#7FC62E" />
      </svg>
    </div>
  );
};