import FormulaireDemandeStyles from "./FormulaireDemandeStyles";
import AppStyles from "../../AppStyles";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { launchCameraAsync } from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";
import { Input, Button, CheckBox, Icon, Image } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Controller, useForm } from "react-hook-form";


export default () => {
    const styles = { ...AppStyles(), ...FormulaireDemandeStyles() };
    
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [photo, setPhoto] = useState(null);

    const [date, setDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [severity, setSeverity] = useState("faible");
    const [asap, setAsap] = useState(false);

    const onFormulaireValide = (dataController) => {
        const demande = {
            ...dataController,
            dateDebut: date,
            severite : severity,
            asap: asap,
        };
        console.log(demande);
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (pickedDate) => {
        setDate(pickedDate);
        hideDatePicker();
    };

    const onClicPhoto = async () => {
        const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
        if (cameraPermission.granted === false) {
            return;
        }

        const result = await launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const { assets } = result;
            if (assets && assets.length > 0) {
                setPhoto(assets[0].uri);
            }
        }

    };

    return (
        <View style={[styles.container, { padding: 5 }]}>

            <Image source={{ uri: photo }}
                style={{
                    width: 125,
                    height: 100,
                    borderRadius: 5,
                    marginRight: 16
                }}></Image>
            <TouchableOpacity onPress={onClicPhoto}>
                <Ionicons name="camera" size={24} color="#000" />
            </TouchableOpacity>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                        label="Titre"
                        errorStyle={{ color: "red" }}
                        errorMessage={errors.title ? "Ce champ est requis." : ""}
                    />
                )}
                name="title"
                rules={{ required: true }}
                defaultValue=""
            />
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                        label="Description"
                        multiline
                        errorStyle={{ color: "red" }}
                        errorMessage={errors.description ? "Ce champ est requis." : ""}
                    />
                )}
                name="description"
                rules={{ required: true }}
                defaultValue=""
            />


            <Text style={styles.label}>Sévérité</Text>
            <Picker
                selectedValue={severity}
                onValueChange={(itemValue) => setSeverity(itemValue)}
            >
                <Picker.Item label="faible" value="faible" />
                <Picker.Item label="moyen" value="moyen" />
                <Picker.Item label="fort" value="fort" />
                

            </Picker>

            <Text style={styles.label}>A.S.A.P</Text>
            <CheckBox title="" checked={asap} onPress={() => setAsap(!asap)} />

            <Text style={styles.label}>Date de début du problème</Text>
            <View style={styles.datePicker}>
                <Text style={{ marginRight: 10 }}>{date.toLocaleDateString()}</Text>
                <Icon name="calendar" type="font-awesome" onPress={showDatePicker} />
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

            <Button title="Envoyer" onPress={handleSubmit(onFormulaireValide)} />




        </View>
    );
};