import React, { useEffect, useState }  from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import Date from '../components/Date';
import TableTitle from '../components/TableTitle';
import CreateData from '../components/CreateData';
import LogOutButton from '../components/LogOutButton';

export default function BabyTodayScreen(props) {
    const { navigation } = props;
    const [memos, setMemos] = useState([]);

    const date = new Date();
    const nYear = date.getFullYear;
    const nMonth = date.getMonth + 1;
    const nDay = date.getDate;
    const today = nYear + '年' + nMonth + '月' + nDay + '日';
    
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <LogOutButton />,
        });
    }, []);

    useEffect(() => {
        const db =firebase.firestore();
        const { currentUser } = firebase.auth();
        let unsubscribe = () => {};
        if (currentUser) {
            const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'asc');
            unsubscribe = ref.onSnapshot((snapshot) => {
                const userMemos = [];
                if (today) {
                    snapshot.forEach((doc) => {
                        console.log(doc.id, doc.data());
                        const data = doc.data();
                        userMemos.push({
                            id: doc.id,
                            timeLeft: data.timeLeft,
                            timeRight: data.timeRight,
                            bodyText: data.bodyText,
                            updatedAt: data.updatedAt.toDate(),
                        });
                    });
                }
                setMemos(userMemos);
            }, (error) => {
                console.log(error);
                Alert.alert('データの読み込みに失敗しました。');
            });
        }
        return unsubscribe;
    }, []);
    
    return (
        <View style={styles.container}>
            <View style={{height: '15%'}}>
                <Date />
            </View>
            <View style={{height: '7%'}}>
                <View style={styles.tableTitle}>
                    <TableTitle title = '時間' />
                    <TableTitle title = '種類' />
                    <TableTitle title = '記録' />
                    <TableTitle title = 'メモ' />
                    <TableTitle title = {'修正\n確認'} />
                </View>
            </View>
            <View style={{height: '53%'}}>
                <CreateData memos={memos} />
            </View>
            <View style={styles.footer}>
                <View style={styles.advertisement}>
                    <Image style={{width: '95%', height: '100%'}}
                        resizeMode='contain'
                        source={require('../img/IMG_2417.jpg')}
                    />
                </View>
                <View style={styles.menu}>
                    <TouchableOpacity style={styles.MonthButton} onPress={() => { navigation.navigate('BabyMonth'); }}>
                        <Text style={styles.MonthButtonText}>
                            月表示
                        </Text>
                    </TouchableOpacity>
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
    footer: {
        height:'25%',
        width:'100%',
        position:'absolute',
        bottom: 0,
        //paddingBottom: 50,
    },
    tableTitle: {
        flexDirection: 'row',
    },
    advertisement: {
        height: '40%',
        //width: '50%',
        alignItems:'center',
        backgroundColor: '#ffffff',
    },
    menu: {
        height: '60%',
        backgroundColor: '#ffffff',
    },
    MonthButtonText: {
        //width: '40%',
        //marginTop: '5%',
        //marginLeft: '5%',
        //padding: 5,
        fontSize: 20,
        //textAlign: 'center',
    },
    MonthButton: {
        backgroundColor: '#FFDB59',
        width: 100,
        height: 44,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 20,
        bottom: 50,
        shadowColor: '#000000',//ios
        shadowOffset: { width: 0, height: 8 },//ios
        shadowOpacity: 0.25,//ios
        shadowRadius: 8,//ios
        elevation: 8,//Android
    },
});