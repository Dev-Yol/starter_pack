import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon, Screen, Text, Spacer } from 'components'
import { Colors, Metrics } from '@constants'
const Empty = props => {
    return (
        <Screen style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <View >
                <Icon {
                    ...{
                        type: 'sp',
                        name: 'layers',
                        jumbo: true
                    }
                } />
                <Spacer />
                <Text center lg>
                    {props.text}
                </Text>
                {props?.children}
            </View>
        </Screen>
    )
}

export default Empty

const styles = StyleSheet.create({})
