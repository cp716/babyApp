import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
    return (
        <View style={styles.appber}>
            <View style={styles.appberInner}>
                <Text style={styles.appberTitle}>Baby App</Text>
                <Text style={styles.appberRight}>ログアウトテスト</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appber: {
        width: '100%',
        height: 104,
        backgroundColor: '#FFDB59',
        justifyContent: 'flex-end',
    },
    appberInner: {
        alignItems: 'center',
    },
    appberRight: {
        position: 'absolute',
        right: 19,
        bottom: 16,
        color: 'rgba(103, 103, 103, 0.8)',
    },
    appberTitle: {
        marginBottom: 8,
        fontSize: 22,
        lineHeight: 32,
        color: '#737373',
        fontWeight: 'bold',
    },
});