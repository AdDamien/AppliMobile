import { useColorScheme } from "react-native"



export const colors = {
    primary: "#467386",
    accent: "#D5A26A",
    warn: "#A7373F",
    white: "#fff",
    black: "#000",
    blue: "cyan"
}



export const themeColors = {
    light: {
        backgroundColor: colors.blue,
        textColor: colors.black,
    },
    dark: {
        backgroundColor: colors.black,
        textColor: colors.white,
    },
};

export default () => {
const nomTheme = useColorScheme();

return {...colors,...themeColors[nomTheme]}
}