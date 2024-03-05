import React from "react";

const TodoList = ({ items, deleteTodo }) => {
	const elements = items.map(({ id, text, completed }) => (
		<li key={id}>
			{text}.{" "}
			<button onClick={() => deleteTodo(id)} type="button">
				Delete
			</button>
		</li>
	));

	return <ul>{elements}</ul>;
};
export default TodoList;
