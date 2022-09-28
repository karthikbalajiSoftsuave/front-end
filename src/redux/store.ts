import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { RootReducer } from "./reducers"; 



const persistConfig = {
    key: "trident_builders",
    storage: storage
}

// Persist is used for storing the value even after the page re-renders.

const persistedReducer = persistReducer(persistConfig, RootReducer)
const store: any = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
const persistor: any = persistStore(store)

export { store, persistor }