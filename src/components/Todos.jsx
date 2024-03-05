import { useSelector, useDispatch } from "react-redux";
import { toggleTodoStatus } from "../redux/todos/todos-slice";
import { FilterTypes } from "../redux/filter/filter-constants";
import { setFilter } from "../redux/filter/filter-slice";

import TodosForm from "./TodosForm";
import TodoList from "./TodoList";

import { addTodo, deleteTodo } from "../redux/todos/todos-slice";
import { getAllTodos, getFilteredTodos } from "../redux/todos/todos-selectors";

const Todos = () => {
	const todos = useSelector(getAllTodos);

	const dispatch = useDispatch();

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
	const changeFitler = (filterType) => dispatch(setFilter(filterType));

	return (
		<>
			<TodosForm onSubmit={onAddTodo} />
			<div>
				<button onClick={() => changeFitler(FilterTypes.ALL)}>All</button>
				<button onClick={() => changeFitler(FilterTypes.COMPLETED)}>
					Completed
				</button>
				<button onClick={() => changeFitler(FilterTypes.CURRENT)}>
					Current
				</button>
			</div>
			<TodoList
				items={todos}
				deleteTodo={onDeleteTodo}
				toggleTodo={handleToggleTodo}
			/>
		</>
	);
};

export default Todos;
