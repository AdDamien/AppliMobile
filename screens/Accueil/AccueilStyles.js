import { StyleSheet } from "react-native";
import theme from "../../theme";
export default function createStyles() {
    const colors = theme();
    const styles = StyleSheet.create({
        root : {
            backgroundColor:colors.blue,
        },
        container: {
            flex: 1,
            padding: 10,
            backgroundColor: colors.blue,
        },
        header: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 20,
            color : "darkblue",
        },
        columnContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        column: {
            flex: 1,
            marginRight: 15,
        },
        label: {
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 50,
            color: "darkblue",
        },
   
    });
    return styles;
}