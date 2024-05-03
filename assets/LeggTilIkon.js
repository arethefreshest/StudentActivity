import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LeggTilIkon({ fill = "#000"}) {
    return (
        <Svg
            width={29}
            height={28}
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M14.5 2.8c6.175 0 11.2 5.025 11.2 11.2 0 6.175-5.025 11.2-11.2 11.2-6.175 0-11.2-5.025-11.2-11.2 0-6.175 5.025-11.2 11.2-11.2zm0-2.8C6.768 0 .5 6.268.5 14s6.268 14 14 14 14-6.268 14-14-6.268-14-14-14zm7 12.6h-5.6V7h-2.8v5.6H7.5v2.8h5.6V21h2.8v-5.6h5.6v-2.8z"
                fill={fill}
            />
        </Svg>
    )
}

export default LeggTilIkon;