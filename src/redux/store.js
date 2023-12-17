import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

// import storage from 'redux-persist/lib/storage';

export const store = configureStore({ reducer });
// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };
// const persistedReducer = persistReducer(persistConfig, reducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// export const persistor = persistStore(store);
