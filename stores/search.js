import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import fetch from 'isomorphic-fetch';

const providerApi = 'https://bigpay.integration.zone/payment_providers';

const defaultState = {
    searchString: '',
    paymentProviders: [],
    errors: {},
};

export const actionTypes = {
    SEARCH: 'SEARCH',
    GET_PROVIDERS: 'GET_PROVIDERS',
};

// REDUCERS
export const reducer = (state = defaultState, action) => {
    switch (action.type) {
    case actionTypes.SEARCH:
        return Object.assign({}, state, {
            searchString: action.searchString,
        });
    case actionTypes.GET_PROVIDERS:
        return Object.assign({}, state, {
            paymentProviders: action.paymentProviders,
            errors: action.errors,
        });
    default:
        return state;
    }
};

// ACTIONS
export const search = searchString => dispatch => dispatch({
    type: actionTypes.SEARCH,
    searchString,
});

export const fetchProviderData = () => dispatch => (
    fetch(providerApi, {
        Accept: 'application/json',
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: 'GET_PROVIDERS',
            paymentProviders: data.payment_providers,
        }))
        .catch(errors => dispatch({
            type: 'GET_PROVIDERS',
            errors,
        }))
);

export const initStore = (initialState = defaultState) => createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
