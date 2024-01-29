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
      throw new Error('Не удалось загрузить товары');
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
        state.errors = action.error.message;
      });
  },
});

export default productsSlice.reducer;
