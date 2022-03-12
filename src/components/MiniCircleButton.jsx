import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';
import { Feather } from '@expo/vector-icons';

export default function MiniCircleButton(props) {
    const { style, name, onPress } = props; 
    return (
        <TouchableOpacity style={[styles.miniCircleButton, style]} onPress={onPress}>
            <Feather name={name} size={20} color="white" />
        </TouchableOpacity>
    )
}

MiniCircleButton.propTypes = {
    style: shape(),
    name: string.isRequired,
    onPress: func,
};

MiniCircleButton.defaultProps = {
    style: null,
    onPress: func,
}

const styles = StyleSheet.create({
    miniCircleButton: {
        backgroundColor: '#467FD3',
        width: 26,
        height: 26,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});