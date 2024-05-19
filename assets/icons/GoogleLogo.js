import * as React from "react"
import Svg, { Path } from "react-native-svg"

const GoogleLogo = (props) => {
    return (
        <Svg
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M43 0H5a5 5 0 00-5 5v38a5 5 0 005 5h38a5 5 0 005-5V5a5 5 0 00-5-5z"
                fill="#fff"
            />
            <Path
                d="M8.438 31.969a18.001 18.001 0 0027.75 5.531V33h-5.813c-4.969 3.281-13.219 2.063-16.031-5.625"
                fill="#34A853"
            />
            <Path
                d="M36.188 37.5c2.038-1.896 3.593-4.49 4.475-7.47a20.308 20.308 0 00.493-9.311H24.375v6.937h9.563C33.5 29.97 32.312 31.75 30.375 33"
                fill="#4285F4"
            />
            <Path
                d="M8.438 31.969a18.151 18.151 0 01-1.872-8.016c0-2.772.639-5.51 1.872-8.015l5.906 4.593c-.75 2.313-.75 4.594 0 6.844"
                fill="#FBBC02"
            />
            <Path
                d="M14.344 20.531c2.062-6.468 10.875-10.218 16.781-4.687l5.156-5.063C28.97 3.75 14.72 4.031 8.438 15.937"
                fill="#EA4335"
            />
        </Svg>
    )
}

export default GoogleLogo;