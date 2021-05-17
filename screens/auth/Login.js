import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, TouchableOpacity, ScrollView, BackHandler } from 'react-native'
import { Input, HeaderLogo, Text, Button, Container, Row, Spacer, BottomImage, Modal, Icon } from 'components'
import { DefaultStyles, Theme, Colors, Metrics } from '@constants'
import { LinearGradient } from 'expo-linear-gradient'
import api from 'utils/api'
import styles from './styles'
import { loginUser } from 'services/user'

const checkValues = (email, password) => email !== '' && password !== '';
const inputStyle = {
    borderRadius: Metrics.sm,
    backgroundColor: 'transparent',
    borderColor: Colors.white,

}

const Login = props => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState({
        status: false,
        message: ''
    })
    const [checked, setChecked] = useState(false);

    const validate = () => {
        setIsValid(checkValues(email, password))
    }
    const navigate = (route) => {
        props.navigation.navigate(route)
    }
    const submit = async () => {
        navigate('AppScreen')
    }
    useEffect(() => {
        validate();
        BackHandler.addEventListener('hardwareBackPress', () => true);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', () => true)
        }
    }, [email, password])
    return (
        <>
            <LinearGradient
                colors={[Colors.accent, Colors.primary, Colors.dark, Colors.dark]}
                style={styles.screen}
            />
            <Spacer sm />
            <Container style={{
                backgroundColor: 'transparent',
                zIndex: 100
            }}>
                <Spacer md />
                <View style={styles.logo}>
                    <HeaderLogo />
                </View>
                <Modal {...{ visible: modal, setVisible: setModal, title: err.status ? 'Error' : 'Message' }} >
                    <ScrollView contentContainerStyle={[styles.centered, {
                        justifyContent: 'center',
                    }]} >
                        <Spacer />
                        <Icon {
                            ...{
                                name: err.status ? 'close' : 'happy-outline',
                                size: 110,
                                type: 'sp'
                            }
                        } />
                        <Spacer sm />
                        <Text mute center b lg>{
                            err.status ? err.message : 'Welcome !'
                        }</Text>
                    </ScrollView>
                </Modal>
                <Spacer md />
                <View style={styles.container}>
                    <Text center light b xl>Welcome!</Text>
                </View>
                <Spacer sm />
                <View style={DefaultStyles.screen}>
                    <Input
                        dense
                        {...{
                            textColor: Colors.white,
                            style: inputStyle,
                            value: email || null,
                            setValue: setEmail,
                            placeholder: 'Input email',
                            disabled: loading,
                            // validate: () => validate(),
                            icon: {
                                color: Colors.white,
                                name: 'person-circle-outline',
                            }
                        }} />
                    <Spacer sm />
                    <Input dense {...{
                        textColor: Colors.white,
                        value: password || null,
                        setValue: setPassword,
                        style: inputStyle,
                        disabled: loading,
                        rightContent: <TouchableOpacity
                            disabled={loading}
                            onPress={() => setChecked(val => !val)}
                            style={{
                                justifyContent: 'center',
                                marginLeft: Metrics.sm
                            }}>
                            <Icon
                                {... {
                                    name: !checked ? 'eye' : 'eye-off',
                                    color: Colors.white,
                                    type: 'mdi'
                                }}
                            /></TouchableOpacity>,
                        icon: {
                            name: 'key',
                            color: Colors.white,
                        },
                        secureTextEntry: !checked,
                        label: 'Password',
                        placeholder: 'Input password'
                    }} />
                    <Spacer />
                    <View style={styles.container}>
                        <Button sm light  {...{
                            title: "Login",
                            loading,
                            textColor: Theme.dark,
                            onPress: submit
                        }} />
                        <Spacer sm />
                        <Text style={DefaultStyles.textTitle} center light b  >OR CONTINUE WITH SOCIAL ACCOUNT</Text>
                        <Spacer sm />
                        <Row bw>
                            <View style={{
                                width: '48%'
                            }}>
                                <Button sm dark  {...{
                                    style: {
                                        backgroundColor: Theme.facebook,
                                    },
                                    title: "Facebook",
                                    icon: 'facebook',
                                    loading,
                                    textColor: Theme.white,
                                    onPress: submit
                                }} />
                            </View>
                            <View style={{
                                width: '48%'
                            }}>
                                <Button sm light  {...{
                                    title: "Google",
                                    loading,
                                    icon: 'google',
                                    textColor: Theme.dark,
                                    onPress: submit
                                }} />
                            </View>


                        </Row>
                    </View>
                    <Spacer sm />

                    <Row c>
                        <View>
                            <Text>Don't have an account?</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigate('RegisterScreen')}>
                            <Text style={DefaultStyles.textTitle}>{'\t'}Register here</Text>
                        </TouchableOpacity>
                    </Row>
                    <Row c>
                        <TouchableOpacity>
                            <Text style={DefaultStyles.textTitle}>{'\t'}Forgot Password</Text>
                        </TouchableOpacity>
                    </Row>
                </View>
            </Container>
        </>
    )
}

export default Login
