import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Chartmenu = (props) => (
  <Svg
    
    width={22}
    height={20}

    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.12}
      d="M6.868 14.251V2.75c0-1.092-.466-1.529-1.624-1.529h-2.94C1.145 1.22.68 1.657.68 2.749V14.25c0 1.092.466 1.529 1.623 1.529h2.941c1.158 0 1.624-.437 1.624-1.529Zm8.372-8.284V2.66c0-1.026-.466-1.441-1.624-1.441h-2.94c-1.158 0-1.624.415-1.624 1.441V5.96c0 1.034.466 1.442 1.623 1.442h2.941c1.158.007 1.624-.408 1.624-1.434Zm0 8.19v-2.942c0-1.157-.466-1.623-1.624-1.623h-2.94c-1.158 0-1.624.466-1.624 1.623v2.941c0 1.158.466 1.624 1.623 1.624h2.941c1.158 0 1.624-.466 1.624-1.623Z"
    />
  </Svg>
)
export default Chartmenu
