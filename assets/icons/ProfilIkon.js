import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ProfilIkon({ fill = "#9DB3B3", stroke = "#9DB3B3", strokeWidth = 0 }) {
    return (
        <Svg
            width={31}
            height={32}
            viewBox="0 0 31 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M1.5 26.08c0-2.08.737-4.073 2.05-5.544 1.313-1.47 3.093-2.296 4.95-2.296h14c1.857 0 3.637.826 4.95 2.296 1.313 1.47 2.05 3.465 2.05 5.544 0 1.04-.369 2.037-1.025 2.772C27.818 29.587 26.928 30 26 30H5c-.928 0-1.818-.413-2.475-1.148C1.87 28.117 1.5 27.12 1.5 26.08z"
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinejoin="round"
            />
            <Path
                d="M15.5 13.76c2.9 0 5.25-2.633 5.25-5.88S18.4 2 15.5 2s-5.25 2.633-5.25 5.88 2.35 5.88 5.25 5.88z"
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
            />
        </Svg>
    );
}

export default ProfilIkon;
