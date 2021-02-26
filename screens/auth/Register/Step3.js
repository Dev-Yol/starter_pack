import React, { useState, useEffect } from 'react'
import { Checkbox } from 'react-native-paper';
import { View, StyleSheet } from 'react-native'
import { Input, Text, Button, Container, Spacer, ScrollView, Modal, Icon } from 'components'
import { Metrics, Colors, Messages } from '@constants'
import Validator from 'utils/Validator'
import api from 'utils/api'

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light,

    },
    screen: {
        padding: Metrics.lg,
        justifyContent: 'center',

    },
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
    },
    row: {
        flexDirection: 'row'
    },
    col: {
        justifyContent: 'center'
    }

})
export default props => {
    const { params } = props.navigation.state;
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState([]);
    const [checked, setChecked] = useState(false);
    const [modal, setModal] = useState(false);
    const [err, setErr] = useState({
        status: false,
        message: ''
    })
    const validate = () => {
        const { password_criteria } = Messages;
        let res = Validator.validate(password, password_criteria);
        let msgs = [];
        setIsValid(res.ok)
        if (!res.ok) {
            res?.errors.map(({ ok, message }) => {
                if (!ok) {
                    msgs.push(message)
                }
            })
        }
        setErrors(msgs)
    }
    const navigate = (route) => {
        return props.navigation.navigate(route, { ...params, password })
    }

    const submit = async () => {
        setLoading(true);
        let res = await api.post('/register', { ...params, password })
        if (res.error) {
            let _err = {
                status: res.error,
                message: res.message
            }
            return setErr(_err)
        }

        setLoading(false);
        navigate('loginScreen')
    }

    useEffect(() => {
        validate();
        return () => {
            return null
        }
    }, [password, cpassword])
    return (
        <ScrollView containerStyle={{
            flex: 1,
            flexGrow: 1
        }}>

            <View>
                <Text mute center b xl>Create Password</Text>
            </View>
            <Spacer md />

            <Container style={{
                backgroundColor: 'transparent',
                ...styles.buttonContainer
            }}>
                <Modal {...{ visible: modal, setVisible: setModal, title: err.status ? 'Error' : 'Message' }} >
                    <ScrollView contentContainerStyle={styles.centered} >
                        <Icon {
                            ...{
                                name: err.status ? 'close-circle-outline' : 'happy-outline',
                                jumbo: true
                            }
                        } />
                        <Text mute center b lg>{
                            err.status ? err.message : 'Welcome !'
                        }</Text>
                    </ScrollView>
                </Modal>
                <Input
                    {...{
                        value: password || '',
                        setValue: setPassword,
                        secureTextEntry: !checked,
                        placeholder: 'Password',
                        validator: {
                            status: !isValid,
                            message: errors,
                        },
                        disabled: loading,
                        style: {
                            borderRadius: Metrics.sm
                        },
                        icon: {
                            colored: !loading,
                            name: 'key',
                        }
                    }} />
                <Spacer sm />
                <Input  {...{
                    value: cpassword || '',
                    secureTextEntry: !checked,
                    setValue: setCPassword,
                    validator: {
                        status: cpassword.length > 0 ? (password !== cpassword) : false,
                        message: Messages.error.pwdNotMatch,
                    },
                    disabled: loading || !isValid,
                    style: {
                        borderRadius: Metrics.sm
                    },
                    icon: {
                        name: 'key',
                        colored: (!loading) && isValid,
                    },
                    placeholder: 'Confirm password'
                }} />

                <View style={styles.row}>
                    <View style={styles.col}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            color={Colors.danger}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                    </View>
                    <View style={styles.col}>
                        <Text mute >Show password</Text>

                    </View>
                </View>
                <Spacer sm />

                <View >
                    <Button dark md  {...{
                        loading,
                        disabled: password.length < 1 || !isValid || cpassword !== password,
                        title: "Submit",
                        rounded: true,
                        color: 'transparent',
                        onPress: () => {
                            submit();
                        },

                    }} />
                </View>
            </Container>
        </ScrollView>
    )
}
