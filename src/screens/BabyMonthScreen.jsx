import React, { useEffect, useState }  from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import Date from '../components/Date';
import TableTitle from '../components/TableTitle';
import CreateData from '../components/CreateData';
import LogOutButton from '../components/LogOutButton';

export default function BabyMonthScreen(props) {
    const { navigation } = props;
    const [memos, setMemos] = useState([]);
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
            <View>
                <Date />
                <View style={styles.tableTitle}>
                    <TableTitle title = '日' />
                    <TableTitle title = '母乳' />
                    <TableTitle title = '哺乳瓶(ミルク)' />
                    <TableTitle title = '哺乳瓶(母乳)' />
                    <TableTitle title = {'修正/確認'} />
                </View>
            </View>
            <CreateData memos={memos} />
            <View style={styles.advertisement}>
                <Image style={{width: '90%', height: '100%'}}
                    resizeMode='contain'
                    source={require('../img/IMG_2417.jpg')}
                />
            </View>
            <View style={styles.menu}>
                <Text>カスタマイズ</Text>
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
    tableTitle: {
        flexDirection: 'row',
    },
    advertisement: {
        height: '10%',
        //width: '50%',
        alignItems:'center',
    },
    menu: {
        height: '15%',
        backgroundColor: '#859602'
    },
});