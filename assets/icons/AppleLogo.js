import * as React from "react"
import Svg, { Path } from "react-native-svg"
const AppleLogo = (props) => (
    <Svg
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M43.6 0h-38a5 5 0 00-5 5v38a5 5 0 005 5h38a5 5 0 005-5V5a5 5 0 00-5-5z"
            fill="#fff"
        />
        <Path
            d="M35.69 16.612c-.14.086-3.23 1.885-3.194 5.628.038 4.476 3.923 5.966 3.968 5.983-.035.107-.621 2.123-2.048 4.206-1.233 1.804-2.51 3.598-4.526 3.635-1.98.036-2.62-1.175-4.882-1.175-2.264 0-2.972 1.138-4.845 1.211-1.946.074-3.428-1.948-4.67-3.742-2.539-3.672-4.48-10.377-1.873-14.902 1.294-2.247 3.607-3.671 6.117-3.708 1.912-.036 3.714 1.285 4.884 1.285 1.152 0 3.218-1.54 5.652-1.36.955.071 3.664.356 5.418 2.939zm-6.919-5.363c1.034-1.25 1.73-2.99 1.538-4.721-1.488.059-3.288.991-4.356 2.24-.955 1.107-1.795 2.879-1.567 4.574 1.659.129 3.352-.842 4.385-2.093z"
            fill="#000"
        />
    </Svg>
)
export default AppleLogo;