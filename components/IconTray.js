import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Icon, Ripple, Text, Spacer, Row } from 'components'
import { Colors, Metrics } from '@constants'

const { width } = Metrics
const ItemUI = ({ icon, label, onPress, col = 3, color }) => {
    const badge = {
        backgroundColor: color,
        width: Metrics.lg + 20,
        height: Metrics.lg + 20,
        opacity: 0.5,
        borderRadius: 28,
        transform: [{ scaleX: 1 }],
        top: 1,
        position: 'absolute',
        alignSelf: 'center',
    }
    return (
        <TouchableOpacity {...{ onPress }} style={{
            ...styles.item, width: (width / col)
        }}>
            <>
                <View style={badge}></View>
                <Icon {...icon} size={Metrics.icon.md + 5} style={styles.icon} />
                <Spacer sm />
                <Text center sm>{label}</Text>
            </>
        </TouchableOpacity>
    )
}
let size = 3;
const IconTray = props => {
    const [rows, setRows] = React.useState([]);
    React.useEffect(() => {
        let input = props.data;
        let chunked = []
        if (props.col) {
            size = props.col
        }
        Array.from({ length: Math.ceil(input.length / size) }, (val, i) => {
            chunked.push(input.slice(i * size, i * size + size))
        })
        setRows(chunked)
        return () => {
            return null
        }
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <Spacer md />
            {
                rows.map((rowItem, idx) => {
                    return <View key={idx} style={styles.container} >{
                        rowItem.map((category) => {
                            return <ItemUI
                                color={props.color}
                                key={category.title}
                                col={props.col || 3}
                                icon={category.icon}
                                label={category.title}
                                onPress={() => {
                                    if (category.route) {
                                        props.onPress(category?.route)
                                    }
                                }} />
                        })
                    }</View>
                })
            }
            <Spacer md />
        </View>
    )
}

export default IconTray

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
        marginVertical: Metrics.md,
    },
    icon: {
        width: Metrics.icon.lg,
        height: Metrics.icon.lg,
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        // marginHorizontal: Metrics.xs
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

})
