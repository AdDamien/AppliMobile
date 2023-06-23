import ConnexionStyles from "./ConnexionStyles";
import AppStyles from "../../AppStyles";
import { Text, View, Button } from "react-native";
import InputEmail from "../Login/InputEmail";
import InputMotDePasse from "../Login/InputMotDePasse";
import { useNavigation } from "@react-navigation/native";



export default ({ onLogin }) => {
    const styles = { ...AppStyles(), ...ConnexionStyles() };

    const navigation = useNavigation();
    
    return (
        <View style={[styles.container, styles.centered]}>
            <Button
                title="Se Connecter"
                onPress={onLogin}> Connexion
            </Button>
            <Button
                title="Inscription"
                onPress={() => navigation.navigate("Inscription")}
            ></Button>

        </View>
    );
};