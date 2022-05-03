import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'アラート',
  message: 'アラートが発生しました',
  visible: false,
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    SetAlert: (state, action) => {
      state.visible = true;
      state.title = action.payload.title;
      state.message = action.payload.message;
    },
    CloseAlert: (state) => {
      state.visible = false;
    },
  },
});

export const { SetAlert, CloseAlert } = alertSlice.actions;
export const selectVisible = (state) => state.alert.visible;
export const selectAlertTitle = (state) => state.alert.title;
export const selectAlertMessage = (state) => state.alert.message;
export default alertSlice.reducer;
