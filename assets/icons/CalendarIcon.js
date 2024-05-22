import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CalendarIcon({ fill = "#000"}) {
    return (
        <Svg
            width={29}
            height={28}
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M2032 883 c-104 -51 -108 -202 -6 -260 47 -27 80 -29 134 -7 47 19 90 82 90 133 0 108 -120 182 -218 134z"
                fill={fill}
            />
        </Svg>
    )
}

export default CalendarIcon;