import { configureStore } from '@reduxjs/toolkit';
import ItemsReducer from '../features/Items/Items-slice'

const store = configureStore({
  reducer: {
    ItemsReducer: ItemsReducer,
  },
});

export default function configureAppStore() {
  return { store }
}
