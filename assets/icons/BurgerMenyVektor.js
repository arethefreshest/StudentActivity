import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BurgerMenyVektor = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path fill="#FFECE7" d="M0 36v-6h36v6H0Zm0-15v-6h36v6H0ZM0 6V0h36v6H0Z" />
    </Svg>
)
export default BurgerMenyVektor;
