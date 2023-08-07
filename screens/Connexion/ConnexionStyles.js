import { StyleSheet } from "react-native";
import theme from "../../theme";

export default function createStyles() {
    const colors = theme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.blue,
        },
        root: {
            paddingHorizontal: 20,
        },
        logo: {
            marginTop: 25,
            width: 100,
            maxWidth: 150,
            height: 100,
            maxHeight: 150,
        },
        welcomeText: {
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 20,
            color: "darkblue",
        },
        connexionText: {
            alignSelf: 'flex-start',
            fontSize: 18,
            fontWeight: 'bold',
            color: "darkblue",
            marginBottom: 25,
        },
        inputContainer: {
            width: '100%',
        },
        input: {
            width: '100%',
            height: 50,
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 15,
            marginBottom: 10,
            backgroundColor: colors.lightGray,
        },
        inputDivider: {
            height: 2,
            backgroundColor: colors.gray,
            marginBottom: 10,
        },
        inputRow: {
            marginBottom: 10,
        },
        inputLabel: {
            fontSize: 16,
            fontWeight: 'bold',
            color: "darkblue",
            marginBottom: 5,
        },
        
        divider: {
            height: 1,
            backgroundColor: colors.gray,
            marginBottom: 10,
        },
        eyeIcon: {
            position: 'absolute',
            top: 20,
            right: 10,
        },
        passwordInput: {
            position: 'relative',
            marginBottom: 10,
        },
        activeInput: {
            backgroundColor: 'white',
        },
        buttonLogin: {
            width: '100%',
            marginBottom: 'auto',
        },
        bottomContainer: {
            flex: 1,
            justifyContent: 'flex-end',
            
        },
        textPasswordForgotten: {
            
        },
        buttonSignUp: {
            
            width : 100,
            marginLeft:'65%',
            marginBottom: 30,
        },
        checkboxConnexion:{
            flexDirection: 'row',
            alignItems: 'center',
        },
        button: {
            marginVertical: 10,
        },
        orText: {
            fontSize: 16,
            marginVertical: 10,
        },
    });
    return styles;
}

