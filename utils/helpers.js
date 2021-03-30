import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage'
const getCurrentLocation = async () => {
    let result = {
        latitude: 0,
        longitude: 0,
        error: false
    };

    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
        result.error = true;
        return result;
    }
    try {
        let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High })// Location.getCurrentPositionAsync({});
        result.latitude = location.coords.latitude;
        result.longitude = location.coords.longitude;
        return result;

    } catch (error) {
        result.error = true;
        result.errMessage = JSON.stringify(error)
        return result
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

