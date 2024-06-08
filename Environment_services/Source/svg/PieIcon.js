import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PieIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#086972"
      strokeWidth={1.082}
      d="M4.8 2.098c.424-.283.87-.53 1.336-.738C7.45.771 8.106.477 8.98 1.044c.874.565.874 1.494.874 3.352v1.436c0 1.806 0 2.708.561 3.27.562.56 1.464.56 3.27.56h1.436c1.857 0 2.786 0 3.351.874.567.874.273 1.53-.316 2.844A9.094 9.094 0 0 1 .933 11.437 9.097 9.097 0 0 1 4.8 2.098Z"
    />
  </Svg>
)
export default PieIcon
