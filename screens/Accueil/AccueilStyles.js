import { StyleSheet } from "react-native";
import theme from "../../theme";
export default function createStyles() {
    const colors = theme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
        },
        subtitle: {
            fontSize: 18,
            color: '#888',
        },
    });
    return styles;
}