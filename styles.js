import {Dimensions, StyleSheet, Platform} from 'react-native';

const {width, height} = Dimensions.get('window'); // Get device dimensions
export const styles = StyleSheet.create({


    //ActivityFilter.js:
    containerFilter: {
        width: '80%',
        marginLeft: '10%',
        marginTop: '40%',
        padding: 20,
        backgroundColor: 'rgba(255,255,255,0.44)',
        borderRadius: 20,
        shadowColor: 'rgba(0,0,0,0)',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        height: 500,
    },
    sliderFilter: {
        width: '100%',
    },
    pickerFilter: {
        marginTop: 10,
        width: '100%',
        height: 80,
        borderRadius: 15,
        backgroundColor: 'rgba(248,248,248,0.47)',
    },
    pickerItemFilter: {
        alignItems: "center",
        height: 80,
    },
    labelFilter: {
        fontSize: 19,
        color: '#000',
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    valueFilter: {
        fontSize: 14,
        paddingBottom: 10,
    },
    buttonFilter: {
        marginTop: 30,
        backgroundColor: '#008080',
        padding: 10,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#FFF',
        alignItems: 'center',
        height: 50,
    },
    buttonTextFilter: {
        color: '#FFF',
        fontSize: 20,
        verticalAlign: 'center',
        textAlign: "center",
        fontWeight: 'bold',
    },


    //Activities.js:
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50,
        width: '100%',
        marginTop: 30,
        zIndex: 1,
    },
    safeAreaActivities: {
        flex: 1,
        marginTop: 140,
        marginBottom: 100,
    },
    containerActivities: {
        margin: 10,
        padding: 0,
        backgroundColor: 'rgba(255,255,255,0)',
        borderRadius: 15,
        borderWidth: 0,
        borderColor: '#1e1d1d',
    },
    containerActivity: {
        margin: 20,
        padding: 20,
        backgroundColor: 'rgba(255,255,255,0.63)',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#1e1d1d',
    },
    titleActivities: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    detailsActivities: {
        marginTop: 10,
    },
    addButtonActivities: {
        marginTop: 40,
        backgroundColor: '#008080',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        marginLeft: '25%',
    },
    addButtonTextActivities: {
        color: 'white',
        fontSize: 16,
    },
    textTopActivities: {
        fontSize: 18,
        marginLeft: 40,
        marginTop: 10,
    },
    textContActivities: {
        fontStyle: "italic",
        fontSize: 14,
        marginTop: 10,
        marginLeft: 60,
    },
    textCont2Activities: {
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 30,
        marginLeft: 40,
    },
    textLinkActivities: {
        marginTop: 20,
        fontSize: 18,
        marginLeft: 60,
    },


    //ModalActivities:
    rowContainerActivities: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 60,
        marginTop: 40,
        zIndex: 1,
    },
    modalContentActivities: {
        backgroundColor: '#a3caca',
        padding: 20,
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalTitleActivities: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputActivities: {
        height: 60,
        borderColor: 'gray',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
    },
    textAreaActivities: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        marginTop: 10,
        fontSize: 18,
        marginBottom: 20,
        width: '100%',
        position: 'relative',
        zIndex: 0,
    },
    dateActivities: {
        marginBottom: 10,
        width: '40%',
        marginLeft: '52%',
    },
    buttonContainerActivities: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    buttonActivities: {
        backgroundColor: '#008080',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 5,
    },
    cancelButtonActivities: {
        backgroundColor: '#ff4d4d',
    },
    buttonTextActivities: {
        color: 'white',
        fontSize: 16,
    },


    //Activities Loading, Error and NoResult:
    IndicatorActivities: {
        top: 300,
    },
    errorContainerActivities: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorTextActivities: {
        color: 'red',
        fontSize: 16,
    },
    noResultsContainerActivities: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noResultsTextActivities: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },


    //FriendsPicker:
    pickerWrapper: {
        position: 'absolute',
        zIndex: 2000,
    },
    pickerContainerActivities: {
        backgroundColor: 'rgb(255,255,255)',
        padding: 20,
        width: '140%',
        borderRadius: 10,
        marginBottom: 10,
        position: 'relative',
        zIndex: 2000,
    },
    itemActivities: {
        padding: 20,
        fontSize: 25,
    },
    selectedItemActivities: {
        padding: 20,
        fontSize: 18,
        backgroundColor: 'lightgray',
        borderRadius: 15,
    },
    labelActivities: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    labelPicker: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
    labelContainerActivities: {
        backgroundColor: 'rgb(255,255,255)',
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        width: '140%',
        marginRight: 40,
    },
    dropdownActivities: {
        backgroundColor: 'rgb(255,255,255)',
        marginTop: 55,
        width: '140%',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        maxHeight: 400,
        position: 'absolute',
    },


    //Add.js
    safeAreaAdd: {
        flex: 1,
        marginTop: 120,
        marginBottom: 20,
    },

    containerAdd: {
        width: '90%',
        margin: '5%',
        padding: 15,
        marginTop: 20,
        height: '90%',
        backgroundColor: 'rgba(255,255,255,0.49)',
        borderRadius: 20,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOffset: {width: 0, height: 2},
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
        height: 60,
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
        backgroundColor: '#008080',
    },
    labelAdd: {
        fontSize: 18,
        marginBottom: 40,
        fontWeight: 'bold',
    },
    labelContainer: {
        marginRight: 40,
    },
    textAreaAdd: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginBottom: 30,
        fontSize: 18,
    },
    buttonAdd: {
        backgroundColor: '#008080',
        padding: 15,
        borderRadius: 10,
        marginBottom: 30,
        alignItems: 'center',

    },
    buttonTextAdd: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },


    //Søk og legg til venn:
    //Søk:
    SafeAreaSokVenn: {
        flex: 1,
        marginTop: 20,
    },
    ContainerSokVenn: {
        width: '80%',
        marginLeft: '10%',
        marginTop: '35%',
        padding: 20,
        backgroundColor: 'rgba(255,255,255,0.44)',
        borderRadius: 20,
        shadowColor: 'rgba(0,0,0,0)',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        height: 300,
    },

    LabelSokVenn: {
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold',
        paddingVertical: 20,
    },

    InputFieldSokVenn: {
        width: '100%',
    },

    ButtonSokVenn: {
        marginTop: 30,
        backgroundColor: '#008080',
        padding: 10,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#FFF',
        alignItems: 'center',
        height: 60,
    },

    ButtonTextSokVenn: {
        color: '#FFF',
        fontSize: 26,
        fontWeight: 'bold',
    },

    //InputField:
    inputGroup: {
        position: 'absolute',
        width: 238,
        right: 332,
        height: 50.7,
        borderRadius: 10,
        backgroundColor: '#FFECE7',
    },

    inputGroup2: {
        width: 238,
        marginVertical: 10,
        alignSelf: 'center',
        backgroundColor: '#FFECE7',
        borderRadius: 10,
        //padding: 10,
    },

    inputIcon: {
        width: 28,
        height: 28,
        tintColor: '#000000',
        marginLeft: 0,
        marginRight: 10,
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

    inputLabel: {
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        color: '#FFECE7',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputOuter: {
        width: '100%',
        height: 50.7,
        borderRadius: 10,
        backgroundColor: '#FFECE7',
        justifyContent: 'center',
        alignItems: 'center',
    },


    //Legg Til Venn:
    safeAreaAddVenn: {
        flex: 1,
        marginTop: 140,
        marginBottom: 100,
    },

    containerAddVenn: {
        width: '90%',
        margin: '5%',
        padding: 30,
        marginTop: 20,
        height: 'auto',
        backgroundColor: 'rgba(255,255,255,0.49)',
        borderRadius: 20,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        alignItems: 'center',
        overflow: 'visible',
    },


    titleAddVenn: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: "center",
    },

    textTopAddVenn: {
        marginTop: 15,
        fontSize: 16,
        textAlign: "center",
    },
    detailsAddVenn: {
        marginTop: 20,
    },

    textContAddVenn: {
        fontSize: 16,
        textAlign: "center",
    },

    buttonAddVenn: {
        backgroundColor: '#008080',
        padding: 15,
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonTextAddVenn: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },

    //Profil.js:
    //FriendsList
    titleFriendslist: {
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        color: '#FFECE7',
        marginTop: 10,
        width: '200%',
        marginBottom: 10,
        textAlign: 'center',
    },

    containerFriendsList: {
        marginTop: 40,
        marginBottom: 0,
        paddingHorizontal: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#FFECE7',
        width: 310,
        padding: 0,
    },

    friendItem: {
        padding: 10,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#FFECE7',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    feedTextList: {
        color: '#FFECE7',
        fontSize: 20,
        marginRight: 40,
    },


    //Friendrequest:
    titleFriendRequest: {
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        color: '#FFECE7',
        marginTop: 10,
        width: 260,
        textAlign: "center",
        marginBottom: 10,
    },

    containerFriendRequest: {
        marginTop: 40,
        marginBottom: 10,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#FFECE7',
        width: 310,
        alignSelf: 'center',
    },

    friendRequestItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#FFECE7',
        alignItems: 'center',
    },

    requestContainer: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#FFECE7',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    friendacceptButton: {
        justifyContent: 'center',
        marginLeft: -40,
        padding: 10,
        borderColor: '#FFECE7',
        borderWidth: 2,
        borderRadius: 15,
    },
    SafeAreaProfil: {
        flex: 1,
        width: '100%',
        marginTop: 0,
        marginBottom: 100,
    },
    scrollContainerProfil:{
        height: 'auto',
        marginBottom: 100,
    },

    containerProfilContainer: {
        width: '90%',
        margin: '5%',
        height: '100%',
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.49)',
        borderRadius: 15,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation: 5,
        alignItems: 'center',
        overflow: 'visible',
    },

    profileHeader: {
        alignItems: 'center',
        paddingTop: 150,
        paddingBottom: 0,
        backgroundColor: 'transparent',
    },
    //ProfilSettings.js:
    profileSettingsContainer: {
        flex: 1,
        marginBottom: 100,
        width: '100%,'
    },

    profileSettingsDetails: {
        alignItems: 'center',
        marginTop: 10,
    },

    profileSettingText: {
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
        color: '#FFECE7',
        marginBottom: 10,
    },
    SettingsTitle: {
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        color: '#FFECE7',
        marginTop: 10,
        marginBottom: 10,
    },

    ButtonProfileSettings: {
        backgroundColor: '#008080',
        position: 'absolute',
        width: '40%',
        marginBottom: '10',
    },
    ButtonCancelProfile: {
        backgroundColor: '#ff4d4d',
        position: 'absolute',
        width: '50%',
        marginLeft: '50%',
        marginBottom: '10',
    },
    rowContainerSettings: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 60,
        marginTop: 40,
        zIndex: 1,
    },


    //Feed :
    feedContainer: {
        flex: 1,
        top: 0,
        width: '100%',
        alignItems: 'center',
    },

    feedListContainer: {
        paddingBottom: 10,
        width: '100%',
    },

    feedText: {
        color: '#FFECE7',
        fontSize: 16,
        marginRight: 80,
    },
    titleActivityFeed: {
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        color: '#FFECE7',
        marginTop: 10,
        marginBottom: 10,
    },

    activityContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    activityHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },

    activityIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    activityItem: {
        padding: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#FFECE7',
        width: '100%',
    },

    activityItemContainer: {
        backgroundColor: '#5d92d1',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'column',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 0,
        elevation: 5,
        width: '100%',
    },

    activityLocationContainer: {
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


    //Other Profile styles
    addPictureIcon: {
        fontSize: 40,
        color: '#FFECE7',
    },

    baseText: {
        fontFamily: 'Roboto-Flex',
    },

    boldText: {
        fontFamily: 'Roboto-Bold',
        color: '#FFECE7',
    },


    AreContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    contentContainer: {
        flex: 1,
        paddingTop: 24,
        position: 'relative',
    },

    customButton: {
        position: "relative",
        width: '90%',
        marginVertical: 8,
    },




    deleteButton: {
        marginTop: 20,
        backgroundColor: '#FF0000',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },

    deleteButtonText: {
        color: '#FFF',
        fontSize: 16,
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
        ...Platform.select({
            ios: {
                shadowColor: '#000000',
                shadowOffset: {width: 0, height: 4},
                shadowOpacity: 0.25,
                shadowRadius: 4,
            },
            android: {
                shadowColor: '#000000',
                elevation: 4,
                shadowOffset: {width: 0, height: 4},
                shadowOpacity: 0.25,
                shadowRadius: 4,
            },
            web: {}
        }),
        position: 'absolute',
    },

    gradientBackground: {
        flex: 1,
        borderTopWidth: 0,
        borderWidth: 0,
        borderColor: 'transparent',
    },

    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 0,
    },


    italicText: {
        fontSize: 18,
        fontFamily: 'Roboto-Italic',
        textAlign: 'right',
        color: '#000000',
        opacity: 0.5,
        borderColor: '#000000',
        borderRadius: 15,
    },

    keyboardAvoidingContainer: {
        flex: 1,
    },

    profilItalicText: {
        fontSize: 18,
        fontFamily: 'Roboto-Italic',
        color: '#FFECE7',
        ...Platform.select({
            ios: {
                shadowColor: '#000000',
                shadowOffset: {width: 0, height: 4},
                shadowOpacity: 0.25,
                shadowRadius: 4,
            },
            android: {
                shadowColor: '#000000',
                elevation: 4,
                shadowOffset: {width: 0, height: 4},
                shadowOpacity: 0.25,
                shadowRadius: 4,
            },
            web: {}
        }),
        position: 'absolute',
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

    loginButtonText: {
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        color: '#FFECE7',
        ...Platform.select({
            ios: {
                shadowColor: '#000000',
                shadowOffset: {width: 0, height: 4},
                shadowOpacity: 0.5,
                shadowRadius: 20,
            },
            android: {
                shadowColor: '#000000',
                elevation: 4,
                shadowOffset: {width: 0, height: 4},
                shadowOpacity: 0.5,
                shadowRadius: 20,
            },
            web: {
                textShadowColor: '#000000',
                textShadowOffset: {width: 0, height: 4},
                textShadowRadius: 20,
            }
        }),
    },

    logo: {
        position: 'absolute',
        top: 38,
        left: (width - 248) / 2,
        width: 248,
        height: 98,
    },

    logoContainer: {
        position: 'absolute',
        left: 92,
        top: 38,
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

    modalCloseButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#ddd',
        alignItems: 'center',
        borderRadius: 10,
    },

    modalContainer: {
        width: '80%',
        padding: 20,
        backgroundColor: '#faf5f4',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },

    modalOption: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    modalText: {
        color: '#333',
        fontSize: 18,
    },

    newHereText: {
        width: 59,
        height: 14,
        fontSize: 18,
        fontFamily: 'Roboto-Italic',
        color: '#FFECE7',
    },

    picker: {
        marginTop: 10,
        width: '100%',
        height: 80,
        borderRadius: 15,
        backgroundColor: 'rgba(248,248,248,0.47)',
    },

    pickerItem: {
        alignItems: "center",
        height: 80,
    },


    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#FFECE7',
    },

    profileImageFriend: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#FFECE7',
        marginRight: 10,
        marginTop: 10,
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


    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    scrollContentContainer: {
        flexGrow: 1,
        paddingBottom: 100,
    },

    scrollViewContainer: {
        flex: 1,
        marginTop: 20,
        paddingBottom: 100,
    },

    scrollView: {
        flex: 1,
    },

    scrollViewContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    settingsContainer: {
        padding: 20,
        alignItems: 'center',
    },

    slider: {
        width: '100%',
    },

    text: {
        textAlign: 'center',
        fontSize: 18,
    },

    textFieldInput: {
        fontSize: 24,
        fontFamily: 'Roboto-Bold',
        marginBottom: 16,
        color: '#fbf3f1',
    },

    textInput: {
        flex: 1,
        fontFamily: 'Roboto-Italic',
        fontSize: 16,
        textAlign: 'right',
        color: '#000000',
        opacity: 0.5,
    },

    thirdPartyIcon: {
        width: 48,
        height: 48,
        position: 'absolute',
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 10,
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

    toggleButton: {
        fontSize: 18,
        color: '#008080',
        marginVertical: 10,
        textAlign: 'center',
    },

    value: {
        fontSize: 14,
        paddingBottom: 10,
    },


    // Calendar.js:
    containerCalendar: {
        margin: 10,
        padding: 20,
        marginTop: 130,
        height: 600,
        backgroundColor: 'rgba(255,255,255,0.63)',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#1e1d1d',
    },
    titleCalendar: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    CalendarBox: {
        borderWidth: 1,
        borderColor: '#1e1d1d',
        borderRadius: 15,
        margin: 10,
        padding: 10,
    },
    CalendarStyle: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#1e1d1d',
        height: 400,
    },

    modalOverlayCalendar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    modalContainerCalendar: {
        width: '80%',
        marginTop: 220,
        marginBottom: 160,
        padding: 20,
        backgroundColor: '#fff5f5',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    modalTitleCalendar: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalTextCalendar: {
        color: '#333',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        //padding: 10,
    },
    modalText2Calendar: {
        color: '#333',
        fontSize: 18,
        marginBottom: 10,
        //padding: 10,
    },
    modalCloseButtonCalendar: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#ddd',
        alignItems: 'center',
        borderRadius: 10,
    },
    userName: {
        fontSize: 24,
        fontFamily: 'Roboto-Bold',
        color: '#FFECE7',
    },

    dateButtonAdd: {
        backgroundColor: '#008080',
        padding: 15,
        borderRadius: 15,
        marginLeft: 210,

    },
    dateButtonTextAdd: {
        color: '#fff',
        fontSize: 16,
    },
});