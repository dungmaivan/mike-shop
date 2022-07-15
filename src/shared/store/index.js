import {configureStore, createReducer, createAction, createSlice } from "@reduxjs/toolkit"
import { createStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import {  persistReducer } from 'redux-persist'

// legacy_createStore as createStore
// const loginLogout = createSlice({
//     name: 'user',
//     initialState: {},
//     reducers: {
//         login(state, action) {
//             state = {action.payload};
//         }
//     }
// })
const defaultUser = {
    name: '',
    pass: ''
}

const reducer = ( user = defaultUser, action) => {
    switch (action.type) {
        case "LOGIN":
            console.log(action.payload.name + " hi")
            return {name: action.payload.name,
                    pass: action.payload.pass
            }
        case "LOGOUT":
            return user
        default: 
            return user
    }

}

const persistConfig = {
    key: 'root',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, reducer)


// const reducer = (defaultUser {
//     LOGIN : ({name , pass }, action) =>  ({name: action.payload.name;
//                             pass: action.payload.pass})
// })

const store = createStore(persistedReducer)


console.log("🚀 ~ file: index.js ~ line 33 ~ store", store)

export default store