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

	const { text } = state;
	const maxlength = text.length > 1 && text.length <= 30;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (maxlength) {
			onSubmit({ ...state });
		} else {
			alert(`The text should be 30 characters or less.`);
		}
		setState({ ...INITIAL_STATE });
		reset();
	};

	const reset = () => {
		setState({ ...INITIAL_STATE });
	};

	const todoTextId = nanoid();

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

			<button type="submit">Add task</button>
		</form>
	);
};

export default TodosForm;
