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
});