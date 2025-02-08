import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import navigationReducer from './slices/navigationSlice';
import uiReducer from './slices/uiSlice';  // Import UI reducer

export const store = configureStore({
  reducer: {
    user: userReducer,
    navigation: navigationReducer,
    ui: uiReducer,  // Add UI reducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
