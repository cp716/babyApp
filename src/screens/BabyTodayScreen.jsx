import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CircleButton from '../components/CircleButton';
import Date from '../components/Date';

export default function BabyTodayScreen(props) {
    const { navigation } = props;
    return (
        <View style={styles.container}>
        
            <Date />

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
                <Feather name="file-text" size="20" color="red" />
            </View>

            <CircleButton
                name="plus"
                onPress={() => { navigation.navigate('Create'); }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
    },
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
    },
    tabledesign: {
        flexDirection: 'row',
        alignItems:'center',
    },
});