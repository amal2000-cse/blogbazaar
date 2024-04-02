import {configureStore, combineReducers} from '@reduxjs/toolkit'
import userReducer from './user/userSlice.js'
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'
import themeReducer from './theme/themeSlice.js'

const rootReducer = combineReducers({
    user:userReducer,
    theme:themeReducer,
})

const persistConfig = {
    key:'root',
    storage,
    version: 1,
}

 const persistedReducer = persistReducer(persistConfig, rootReducer)

 export const store = configureStore({
    //if u have more than one reducer
    //we need to combine them
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}),
})
export const persistor = persistStore(store);


