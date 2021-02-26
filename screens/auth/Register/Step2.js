import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { CardButton, Icon, Text, Spacer, Button, ScrollView } from 'components'
import { Metrics, Colors, DefaultStyles } from '@constants'
import api from 'utils/api'

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: Metrics.md,
    },
    col: {
        alignSelf: 'center'
    },
    buttonContainer: {
        paddingHorizontal: Metrics.md
    }

})
const menuItems = [
    {
        icon: 'male',
        text: 'Male',
        value: 'f',
        active: false
    },
    {
        icon: 'female',
        text: 'Female',
        value: 'f',
        active: false
    }
]
export default props => {
    const [gender, setGender] = useState();
    const { params } = props.navigation.state;
    const [menu, setMenu] = useState([...menuItems]);

    const navigate = (route) => {
        return props.navigation.navigate(route, { ...params, gender })
    }

    const updateState = (i) => {
        setMenu(prevState => prevState.map((el, idx) => {
            if (i === idx) {
                el.active = true;
                setGender(el.value)
            } else {
                el.active = false
            }
            return el;
        }))
    }

    useEffect(() => {
        updateState(10)
        return () => {
            return
        }
    }, [])
    return (
        <ScrollView >
            <View>
                <Text mute center b xl>Select your gender</Text>
            </View>
            <Spacer md />
            <View style={styles.row}>
                {
                    menu.map(({ icon, text, route, active }, i) => {
                        return (
                            <CardButton active={active} key={i} onPress={() => updateState(i)}>
                                <Icon color={active ? Colors.white : undefined} name={icon} lg type="ft" />
                                <Spacer sm />
                                <Text center md b style={{
                                    color: active ? Colors.white : Colors.darkGray
                                }}>{text}</Text>
                            </CardButton>
                        )
                    })
                }
            </View>
            <Spacer md />
            <View style={styles.buttonContainer}>
                <Button dark md  {...{
                    disabled: !gender,
                    title: "Next",
                    rounded: true,
                    color: 'transparent',
                    onPress: () => { navigate('Step3Screen') }
                    // textColor: !isValid ? Colors.accent : Colors.dark,
                    // onPress: submit
                }} />
            </View>
        </ScrollView>
    )
}
