import React, { useState } from 'react';
import {
    StyleSheet,
    View,

} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { Button, Dialog, Icon, Row, Spacer, Text, Divider, Searchbar, Screen, ScrollView } from 'components'
import { Icons, Metrics } from '@constants'
import { logoutUser } from 'services/user'
import IconTray from './components/IconTray'
import Carousel from './components/Carousel'

const { HOMESCREEN_CAROUSEL_ITEMS, HOMESCREEN_ICONS_CATEGORIES } = Icons
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


    return (
        <>
            <Screen style={{
                flex: 1,
            }} >

                <Searchbar />
                <ScrollView containerStyle={{
                    padding: 0
                }}>
                    <Row ar>
                        <IconTray data={HOMESCREEN_ICONS_CATEGORIES} />
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
