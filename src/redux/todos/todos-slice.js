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
		toggleTodoStatus: (state, { payload }) => {
			const todoToToggle = state.find((todo) => todo.id === payload);
			if (todoToToggle) {
				todoToToggle.completed = !todoToToggle.completed;
			}
		},
	},
});

export const { addTodo, deleteTodo, toggleTodoStatus } = todosSlice.actions;

export default todosSlice.reducer;
