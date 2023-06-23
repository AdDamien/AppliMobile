import ListeDemandeStyles from "./ListeDemandeStyles";
import AppStyles from "../../AppStyles";
import { Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Icon , Image } from "react-native-elements";





export default ({ navigation }) => {
    const styles = { ...AppStyles(), ...ListeDemandeStyles() };

    const demandes = [
        { id: 1, titre: "titre 1", description: "demande une blabla", nomImage:"https://media.discordapp.net/attachments/1037378659083886612/1065613607263543326/Sans_titre3.png?width=430&height=344"},
        { id: 2, titre: "titre 2", description: "demande deux blabla", nomImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG"},
        { id: 3, titre: "titre 3", description: "demande trois blabla", nomImage:"https://media.discordapp.net/attachments/1037378659083886612/1065613607263543326/Sans_titre3.png?width=430&height=344"},
        { id: 4, titre: "titre 4", description: "demande quatre blabla", nomImage:"https://media.discordapp.net/attachments/1037378659083886612/1065613607263543326/Sans_titre3.png?width=430&height=344"},
    ];

    const onAjoutDemande = () => {
        navigation.navigate("FormulaireDemande");
    };

    return (
        <View style={[styles.container, styles.centered, { padding: 10 }]}>
            <FlatList

                data={demandes}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{

                            backgroundColor: "#f2f2f2",
                            padding: 25,
                            marginBottom: 25,
                            borderRadius: 10,
                            flexDirection: "row", // Aligner l'image et le texte horizontalement
                            alignItems: "center", // Centrer verticalement l'image et le texte
                        }}
                    >
                        <Image source={{ uri: item.nomImage }}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                marginRight: 16
                            }}></Image>
                        <Text>{item.titre}</Text>
                    </TouchableOpacity>
                )}

            ></FlatList>
            <TouchableOpacity
                style={{
                    position: "absolute",
                    bottom: 16,
                    right: 16,
                    width: 56,
                    height: 56,
                    borderRadius: 28,
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
