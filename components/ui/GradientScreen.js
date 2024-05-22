import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from "react-native";
import { View } from 'react-native';
import { styles} from "../../styles";
import Logo from "./Logo";

const { width, height } = Dimensions.get('window');
const GradientScreen = ({ children }) => (
    <LinearGradient
        colors={['#61A0AF', '#00796B']}
        style={styles.gradientBackground}
    >
        <View style={styles.contentContainer}>
            <Logo />
            {children}
        </View>
    </LinearGradient>
);

export default GradientScreen;
