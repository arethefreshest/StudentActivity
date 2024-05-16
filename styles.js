import { StyleSheet, Dimensions } from 'react-native';
import {Dimensions, StyleSheet, Platform} from 'react-native';

const { width, height } = Dimensions.get('window'); // Get device dimensions

export const styles = StyleSheet.create({
    // General styles for other components
    baseText: {
        fontFamily: 'Roboto-Flex',
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
    },
    gradientBackground: {
        flex: 1,
        borderTopWidth: 0,
        borderWidth: 0,
        borderColor: 'transparent',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        shadowColor: 'transparent',
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
        fontSize: 16,
        color: '#FFECE7',
        position: 'absolute',
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
        fontSize: 18,
        textAlign: 'right',
        color: '#000000',
        opacity: 0.5,
        borderColor: '#000000',
        borderRadius: 15,
    },
    forgotPassword: {
        color: '#FFECE7',
        fontSize: 15,
        fontFamily: 'Roboto-Medium',
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
        padding: 10,
        position: 'absolute',
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
        backgroundColor: '#transparent',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#FFECE7',
    },

    addPictureIcon: {
        fontSize: 40,
        color: '#FFECE7',
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

    // Styles for Activities.js
    gradientScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50,
        width: '100%',
        marginTop: 30,
        zIndex: 1,
    },
    safeArea: {
        flex: 1,
        marginTop: 140,
        marginBottom: 100,
    },
    container: {
        flex: 1,
        padding: 10,
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
    details: {
        marginTop: 10,
    },
    activityIndicator: {
        top: 300,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
    },
    noResultsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noResultsText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
    addButton: {
        marginTop: 40,
        backgroundColor: '#008080',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        marginLeft: '25%',
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
    },
    textTop: {
        fontSize: 18,
        marginLeft: 40,
        marginTop: 10,
    },
    textCont: {
        fontStyle: "italic",
        fontSize: 14,
        marginTop: 10,
        marginLeft: 60,
    },
    textCont2: {
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 30,
        marginLeft: 40,
    },
    textLink: {
        marginTop: 20,
        fontSize: 18,
        marginLeft: 60,
    },
    modalContent: {
        backgroundColor: '#a3caca',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
    },
    textArea: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        marginBottom: 20,
        width: '100%',
    },
    date: {
        marginBottom: 10,
        marginLeft: 130,
        width: '60%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        backgroundColor: '#008080',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 5,
    },
    cancelButton: {
        backgroundColor: '#ff4d4d',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },

    // Styles for Add.js
    containerAdd: {
        width: '90%',
        margin: '5%',
        padding: 20,
        marginTop: 20,
        height: '90%',
        backgroundColor: 'rgba(255,255,255,0.49)',
        borderRadius: 20,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        overflow: 'visible',
    },
    rowContainerAdd: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 60,
        marginTop: 40,
        zIndex: 1,
    },
    inputAdd: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 10,
        marginBottom: 10,
        fontSize: 20,
    },
    dateText: {
        fontSize: 20,
        textAlign: 'center',
    },
    dateAdd: {
        width: '60%',
        marginLeft: '40%',
    },
    label: {
        fontSize: 18,
        marginBottom: 0,
        fontWeight: 'bold',
    },
    label1: {
        fontSize: 18,
        marginBottom: 50,
        fontWeight: 'bold',
    },
    labelContainer: {
        marginRight:40,
    },
    textAreaAdd: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginBottom: 70,
        fontSize: 18,
    },
    buttonAdd: {
        backgroundColor: '#008080',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonTextAdd: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    pickerContainer: {
        backgroundColor: 'rgb(255,255,255)',
        padding: 10,
        width: '60%',
        height: 'auto',
        borderRadius: 10,
        marginBottom: 10,
        position: 'absolute',
        top: 1,
        zIndex: 1000,
    },
    item: {
        padding: 10,
        fontSize: 18,
    },
    selectedItem: {
        padding: 10,
        fontSize: 18,
        backgroundColor: 'lightgray',
    },
});