// import React, { useState } from 'react';
// import { View } from 'react-native'
// import { BottomNavigation, Text } from 'react-native-paper';
// import { createStackNavigator } from 'react-navigation-stack';
// import { HomeScreen } from 'screens';
// import { Empty, Button } from 'components'
// import { Colors, Theme } from '@constants'

// const HomeScreenStack = createStackNavigator(
//     {
//         homescreen: {
//             screen: HomeScreen,
//             navigationOptions: {
//                 title: '',
//                 headerShown: false
//             }
//         },
//     },
//     {
//         initialRouteName: 'homescreen'
//     }
// );
// const HomeScreenRoute = () => <HomeScreenStack />;


// export default props => {
//     const [index, setIndex] = useState(0);
//     const [routes] = useState([
//         { key: 'home', title: 'Home', icon: 'home' },
//         { key: 'profile', title: 'Profile', icon: 'account' },
//         { key: 'recents', title: 'Recents', icon: 'history' },
//     ]);

//     const renderScene = BottomNavigation.SceneMap({
//         home: HomeScreenStack,
//         profile: ProfileRoute,
//         recents: RecentsRoute,
//     });

//     return (
//         <BottomNavigation
//             barStyle={{
//                 backgroundColor: Colors.white,
//                 borderTopColor: Colors.gray,
//                 borderTopWidth: 1,
//                 shadowColor: Colors.black,
//                 shadowOpacity: 0.5
//             }}
//             navigationState={{ index, routes }}
//             onIndexChange={setIndex}
//             renderScene={renderScene}
//         />
//     );
// };


import React, { useState } from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Text } from 'react-native-paper';
import { HomeScreen } from 'screens';
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

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Profile: ProfileRoute,
    Recents: RecentsRoute,
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
            activeTintColor: Colors.black,
            inactiveTintColor: Colors.darkGray,
        },
    });

export default createAppContainer(TabNavigator);