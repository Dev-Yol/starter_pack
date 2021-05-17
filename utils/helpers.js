import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as app from '../app.json'
const getCurrentLocation = async () => {
    let result = {
        latitude: 0,
        longitude: 0,
        error: false,
        address: null
    };

    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
        result.error = true;
        return result;
    }
    try {
        Location.setGoogleApiKey('AIzaSyBI1E0d5XA9Aos1SVsesOPFiA_nOMNj3FA')
        let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High })
        result.latitude = location.coords.latitude;
        result.longitude = location.coords.longitude;
        let address = await Location.reverseGeocodeAsync({
            "latitude": result.latitude,
            "longitude": result.longitude,
        }
        )
        console.log({ address })
        result.address = address[0]
        return result;

    } catch (error) {
        console.log(error)
        eval(console.log(error))
        return {
            errMessage: JSON.stringify(error),
            error: true
        }
    }
}
const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
        return true;
    } catch (e) {
        // saving error
        return false
    }
}


const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
            // value previously stored
            return value
        }
    } catch (e) {
        return null
    }
}


export {
    getCurrentLocation,
    getData,
    storeData
}

