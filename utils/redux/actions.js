const LOADING = 'LOADING';
const CREATE = 'CREATE';
const RETRIEVE = 'RETRIEVE';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';
const SET_USER = 'SET_USER';

const FETCH_PROVINCES = 'FETCH_PROVINCES'
const FETCH_CITIES = 'FETCH_CITIES'

const ActionTypes = {
    LOADING,
    CREATE,
    RETRIEVE,
    UPDATE,
    DELETE,
    FETCH_PROVINCES,
    FETCH_CITIES,
    SET_USER
}

const actionCreator = (type, payload = null) => ({ type, payload });
export { ActionTypes, actionCreator }; 