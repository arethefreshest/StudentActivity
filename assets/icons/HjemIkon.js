import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HjemIkon({ fill = "#000" }) {
    return (
        <Svg
            width={29}
            height={28}
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M.5 28V9.333L14.5 0l14 9.333V28H18V17.111h-7V28H.5z"
                fill={fill}
            />
        </Svg>
    )
}

export default HjemIkon;