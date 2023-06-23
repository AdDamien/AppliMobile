import CguStyles from "./CguStyles";
import AppStyles from "../../AppStyles";
import { Text, View } from "react-native";
export default () => {
    const styles = { ...AppStyles(), ...CguStyles() };
    return (
        <View style={[styles.container, styles.centered]}>
            <Text>Conditions Générales d'Utilisation</Text>
            <Text>Le présent document a pour objet de définir les modalités et conditions dans lesquelles d’une part,  ____ , ci-après dénommé l’EDITEUR, met à la disposition de ses utilisateurs le site, et les services disponibles sur le site et d’autre part, la manière par laquelle l’utilisateur accède au site et utilise ses services.

                Toute connexion au site est subordonnée au respect des présentes conditions.

                Pour l’utilisateur, le simple accès au site de l’EDITEUR à l’adresse URL suivante ____  implique l’acceptation de l’ensemble des conditions décrites ci-après.

                Propriété intellectuelle

                Variante 1

                La structure générale du site ____ , ainsi que les textes, graphiques, images, sons et  vidéos la composant, sont la propriété de l'éditeur ou de ses partenaires. Toute représentation et/ou reproduction et/ou exploitation partielle ou totale des contenus et services proposés par le site ____ , par quelque procédé que ce soit, sans l'autorisation préalable et par écrit de  ____  et/ou de ses partenaires est strictement interdite et serait susceptible de constituer une contrefaçon au sens des articles L 335-2 et suivants du Code de la propriété intellectuelle.

                Les marques "____ ", "____" sont des marques déposées par____ .Toute représentation et/ou reproduction et/ou exploitation partielle ou totale de ces marques, de quelque nature que ce soit, est totalement prohibée.

                Variante 2

                Aucune reproduction, même partielle prévue à l’article L.122-5 du Code de la propriété intellectuelle, ne peut être faite de ce site sans l’autorisation du directeur de publication.

                Variante 3

                Tous les éléments de ce site, y compris les documents téléchargeables, sont libres de droit. A l’exception de l’iconographie, la reproduction des pages de ce site est autorisée à la condition d’y mentionner la source. Elles ne peuvent être utilisées à des fins commerciales et publicitaires.</Text>
        </View>
    );
};