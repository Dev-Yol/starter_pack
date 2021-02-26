import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Icon, Ripple, Text, Spacer, Row } from 'components'
import { Colors, Metrics } from '@constants'
import { Icons } from '@constants'
const { width } = Metrics
const ItemUI = ({ icon, label, onPress, col }) => (
    <TouchableOpacity {...{ onPress }} style={{
        ...styles.item, width: (width / col) - (Metrics.lg)
    }}>
        <>
            <Icon {...icon} size={Metrics.icon.md + 5} style={styles.icon} />
            <Spacer sm />
            <Text center sm>{label}</Text>
        </>
    </TouchableOpacity>
)

const IconTray = props => {
    return (
        <View style={{ flex: 1 }}>
            <Spacer md />
            <Row ar>
                {
                    props.data.map((category, idx) => {
                        return <ItemUI
                            key={idx}
                            col={props?.data?.length}
                            icon={category.icon}
                            label={category.title}
                            onPress={category.onPress} />
                    })
                }
            </Row>
            <Spacer md />
        </View>
    )
}

export default IconTray

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        marginVertical: Metrics.md,
    },
    icon: {
        width: Metrics.icon.lg,
        height: Metrics.icon.lg
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: Metrics.xs
    },
})
