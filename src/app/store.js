import { configureStore } from '@reduxjs/toolkit';
import OverlaySlice from '../features/overlay/OverlaySlice';

export const store = configureStore({
  reducer: {
    overlay: OverlaySlice,
  },
});
