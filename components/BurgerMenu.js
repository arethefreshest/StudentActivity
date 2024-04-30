import React from "react";
import { TouchableOpacity, View } from "react-native";
import BurgerMenyVektor from "../assets/BurgerMenyVektor";
import { styles } from "../styles";

const BurgerMenu = ({ onPress }) => (
    <TouchableOpacity style={styles.burgerMenu} onPress={onPress}>
        <BurgerMenyVektor style={styles.burgerIcon} width={36} height={36} />
    </TouchableOpacity>
);

export default BurgerMenu;