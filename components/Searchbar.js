import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Metrics, Colors, Theme } from '@constants'
import { Divider, Icon } from '.'
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
        shadowOpacity: 0,
        fontSize: Metrics.font.sm,

    },
    input: {
        color: Colors.white,
        padding: 0,
        fontSize: Metrics.font.sm,
        textAlign: 'center',
        textDecorationLine: 'none',
    },
    divider: {
        borderWidth: 1,
        backgroundColor: Colors.white,
        borderColor: Colors.white,
        alignSelf: 'center',
        // opacity: 0.5,
        bottom: 20,
        position: 'absolute',
        width: '50%',
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
                icon={() => <View style={{
                    textAlign: 'center'
                }}>
                    <Icon sm {...{
                        color: Colors.white,
                        type: 'mdi',
                        name: 'magnify',
                    }} />
                </View>}
                placeholderTextColor={'rgba(255,255,255,0.7)' || placeholderTextColor}
                style={{ ...styles.bar, ...style?.bar }}
                inputStyle={{ ...styles.input, ...style?.input }}
                placeholder="What tasks are you looking for?"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <Divider style={styles.divider} />
        </View>
    );
};
