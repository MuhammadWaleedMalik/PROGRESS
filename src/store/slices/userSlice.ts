import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  pcn: string;
  studentNumber: string;
  name: string;
  firstName: string;
  registrationStatus: string;
  email: string;
  language: string;
  emailNotifications: boolean;
}

const initialState: UserState = {
  pcn: '518331@student.fontys.nl',
  studentNumber: '4974727',
  name: 'A. Massee González',
  firstName: 'Aaron',
  registrationStatus: 'Fontys ICT t/m 31/08/2025',
  email: 'a.masseegonzalez@student.fontys.nl',
  language: 'EN',
  emailNotifications: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload };
    },
    toggleEmailNotifications: (state) => {
      state.emailNotifications = !state.emailNotifications;
    },
  },
});

export const { updateUser, toggleEmailNotifications } = userSlice.actions;
export default userSlice.reducer;