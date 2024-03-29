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
