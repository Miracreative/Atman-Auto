import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter/counterSlice';
import goodsReducer from './goods/goodsSlice';
import soutReducer from './sout/soutSlice';
import policyNavReducer from './policyNav/polivyNavSlice';
import scrollReducer from './scrollSlice/scrollSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		goods: goodsReducer,
		sout: soutReducer,
		policyNav: policyNavReducer,
		scroll: scrollReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
