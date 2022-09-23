import { configureStore } from "@reduxjs/toolkit";
// import { configureStore, combineReducers } from '@reduxjs/toolkit'
import mainReducer from "../reducers";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: 'root', // il livello da cui vogliamo cominciare a far persistere i dati
//   whitelist: ['theme'],
//   storage, // come dire --> storage: storage, seleziona lo storage engine da utilizzare
// }

// const bigReducer = combineReducers({
//   main: mainReducer,
//   theme: themeReducer,
// })

const store = configureStore({
    reducer: mainReducer,
});

// export const store = configureStore({
//   reducer: persistedReducer, // perchè c'è spazio per uno solo!
//   // questo risolve l'errore del non-serializable value
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false, // <-- lo spegne
//     }),
// })

export default store;
// export const persistor = persistStore(store)
