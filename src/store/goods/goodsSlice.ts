import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { IGoodsState } from '@/interfaces/goods/goodsState';

import {
	fetchAllGoods,
	fetchFilteredMainParamGoods,
	fetchFilteredAllParamGoods,
} from '@/api/goodsService.js';

import {
	ALL_GOODS_URL,
	FILTERED_MAIN_PARAM_GOODS_URL,
	FILTERED_ALL_PARAM_GOODS_URL,
} from '@/constants/url.js';

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

const initialState: IGoodsState = {
	products: [],
	loading: true,
	error: null,
	filterMainParam: [0, 0, 0, 0, 0, 0, 0, 0],
	filterAllParam: [
		1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
	],
	firstFilter: [],
	isMobile: false,
	flag: true,
};

const goodsSlice = createSlice({
	name: 'goods',
	initialState,
	reducers: {
		setFilterMainParamGoods: (state, action) => {
			state.filterMainParam = action.payload;
		},
		setFilterAllParamGoods: (state, action) => {
			state.filterAllParam = action.payload;
		},
		setFirstFilter: (state, action) => {
			state.firstFilter = action.payload;
		},
		setIsMobile: (state, action) => {
			state.isMobile = action.payload;
		},
		setFlag: (state, action) => {
			state.flag = action.payload;
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
				state.error = action.error.message || null;
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
				state.error = action.error.message || null;
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
				state.error = action.error.message || null;
			});
	},
});

export const {
	setFilterMainParamGoods,
	setFilterAllParamGoods,
	setFirstFilter,
	setIsMobile,
	setFlag,
} = goodsSlice.actions;
export default goodsSlice.reducer;
