import {Dimensions, StatusBar, StyleSheet} from 'react-native';



const { width, height } = Dimensions.get('window'); // Get device dimensions
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    baseText: {
        fontFamily: 'Roboto-Flex',
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
    },
    button: {
        backgroundColor: 'blue',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 4,
    },
    buttonText: {
        color: 'white',
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        width: 200,
        padding: 8,
        borderRadius: 4,
    },
    gradientBackground: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        borderTopWidth: 0, // Ensure no borders
        borderWidth: 0,
        borderColor: 'transparent',
        shadowOffset: { height: 0, width: 0 }, // No shadow offset
        shadowOpacity: 0, // No shadow opacity
        shadowColor: 'transparent', // No shadow color
    },
    contentContainer: {
        flex: 1,
        paddingTop: 24,
        position: 'relative',
    },
    burgerMenu: {
        position: 'absolute',
        left: 16,
        top: 69,
    },
    burgerIcon: {
        width: 36,
        height: 36,
        tintColor: '#FFECE7',
    },
    logoContainer: {
        position: 'absolute',
        left: 92,
        top: 38,
    },
    logo: {
        position: 'absolute',
        top: 38,
        left: (width - 248) / 2,
        width: 248,
        height: 98,
    },
    inputGroup: {
        position: 'absolute',
        width: 238,
        right: 332,
        height: 50.7,
        borderRadius: 10,
        backgroundColor: '#FFECE7',
    },
    inputLabel: {
        fontFamily: 'Roboto-Medium',
        //fontWeight: '500',
        fontSize: 16,
        //lineHeight: 14,
        color: '#FFECE7',
        position: 'absolute',
        // width: 140,
        //height: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputOuter: {
        width: 238,
        height: 50.7,
        borderRadius: 10,
        backgroundColor: '#FFECE7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputInner: {
        width: 230,
        height: 42.59,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 28,
        height: '100%',
        padding: 0
    },
    inputIcon: {
        width: 28,
        height: 28,
        tintColor: '#000000',
        marginLeft: 0,
        marginRight: 10,
    },
    textInput: {
        flex: 1,
        fontFamily: 'Roboto-Italic',
        fontSize: 16,
        //fontStyle: 'italic',
        textAlign: 'right',
        color: '#000000',
        opacity: 0.5,
    },
    forgotPassword: {
        color: '#FFECE7',
        fontSize: 15,
        fontFamily: 'Roboto-Medium',
        //fontWeight: '600',
        position: 'absolute'
    },
    forgotPasswordText: {
        fontSize: 15,
        color: '#FFECE7',
    },
    loginButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FFECE7',
        borderWidth: 2,
        borderRadius: 10,
        height: 50,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        position: 'absolute',
        width: 177,
    },
    loginButtonText: {
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        //fontWeight: '700',
        color: '#FFECE7',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 20,
    },
    thirdPartyLogin: {
        marginTop: 20,
    },
    thirdPartyRow: {
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'space-evenly',
        padding: 10,
        position: 'absolute',
        //left: 96,
        top: 475,
        width: 236,
        height: 48,
    },
    italicText: {
        fontSize: 18,
        fontFamily: 'Roboto-Italic',
        color: '#FFECE7',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        position: 'absolute',
    },
    thirdPartyIcon: {
        width: 48,
        height: 48,
        position: 'absolute',
        //borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    newHereText: {
        width: 59,
        height: 14,
        fontSize: 18,
        fontFamily: 'Roboto-Italic',
        color: '#FFECE7',
    },
    registerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FFECE7',
        borderWidth: 2,
        borderRadius: 10,
        height: 50,
    },
    registerButtonText: {
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        color: '#FFECE7',
    },
    gradientScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    safeArea: {
        flex: 1,
        marginTop: 140,
        marginBottom: 100,
    },
    activityContainer: {
        margin: 10,
        padding: 20,
        backgroundColor: 'rgba(255,255,255,0.63)',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#1e1d1d',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textTop: {
        fontSize: 18,
        marginTop: 10,
    },
    error: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center',
    },
    noResults: {
        fontSize: 16,
        textAlign: 'center',
    }
});