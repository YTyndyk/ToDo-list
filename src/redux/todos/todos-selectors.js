export const getAllTodos = (store) => store.todos;

export const getCompletedTodos = (store) => {
	return store.todos.filter(({ comleted }) => comleted.true);
};

export const getFilteredTodos = (store) => {
	const { todos, filter } = store;
	if (!filter) {
		return todos;
	}

	const normalizedFilter = filter.toLowerCase();

	const filteredTodos = todos.filter(({ text }) => {
		const normalizedText = text.toLowerCase();

		return normalizedText.includes(normalizedFilter);
	});

	return filteredTodos;
};
