import { useSelector } from "react-redux";
import { getAllTodos } from "../redux/todos/todos-selectors";
import { FilterTypes } from "../redux/filter/filter-constants";

const Buttons = ({ handleFilterChange }) => {
	const todos = useSelector(getAllTodos);

	const completedTodos = todos.reduce(
		(total, todo) => (todo.completed ? total + 1 : total),
		0,
	);
	const unCompletedTodos = todos.reduce(
		(total, todo) => (!todo.completed ? total + 1 : total),
		0,
	);

	return (
		<div>
			<button onClick={() => handleFilterChange(FilterTypes.ALL)}>
				All : <span>{todos.length}</span>
			</button>
			<button onClick={() => handleFilterChange(FilterTypes.COMPLETED)}>
				Completed : <span>{completedTodos}</span>
			</button>
			<button onClick={() => handleFilterChange(FilterTypes.CURRENT)}>
				Current : <span>{unCompletedTodos}</span>
			</button>
		</div>
	);
};

export default Buttons;
