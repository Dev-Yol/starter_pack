import React, { useState } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Metrics, Colors } from '@constants'
const { width } = Metrics
const _width = (width / 2) - Metrics.xxl
const styles = StyleSheet.create({
    card: {
        height: _width,
        width: _width,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.transparent,

    },
    rounded: {
        borderRadius: Metrics.md,
    }
})

export default ({ title, children, active, onPress, style }) => {
    return (
        <TouchableHighlight onPress={onPress} underlayColor={Colors.secondary} style={{ ...styles.rounded, ...style?.container }}>
            <LinearGradient
                start={[0.1, 0.1]}
                end={[1, 1]}
                colors={active ? Colors.gradient : !style?.card.backgroundColor ? [Colors.white, Colors.lightGray] : [style.card.backgroundColor, style.card.backgroundColor]}
                style={{ ...styles.card, ...styles.rounded, ...{ elevation: active ? Metrics.lg : Metrics.sm }, ...style?.card }}
            >
                <>
                    {children}
                </>
            </LinearGradient>
        </TouchableHighlight>
    )
};

