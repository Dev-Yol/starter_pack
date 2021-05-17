import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import { Theme, Colors, Metrics } from '@constants'
import { Map, Text, Screen, Spacer, ScrollView, Icon, Divider, Row, Spinner, Input, Button } from 'components'
import { getData } from 'utils/helpers'
import OrderField from './OrderField'
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
    right: {
        width: '40%',
        alignItems: 'flex-end'
    },
    left: {
        width: '60%'
    },
})

export default () => {
    const [location, setLocation] = useState({})
    const [loading, setLoading] = useState(true)
    const [orders, setOrders] = useState([null])
    const getInitialData = async () => {
        setLoading(true)
        let data = await getData('location');
        setLocation(JSON.parse(data))
        setLoading(false)
    }
    useEffect(() => {
        getInitialData()
    }, [])
    return (
        <Screen style={styles.screen}>
            <ScrollView style={styles.scrollView} containerStyle={styles.scrollView}>
                <Text center b md>Delivery Parcel and Item Information</Text>
                <Spacer />
                {
                    loading ? <View>
                        <Spinner />
                    </View> : <View>
                        <Map {...location} mapStyle={styles.map} />
                    </View>
                }

                <Divider />
                <View style={{ ...styles.section, ...styles.section1 }}>
                    <Row bw>
                        <View style={{ ...styles.col }}>
                            <Icon {...{
                                name: 'map-marker', type: 'mdi', color: 'blue'
                            }} />
                            <Text sm >Pick up point</Text>
                        </View>
                        <View style={styles.col}>
                            <Text b >Location 1</Text>
                            <Text sm >Details</Text>
                        </View>
                    </Row>
                </View>
                <Divider />
                <View style={{ ...styles.section, ...styles.section1 }}>
                    <Row bw>
                        <View style={{ ...styles.col, ...{ alignItems: 'center' } }}>
                            <Icon {...{
                                name: 'map-marker', type: 'mdi', color: 'red'
                            }} />
                            <Text sm >Drop off point</Text>
                        </View>
                        <View style={styles.col}>
                            <Text b >Location 2</Text>
                            <Text sm >Details</Text>
                        </View>
                    </Row>
                </View>
                <Divider />
                <Spacer />
                <View style={styles.section1}>
                    <View style={styles.container}>
                        <Text md>Restaurant or Store</Text>
                    </View>
                    <Spacer />
                    <View style={styles.container}>
                        <Input dense {...{
                            // value: password || null,
                            style: styles.inputStyle,
                            // setValue: setPassword,
                            disabled: loading,
                            label: 'Password',
                            placeholder: 'ie. Jollibee,McDonalds,Shakeys'
                        }} />

                    </View>
                </View>
                <Spacer />
                <View style={styles.section1}>
                    <View style={styles.container}>
                        <Text md>What is your order? </Text>
                    </View>
                    <Spacer />
                    <View style={styles.container}>
                        {/* <OrderField {...{
                            orders, 
                            setOrders
                        }}/> */}
                        {
                            orders.map((order, index) => {
                                return <OrderField key={index} index={index} orders={orders} setOrders={setOrders} deleteIcon={index > 0} />
                            })
                        }
                        <TouchableOpacity onPress={() => {
                            setOrders([...orders, null])
                        }}>
                            <Text color={Theme.primary} b>+Add more items</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Spacer />
                <View style={styles.section1}>
                    <View style={styles.container}>
                        <Row sb>
                            <View style={{
                                width: '65%',
                            }}>
                                <Text>Estimated Amount</Text>
                            </View>
                            <View style={{
                                width: '35%'
                            }}>
                                <Input   {...{
                                    dense: true,
                                    type: 'numeric',
                                    style: styles.inputStyle,
                                    placeholder: '2000 max'
                                }} />
                            </View>
                        </Row>
                    </View>
                </View>
                <Spacer md />
                <View style={styles.section1}>
                    <View style={styles.container}>
                        <Row sb>
                            <View style={styles.left}>
                                <Text>Subtotal</Text>
                            </View>
                            <View style={styles.right}>
                                <Text>Food Receipt</Text>
                            </View>
                        </Row>
                        <Row sb>
                            <View style={styles.left}>
                                <Text>Delivery Fee</Text>
                            </View>
                            <View style={styles.right}>
                                <Text>PHP49 - 200</Text>
                            </View>
                        </Row>
                        <Row sb>
                            <View style={styles.left}>
                                <Text>Service Fee</Text>
                            </View>
                            <View style={styles.right}>
                                <Text>FREE</Text>
                            </View>
                        </Row>
                    </View>
                </View>
                <Spacer md />
                <Divider />
                <Spacer md />
                <View style={styles.container}>
                    <Button sm primary  {...{
                        title: "Find a tasker",
                        rounded: true
                    }} />
                </View>
                <Spacer />
            </ScrollView>
        </Screen>
    )
}
