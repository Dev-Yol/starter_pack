import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Theme, Colors, Metrics } from '@constants'
import { Map, Text, Screen, Spacer, ScrollView, Icon, Divider, Row } from 'components'
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

        paddingHorizontal: Metrics.sm
    },
    col: {
        marginHorizontal: Metrics.md,
        alignItems: 'center'
    }
})
export default () => {
    const [location, setLocation] = useState({})
    const getInitialData = async () => {
        let data = await getData('location');
        setLocation(JSON.parse(data))
    }
    useEffect(() => {
        getInitialData()
    }, [])
    return (
        <Screen style={styles.screen}>
            <ScrollView style={styles.scrollView} containerStyle={styles.scrollView}>
                <Text center b mute md>Delivery Parcel and Item Information</Text>
                <Spacer />
                <View>
                    <Map {...location} />
                </View>
                <Divider />
                <View style={styles.section}>
                    <Row bw>
                        <View style={{ ...styles.col }}>
                            <Icon {...{
                                name: 'map-marker', type: 'mdi', color: 'blue'
                            }} />
                            <Text sm mute>Pick up point</Text>
                        </View>
                        <View style={styles.col}>
                            <Text b mute>Location 1</Text>
                            <Text sm mute>Details</Text>
                        </View>
                    </Row>
                </View>
                <Divider />
                <View style={styles.section}>
                    <Row bw>
                        <View style={{ ...styles.col, ...{ alignItems: 'center' } }}>
                            <Icon {...{
                                name: 'map-marker', type: 'mdi', color: 'red'
                            }} />
                            <Text sm mute>Drop off point</Text>
                        </View>
                        <View style={styles.col}>
                            <Text b mute>Location 2</Text>
                            <Text sm mute>Details</Text>
                        </View>
                    </Row>
                </View>
                <Divider />
                <View>
                    <Text center b mute md>Restaurant or Store</Text>

                </View>


            </ScrollView>
        </Screen>
    )
}
