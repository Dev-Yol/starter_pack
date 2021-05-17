import { StyleSheet, StatusBar } from 'react-native';
import { Metrics, Colors } from '@constants'
export default
    StyleSheet.create({
        screen: {
            backgroundColor: Colors.primary,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        },
        logo: {
            marginTop: Metrics.sm,
            paddingTop: Metrics.sbHeight,
        },
        textContainer: {
            flexDirection: 'row',
            alignSelf: 'flex-end',
        },
        centered: {
            alignItems: 'center'
        }

    })
