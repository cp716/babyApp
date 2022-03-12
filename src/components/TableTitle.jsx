import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TableTitle() {
    return (
            <View>
                <View style={styles.table}>
                    <View style={styles.tabledesign}>
                        <Text style={styles.tableTitle}>時間</Text>
                        <Text style={styles.tableTitle}>種類</Text>
                        <Text style={styles.tableTitle}>記録</Text>
                        <Text style={styles.tableTitle}>メモ</Text>
                        <Text style={styles.tableTitle}>{'修正\n確認'}</Text>
                    </View>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    table: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        paddingVertical: 16,
        justifyContent: 'center',
        borderWidth: 1,
        borderTopColor : 'rgba(0, 0, 0, 100)',
        borderLeftColor : 0,
        borderRightColor : 0,
        borderBottomColor : 0,
    },
    tableTitle: {
        fontSize: 16,
        lineHeight: 16,
        paddingHorizontal: 19,
        fontWeight: 'bold',
        width: '20%',
    },
    tabledesign: {
        flexDirection: 'row',
        alignItems:'center',
    },
});