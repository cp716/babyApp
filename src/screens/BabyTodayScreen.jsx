import React, { useEffect, useState }  from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import Datetime from '../components/Datetime';
import TableTitle from '../components/TableTitle';
import CreateData from '../components/CreateData';
import LogOutButton from '../components/LogOutButton';
import Loading from '../components/Loading';

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

export default function BabyTodayScreen(props) {
    const { navigation } = props;
    const [memos, setMemos] = useState([]);
    const [isLoading, setLoading] = useState(false);
    
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
            setLoading(true);
            const ref = db.collection(`users/${currentUser.uid}/${year}/${month}/${day}`).orderBy('updatedAt', 'desc');
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
                setLoading(false);
            }, (error) => {
                console.log(error);
                setLoading(false);
                Alert.alert('????????????????????????????????????????????????');
            });
        }
        return unsubscribe;
    }, []);
    
    return (
        <View style={styles.container}>
            <Loading isLoading={isLoading} />
            <View style={[styles.dateTime , {height: '15%'}]}>
                <Datetime style={styles.dateTime} />
            </View>
            <View style={{height: '7%'}}>
                <View style={styles.tableTitle}>
                    <TableTitle title = '??????' />
                    <TableTitle title = '??????' />
                    <TableTitle title = '??????' />
                    <TableTitle title = '??????' />
                    <TableTitle title = {'??????\n??????'} />
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
                            ?????????
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
        borderTopWidth: 1,
        borderTopColor : 'rgba(0, 0, 0, 100)',
        //paddingBottom: 50,
    },
    dateTime: {
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
        justifyContent: 'center',
        //alignItems: 'center',
        //position: 'absolute',
        //marginTop: 'auto',
        //marginBottom: 'auto',
        //fontSize: 30,
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