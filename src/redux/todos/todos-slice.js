import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todosSlice = createSlice({
	name: "todos",
	initialState: [],
	reducers: {
		addTodo: {
			reducer: (state, { payload }) => {
				state.push(payload);
			},
			prepare: (data) => {
				return {
					payload: {
						id: nanoid(),
						...data,
					},
				};
			},
		},
		deleteTodo: (state, { payload }) =>
			state.filter((item) => item.id !== payload),
	},
});

export const { addTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
