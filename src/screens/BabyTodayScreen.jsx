import React, { useEffect, useState }  from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import Date from '../components/Date';
import TableTitle from '../components/TableTitle';
import CreateData from '../components/CreateData';
import LogOutButton from '../components/LogOutButton';

export default function BabyTodayScreen(props) {
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
        
            <Date />
            <View style={styles.tableTitle}>
                <TableTitle title = '時間' />
                <TableTitle title = '種類' />
                <TableTitle title = '記録' />
                <TableTitle title = 'メモ' />
                <TableTitle title = '削除' />
            </View>

            <CreateData memos={memos} />

            

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
});