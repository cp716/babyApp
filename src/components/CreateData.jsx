import React from 'react';

import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import MiniCircleButton from '../components/MiniCircleButton';
import CreateDataDesign from '../components/CreateDataDesign';
import CreateMemoDataDesign from './CreateMemoDataDesign';
import { useNavigation } from '@react-navigation/native';
import { shape, string, instanceOf, arrayOf } from 'prop-types';

export default function CreateData(props) {
    const { memos } = props;
    const navigation = useNavigation();

    const date = new Date()
    const nYear = date.getFullYear();
    const nMonth = date.getMonth() + 1;
    const nDay = date.getDate();
    const today = nYear + '年' + nMonth + '月' + nDay + '日';
    
    function renderItem({ item }) {

        const year = item.updatedAt.getFullYear();
        const month = item.updatedAt.getMonth() + 1;
        const day = item.updatedAt.getDate();
        const test = year + '年' + month + '月' + day + '日';

            return (    
                <View style={styles.table}>
                    <View style={styles.tabledesign}>
                        <CreateDataDesign date = {
                            <Text style={styles.tableTitle}>
                                {String(item.updatedAt.getHours()).padStart(2, '0')}:
                                {String(item.updatedAt.getMinutes()).padStart(2, '0')}
                            </Text>
                        } />
                        <CreateDataDesign date = {'母乳'} />
                        <CreateDataDesign date = {
                            <Text style={styles.tableTitle}>
                                {'左'}{("00" + item.timeLeft ).slice(-2)}{'分\n'}
                                {'右'}{("00" + item.timeRight ).slice(-2)}{'分'}
                            </Text>
                        } />
                        {/*<Text style={styles.tableTitle}><Feather name="file-text" size={15} color="black" /></Text>*/}
                        <CreateMemoDataDesign date = {<Text style={styles.tableTitle} >{item.bodyText}</Text>} />
                        <CreateDataDesign date = {
                            <Text style={styles.tableTitle}>
                                {<MiniCircleButton
                                    name="edit-2"
                                    onPress={() => {navigation.navigate('Detail', { id: item.id });}}
                                />}
                            </Text>
                        } />
                    </View>
                </View>
            );        
    } 
        
    return (
        <View style={styles.container}>
            <FlatList inverted
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
        timeLeft: string,
        timeRight: string,
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
        //flexDirection: 'row',
        //paddingVertical: 16,
        justifyContent: 'center',
        borderWidth: 1,
        borderTopColor : 'rgba(0, 0, 0, 100)',
        borderLeftColor : 0,
        borderRightColor : 0,
        borderBottomColor : 0,
        height: 50,
    },
    tableTitle: {
        fontSize: 13,
        //lineHeight: 16,
        //paddingHorizontal: 19,
        //width: '21%',
        //textAlign: 'center',
    },
    tabledesign: {
        flexDirection: 'row',
        alignItems:'center',
    },
});