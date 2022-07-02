import React from 'react';
import { shape, string } from 'prop-types'
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import CircleButton from '../components/CircleButton';

export default function DetailScreen(props) {
    const { navigation, route } = props;
    const { id } = route.params;
    console.log(id);
    return (
        <View style={styles.container}>
            <View style={styles.Record}>
                <View>
                    <Text>
                    一日の記録
                    </Text>
                </View>
            </View>
            <View style={styles.Detail}>
                <View>
                    <Text style={styles.DetailFont}>
                    2022年1月1日　12：00
                    </Text>
                </View>
            </View>
            <View style={styles.Test}>
                <View style={styles.Test1}>
                    <View>
                        <Text style={styles.Text1}>
                        {'母乳\n左\n右'}
                        </Text>
                    </View>
                </View>
                 <View style={styles.Test1}>
                    <View>
                        <Text style={styles.Text2}>
                        哺乳瓶
                        </Text>
                    </View>
                </View>
             </View>
            <View style={styles.Memo}>
                <ScrollView>
                    <Text>
                    メモ
                    </Text>
                </ScrollView>
            </View>
            <CircleButton
                style={{ top: 700, left: 315}}
                name="check"
                onPress={() => { navigation.navigate('Edit') }}
            />
              <CircleButton
                style={{ top: 700, left: 10}}
                name="cancel"
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
        backgroundColor: 'white',
    },
    Record: {
        backgroundColor: '#ffae87',
        //justifyContent: 'center',
        alignItems:'center',
        paddingTop: 0,
        paddingVertical: 50,
        paddingHorizontal: 19,
    },
    Detail: {
        backgroundColor: 'white',
        //justifyContent: 'center',
        //paddingVertical: 50,
        //paddingHorizontal: 19,
        alignSelf: "center",
        borderColor: "#ffae87",
        borderWidth: 5,
        borderRadius: 15,
        marginTop: 10,
        width: '80%',
        height: '5%',
    },
    DetailFont: {
        //paddingVertical: 10,
        //paddingHorizontal: 19,
        alignSelf: "center",
    },
    Test: {
        backgroundColor: 'white',
        //justifyContent: 'center',
        //alignItems:'center',
        paddingVertical: 50,
        paddingHorizontal: 19,
        //alignSelf: "center",
        marginTop: 0,
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        //justifyContent: 'center',
        justifyContent: 'space-around',
    },
    Test1: {
        backgroundColor: 'white',
        //justifyContent: 'center',
        alignItems:'center',
        //paddingVertical: 50,
        //paddingHorizontal: 50,
        //alignSelf: "center",
        borderColor: "#ffae87",
        borderWidth: 5,
        borderRadius: 15,
        marginTop: 0,
        height: "30%",
        width: "45%",
    },
    Text1: {
        //textAlign:'center',
        //paddingBottom: 'auto',
        //paddingTop: 'auto',
        //marginright: auto,
        //width: "40%",
        //flexGrow: 1,
    },
    Text2: {
       // paddingBottom: 50,
        paddingTop: 20,
    },
    Memo: {
        backgroundColor: 'white',
        //justifyContent: 'center',
        alignItems:'center',
        paddingVertical: 50,
        paddingHorizontal: 100,
        alignSelf: "center",
        borderColor: "#ffae87",
        borderWidth: 5,
        borderRadius: 15,
        marginTop: 0,
        
    },
});
