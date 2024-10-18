import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';
import goodsReducer from './goodsSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		goods: goodsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
