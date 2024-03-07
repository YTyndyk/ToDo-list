const TodoList = ({ items, deleteTodo, toggleTodo }) => {
	const handleToggle = (id) => {
		toggleTodo(id);
	};
	const elements = items.map(({ id, text, completed }) => (
		<li key={id}>
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
