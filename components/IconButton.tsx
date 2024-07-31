import { Pressable, StyleSheet, View, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function IconButton( {label, onPress, icon} ) {
    return(
        <Pressable onPress={onPress} style={styles.iconButton}>
            <MaterialIcons name={icon} size={18} color="#fff" />
            <Text style={styles.iconButtonLabel}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconButtonLabel : {
        color: '#fff',
        marginTop: 12
    }
});