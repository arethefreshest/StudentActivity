import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
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
    logo: {
        position: 'absolute',
        left: 92,
        top: 38,
        width: 248,
        height: 98,
    },
    inputGroup: {
        marginTop: 30,
    },
    inputLabel: {
        fontSize: 16,
        color: '#FFECE7'
    },
    inputOuter: {
        backgroundColor: '#FFECE7',
        borderRadius: 10,
        padding: 8,
    },
    inputInner: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
    },
    inputIcon: {
        width: 28,
        height: 28,
        tintColor: '#000000',
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        paddingRight: 20,
        marginTop: 10
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
    },
    loginButtonText: {
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        color: '#FFECE7',
    },
    thirdPartyLogin: {
        marginTop: 20,
    },
    thirdPartyText: {
        fontSize: 18,
        fontFamily: 'Roboto-Italic',
        color: '#FFECE7',
    },
    thirdPartyIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    thirdPartyIcon: {
        width: 48,
        height: 48,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    newHereText: {
        marginTop: 30,
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
});