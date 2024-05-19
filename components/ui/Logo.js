import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { Image, View, Text} from "react-native";
import StudAklogo from '../../assets/icons/StudAkLogo';
import { styles } from "../../styles";

const Logo = () => {
    return (
        <View style={styles.logoContainer}>
            <StudAklogo width={248} height={98} />
        </View>
    );
};

export default Logo;