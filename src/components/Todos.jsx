import { useSelector, useDispatch } from "react-redux";
import { toggleTodoStatus } from "../redux/todos/todos-slice";
import { FilterTypes } from "../redux/filter/filter-constants";
import { useState } from "react";

import TodosForm from "./TodosForm";
import TodoList from "./TodoList";

import { addTodo, deleteTodo } from "../redux/todos/todos-slice";
import {
	getAllTodos,
	getIncompletedTodos,
	getCompletedTodos,
} from "../redux/todos/todos-selectors";

const Todos = () => {
	const [currentFilter, setCurrentFilter] = useState(FilterTypes.ALL);
	const todos = useSelector(getAllTodos);

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
		case FilterTypes.INCOMPLETED:
			filteredTodos = useSelector(getIncompletedTodos);
			break;
		default:
			filteredTodos = useSelector(getAllTodos);
	}

	const isDublicate = ({ text }) => {
		const normalizedText = text.toLowerCase();

		const dublicate = todos.find((item) => {
			const normalizedCurrentText = item.text.toLowerCase();

			return normalizedCurrentText === normalizedText;
		});

		return Boolean(dublicate);
	};

	const onAddTodo = (data) => {
		if (isDublicate(data)) {
			return alert(`Task with ${data.text}  already in list`);
		}

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
			<TodosForm onSubmit={onAddTodo} />
			<div>
				<button onClick={() => handleFilterChange(FilterTypes.ALL)}>All</button>
				<button onClick={() => handleFilterChange(FilterTypes.COMPLETED)}>
					Completed
				</button>
				<button onClick={() => handleFilterChange(FilterTypes.INCOMPLETED)}>
					Incompleted
				</button>
			</div>
			<TodoList
				items={filteredTodos}
				deleteTodo={onDeleteTodo}
				toggleTodo={handleToggleTodo}
			/>
		</>
	);
};
export default Todos;
