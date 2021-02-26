import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import config from '../app.json'
import { Theme, Metrics } from '@constants'
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            appIsReady: false,
        };

        // 

    }

    async componentDidMount() {
        // Prevent native splash screen from autohiding
        try {
            await SplashScreen.preventAutoHideAsync();
        } catch (e) {
            console.warn(e);
        }
        this.prepareResources();
    }

    /**
     * Method that serves to load resources and make API calls
     */
    prepareResources = async () => {
        try {
            await performAPICalls(this);
            //   await downloadAssets();
        } catch (e) {
            console.warn(e);
        } finally {
            this.setState({ appIsReady: true }, async () => {
                await SplashScreen.hideAsync();
            });
            // this.props.navigation.navigate('LoginScreen')
        }
    };

    render() {
        if (!this.state.appIsReady) {
            return null;
        }

        return (
            <View style={styles.container}>
                <Text style={styles.text}>{config.expo.name}</Text>
            </View>
        );
    }
}

const redirect = (navigation) => {
    navigation.navigate('loginScreen')
};
// Put any code you need to prepare your app in these functions
const performAPICalls = async (self) => {
    setTimeout(() => {
        return redirect(self.props.navigation);
    }, 3000);
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.primary,
    },
    text: {
        color: 'white',
        fontSize: Metrics.font.h3,
        fontWeight: 'bold',
    },
});