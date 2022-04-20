import React from 'react';

import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import MiniCircleButton from '../components/MiniCircleButton';
import { useNavigation } from '@react-navigation/native';
import { shape, string, instanceOf, arrayOf } from 'prop-types';

export default function CreateData(props) {
    const { memos } = props;
    const navigation = useNavigation();

    function renderItem({ item }) {
        return (
            <TouchableOpacity
                onPress={() => {navigation.navigate('Detail', { id: item.id });}}>
                <View style={styles.table}>
                    <View style={styles.tabledesign}>
                        <Text style={styles.tableTitle}>{String(item.updatedAt.getHours()).padStart(2, '0')}:{String(item.updatedAt.getMinutes()).padStart(2, '0')}</Text>
                        <Text style={styles.tableTitle}>母乳</Text>
                        <Text style={styles.tableTitle}>{'左10分\n右10分'}</Text>
                        {/*<Text style={styles.tableTitle}><Feather name="file-text" size={15} color="black" /></Text>*/}
                        <Text style={styles.tableTitle}>{item.bodyText}</Text>
                        <Text style={styles.tableTitle}>
                            <MiniCircleButton
                                name="edit-2"
                                onPress={() => { navigation.navigate('Create'); }}
                            />
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    } 

    return (
        <View style={styles.container}>
            <FlatList
                data={memos}
                renderItem={renderItem}
                keyExtractor={(item) => { return item.id; }}
            />
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
    container: {
        flex: 1,
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
        fontSize: 13,
        lineHeight: 16,
        paddingHorizontal: 19,
        //width: '21%',
    },
    tabledesign: {
        flexDirection: 'row',
        alignItems:'center',
    },
});