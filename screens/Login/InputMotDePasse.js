import { Controller } from "react-hook-form";
import AppStyles from "../../AppStyles";
import InputMotDePasseStyle from "./InputMotDePasseStyle";
import { useState } from "react";
import { Icon, Text } from "@rneui/base";
import { View } from "react-native";
import { Input } from "@rneui/themed";

export default InputMotDePasse = ({ control, errors }) => {
    const styles = { ...AppStyles(), ...InputMotDePasseStyle() };

    const [passwordValidity, setPasswordValidity] = useState({
        minLength: false,
        hasLowercase: false,
        hasUppercase: false,
        hasNumeric: false,
    });

    const Rule = ({ text, valid }) => {
        return (
            <View style={styles.errorContainer}>
                <Icon
                    name={valid ? "checkbox-marked" : "alert-circle-outline"}
                    type="material-community"
                    color={valid ? styles.valid.color : styles.invalid.color}
                />
                <Text style={[styles.errorText, valid ? styles.valid : styles.invalid]}>
                    {text}
                </Text>
            </View>
        );
    };

    return (
        <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
                <>
                    <Input
                        label="Mot de passe"
                        style={styles.input}
                        onBlur={onBlur}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            onChange(text);
                            setPasswordValidity({
                                minLength: text.length >= 6,
                                hasLowercase: /[a-z]/.test(text),
                                hasUppercase: /[A-Z]/.test(text),
                                hasNumeric: /\d/.test(text),
                                hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(text),
                            });
                        }}
                        value={value}
                    />
                    <Rule
                        text="Longueur minimale de 6"
                        valid={passwordValidity.minLength}
                    ></Rule>
                    <Rule
                        text="Au moins une lettre minuscule"
                        valid={passwordValidity.hasLowercase}
                    ></Rule>
                    <Rule
                        text="Au moins une lettre majuscule"
                        valid={passwordValidity.hasUppercase}
                    ></Rule>
                    <Rule
                        text="Au moins un caractère numerique"
                        valid={passwordValidity.hasNumeric}
                    ></Rule>
                    <Rule
                        text="Au moins un caractère spécial"
                        valid={passwordValidity.hasSpecial}
                    ></Rule>
                </>
            )}
            name="password"
            rules={{
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/,
                },
            }}
            defaultValue=""
        />
    );
};