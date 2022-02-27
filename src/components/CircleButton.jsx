import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';
import { Feather } from '@expo/vector-icons';

export default function CircleButton(props) {
    const { style, name, onPress } = props; 
    return (
        <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
            <Feather name={name} size={32} color="black" />
        </TouchableOpacity>
    )
}

CircleButton.propTypes = {
    style: shape(),
    name: string.isRequired,
    onPress: func,
};

CircleButton.defaultProps = {
    style: null,
    onPress: func,
}

const styles = StyleSheet.create({
    circleButton: {
        backgroundColor: '#FFDB59',
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 40,
        bottom: 40,
        shadowColor: '#000000',//ios
        shadowOffset: { width: 0, height: 8 },//ios
        shadowOpacity: 0.25,//ios
        shadowRadius: 8,//ios
        elevation: 8,//Android
    },
    circleButtonLabel: {
        color: '#747474',
        fontSize: 40,
        lineHeight: 40,
    },
});