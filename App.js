import React, { useState, useEffect } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Colors } from './constants';
import { enableScreens } from "react-native-screens";
import { Provider as StoreProvider, useDispatch } from 'react-redux';
import Routes from './navigations';
import { getCurrentLocation, storeData } from 'utils/helpers'
import { ActionTypes, actionCreator } from 'utils/redux/actions';
import {
    store,
} from 'utils/redux'
enableScreens();
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: Colors.primary,
        accent: Colors.accent,
    },
};
const App = () => {

    useEffect(() => {
        (async () => {
            let location = await getCurrentLocation();
            if (location.error) {
                return alert(location.errMessage)
            }
            storeData('location', JSON.stringify(location))
        })()
    }, [])
    return (
        <StoreProvider store={store}>
            <PaperProvider theme={theme}>
                <Routes />
            </PaperProvider>
        </StoreProvider>

    )
}
export default App;
