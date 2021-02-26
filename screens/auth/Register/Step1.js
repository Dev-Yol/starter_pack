import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Input, Text, Button, Container, Spacer, ScrollView, Icon, BottomSheet } from 'components'
import AddressForm from "./AddressForm";
import { Metrics, Colors, Messages } from '@constants'
import Validator from 'utils/Validator'
import { fetchProvinces } from 'services/locations'
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
    }

})
export default props => {
    const { navigation } = props;
    const dispatch = useDispatch()
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [address, setAddress] = useState('');
    const [step, setStep] = useState(1);
    const [isReady, setIsReady] = useState(false);
    const [loading, setLoading] = useState(false);
    const [emailTaken, setIsEmailTaken] = useState({ error: false, message: '' });

    const navigate = (route, params) => {
        navigation.navigate(route, params)
    }
    const validate = () => {
        setIsReady(() => {
            let _fname = Validator.isLettersOnly(fullname);
            let _email = Validator.isEmail(email);
            let _phone = Validator.isPHMobileNumber(phoneNo) && phoneNo.length === 11
            let hasAddress = city !== '' && province !== '';
            checkEmail()
            return _fname && _email && _phone && hasAddress && (!emailTaken.error)
        })
    }

    const checkEmail = async () => {
        let res = await api.post('/checkEmail', { email });
        setIsEmailTaken(res)
    }

    useEffect(() => {
        fetchProvinces(dispatch)
        if (city && province) {
            setAddress(`${zipCode} ${city.title},${province.title}`)
        }
        validate();
        return () => {
            return null
        }
    }, [city,
        province,
        zipCode,
        fullname,
        email,
        phoneNo,])
    return (
        <ScrollView containerStyle={{
            flex: 1,
            flexGrow: 1
        }}>
            {!props.update && <View>
                <Text mute center b xl>Personal Information</Text>
            </View>}


            <Spacer md />

            <Container style={{
                backgroundColor: 'transparent',
                ...styles.buttonContainer
            }}>
                <Input
                    {...{
                        value: fullname || '',
                        setValue: setFullname,
                        placeholder: 'Name',
                        validator: {
                            status: fullname.length > 0 ? !Validator.isLettersOnly(fullname) : false,
                            message: Messages.error.onlyLetters,
                        },
                        disabled: loading,
                        style: {
                            borderRadius: Metrics.sm
                        },
                        icon: {
                            colored: true,
                            name: 'person-circle-outline',
                        }
                    }} />
                <Spacer sm />
                <Input  {...{
                    value: email || '',
                    setValue: setEmail,
                    validator: {
                        status: emailTaken.error ? true : email.length > 0 ? !Validator.isEmail(email) : false,
                        message: emailTaken.error ? emailTaken.message : Messages.error.email,
                    },
                    disabled: loading,
                    style: {
                        borderRadius: Metrics.sm
                    },
                    icon: {
                        name: 'mail',
                        colored: true,
                        sm: true
                    },
                    placeholder: 'Email'
                }} />
                <Spacer sm />
                <Input  {...{
                    value: phoneNo || '',
                    maxLength: 11,
                    style: {
                        borderRadius: Metrics.sm
                    },
                    setValue: (e) => {
                        if (Validator.isPHMobileNumber(e) || e === '') {
                            setPhoneNo(e)
                        }
                    },
                    disabled: loading,
                    type: 'phone-pad',
                    icon: {
                        type: 'mdi',
                        name: 'phone',
                        colored: true,
                        sm: true
                    },
                    placeholder: 'Phone number'
                }} />
                <Spacer sm />
                <Input  {...{
                    value: address || null,
                    disabled: !address,
                    style: {
                        borderRadius: Metrics.sm
                    },
                    readOnly: address.length > 0,
                    icon: {
                        type: 'mdi',
                        name: 'map-marker',
                        colored: true,
                        sm: true
                    },
                    validator: {
                        status: !address,
                        message: "Use the '+' icon to add your address.",
                    },
                    rightContent: <TouchableOpacity
                        disabled={loading}
                        onPress={() => setShowForm(true)} style={{
                            justifyContent: 'center',
                            marginLeft: Metrics.sm
                        }}>
                        <Icon
                            {... {
                                name: 'add-circle-outline',
                                colored: true,
                            }}
                        /></TouchableOpacity>,
                    placeholder: 'Address'
                }} />
                <Spacer md />
                <View >
                    <Button dark md  {...{
                        loading,
                        disabled: (!isReady) || loading,
                        title: "Next",
                        rounded: true,
                        color: 'transparent',
                        onPress: () => {
                            setLoading(true);
                            navigate('Step2Screen', {
                                fullname,
                                email,
                                phoneNo,
                                city: city?.id,
                                province: province?.id,
                                zipCode: city?.zipcode
                            })
                            setLoading(false);
                        },

                    }} />
                </View>
                <BottomSheet {...{
                    setVisible: setShowForm,
                    onBack: () => setStep(val => --val),
                    backButton: step > 1
                }}
                    visible={showForm}
                    title='Set Address' setVisible={setShowForm}>
                    <AddressForm  {...{
                        city,
                        province,
                        validate,
                        step,
                        setStep,
                        setCity,
                        setProvince,
                        zipCode,
                        setZipCode,
                        setVisible: setShowForm
                    }} />

                </BottomSheet>
            </Container>
        </ScrollView>
    )
}
