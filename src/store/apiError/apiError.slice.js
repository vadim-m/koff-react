import { createSlice } from '@reduxjs/toolkit';

const apiErrorSlice = createSlice({
  name: 'apiError',
  initialState: {
    status: false,
    message: null,
  },
  reducers: {
    addApiError: (state, action) => {
      state.status = true;
      state.message = action.payload.message;
    },
    removeApiError: (state) => {
      state.status = false;
      state.message = null;
    },
  },
});

export default apiErrorSlice.reducer;
export const { addApiError, removeApiError } = apiErrorSlice.actions;
