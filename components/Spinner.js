import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Colors } from "@constants";

export default ({ sm, lg, size = 50 }) => (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size={sm ? 'small' : lg ? 'large' : size} color={Colors.danger} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});
