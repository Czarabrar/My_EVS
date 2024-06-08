import * as React from "react"
import Svg, { Path } from "react-native-svg"
const TruckLcv = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={35}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M23.834 8.75h-8.02v5.833H1.958v7.292h2.917a4.375 4.375 0 0 0 8.75 0h8.75a4.375 4.375 0 1 0 8.75 0h2.916V17.5a2.907 2.907 0 0 0-2.916-2.917h-2.917L23.834 8.75Zm-5.833 2.188h5.104l2.858 3.645h-7.962v-3.646Zm-8.75 8.75a2.187 2.187 0 1 1 0 4.374 2.187 2.187 0 0 1 0-4.375Zm17.5 0a2.187 2.187 0 1 1 0 4.374 2.187 2.187 0 0 1 0-4.375Z"
    />
  </Svg>
)
export default TruckLcv
