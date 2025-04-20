import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { encryptTransform } from 'redux-persist-transform-encrypt';

import cartReducer from './slices/CartSlice';
import themeReducer from './slices/themeSlice';
import profileReducer from './slices/profileSlice';
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
  
const createNoopStorage = () => {
    return {
        getItem(_key) {
            return Promise.resolve(null);
        },
        setItem(_key, value) {
            return Promise.resolve(value);
        },
        removeItem(_key) {
            return Promise.resolve();
        },
    };
};
const encryptor = encryptTransform({
    secretKey: 'super-secret-key',
    onError: (err) => console.error('Encryption error:', err),
});
const storage =
    typeof window === "undefined"
        ? createNoopStorage()
        : createWebStorage("local");

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["theme", "cart", "profile"],
    transforms: [encryptor]
};
const rootReducer = combineReducers({
    theme: themeReducer,
    cart: cartReducer,
    profile: profileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export default store;
