import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Picker } from 'react-native';

import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

import firebase from 'firebase';

export default function CreateScreen(props) {
    const { navigation } = props;
    const [bodyText, setBodyText] = useState('');
    const [timeLeft,  setTimeLeft] = useState('');
    const [timeRight,  setTimeRight] = useState('');

    function handlePress() {
        const db = firebase.firestore();
        const { currentUser } = firebase.auth();
        const ref = db.collection(`users/${currentUser.uid}/memos`);
        ref.add({
            timeLeft,
            timeRight,
            bodyText,
            updatedAt: new Date(),
        })
            .then((docRef) => {
                console.log('書き込みました', docRef.id);
                navigation.goBack();
            })
            .catch((error) => {
                console.log('失敗しました', error);
            });
    }

    return (
        <KeyboardSafeView style={styles.container}>
            <View style={styles.inputTypeContainer}>
                <Text>左</Text>
                    <TextInput
                        keyboardType="number-pad"
                        value={timeLeft}
                        multiline
                        style={styles.input}
                        onChangeText={(text) => { setTimeLeft(text); }}
                        autoFocus
                    />
                <Text>分</Text>
            </View>
            <View style={styles.inputTypeContainer}>
                <Text>右</Text>
                    <TextInput
                        keyboardType="number-pad"
                        value={timeRight}
                        multiline
                        style={styles.input}
                        onChangeText={(text) => { setTimeRight(text); }}
                        autoFocus
                    />
                <Text>分</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text>メモ</Text>
                <TextInput
                        //keyboardType="number-pad"
                        value={bodyText}
                        multiline
                        style={styles.input}
                        onChangeText={(text) => { setBodyText(text); }}
                        autoFocus
                />
            </View>
            <CircleButton
                name="check"
                onPress={handlePress}
            />
        </KeyboardSafeView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputTypeContainer: {
        paddingHorizontal: 27,
        paddingVertical: 10,
        height: 50,
        backgroundColor: '#913125',
        //flex: 1,
        flexDirection: 'row',
        width: 150 ,
        
    },
    inputContainer: {
        paddingHorizontal: 27,
        paddingVertical: 10,
        height: 150,
        backgroundColor: '#859602'
        //flex: 1,
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24,
        backgroundColor: '#185749'
    },
});
