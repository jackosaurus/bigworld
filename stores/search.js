import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import fetch from 'isomorphic-fetch';

const providerApi = 'https://bigpay.integration.zone/payment_providers';

const defaultState = {
    searchString: '',
    paymentProviders: [],
    activeProvider: {},
    errors: {},
    isLoading: false,
};

export const actionTypes = {
    GET_PROVIDERS: 'GET_PROVIDERS',
    IS_LOADING: 'IS_LOADING',
    SEARCH: 'SEARCH',
    SET_ACTIVE_PROVIDER: 'SET_ACTIVE_PROVIDER',
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
    case actionTypes.SET_ACTIVE_PROVIDER:
        return Object.assign({}, state, {
            activeProvider: action.activeProvider,
            errors: action.errors,
        });
    default:
        return state;
    }
};

// ACTIONS
export const isLoading = (loadingState = false) => dispatch => dispatch({
    type: actionTypes.IS_LOADING,
    isLoading: loadingState,
});

export const search = searchString => dispatch => dispatch({
    type: actionTypes.SEARCH,
    searchString,
});

export const fetchProviderData = () => (dispatch) => {
    isLoading(true);

    return fetch(providerApi, {
        Accept: 'application/json',
    })
        .then(res => res.json())
        .then((data) => {
            dispatch({
                type: actionTypes.GET_PROVIDERS,
                paymentProviders: data.payment_providers,
            });

            isLoading(false);
        })
        .catch((errors) => {
            isLoading(false);

            dispatch({
                type: actionTypes.GET_PROVIDERS,
                errors,
            });
        });
};

export const fetchProvider = name => (dispatch, getState) => (
    dispatch(fetchProviderData())
        .then(() => (
            dispatch({
                type: actionTypes.SET_ACTIVE_PROVIDER,
                activeProvider: getState().paymentProviders.find(el => el.name === name),
            })
        ))
);

export const initStore = (initialState = defaultState) => createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
