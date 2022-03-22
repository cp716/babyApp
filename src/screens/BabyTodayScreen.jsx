import { Feather } from '@expo/vector-icons';
import React, { useEffect }  from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CircleButton from '../components/CircleButton';
import MiniCircleButton from '../components/MiniCircleButton';
import Date from '../components/Date';
import TableTitle from '../components/TableTitle';
import LogOutButton from '../components/LogOutButton';

export default function BabyTodayScreen(props) {
    const { navigation } = props;
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <LogOutButton />,
        });
    }, []);
    
    return (
        <View style={styles.container}>
        
            <Date />

            <TableTitle />

            <View>
                <View style={styles.table}>
                    <View style={styles.tabledesign}>
                        <Text style={styles.tableTitle}>09:00</Text>
                        <Text style={styles.tableTitle}>母乳</Text>
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

                <View style={styles.table}>
                    <View style={styles.tabledesign}>
                        <Text style={styles.tableTitle}>"母乳"</Text>
                        <Text style={styles.tableTitle}>母乳</Text>
                        <Text style={styles.tableTitle}>母乳</Text>
                        <Text style={styles.tableTitle}>母乳</Text>
                        <Text style={styles.tableTitle}>母乳</Text>
                    </View>
                </View>
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
        backgroundColor: 'red',
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