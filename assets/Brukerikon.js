import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Brukerikon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={26}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            d="M0 22.244c0-1.887.737-3.696 2.05-5.03A6.944 6.944 0 0 1 7 15.13h14c1.857 0 3.637.75 4.95 2.084a7.173 7.173 0 0 1 2.05 5.03c0 .943-.369 1.848-1.025 2.515A3.472 3.472 0 0 1 24.5 25.8h-21a3.472 3.472 0 0 1-2.475-1.042A3.586 3.586 0 0 1 0 22.244ZM14 11.121c2.9 0 5.25-2.388 5.25-5.335S16.9.451 14 .451 8.75 2.839 8.75 5.786s2.35 5.335 5.25 5.335Z"
        />
    </Svg>
)
export default Brukerikon;
