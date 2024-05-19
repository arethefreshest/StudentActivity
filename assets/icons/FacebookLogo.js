import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const FacebookLogo = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
        {...props}
    >
        <Path
            d="M43 0H5a5 5 0 00-5 5v38a5 5 0 005 5h38a5 5 0 005-5V5a5 5 0 00-5-5z"
            fill="#fff"
        />
        <Path
            d="M31.431 29.25h-4.219v12.563a18 18 0 10-5.625 0V29.25h-4.593V24h4.593v-4.219c.25-5.562 3.875-7.687 10.875-6.375v4.406h-2.437c-1.813.063-2.75 1-2.813 2.813V24h5.016"
            fill="#1877F2"
        />
    </Svg>
)
export default FacebookLogo;
