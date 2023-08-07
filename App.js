import { StatusBar } from 'expo-status-bar';
import AppStyles from './AppStyles';
import { View, Text, Button } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from 'react';
import "react-native-gesture-handler";
import Connexion from './screens/Connexion/Connexion';
import { NavigationContainer } from '@react-navigation/native';
import ListeDemande from './screens/ListeDemande/ListeDemande';
import FormulaireDemande from './screens/FormulaireDemande/FormulaireDemande';
import Cgu from './screens/CGU/Cgu';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Header, Icon, SearchBar } from "react-native-elements";
import Accueil from './screens/Accueil/Accueil';
import Inscription from "./screens/Inscription/Inscription";




export default function App() {

  const App = () => {

    const styles = AppStyles();

    const Drawer = createDrawerNavigator();

    const CustomDrawerContent = (props) => {

      const { navigation } = props;


      return (
        <DrawerContentScrollView {...props}>
          <DrawerItem label="Accueil" onPress={() => navigation.navigate("Accueil")} />
          <DrawerItem label="Liste des demandes" onPress={() => navigation.navigate("ListeDemande")} />
          <DrawerItem label="Liste de Materiel" onPress={() => navigation.navigate("ListeMateriel")} />
          <DrawerItem label="CGU" onPress={() => navigation.navigate("Cgu")} />
          <DrawerItem label="Deconnexion" onPress={() => onLogout()} />
        </DrawerContentScrollView>
      );
    };

    const [connecte, setConnecte] = useState(false);

    const onLogin = () => {
      try {
        setConnecte(true);
        console.log("Connexion réussie !");
      } catch (error) {
        console.error("Erreur lors de la connexion :", error);
      }

    };

    const onLogout = () => {
      setConnecte(false);
    };


    const LoginNavigation = () => {

      return <Connexion onLogin={onLogin}></Connexion>
      

    };

    const Stack = createStackNavigator();

    const StackDemande = () => {
      return (
        <Stack.Navigator >
          <Stack.Screen
            name="Accueil"
            component={Accueil}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ListeMateriel"
            component={ListeDemande}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ListeDemande"
            component={ListeDemande}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FormulaireDemande"
            component={FormulaireDemande}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cgu"
            component={Cgu}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      );
    };

    const [texteRecherche, setTexteRecherche] = useState("");

    const EnteteRecherche = ({ navigation, texteRecherche }) => {
      const [texte, setTexte] = useState("");

      return (
        <Header
          leftComponent={<Icon name="menu" onPress={() => navigation.openDrawer()} />
          }
          centerComponent={() =>
            <SearchBar placeholder='Recherche...'
              cancelButtonTitle=""
              value={texte}
              onChangeText={(texte) => setTexte(texte)}
              onSubmitEditing={(event) =>
                setTexteRecherche(event.nativeEvent.text)
              }
              containerStyle={{
                backgroundColor: "transparent",
                borderTopWidth: 0,
                borderBottomWidth: 0,
                flex: 1,
                width: "100%",
                justifyContent: "center",
                alignItems: "flex-start",
                padding: 0,
                margin: 0,
              }}
              inputContainerStyle={{ backgroundColor: "transparent" }}
              inputStyle={{ color: "#000" }}
              placeholderTextColor='#FFF'
              searchIcon={{ color: '#777' }}
              clearIcon={{ color: '#777' }}
            />
          }
        >
        </Header>
      );
    };

    

    const AppNavigation = () => {
      return (
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen
            options={{
              header: (props) => <EnteteRecherche {...props} />
            }}
            name="Liste des demandes"
            component={StackDemande}

          ></Drawer.Screen>

          <Drawer.Screen
            name="CGU"
            component={Cgu}
          ></Drawer.Screen>

          <Drawer.Screen
            name="Accueil"
            component={Accueil}
          ></Drawer.Screen>

        </Drawer.Navigator>
      );
    };


    const StackAuthentification = () => {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="Connexion"
            component={LoginNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Inscription"
            component={Inscription}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      );
    };

    return connecte ? <AppNavigation /> : <StackAuthentification />;
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <App></App>
        <StatusBar style='auto' />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
