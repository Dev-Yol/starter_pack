import { ActionTypes } from './actions'
const initialState = {
    loading: false,
    token: '',
    requests: {
        pending: [],
        failed: []
    },
    reviews: [],
    user: {},
    location: null
}
export default (state = initialState, action) => {
    let { type, payload } = action
    switch (type) {
        case ActionTypes.LOADING:
            return {
                ...state, loading: payload
            }

        case ActionTypes.CREATE:
            return {
                ...state, loading: payload
            }

        case ActionTypes.RETRIEVE:
            return {
                ...state, loading: payload
            }

        case ActionTypes.UPDATE:
            return {
                ...state, loading: payload
            }
        case ActionTypes.DELETE:
            return {
                ...state, loading: payload
            }
        case ActionTypes.SET_LOCATION:
            return {
                ...state, location: payload
            }
        case ActionTypes.SET_USER:
            return {
                ...state, user: payload
            }
        default:
            return state;
    }
}