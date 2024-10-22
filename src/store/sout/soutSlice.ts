import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllSout } from '@/api/soutService.js';
import { SOUT_URL } from '@/constants/url.js';
import type { SoutData } from '@/types/sout';

export const getAllSout = createAsyncThunk<SoutData[], void>(
	SOUT_URL,
	async () => {
		const response = await fetchAllSout();
		return response || [];
	},
);

const soutSlice = createSlice({
	name: 'sout',
	initialState: {
		sout: [] as SoutData[],
		loading: true,
		error: null as string | null,
		isMobile: false,
	},
	reducers: {
		setSout: (state, action: PayloadAction<SoutData[]>) => {
			state.sout = action.payload;
		},
		setIsMobile: (state, action) => {
			state.isMobile = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllSout.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				getAllSout.fulfilled,
				(state, action: PayloadAction<SoutData[]>) => {
					state.loading = false;
					state.sout = action.payload;
				},
			)
			.addCase(getAllSout.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || null;
			});
	},
});

export const { setSout, setIsMobile } = soutSlice.actions;
export default soutSlice.reducer;
