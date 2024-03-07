import { getAllTodos } from "./redux/todos/todos-selectors";
import { getFilter } from "./redux/filter/filter-selectors";
import { createSelector } from "reselect";

export const selectFilteredTodos = createSelector(
	[getAllTodos, getFilter],
	(todos, filter) => {
		switch (filter) {
			case "COMPLETED":
				return todos.filter((todo) => todo.completed === true);
			case "INCOMPLETED":
				return todos.filter((todo) => todo.completed === false);
			case "ALL":
			default:
				return todos;
		}
	},
);
