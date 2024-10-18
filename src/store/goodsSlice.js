import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
	fetchAllGoods,
	fetchFilteredMainParamGoods,
	fetchFilteredAllParamGoods,
} from '../api/goodsService.js';

import {
	ALL_GOODS_URL,
	FILTERED_MAIN_PARAM_GOODS_URL,
	FILTERED_ALL_PARAM_GOODS_URL,
} from '../constants/url.js';

export const getAllGoods = createAsyncThunk(ALL_GOODS_URL, async () => {
	const response = await fetchAllGoods();
	return response || [];
});

export const getFilteredMainParamGoods = createAsyncThunk(
	FILTERED_MAIN_PARAM_GOODS_URL,
	async (filterMainParam) => {
		const response = await fetchFilteredMainParamGoods(filterMainParam);
		return response || [];
	},
);

export const getFilteredAllParamGoods = createAsyncThunk(
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
			.addCase(getAllGoods.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getAllGoods.fulfilled, (state, action) => {
				state.loading = false;
				state.products = action.payload;
			})
			.addCase(getAllGoods.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(getFilteredMainParamGoods.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getFilteredMainParamGoods.fulfilled, (state, action) => {
				state.loading = false;
				state.products = action.payload;
			})
			.addCase(getFilteredMainParamGoods.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(getFilteredAllParamGoods.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getFilteredAllParamGoods.fulfilled, (state, action) => {
				state.loading = false;
				state.products = action.payload;
			})
			.addCase(getFilteredAllParamGoods.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const { setFilterMainParam, setIsMobile } = goodsSlice.actions;
export default goodsSlice.reducer;
