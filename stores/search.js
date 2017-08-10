import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const defaultState = {
    searchString: '',
    isSearching: false,
    results: [],
    countries: [],
    errors: {},
};

export const actionTypes = {
    SEARCH: 'SEARCH',
    SEARCH_COMPLETED: 'SEARCH_COMPLETED',
};

// REDUCERS
export const reducer = (state = defaultState, action) => {
    switch (action.type) {
    case actionTypes.SEARCH:
        return Object.assign({}, state, {
            searchString: action.searchString,
            isSearching: true,
        });
    case actionTypes.SEARCH_COMPLETED:
        return Object.assign({}, state, {
            results: action.results,
            countries: action.countries,
            errors: action.errors,
            isSearching: false,
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

export const initStore = (initialState = defaultState) => createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
