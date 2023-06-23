import AccueilStyles from "./AccueilStyles";
import AppStyles from "../../AppStyles";
import { Text, View } from "react-native";
export default () => {
    const styles = { ...AppStyles(), ...AccueilStyles() };
    return (
        <View style={[styles.container, styles.centered]}>
            <Text>Bienvenue sur la page d'accueil de LOCMNS</Text>
        </View>
    );
};