import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function DetailScreen() {
    return (
        <View style={styles.container}>
            <AppBar />
            <View style={styles.Detail}>
                <ScrollView>
                    <Text>
                    testtesttetesttesttetesttesttetesttesttetesttestte
                    </Text>
                </ScrollView>
            </View>
            <CircleButton style={{ top: 160, bottom: 'auto'}} name="check" />
        </View>
    );
}

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
