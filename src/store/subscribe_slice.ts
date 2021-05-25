import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  formData: {
    email: '',
    postalCode: '',
  },
};

export type FormDataState = typeof initialState.formData;

const formSlice = createSlice({
  name: 'formData',
  initialState: initialState.formData,
  reducers: {
    userSubscribed(state, action) {
      return (state = action.payload);
    },
  },
});

export const { userSubscribed } = formSlice.actions;
export default formSlice.reducer;
