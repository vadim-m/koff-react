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
      if (response.status === 401) {
        return thunkAPI.rejectWithValue({
          status: response.status,
          error: {
            message: `Не удалось загрузить категории товаров. Статус: ${response.status}`,
          },
        });
      }

      return thunkAPI.rejectWithValue({
        status: response.status,
        error: {
          message: `Не удалось загрузить категории товаров. Статус: ${response.status}`,
        },
      });
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
        state.errors = action.payload?.error?.message;
      });
  },
});

export default categoriesSlice.reducer;
