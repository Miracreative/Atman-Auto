import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
	fetchAllGoods,
	fetchFilteredMainParamGoods,
} from '../api/goodsService.js';

import {
	ALL_GOODS_URL,
	FILTERED_MAIN_PARAM_GOODS_URL,
	FILTERED_ALL_PARAM_GOODS_URL,
} from '../constants/url.js';

export const fetchGoods = createAsyncThunk(ALL_GOODS_URL, async () => {
	const response = await fetchAllGoods();
	return response || [];
});

export const fetchFilteredGoods = createAsyncThunk(
	FILTERED_MAIN_PARAM_GOODS_URL,
	async (filterMainParam) => {
		const response = await fetchFilteredMainParamGoods(filterMainParam);
		return response || [];
	},
);

export const fetchFilteredAllParamGoods = createAsyncThunk(
	FILTERED_ALL_PARAM_GOODS_URL,
	async (filterAllParam) => {
		const response = await fetchFilteredAllParamGoods(filterAllParam);
		return response || [];
	},
);

const goodsSlice = createSlice({
	name: 'goods',
	initialState: {
		products: [],
		loading: false,
		error: null,
		filterMainParam: [0, 0, 0, 0, 0, 0, 0, 0],
		isMobile: false,
	},
	reducers: {
		setFilterMainParam: (state, action) => {
			state.filterMainParam = action.payload;
		},
		setIsMobile: (state, action) => {
			state.isMobile = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchGoods.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchGoods.fulfilled, (state, action) => {
				state.loading = false;
				state.products = action.payload;
			})
			.addCase(fetchGoods.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(fetchFilteredGoods.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchFilteredGoods.fulfilled, (state, action) => {
				state.loading = false;
				state.products = action.payload;
			})
			.addCase(fetchFilteredGoods.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(fetchFilteredAllParamGoods.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchFilteredAllParamGoods.fulfilled, (state, action) => {
				state.loading = false;
				state.products = action.payload;
			})
			.addCase(fetchFilteredAllParamGoods.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const { setFilterMainParam, setIsMobile } = goodsSlice.actions;
export default goodsSlice.reducer;
