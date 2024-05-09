import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { styles as globalStyles } from "../styles";
import GoogleLogo from "../assets/GoogleLogo";
import AppleLogo from "../assets/AppleLogo";
import OutlookLogo from "../assets/OutlookLogo";
import FacebookLogo from "../assets/FacebookLogo";

const ThirdPartyIconRow = ({ onPressGoogle, onPressApple, onPressOutlook, onPressFacebook, style }) => {
    const mergedStyles = StyleSheet.flatten([globalStyles.thirdPartyRow, style]);

    return (
        <View style={mergedStyles}>
            <TouchableOpacity onPress={onPressGoogle} style={[globalStyles.thirdPartyIcon, { left: 95 }]}>
                <GoogleLogo  />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressApple} style={[globalStyles.thirdPartyIcon, { left: 96 + 48 + 14.67 }]}>
                <AppleLogo />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressOutlook} style={[globalStyles.thirdPartyIcon, { left: 96 + (48 + 14.67) * 2 }]}>
                <OutlookLogo />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressFacebook} style={[globalStyles.thirdPartyIcon, { left: 96 + (48 + 14.67) * 3 }]}>
                <FacebookLogo />
            </TouchableOpacity>
        </View>
    );
};

export default ThirdPartyIconRow;