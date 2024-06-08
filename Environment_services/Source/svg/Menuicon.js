import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Menuicon = (props) => (
  <Svg
    
    width={18}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      fill="#001E20"
      d="M1.286 0h6.428a1.286 1.286 0 0 1 0 2.571H1.286a1.286 1.286 0 0 1 0-2.571Zm9 10.286h6.428a1.286 1.286 0 0 1 0 2.571h-6.428a1.286 1.286 0 1 1 0-2.571Zm-9-5.143h15.428a1.286 1.286 0 1 1 0 2.571H1.286a1.286 1.286 0 0 1 0-2.571Z"
    />
  </Svg>
)
export default Menuicon
