import { useSelector, useDispatch } from "react-redux";
import { toggleTodoStatus } from "../redux/todos/todos-slice";

import TodosForm from "./TodosForm";
import TodoList from "./TodoList";

import { addTodo, deleteTodo } from "../redux/todos/todos-slice";
import { setFilter } from "../redux/filter/filter-slice";
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

	// const maxlenght = 10;
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
	const changeFitler = ({ target }) => dispatch(setFilter(target.value));

	return (
		<>
			<TodosForm onSubmit={onAddTodo} />
			<TodoList
				items={todos}
				deleteTodo={onDeleteTodo}
				toggleTodo={handleToggleTodo}
			/>
		</>
	);
};

export default Todos;
