import React from "react";

const TodoList = ({ items, deleteTodo, toggleTodo }) => {
	const handleToggle = (id) => {
		toggleTodo(id);
	};
	const elements = items.map(({ id, text, completed }) => (
		<li key={id}>
			{/* <input
				type="checkbox"
				checked={completed}
				onChange={() => handleToggle(id)}
			/> */}
			{/* <p style={{ textDecoration: completed ? "line-through" : "none" }}>
				{text}
			</p> */}
			<p
				onClick={() => handleToggle(id)}
				style={{ textDecoration: completed ? "line-through" : "none" }}
			>
				{text}
			</p>
			<button onClick={() => deleteTodo(id)} type="button">
				Delete
			</button>
		</li>
	));

	return <ul>{elements}</ul>;
};
export default TodoList;
