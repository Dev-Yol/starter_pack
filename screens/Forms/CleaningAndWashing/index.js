import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import { Theme, Colors, Metrics } from '@constants'
import { Map, Text, Screen, Spacer, ScrollView, Icon, Divider, Row, Spinner, Input, Button } from 'components'
import { getData } from 'utils/helpers'
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
        width: '50%',
        paddingHorizontal: 10
        // alignItems: 'flex-end'

    },
    left: {
        paddingHorizontal: 10,
        width: '50%'
    },
})

export default () => {
    const [location, setLocation] = useState({})
    const [address, setAddress] = useState(null)

    const [loading, setLoading] = useState(true)
    const [orders, setOrders] = useState([null])
    const getInitialData = async () => {
        setLoading(true)
        let data = await getData('location');
        data = JSON.parse(data)
        setLoading(false)
        if (!data.error) {
            setLocation(data)
            setAddress(data.address)
        } else {
            alert('Something went wrong')
        }
    }
    React.useLayoutEffect(() => {
        getInitialData()
    }, [])
    return (
        <Screen style={styles.screen}>
            <ScrollView style={styles.scrollView} containerStyle={styles.scrollView}>
                <Text center b md>House and Cleaning Information</Text>
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
                                name: 'map-marker', type: 'mdi', color: 'red'
                            }} />
                        </View>

                        <View style={styles.col}>
                            {
                                !address && <Text b  >{loading ? 'Please wait while we are getting your location' : 'Location'}</Text>
                            }
                            {
                                address && <Text b >{address?.street || 'Location'}</Text>
                            }
                            <Text sm >{address?.subregion},{address?.city}</Text>
                            {/* <Text b >Location 1</Text>
                            */}
                        </View>
                    </Row>
                </View>
                <Divider />
                <Spacer />
                <View style={styles.section1}>
                    <Row center>
                        <View style={styles.left}>
                            <Row ar>
                                <View>
                                    <TouchableOpacity >
                                        <Text b lg>-</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '60%' }} >
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
                                        value: `rooms`,

                                        // placeholder: `${order.quantity}`
                                    }} />
                                </View>
                                <View>
                                    <TouchableOpacity >
                                        <Text b lg>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </Row>
                        </View>
                        <View style={styles.right}>
                            <Row ar>
                                <View>
                                    <TouchableOpacity onPress={() => {

                                    }}>
                                        <Text b lg>-</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '60%' }} >
                                    <Input multiline dense {...{
                                        type: 'numeric',
                                        style: {
                                            ...styles.inputStyle,

                                        },
                                        inputStyle: {
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            justifyContent: 'center'
                                        },

                                        value: `est. sqm`,

                                        // placeholder: `${order.quantity}`
                                    }} />
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {

                                    }}>
                                        <Text b lg>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </Row>
                        </View>
                    </Row>
                </View>
                <Spacer />
                <View style={styles.section1}>
                    <View style={styles.container}>
                        <Text md>Add three(3) photos of the area</Text>
                    </View>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => {
                            setOrders([...orders, null])
                        }}>
                            <Text color={Theme.primary} b>+Add more items</Text>
                        </TouchableOpacity>
                    </View>
                    <Spacer />
                    <Row ar>

                        {
                            [1, 2, 3].map(id => {
                                return <View key={id} style={{
                                    borderWidth: 1,
                                    borderColor: Colors.gray,
                                    padding: 2
                                }}>
                                    <Image
                                        style={{
                                            width: 50,
                                            height: 50,

                                        }}
                                        source={require('assets/favicon.png')}
                                    />
                                </View>
                            })

                        }
                    </Row>
                </View>
                <Spacer />

                <Spacer />
                <View style={styles.section1}>
                    <View style={styles.container}>
                        <View>
                            <Text md>Task Description(additional notes)</Text>
                        </View>
                        <Spacer />
                        <View>
                            <Input multiline dense {...{
                                style: {
                                    ...styles.inputStyle,
                                    height: 100,
                                    justifyContent: 'flex-start'
                                },
                                inputStyle: {
                                    paddingTop: 10,
                                    textAlignVertical: 'top'
                                }

                            }} />
                        </View>
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
