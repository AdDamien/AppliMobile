import React, { useState } from "react";
import { Button, Text, View, Image, useWindowDimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import ConnexionStyles from "./ConnexionStyles";
import AppStyles from "../../AppStyles";
import { useNavigation } from "@react-navigation/native";
import Logo from '../../assets/images/LogoHorseGeneticpetit.png';
import { CheckBox } from "react-native-elements";

export default ({ onLogin }) => {
    const styles = { ...AppStyles(), ...ConnexionStyles() };

    const navigation = useNavigation();
    const { height } = useWindowDimensions();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [activeInput, setActiveInput] = useState("");
    const [signedUp, setSignedUp] = useState(false);

    return (
        <KeyboardAvoidingView
            style={[styles.container, styles.root]}
            behavior={Platform.OS === "ios" ? "position" : "height"}
        >
            <Image source={Logo} style={[styles.logo, { height: height * 0.25 }]} resizeMode="contain" />
            <Text style={styles.welcomeText}>WELCOME TO HORSE GENETIC</Text>
            <Text style={styles.connexionText}>Connexion</Text>

            <View style={styles.inputContainer}>
                <View style={styles.inputRow}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput
                        style={[
                            styles.input,
                            activeInput === "email" && styles.activeInput
                        ]}
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={setEmail}
                        onFocus={() => setActiveInput("email")}
                        onBlur={() => setActiveInput("")}
                    />
                </View>
                <View style={styles.inputDivider}></View>
                <View style={styles.inputRow}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <View style={styles.passwordInput}>
                        <TextInput
                            style={[
                                styles.input,
                                activeInput === "password" && styles.activeInput
                            ]}
                            placeholder="Enter your password"
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                            onFocus={() => setActiveInput("password")}
                            onBlur={() => setActiveInput("")}
                        />
                        <TouchableOpacity
                            style={styles.eyeIcon}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Image
                                source={showPassword ? require("../../assets/images/view.png") : require("../../assets/images/hidden.png")}
                                style={{ width: 20, height: 20 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.checkboxConnexion}>
                <Text style={styles.inputLabel}>Keep me signed up</Text>
                <CheckBox 
                    title="" checked={signedUp} onPress={() => setSignedUp(!signedUp)}
                />
                </View>
                
            </View>

            <View style={styles.buttonLogin}>
                <Button
                    title="LOGIN"
                    onPress={onLogin}
                    
                />
            </View>
            
            
            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={() => console.log("Link clicked!")}>
                    <Text style={[styles.textPasswordForgotten, { color: "blue", textDecorationLine: "underline" }]}>
                        Forgot your password?
                    </Text>
                </TouchableOpacity>
                
                <View style={styles.buttonSignUp}>
                    <Button
                        title="SIGN UP"
                        onPress={() => navigation.navigate("Inscription")}
                    />
                </View>
            </View>
            
        </KeyboardAvoidingView>
    );
};





