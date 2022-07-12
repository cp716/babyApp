import React from 'react';

import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, DatePickerIOS } from 'react-native';
import MiniCircleButton from '../components/MiniCircleButton';
import CreateDataDesign from '../components/CreateDataDesign';
import CreateMemoDataDesign from './CreateMemoDataDesign';
import { useNavigation } from '@react-navigation/native';
import { shape, string, instanceOf, arrayOf } from 'prop-types';
import { memo } from 'react/cjs/react.production.min';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CreateData(props) {
    const { memos } = props;
    const navigation = useNavigation();
    
    function renderItem({ item }) {    
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
                        <CreateMemoDataDesign date = {<Text style={styles.tableTitle} >{item.bodyText}</Text>} />
                        <MiniCircleButton style={styles.iconStyle}
                                    name="edit-2"
                                    onPress={() => {navigation.navigate('Detail', { 
                                        id: item.id,
                                        bodyText: item.bodyText,
                                        timeLeft: item.timeLeft,
                                        timeRight: item.timeRight,
                                        updatedAt: item.updatedAt
                                    });}}
                        />
                    </View>
                </View>
            );        
    } 
        
    return (
        <View style={styles.container}>
            <FlatList
                inverted//反転
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
        //borderTopWidth: 0.5,
        //borderBottomWidth: 0.5,
        //borderTopColor : 'rgba(0, 0, 0, 100)',
        //borderBottomColor: 'rgba(0, 0, 0, 100)',
        height: 50,
        marginBottom:1,
        //marginBottom:1,
    },
    tableTitle: {
        fontSize: 13,
        //lineHeight: 16,
        //paddingHorizontal: 19,
        //width: '21%',
        //textAlign: 'center',
        //justifyContent: 'center',
        //alignItems: 'center',
        //position: 'absolute',
    
    },
    tabledesign: {
        flexDirection: 'row',
        alignItems:'center',
    },
    iconStyle: {
        //backgroundColor: '#ffffff',
        //flexDirection: 'row',
        //paddingVertical: 16,
        //justifyContent: 'center',
        //borderTopWidth: 0.5,
        //borderBottomWidth: 0.5,
        //borderTopColor : 'rgba(0, 0, 0, 100)',
        //borderBottomColor: 'rgba(0, 0, 0, 100)',
        //height: 50,
        //marginBottom:1,
        //marginBottom:1,
        //textAlign: 'center',
        //justifyContent: 'center',
        //alignItems: 'center',
        //position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        //fontSize: 5,
    },
});