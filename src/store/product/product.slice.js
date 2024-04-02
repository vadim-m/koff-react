import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PRODUCTS_URL } from '../../constants/constants';

export const fetchProduct = createAsyncThunk('product/fetchProduct', async (id, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state?.auth?.accessToken;

  const response = await fetch(`${PRODUCTS_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      return thunkAPI.rejectWithValue({
        status: response.status,
        error: {
          message: `Не удалось загрузить информацию о товаре. Статус: ${response.status}`,
        },
      });
    }

    return thunkAPI.rejectWithValue({
      status: response.status,
      error: {
        message: `Не удалось загрузить информацию о товаре. Статус: ${response.status}`,
      },
    });
  }

  const data = response.json();
  return data;
});

const initialState = {
  data: null,
  loading: null,
  errors: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.errors = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload?.error?.message;
      });
  },
});

export default productSlice.reducer;
