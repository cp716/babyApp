import React from 'react';

import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MiniCircleButton from '../components/MiniCircleButton';
import { useNavigation } from '@react-navigation/native';
import { shape, string, instanceOf, arrayOf } from 'prop-types';

export default function CreateData(props) {
    const { memos } = props;
    const navigation = useNavigation();
    return (
        <View>
            {memos.map((memo) => (
                <TouchableOpacity
                    key={memo.id}
                    onPress={() => {navigation.navigate('Detail');}}
                >
                    <View style={styles.table}>
                        <View style={styles.tabledesign}>
                            <Text style={styles.tableTitle}>{String(memo.updatedAt)}</Text>
                            <Text style={styles.tableTitle}>{memo.bodyText}</Text>
                            <Text style={styles.tableTitle}>{'左10分\n右10分'}</Text>
                            <Text style={styles.tableTitle}><Feather name="file-text" size={15} color="black" /></Text>
                            <Text style={styles.tableTitle}>
                                <MiniCircleButton
                                    name="edit-2"
                                    onPress={() => { navigation.navigate('Create'); }}
                                />
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

CreateData.propTypes = {
    memos: arrayOf(shape({
        id: string,
        bodyText: string,
        updatedAt: instanceOf(Date),
    })).isRequired,
};

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
        fontSize: 13,
        lineHeight: 16,
        paddingHorizontal: 19,
        width: '20%',
    },
    tabledesign: {
        flexDirection: 'row',
        alignItems:'center',
    },
});