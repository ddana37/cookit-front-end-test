import { configureStore } from '@reduxjs/toolkit';

import formReducer from './subscribe_slice';

export default configureStore({
  reducer: {
    formData: formReducer,
  },
});
