const redux = require('redux');

const createStore = redux.createStore;

const initState = {
    counter:0,
}

const rootReducer = (state = initState, action) => {
    return state
}

const store = createStore(rootReducer)

store.dispatch({})
console.log(store.getState());