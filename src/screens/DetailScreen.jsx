import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import CircleButton from '../components/CircleButton';

export default function DetailScreen(props) {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <View style={styles.Detail}>
                <ScrollView>
                    <Text>
                    testtesttetesttesttetesttesttetesttesttetesttestte
                    </Text>
                </ScrollView>
            </View>
            <CircleButton
                style={{ top: 60, bottom: 'auto'}}
                name="check"
                onPress={() => { navigation.navigate('Edit') }}
            />
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
