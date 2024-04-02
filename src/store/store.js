import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice.js';
import categoriesReducer from './categories/categories.slice.js';
import productsReducer from './products/products.slice.js';
import productReducer from './product/product.slice.js';
import apiErrorReducer from './apiError/apiError.slice.js';
import { apiTokenErrorMiddleware, apiReqErrorsMiddleware } from './middleware.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    products: productsReducer,
    product: productReducer,
    apiError: apiErrorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiTokenErrorMiddleware, apiReqErrorsMiddleware),
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__,
});
