import { useSelector, useDispatch } from "react-redux";

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

	const changeFitler = ({ target }) => dispatch(setFilter(target.value));

	const elements = todos.map((id, text) => {
		<li key={id}>
			<p>{text}</p>
			<button onClick={() => deleteTodo(id)} type="button">
				Delete
			</button>
		</li>;
	});
	return (
		<div>
			<TodosForm onSubmit={onAddTodo} />
			<div>
				{/* <input
					name="filter"
					onChange={changeFitler}
					placeholder="Enter your task"
				/> */}
				{elements}
				<TodoList items={todos} deleteTodo={onDeleteTodo} />
			</div>
		</div>
	);
};

export default Todos;
