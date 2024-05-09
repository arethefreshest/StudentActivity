import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from "react-native";
import { StyleSheet, View, Text, Image } from 'react-native';
import {styles} from "../styles";
import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";

const { width, height } = Dimensions.get('window');
const GradientScreen = ({ children, onBurgerMenuPress }) => (
    <LinearGradient
        colors={['#61A0AF', '#00796B']}
        style={styles.gradientBackground}
    >
        <View style={styles.contentContainer}>
            <BurgerMenu onPress={onBurgerMenuPress} />
            <Logo />
            {children}
        </View>
    </LinearGradient>
);

export default GradientScreen;
