import { Dimensions, StatusBar, StyleSheet } from 'react-native';
export default {
    sbHeight: StatusBar.currentHeight,
    hairLine: StyleSheet.hairlineWidth,
    xs: 3,
    sm: 5,
    rg: 10,
    md: 15,
    lg: 20,
    xl: 30,
    xxl: 50,

    font: {
        xs: 10,
        sm: 12,
        rg: 14,
        md: 16,
        lg: 20,
        xl: 24,
        h3: 40,
        h2: 50,
        h1: 60
    },

    icon: {
        xs: 10,
        sm: 20,
        rg: 25,
        md: 40,
        lg: 50,
        xl: 60,
        jumbo: 150
    },

    image: {
        xs: 20,
        sm: 40,
        rg: 50,
        md: 70,
        lg: 90,
        xl: 110
    },

    elevation: 2,
    width: Math.round(Dimensions.get('window').width),
    height: Math.round(Dimensions.get('window').height),
}