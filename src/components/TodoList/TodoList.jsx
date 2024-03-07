import styles from "./TodoList.module.css";

const TodoList = ({ items, deleteTodo, toggleTodo }) => {
	const handleToggle = (id) => {
		toggleTodo(id);
	};
	const elements = items.map(({ id, text, completed }) => (
		<li key={id}>
			<div className={styles.box}>
				{" "}
				<div
					onClick={() => handleToggle(id)}
					style={{ textDecoration: completed ? "line-through" : "none" }}
				>
					<p className={styles.text}>{text}</p>
				</div>
				<button
					className={styles.close}
					onClick={() => deleteTodo(id)}
					type="button"
				>
					x
				</button>
			</div>
		</li>
	));

	return <ul className={styles.space}>{elements}</ul>;
};
export default TodoList;
