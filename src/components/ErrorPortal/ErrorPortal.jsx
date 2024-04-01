import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeApiError } from '../../store/apiError/apiError.slice';

import { toast, Toaster } from 'react-hot-toast';

const modalEl = document.getElementById('infoModal');

export const ErrorPortal = () => {
  const apiError = useSelector((state) => state.apiError);
  const dispatch = useDispatch();

  if (!apiError) {
    return null;
  }

  if (apiError?.status === true) {
    const message = apiError?.message ?? 'Error';

    setTimeout(() => {
      toast.error(message, {
        duration: 3000,
        position: 'top-left',
        style: { opacity: 1, maxWidth: '100%' },
      });
    }, 300);

    setTimeout(() => {
      dispatch(removeApiError());
    }, 4000);

    return ReactDOM.createPortal(
      <>
        <Toaster />
      </>,
      modalEl
    );
  }
};
