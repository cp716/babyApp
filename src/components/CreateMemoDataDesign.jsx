import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CreateMemoDataDesign(props) {
    const { date } = props;
    return (
            <View>
                <View style={styles.testTable}>
                    <Text numberOfLines={1} ellipsizeMode="clip" style={styles.testTableTitle} >{date}</Text>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    testTable: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        paddingVertical: 0,
        //justifyContent: 'center',
        //borderWidth: 1,
        //borderTopColor : 'rgba(0, 0, 0, 100)',
        //borderLeftColor : 0,
        //borderRightColor : 0,
        //borderBottomColor : 0,        
    },
    testTabledesign: {
        //flexDirection: 'row',
        //alignItems:'center',
        
    },
    testTableTitle: {
        fontSize: 14,
        lineHeight: 16,
        //padding: 3 ,
        //margin: '1%',
        //paddingLeft: '10%',
        //paddingRight: '10%',
        //fontWeight: 'bold',
        //backgroundColor: '#676556',
        width: '20%',
        flexGrow: 1,
        textAlign: 'center',
    },
});