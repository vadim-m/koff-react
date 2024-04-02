import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PRODUCTS_URL } from '../../constants/constants';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',

  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state?.auth.accessToken;

    const response = await fetch(PRODUCTS_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        return thunkAPI.rejectWithValue({
          status: response.status,
          error: `Не удалось загрузить товары. Статус: ${response.status}`,
        });
      }

      return thunkAPI.rejectWithValue({
        status: response.status,
        error: {
          message: `Не удалось загрузить товары. Статус: ${response.status}`,
        },
      });
    }

    const data = response.json();
    return data;
  }
);

const initialState = {
  data: [],
  loading: null,
  errors: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.errors = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload?.error?.message;
      });
  },
});

export default productsSlice.reducer;
