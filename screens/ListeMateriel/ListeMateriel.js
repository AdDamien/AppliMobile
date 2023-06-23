import ListeMaterielStyles from "./ListeMaterielStyles";
import AppStyles from "../../AppStyles";
import { Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Icon, Image } from "react-native-elements";


export default ({ navigation }) => {
    const styles = { ...AppStyles(), ...ListeMaterielStyles() };

    const materiel = [
        { id: 1, titre: "PC LENOVO", description: "PC PORTABLE LENOVO blablabla", nomImageMateriel: "https://media.discordapp.net/attachments/1037378659083886612/1065613607263543326/Sans_titre3.png?width=430&height=344" },
        { id: 2, titre: "PC LENOVO", description: "PC PORTABLE LENOVO blablabla", nomImageMateriel: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG" },
        { id: 3, titre: "PC LENOVO", description: "PC PORTABLE LENOVO blablabla", nomImageMateriel: "https://media.discordapp.net/attachments/1037378659083886612/1065613607263543326/Sans_titre3.png?width=430&height=344" },
        { id: 4, titre: "PC ASUS", description: "PC PORTABLE ASUS blablabla", nomImageMateriel: "https://media.discordapp.net/attachments/1037378659083886612/1065613607263543326/Sans_titre3.png?width=430&height=344" },
        { id: 5, titre: "PC ASUS", description: "PC PORTABLE ASUS blablabla", nomImageMateriel: "https://media.discordapp.net/attachments/1037378659083886612/1065613607263543326/Sans_titre3.png?width=430&height=344" },
        { id: 6, titre: "PC ASUS", description: "PC PORTABLE ASUS blablabla", nomImageMateriel: "https://media.discordapp.net/attachments/1037378659083886612/1065613607263543326/Sans_titre3.png?width=430&height=344" },
    ];

    const onAjoutDemande = () => {
        navigation.navigate("FormulaireDemande");
    };

    return (
        <View style={[styles.container, styles.centered, { padding: 10 }]}>
            <FlatList

                data={materiel}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{

                            backgroundColor: "#f2f2f2",
                            padding: 150,
                            marginBottom: 150,
                            borderRadius: 10,
                            flexDirection: "row", // Aligner l'image et le texte horizontalement
                            alignItems: "center", // Centrer verticalement l'image et le texte
                        }}
                    >
                        <Image source={{ uri: item.nomImage }}
                            style={{
                                width: 150,
                                height: 150,
                                borderRadius: 5,
                                marginRight: 16
                            }}></Image>
                        <Text>{item.titre}</Text>
                    </TouchableOpacity>
                )}

            ></FlatList>
            <TouchableOpacity
                style={{
                    position: "absolute",
                    bottom: 15,
                    right: 15,
                    width: 80,
                    height: 80,
                    borderRadius: 5,
                    backgroundColor: "#007BFF",
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 4,
                }}
                title="+"
                onPress={onAjoutDemande}
            >
                <Icon name="add" size={24} style={{ color: "#FFF" }} ></Icon>
            </TouchableOpacity>
        </View>

    );
};
