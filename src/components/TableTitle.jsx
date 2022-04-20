import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TableTitle(props) {
    const { title } = props;
    return (
            <View>
                {/*<View style={styles.table}>
                    <View style={styles.tabledesign}>
                        <Text style={styles.tableTitle}>時間</Text>
                        <Text style={styles.tableTitle}>種類</Text>
                        <Text style={styles.tableTitle}>記録</Text>
                        <Text style={styles.tableTitle}>メモ</Text>
                        <Text style={styles.tableTitle}>{'修正\n確認'}</Text>
                    </View>
                </View>*/}
                <View style={styles.testTable}>
                    <Text style={styles.testTableTitle} >{title}</Text>
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

    testTable: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        paddingVertical: 16,
        justifyContent: 'center',
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
        fontSize: 16,
        lineHeight: 16,
        //padding: 3 ,
        //margin: '1%',
        //paddingLeft: '10%',
        //paddingRight: '10%',
        fontWeight: 'bold',
        //backgroundColor: '#676556',
        width: '20%',
        flexGrow: 1,
        textAlign: 'center',
    },
});