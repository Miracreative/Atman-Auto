import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter/counterSlice';
import goodsReducer from './goods/goodsSlice';
import soutReducer from './sout/soutSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		goods: goodsReducer,
		sout: soutReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
