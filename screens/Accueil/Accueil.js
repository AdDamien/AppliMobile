import React, { useState } from "react";
import { ScrollView, Text, View , Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { CheckBox } from "react-native-elements";
import AccueilStyles from "./AccueilStyles";
import AppStyles from "../../AppStyles";

export default () => {
    const styles = { ...AppStyles(), ...AccueilStyles() };

    const [coatFemale, setCoatFemale] = useState("Red");
    const [coatMale, setCoatMale] = useState("Red");
    const [patternFemale, setPatternFemale] = useState("Solid");
    const [patternMale, setPatternMale] = useState("Solid");
    const [grayF, setGrayF] = useState(false);
    const [grayM, setGrayM] = useState(false);
    const [geneAF, setGeneAF] = useState("Unknown");
    const [geneAM, setGeneAM] = useState("Unknown");
    const [geneEF, setGeneEF] = useState("Unknown");
    const [geneEM, setGeneEM] = useState("Unknown");

    const handleResultat = () => {
        console.log("Your foan will be : ");
    };

    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.header}>WELCOME TO HORSE GENETIC COAT-CALCULATOR</Text>

            <Text style={styles.instruction}>
                To get the best result for the foal, follow these steps:
            </Text>
            <Text style={styles.instruction}>
                1. Choose the coat color of the SIRE using the "SIRE COAT COLOR" selector.
            </Text>
            <Text style={styles.instruction}>
                2. Select the pattern of the SIRE using the "SIRE PATTERN" selector.
            </Text>
            <Text style={styles.instruction}>
                3. Indicate if the SIRE has the "GRAY" gene by checking the checkbox.
            </Text>
            <Text style={styles.instruction}>
                4. Follow the same steps for the DAM section.
            </Text>
            <Text style={styles.instruction}>
                5. Once you have selected the appropriate options, press the "SEE RESULT" button to get the foal's genetic outcome.
            </Text>

            <View style={styles.columnContainer}>
                
                <View style={styles.column}>
                    <Text style={styles.label}>SIRE COAT COLOR</Text>
                    <Picker
                        selectedValue={coatMale}
                        onValueChange={(itemValue) => setCoatMale(itemValue)}
                    >
                        <Picker.Item label="Red" value="Red" />
                        <Picker.Item label="Bay" value="Bay" />
                        <Picker.Item label="Black" value="Black" />
                        <Picker.Item label="Palomino" value="Palomino" />
                        <Picker.Item label="BuckSkin" value="BuckSkin" />
                    </Picker>

                    <Text style={styles.label}>SIRE PATTERN</Text>
                    <Picker
                        selectedValue={patternMale}
                        onValueChange={(itemValue) => setPatternMale(itemValue)}
                    >
                        <Picker.Item label="Solid" value="Solid" />
                    </Picker>

                    <Text style={styles.label}>SIRE GRAY</Text>
                    <CheckBox
                        title=""
                        checked={grayM}
                        onPress={() => setGrayM(!grayM)}
                    />
                    <Text style={styles.label}>SIRE AGOUTI</Text>
                        <Picker
                            selectedValue={geneAM}
                            onValueChange={(itemValue) => setGeneAM(itemValue)}
                        >
                            <Picker.Item label="Unknown" value="Unknown" />
                            <Picker.Item label="Non-Agouti(aa)" value="Non-Agouti(aa)" />
                            <Picker.Item label="Heterozygotous (Aa)" value="Heterozygotous (Aa)" />
                            <Picker.Item label="Homozygotous (AA)" value="Homozygotous (AA)" />

                    </Picker>
                        <Text style={styles.label}>SIRE EXTENSION</Text>
                    <Picker
                            selectedValue={geneEM}
                            onValueChange={(itemValue) => setGeneEM(itemValue)}
                        >
                            <Picker.Item label="Unknown" value="Unknown" />
                            <Picker.Item label="Red-Carrier(Ee)" value="Red-Carrier(Ee)" />
                            <Picker.Item label="Homozygotous (EE)" value="Homozygotous (EE)" />

                    </Picker>
                </View>

                <View style={styles.column}>
                    <Text style={styles.label}>DAM COAT COLOR</Text>
                    <Picker
                        selectedValue={coatFemale}
                        onValueChange={(itemValue) => setCoatFemale(itemValue)}
                    >
                        <Picker.Item label="Red" value="Red" />
                        <Picker.Item label="Bay" value="Bay" />
                        <Picker.Item label="Black" value="Black" />
                        <Picker.Item label="Palomino" value="Palomino" />
                        <Picker.Item label="BuckSkin" value="BuckSkin" />
                    </Picker>

                    <Text style={styles.label}>DAM PATTERN</Text>
                    <Picker
                        selectedValue={patternFemale}
                        onValueChange={(itemValue) => setPatternFemale(itemValue)}
                    >
                        <Picker.Item label="Solid" value="Solid" />
                        
                    </Picker>

                    <Text style={styles.label}>DAM GRAY</Text>
                    <CheckBox
                        title=""
                        checked={grayF}
                        onPress={() => setGrayF(!grayF)}
                    />
                    <Text style={styles.label}>DAM AGOUTI</Text>
                    <Picker
                        selectedValue={geneAF}
                        onValueChange={(itemValue) => setGeneAF(itemValue)}
                    >
                        <Picker.Item label="Unknown" value="Unknown" />
                        <Picker.Item label="Non-Agouti(aa)" value="Non-Agouti(aa)" />
                        <Picker.Item label="Heterozygotous (Aa)" value="Heterozygotous (Aa)" />
                        <Picker.Item label="Homozygotous (AA)" value="Homozygotous (AA)" />
                        
                    </Picker>
                        <Text style={styles.label}>DAM EXTENSION</Text>
                        <Picker
                            selectedValue={geneEF}
                            onValueChange={(itemValue) => setGeneEF(itemValue)}
                        >
                            <Picker.Item label="Unknown" value="Unknown" />
                            <Picker.Item label="Red-Carrier(Ee)" value="Red-Carrier(Ee)" />
                            <Picker.Item label="Homozygotous (EE)" value="Homozygotous (EE)" />

                        </Picker>
                    </View>
            </View>
            <Button title="See Result" onPress={handleResultat} />
                <View>
                    <Text> Result : </Text>
                </View>
        </View>
        
        </ScrollView>
    );
};
