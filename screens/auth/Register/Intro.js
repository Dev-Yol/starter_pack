import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import { Input, HeaderLogo, Text, Button, Container, Row, Spacer, BottomImage, PaperPhoneInput } from 'components'
import { DefaultStyles, Colors, Theme } from '@constants'
import { LinearGradient } from 'expo-linear-gradient'
import styles from '../styles'


const checkValues = (username, password, cPassword) => username !== '' && password !== '' && cPassword == password;
const Register = props => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    const validate = () => {
        setIsValid(checkValues(username, password, cPassword))
    }
    const navigate = (route) => {
        props.navigation.push(route)
    }
    const submit = async () => {
        return navigate('Step1Screen')
    }
    useEffect(() => {
        return () => {
        }
    }, [])
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
                <Spacer />
                <View style={styles.container}>
                    <Text center light b xl>Welcome!</Text>
                </View>
                <View style={DefaultStyles.screen}>
                    <View style={styles.container}>
                        <PaperPhoneInput />
                        <Spacer />
                        <Button sm light {...{
                            // disabled: !isValid,
                            title: "Next",
                            loading: false,
                            color: Colors.white,
                            textColor: !isValid ? Colors.accent : Colors.dark,
                            onPress: () => { }
                        }} />
                        <Spacer />
                        <Text center light b >OR CONTINUE WITH SOCIAL ACCOUNT</Text>
                        <Spacer />
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
                                    loading: false,
                                    textColor: Theme.white,
                                    onPress: () => { }
                                }} />
                            </View>
                            <View style={{
                                width: '48%'
                            }}>
                                <Button sm light  {...{
                                    title: "Google",
                                    loading: false,
                                    icon: 'google',
                                    textColor: Theme.dark,
                                    onPress: () => {
                                        navigate('AppScreen')
                                    }
                                }} />
                            </View>


                        </Row>
                    </View>
                    <Spacer md />
                    <Row c>
                        <View>
                            <Text>Already have an account?</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigate('loginScreen')}>
                            <Text style={DefaultStyles.textTitle}>{'\t'}Login here</Text>
                        </TouchableOpacity>
                    </Row>
                    <Row c>
                        <TouchableOpacity>
                            <Text style={DefaultStyles.textTitle}>{'\t'}Forgot Password</Text>
                        </TouchableOpacity>
                    </Row>
                </View>
            </Container>
            {/* <BottomImage /> */}
        </>
    )
}

export default Register
