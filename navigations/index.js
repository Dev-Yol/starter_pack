import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Login, Register, LoadingScreen } from "screens";
import { Colors, Metrics } from '@constants'
import AppRoute from './AppRoute';
const { Intro, Step1, Step2, Step3 } = Register
const defaultConfig = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.light
        },
        headerTintColor: Colors.darkGray,
    }
}

const LoginStack = createStackNavigator(
    {
        loginScreen: {
            screen: Login,
            navigationOptions: {
                title: '',
                headerShown: false
            }
        },
    },
    {
        initialRouteName: 'loginScreen'
    }
);


const LoadingStack = createStackNavigator(
    {
        loadingScreen: {
            screen: LoadingScreen,
            navigationOptions: {
                title: '',
                headerShown: false
            }
        },
    },
    {
        initialRouteName: 'loadingScreen'
    }
);



const RegisterStack = createStackNavigator(
    {
        IntroScreen: {
            screen: Intro,
            navigationOptions: {
                headerShown: false
            }
        },
        Step1Screen: {
            screen: Step1,
            navigationOptions: {
                title: ''
            }
        },
        Step2Screen: {
            screen: Step2,
            navigationOptions: {
                title: '',
                headerShown: true
            }
        },
        Step3Screen: {
            screen: Step3,
            navigationOptions: {
                title: '',
                headerShown: true
            }
        }
    },
    {
        initialRouteName: 'IntroScreen',
        ...defaultConfig
    },
);


const MainNavigator = createSwitchNavigator({
    AuthLoading: LoadingStack,
    LoginScreen: LoginStack,
    RegisterScreen: RegisterStack,
    AppScreen: AppRoute
},
    {
        headerMode: 'none',
        mode: 'modal',
        initialRouteName: 'AuthLoading',
        ...defaultConfig
    })
export default createAppContainer(MainNavigator);