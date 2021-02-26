import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => <Text>Home</Text>;

const AlbumsRoute = () => <Text>Profile</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'music', title: 'Home', icon: 'home' },
        { key: 'albums', title: 'Profile', icon: 'account' },
        { key: 'recents', title: 'Recents', icon: 'history' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            style={{
                backgroundColor:'white'
            }}
            renderScene={renderScene}
        />
    );
};
