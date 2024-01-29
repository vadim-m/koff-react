import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOKEN_URL } from '../../constants/constants';

export const fetchAccessToken = createAsyncThunk('auth/fetchAccessToken', async () => {
  const response = await fetch(TOKEN_URL);

  if (!response.ok) {
    throw new Error('Не удалось получить JWT токен');
  }

  const data = await response.json();
  return data.accessKey;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: localStorage.getItem('accessToken') ?? null,
    loading: false,
    errors: null,
  },
  reducers: {
    removeToken: (state) => {
      state.accessToken = null;
      localStorage.removeItem('accessToken');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessToken.pending, (state) => {
        state.loading = true;
        state.errors = null;
      })
      .addCase(fetchAccessToken.fulfilled, (state, action) => {
        state.accessToken = action.payload;
        localStorage.setItem('accessToken', action.payload);
        state.loading = false;
      })
      .addCase(fetchAccessToken.rejected, (state, action) => {
        state.errors = action.error.message;
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
export const { removeToken } = authSlice.actions;
