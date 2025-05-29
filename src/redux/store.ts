import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tagsReducer from "./slices/tagsSlices";
import notesReducer from "./slices/noteSlices";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/lib/persistStore";

//persist ayarlarını yap
const persistConfig = {
  key: "root",
  storage,
};
// reducerlar'ı birleştir
const rootReducer = combineReducers({
  notes: notesReducer,
  tags: tagsReducer,
});

//1den fazla reducer oldugunda bu reducerları persistten geçir
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  //store'daki reducerları tanımla
  reducer: persistedReducer,
  //persist işleminden geçirilen reducerların serializable olmadığını belirt persisti kullanırken toolkit'in dökümanında bu kodu kullanılması isteniyor
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
//useSelector kullanırken store'un tipini belirtmek içiin
export type RootState = ReturnType<typeof store.getState>;
//useDispatch kullanırken dispatch'in tipini belirtmek için

export type AppDispatch = typeof store.dispatch;
//persistStore'u kullanmak için export et
export const persistor = persistStore(store);
//store'u export et
export default store;
