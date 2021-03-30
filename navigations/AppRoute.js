import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
    HomeScreen,
    WashingAndCleaningScreen,
    HandymanAndSpecialists,
    HealthBeautyAndSpaScreen,
    PurchaseAndDeliveriesScreen,
    DeliveryForm
} from 'screens';
import { Empty, Button, Icon } from 'components'
import { Colors, Theme } from '@constants'

const RecentsRoute = () => <Empty text='Profile Screen' />;

const ProfileRoute = props => {
    return <Empty text='Recents Screen' >
        <Button sm light  {...{
            title: "Logout",
            textColor: Theme.dark,
            onPress: () => {
                props.navigation.navigate('loginScreen')
            }
        }} />
    </Empty>
};

const AppStack = createStackNavigator(
    {
        homeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                title: '',
                headerShown: false
            }
        },
        washAndCleanScreen: {
            screen: WashingAndCleaningScreen,
            navigationOptions: {
                title: '',
                headerShown: false,
            }
        },
        handymanAndSpecialistsScreen: {
            screen: HandymanAndSpecialists,
            navigationOptions: {
                title: '',
                headerShown: false,
            }
        },
        healthBeautyAndSpaScreen: {
            screen: HealthBeautyAndSpaScreen,
            navigationOptions: {
                title: '',
                headerShown: false,
            }
        },
        purchaseAndDeliveriesScreen: {
            screen: PurchaseAndDeliveriesScreen,
            navigationOptions: {
                title: '',
                headerShown: false,
            }
        },
        deliveryFormScreen: {
            screen: DeliveryForm,
            navigationOptions: {
                title: '',
                headerShown: false,
            }
        },
    },

    {
        initialRouteName: 'deliveryFormScreen'
    }
);

const TabNavigator = createBottomTabNavigator({
    Home: AppStack,
    Profile: ProfileRoute,
    Recents: RecentsRoute,
    Pending: RecentsRoute,
    Calendar: RecentsRoute
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = 'home';
                } else if (routeName === 'Profile') {
                    iconName = 'account';
                } else {
                    iconName = 'history'
                }

                // You can return any component that you like here!
                return <Icon name={iconName} type='mdi' size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: Theme.primary,
            inactiveTintColor: Colors.darkGray,
        },
    });

export default createAppContainer(TabNavigator);