import { createSlice } from "@reduxjs/toolkit";
import { FilterTypes } from "./filter-constants";

const filterSlice = createSlice({
	name: "filter",
	initialState: {
		filter: FilterTypes.ALL,
	},
	reducers: {
		setFilter: (state, { payload }) => {
			state.filter = payload;
		},
	},
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
