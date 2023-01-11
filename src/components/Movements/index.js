import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Movements({ data }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.date}> {data.data} </Text>

            <View style={styles.content}>
            <Text style={styles.label}> {data.label} </Text>
            <Text style={styles.value}> R$ {data.value} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})