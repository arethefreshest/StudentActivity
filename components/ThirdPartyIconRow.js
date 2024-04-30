import React from "react";
import { View, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import GoogleLogo from "../assets/GoogleLogo";
import AppleLogo from "../assets/AppleLogo";
import OutlookLogo from "../assets/OutlookLogo";
import FacebookLogo from "../assets/FacebookLogo";

const ThirdPartyIconRow = ({ onPressGoogle, onPressApple, onPressOutlook, onPressFacebook }) => {
    return (
        <View style={styles.thirdPartyRow}>
            <TouchableOpacity onPress={onPressGoogle} style={[styles.thirdPartyIcon, { left: 96 }]}>
                <GoogleLogo  />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressApple} style={[styles.thirdPartyIcon, { left: 96 + 48 + 14.67 }]}>
                <AppleLogo />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressOutlook} style={[styles.thirdPartyIcon, { left: 96 + (48 + 14.67) * 2 }]}>
                <OutlookLogo />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressFacebook} style={[styles.thirdPartyIcon, { left: 96 + (48 + 14.67) * 3 }]}>
                <FacebookLogo />
            </TouchableOpacity>
        </View>
    );
};

export default ThirdPartyIconRow;