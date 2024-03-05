import { createSlice } from "@reduxjs/toolkit";
import { FilterTypes } from "./filter-constants";

const filterSlice = createSlice({
	name: "filter",
	initialState: {
		filter: FilterTypes.ALL,
	},
	reducers: {
		setFilter: (_, { payload }) => payload,
	},
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
