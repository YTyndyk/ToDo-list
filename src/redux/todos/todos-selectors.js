export const getAllTodos = (store) => store.todos;

export const getCompletedTodos = (store) => {
	return store.todos.filter(({ completed }) => completed);
};

export const getIncompletedTodos = (store) => {
	return store.todos.filter(({ completed }) => !completed);
};
