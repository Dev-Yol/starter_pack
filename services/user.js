import { ActionTypes, actionCreator } from 'utils/redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Messages } from '@constants'
const { storageKeys } = Messages;
export const loginUser = async (dispatch, data) => {
    try {
        await AsyncStorage.setItem(storageKeys.user, JSON.stringify(data))
        dispatch(actionCreator(ActionTypes.SET_USER, data))
        return true;
    } catch (error) {
        return false;
    }
}

export const logoutUser = async (dispatch) => {
    try {
        await AsyncStorage.removeItem(storageKeys.user)
        dispatch(actionCreator(ActionTypes.SET_USER, {}))
        return true;
    } catch (error) {
        return false;
    }
}
