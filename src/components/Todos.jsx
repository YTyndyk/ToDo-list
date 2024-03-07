import { useSelector, useDispatch } from "react-redux";
import { toggleTodoStatus } from "../redux/todos/todos-slice";
import { FilterTypes } from "../redux/filter/filter-constants";
import { useState } from "react";

import TodosForm from "./TodosForm";
import TodoList from "./TodoList/TodoList";

import { addTodo, deleteTodo } from "../redux/todos/todos-slice";
import {
	getAllTodos,
	getIncompletedTodos,
	getCompletedTodos,
} from "../redux/todos/todos-selectors";
import Buttons from "./Buttons";

const Todos = () => {
	const [currentFilter, setCurrentFilter] = useState(FilterTypes.ALL);

	const dispatch = useDispatch();

	const handleFilterChange = (filter) => {
		setCurrentFilter(filter);
	};

	let filteredTodos;
	switch (currentFilter) {
		case FilterTypes.ALL:
			filteredTodos = useSelector(getAllTodos);
			break;
		case FilterTypes.COMPLETED:
			filteredTodos = useSelector(getCompletedTodos);
			break;
		case FilterTypes.CURRENT:
			filteredTodos = useSelector(getIncompletedTodos);
			break;
		default:
			filteredTodos = useSelector(getAllTodos);
	}

	const onAddTodo = (data) => {
		const action = addTodo(data);
		dispatch(action);
	};

	const onDeleteTodo = (id) => {
		dispatch(deleteTodo(id));
	};

	const handleToggleTodo = (id) => {
		dispatch(toggleTodoStatus(id));
	};

	return (
		<>
			<h1>ToDo list</h1>
			<TodosForm onSubmit={onAddTodo} />
			<Buttons handleFilterChange={handleFilterChange} />
			<TodoList
				items={filteredTodos}
				deleteTodo={onDeleteTodo}
				toggleTodo={handleToggleTodo}
			/>
			<p></p>
		</>
	);
};
export default Todos;
