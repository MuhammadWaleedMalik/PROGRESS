import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavigationState {
  currentPath: string;
  sidebarOpen: boolean;
}

const initialState: NavigationState = {
  currentPath: '/dashboard',
  sidebarOpen: true,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setCurrentPath: (state, action: PayloadAction<string>) => {
      state.currentPath = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const { setCurrentPath, toggleSidebar } = navigationSlice.actions;
export default navigationSlice.reducer;