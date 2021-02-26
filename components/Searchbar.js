import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Metrics, Colors, Theme } from '@constants'
const styles = StyleSheet.create({
    container: {
        padding: Metrics.sm,
        backgroundColor: Theme.primary,

    },
    bar: {
        backgroundColor: Theme.primary,
        color: Colors.white,
        height: Metrics.xxl + 10,
        elevation: 0,
        shadowOpacity: 0

    },
    input: {
        color: Colors.white,
        padding: 0,
        textDecorationLine: 'none',
    }
});
export default ({ style }) => {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={{ ...styles.container, ...style?.container }}>
            <Searchbar
                theme={
                    {
                        mode: {

                            elevation: 0,
                        }
                    }
                }
                iconColor={Colors.white}
                placeholderTextColor={Colors.white || placeholderTextColor}
                style={{ ...styles.bar, ...style?.bar }}
                inputStyle={{ ...styles.input, ...style?.input }}
                placeholder="What tasks are you looking for?"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
        </View>
    );
};
