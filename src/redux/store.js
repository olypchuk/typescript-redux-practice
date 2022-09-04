import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
// import reducer from './reducer'
import reducer from './slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    whitelist:['isLogin'],
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

// const store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
const store=configureStore({reducer:persistedReducer,middleware:getDefaultMiddleware=>getDefaultMiddleware({serializableCheck:false})})
export const persistor = persistStore(store)
export default store