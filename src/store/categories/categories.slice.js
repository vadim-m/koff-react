import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CATEGORIES_URL } from '../../constants/constants';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state?.auth.accessToken;

    const response = await fetch(CATEGORIES_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Не удалось загрузить категории товаров');
    }

    const data = await response.json();
    return data;
  }
);

const initialState = {
  data: [],
  loading: null,
  errors: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.errors = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.errors = null;
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
