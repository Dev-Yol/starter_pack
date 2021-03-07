import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    BackHandler

} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { Button, Carousel, IconTray, Row, Spacer, Text, Divider, Searchbar, Screen, ScrollView } from 'components'
import { Icons, Metrics, Theme } from '@constants'
import { logoutUser } from 'services/user'

const { HOMESCREEN_CAROUSEL_ITEMS, CLEANING_AND_WASHING_ICONS_CATEGORIES } = Icons
export default props => {
    const state = useSelector(state => state);
    const user = state.appReducer.user;
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [visible, setVisible] = useState(false);

    const navigate = (route) => {
        props.navigation.navigate(route)
    }
    const logout = () => {
        logoutUser(dispatch);
        navigate('loginScreen')
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            props.navigation.navigate('homeScreen')
        });
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', () => true)
        }
    }, [])


    return (
        <>
            <Screen style={{
                flex: 1,
            }} >

                <Searchbar style={{
                    bar: {
                        backgroundColor: Theme.ocean
                    },
                    container: {
                        backgroundColor: Theme.ocean
                    }
                }} />
                <ScrollView containerStyle={{
                    padding: 0
                }}>
                    <Row ar>
                        <IconTray {
                            ...{
                                color: Theme.ocean,
                                data: CLEANING_AND_WASHING_ICONS_CATEGORIES,
                                onPress: navigate
                            }
                        } />
                    </Row>
                    <Spacer />
                    < Divider />
                    <Spacer />
                    <View style={{
                        paddingHorizontal: 2
                    }}>


                        <View style={styles.container}>
                            <Text b>Explore more</Text>
                            <Carousel data={HOMESCREEN_CAROUSEL_ITEMS} />
                            <Spacer md />
                            <Text b>Explore more</Text>
                            <Carousel data={HOMESCREEN_CAROUSEL_ITEMS} />
                        </View>
                    </View>
                    <Spacer md />
                </ScrollView>
            </Screen >
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Metrics.md,
        flex: 1,
    },
    centered: {
        alignItems: 'center'
    },
    footer: {
        alignSelf: 'flex-end',
        marginBottom: 10,
        width: '100%',
    },
});
