import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EpostIkon(props) {
    return (
        <Svg
            width={24}
            height={20}
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M2.333 19.45a2.23 2.23 0 01-1.647-.694A2.3 2.3 0 010 17.084V2.887c0-.65.229-1.207.686-1.67A2.237 2.237 0 012.333.52H21c.642 0 1.191.232 1.648.696a2.29 2.29 0 01.685 1.67v14.197c0 .651-.228 1.208-.684 1.672a2.226 2.226 0 01-1.649.695H2.333zm9.334-8.281L21 5.254V2.887l-9.333 5.916-9.334-5.916v2.367l9.334 5.915z"
                fill="#000"
            />
        </Svg>
    )
}

export default EpostIkon;