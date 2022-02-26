import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Date() {
    return (
        <View style={styles.date}>
            <Text style={styles.dateText}>
            ◀︎
            </Text>
            <Text style={styles.dateText}>
            2022年12月2日(木)
            </Text>
            <Text style={styles.dateText}>
            ▶︎
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    date: {
        flexDirection: 'row',
        height: 70,
        alignItems:'center',
        justifyContent: 'center',
    },
    dateText: {
        fontSize: 20,
        paddingHorizontal: 10,
    },
});