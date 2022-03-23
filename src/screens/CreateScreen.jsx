import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

import firebase from 'firebase';

export default function CreateScreen(props) {
    const { navigation } = props;
    const [bodyText, setBodyText] = useState('');

    function handlePress() {
        const db = firebase.firestore();
        const { currentUser } = firebase.auth();
        const ref = db.collection(`users/${currentUser.uid}/memos`);
        ref.add({
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
            <View style={styles.inputContainer}>
                <TextInput
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
    inputContainer: {
        paddingHorizontal: 27,
        paddingVertical: 32,
        flex: 1,
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24,
    },
});
