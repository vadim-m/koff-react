import { addApiError } from './apiError/apiError.slice';
import { fetchAccessToken } from './auth/auth.slice';

// особенность данного проекта
// токен доступа может протухнуть. бэк его не обновляет. получаем новый
export const apiTokenErrorMiddleware = (store) => (next) => async (action) => {
  const state = store.getState();

  if (action.type.endsWith('rejected') && action.payload?.status === 401) {
    if (!state.auth.loading) {
      await store.dispatch(fetchAccessToken());
    }
  }
  next(action);
};

// пишем ошибки запросов в отдельный state
export const apiReqErrorsMiddleware = (store) => (next) => async (action) => {
  if (action.type.endsWith('rejected')) {
    await store.dispatch(addApiError(action.payload.error));
  }
  next(action);
};
