import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Meldingerikon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={31}
        height={30}
        fill="none"
        {...props}
    >
        <Path
            stroke="#9DB3B3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.75}
            d="M3.55 23.51C1.5 21.69 1.5 20.31 1.5 14.444c0-5.866 0-8.8 2.05-10.62C5.602 2 8.9 2 15.5 2s9.9 0 11.949 1.823C29.5 5.645 29.5 8.578 29.5 14.444c0 5.866 0 7.245-2.051 9.066-2.048 1.823-5.35 1.823-11.949 1.823-3.514 0-5.32 2.704-8.4 4.667v-4.996c-1.532-.254-2.659-.7-3.55-1.494Z"
        />
    </Svg>
)
export default Meldingerikon;
