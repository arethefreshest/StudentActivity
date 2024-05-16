import {Dimensions, StyleSheet, Platform} from 'react-native';

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
        marginRight: 0,
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
        position: 'absolute',
        width: 177,
    },
    menuButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FFECE7',
        borderWidth: 2,
        borderRadius: 10,
        height: 50,
        width: 50,
        position: 'relative',
    },
    acceptButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderColor: '#FFECE7',
        borderWidth: 2,
        borderRadius: 15,
    },
    loginButtonText: {
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        color: '#FFECE7',
        ...Platform.select({
            ios: {
                shadowColor: '#000000',
                shadowOffset: { width: 0, height: 4},
                shadowOpacity: 0.5,
                shadowRadius: 20,
            },
            android: {
                shadowColor: '#000000',
                elevation: 4,
                shadowOffset: { width: 0, height: 4},
                shadowOpacity: 0.5,
                shadowRadius: 20,
            },
            web: {
                textShadowColor: '#000000',
                textShadowOffset: { width: 0, height: 4},
                textShadowRadius: 20,
            }
        }),
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
        ...Platform.select({
            ios: {
                shadowColor: '#000000',
                shadowOffset: { width: 0, height: 4},
                shadowOpacity: 0.25,
                shadowRadius: 4,
            },
            android: {
                shadowColor: '#000000',
                elevation: 4,
                shadowOffset: { width: 0, height: 4},
                shadowOpacity: 0.25,
                shadowRadius: 4,
            },
            web: {

            }
        }),
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
        backgroundColor: 'transparent',
        color: '#FFECE7',
    },

    profileHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        top: 120,
    },

    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#FFECE7',
    },

    profileImagePlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },

    userName: {
        fontSize: 24,
        fontFamily: 'Roboto-Bold',
        color: '#FFECE7',
    },

    sectionTitle: {
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        color: '#FFECE7',
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 20,
    },

    feedContainer: {
        flex: 1,
        top: 160,
        alignItems: 'center',
    },

    activityItemContainer: {
        backgroundColor: '#4a90e2',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'column',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },

    activityHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },

    activityContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    activityProfileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },

    activityTextContainer: {
        flex: 1,
    },

    activityItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#FFECE7'
    },
    boldText: {
        fontFamily: 'Roboto-Bold',
        color: '#FFECE7',
    },

    activityLocationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    activityIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    friendRequestItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#FFECE7',
        alignItems: 'center',
    },
    feedText: {
        color: '#FFECE7',
        fontSize: 16,
        marginRight: 20,
    },
    feedListContainer: {
        paddingBottom: 20,
    },
    requestContainer: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#FFECE7',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '80%',
        padding: 20,
        backgroundColor: '#FFECE7',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    modalOption: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    modalText: {
        color: '#333',
        fontSize: 18,
    },
    modalCloseButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#ddd',
        alignItems: 'center',
        borderRadius: 10,
    },
    friendItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#FFECE7',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    toggleButton: {
        fontSize: 18,
        color: '#008080',
        marginVertical: 10,
        textAlign: 'center',
    },
});