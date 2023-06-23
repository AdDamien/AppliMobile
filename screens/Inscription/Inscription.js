import { View, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import { Button } from "@rneui/themed";
import AppStyles from "../../AppStyles";
import InscriptionStyles from "./InscriptionStyles";
import InputEmail from "../Login/InputEmail";
import InputMotDePasse from "../Login/InputMotDePasse";

export default Inscription = () => {
    const styles = { ...AppStyles(), ...InscriptionStyles() };

    const {
        control,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <View style={styles.container}>
            <InputEmail control={control} errors={errors}></InputEmail>
            <InputMotDePasse control={control} errors={errors}></InputMotDePasse>

            <Button title="Envoyer" onPress={handleSubmit(onSubmit)} />
        </View>
    );
};