import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import { Theme, Colors, Metrics } from '@constants'
import { Map, Text, Screen, Spacer, ScrollView, Icon, Divider, Row, Spinner, Input } from 'components'
import Validator from 'utils/Validator'
const styles = StyleSheet.create({
    screen: {
        paddingTop: Metrics.md
    },
    scrollView: {
        padding: 0,
        backgroundColor: 'transparent'
    },
    section: {
        flexDirection: 'row',
        paddingVertical: Metrics.lg,
    },
    col: {
        marginHorizontal: Metrics.md,
        alignItems: 'center'
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.3,
    },
    inputStyle: {
        borderRadius: Metrics.sm,
        borderColor: Colors.gray,
        backgroundColor: 'transparent',


    },
    section1: {

        paddingHorizontal: Metrics.sm
    },
    container: {
        marginHorizontal: Metrics.lg
    },
    icon: {
        width: '10%'
    },
    right: {
        width: '40%'
    },
    left: {
        width: '50%'
    },
})


export default props => {
    const [order, setOrder] = useState({
        name: '',
        quantity: 0
    });

    const removeField = () => {
        let { index, setOrders } = props;
        let orders = [...props.orders]
        orders = orders.filter((el, id) => {
            return id !== index;
        })
        console.log(orders)
        setOrders(orders)
    }

    useEffect(() => {
        let orders = [...props.orders]
        orders[props.index] = order;
        props.setOrders(orders)
    }, [order])

    return (
        <Row>
            <TouchableOpacity disabled={!props.deleteIcon} style={{ ...styles.icon, opacity: !props.deleteIcon ? 0.2 : 1 }} onPress={removeField}>
                <Icon sm {...{
                    name: 'trash',
                    colored: props.deleteIcon
                }} />
            </TouchableOpacity>

            <View style={styles.left}>
                <Input dense {...{
                    value: order.name,
                    style: styles.inputStyle,
                    setValue: (text) => setOrder(val => {
                        return { ...val, name: text }
                    }),
                    placeholder: 'ex. Chicken Meal'
                }} />
            </View>
            <View style={styles.right}>
                <Row ar>
                    <View>
                        <TouchableOpacity disabled={order.quantity <= 0} onPress={() => {
                            setOrder({ ...order, quantity: --order.quantity })
                        }}>
                            <Text b lg>-</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '40%' }} >
                        <Input dense {...{
                            type: 'numeric',
                            style: {
                                ...styles.inputStyle,

                            },
                            inputStyle: {
                                alignItems: 'center',
                                textAlign: 'center',
                                justifyContent: 'center'
                            },
                            value: `${order.quantity}`,
                            setValue: (text) => {
                                if (Validator.isNumbersOnly(text) || text === '') {
                                    setOrder({ ...order, quantity: text })
                                }
                            },
                            // placeholder: `${order.quantity}`
                        }} />
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => {
                            setOrder({ ...order, quantity: ++order.quantity })
                        }}>
                            <Text b lg>+</Text>
                        </TouchableOpacity>
                    </View>
                </Row>
            </View>
        </Row>
    )
}
