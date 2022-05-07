import React, { useEffect, useState } from 'react';
import { shape, string } from 'prop-types'
import { View, ScrollView, Text, StyleSheet, KeyboardSafeView, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

export default function DetailScreen(props) {
    const { navigation, route } = props;
    const { id, bodyText, timeLeft, timeRight, updatedAt } = route.params;
    console.log(id);
    const [, setMemo] = useState(null);

    const [body, setBodyText] = useState(bodyText);
    const [left, setTimeLeft] = useState(("00" + timeLeft ).slice(-2));
    const [right, setTimeRight] = useState(("00" + timeRight ).slice(-2));
    const [datedAt, setUpdatedAt] = useState(updatedAt);

    useEffect(() => {
        const { currentUser } = firebase.auth();
        let unsubscribe = () => {};
        if (currentUser) {
            const db = firebase.firestore();
            const ref = db.collection(`users/${currentUser.uid}/${year}/${month}/${day}`).doc(id);
            unsubscribe = ref.onSnapshot((doc) => {
                console.log(doc.id, doc.data());
                const data = doc.data();
                setMemo({
                    id: doc.id,
                    timeLeft: data.timeLeft,
                    timeRight: data.timeRight,
                    bodyText: data.bodyText,
                    updatedAt: data.updatedAt.toDate(),
                });
            });
        }
        return unsubscribe;
    }, []);


    return (
        
        <View style={styles.container}>
            
            <View style={styles.Detail}>
                <TextInput
                        //keyboardType="number-pad"
                        value={body}
                        multiline
                        style={styles.input}
                        onChangeText={(text) => { setBodyText(text); }}
                        autoFocus
                />
                <TextInput
                        keyboardType="number-pad"
                        value={left }
                        multiline
                        style={styles.input}
                        onChangeText={(text) => { setTimeLeft(text); }}
                />
                <TextInput
                        keyboardType="number-pad"
                        value={right}
                        multiline
                        style={styles.input}
                        onChangeText={(text) => { setTimeRight(text); }}
                />
                <TextInput
                        keyboardType="number-pad"
                        value={datedAt}
                        multiline
                        style={styles.input}
                        onChangeText={(text) => { setUpdatedAt(text); }}
                />
            </View>
            <CircleButton
                style={{ top: 60, bottom: 'auto'}}
                name="check"
                onPress={() => { navigation.navigate('Edit') }}
            />
        </View>
    );
}

DetailScreen.propTypes = {
    route: shape({
        params: shape({ id: string }),
    }).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    Detail: {
        backgroundColor: 'red',
        //justifyContent: 'center',
        alignItems:'center',
        paddingVertical: 50,
        paddingHorizontal: 19,
    },
});
