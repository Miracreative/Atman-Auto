import { createSlice } from '@reduxjs/toolkit';

import { menuItems as links } from '../../data/menuItems';

const policyNavSlice = createSlice({
	name: 'policyNav',
	initialState: {
		links: links,
		loading: true,
		error: null,
		isMobile: false,
		isOpenNav: false,
	},
	reducers: {
		setIsMobile: (state, action) => {
			state.isMobile = action.payload;
		},
		setIsOpenNav: (state, action) => {
			state.isOpenNav = action.payload;
		},
	},
});

export const { setIsMobile, setIsOpenNav } = policyNavSlice.actions;
export default policyNavSlice.reducer;
