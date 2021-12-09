import { configureStore } from '@reduxjs/toolkit';
import OverlaySlice from '../features/overlay/OverlaySlice';
import PopupSlice from '../features/popup/PopupSlice';

export const store = configureStore({
  reducer: {
    overlay: OverlaySlice,
    popup: PopupSlice,
  },
});
