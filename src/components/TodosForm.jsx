import { useState } from "react";
import { nanoid } from "nanoid";

const INITIAL_STATE = {
	text: "",
	completed: false,
};

const TodosForm = ({ onSubmit }) => {
	const [state, setState] = useState({ ...INITIAL_STATE });

	const handleChange = ({ target }) => {
		const { name, value, type, checked } = target;
		const newValue = type === "checkbox" ? checked : value;

		setState({
			...state,
			[name]: newValue,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({ ...state });
		setState({ ...INITIAL_STATE });
		reset();
	};

	const reset = () => {
		setState({ ...INITIAL_STATE });
	};

	const todoTextId = nanoid();
	const todoCompletedId = nanoid();

	const { text, completed } = state;

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<input
					value={text}
					required
					name="text"
					onChange={handleChange}
					id={todoTextId}
					placeholder="Enter you task"
				/>
			</div>

			<div>
				<input
					type="checkbox"
					checked={completed}
					name="completed"
					onChange={handleChange}
					id={todoCompletedId}
				/>
			</div>
			<button type="submit">Add task</button>
		</form>
	);
};

export default TodosForm;
