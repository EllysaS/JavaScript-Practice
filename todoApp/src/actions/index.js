let nextTodoId = 0

export const addTodo = (text) => {
	return {
		type: 	'ADD_TODO',
		id: 	nextTodoId++,
		text
	}
}

/*

OR

export function addTodo(text) {
	return {
		type:	'ADD_TODO',
		id:		nextTodoId++,
		text
	}
}

OR

export const addTodo = (text) => ({
	type: 'ADD_TODO',
	id: (nextTodoId++).toString(),
	text,
});

*/

export const setVisibilityFilter = (filter) => {
	return {
		type: 	'SET_VISIBILITY_FILTER',
		filter
	}
}

export const toggleTodo = (id) => {
	return {
		type: 	'TOGGLE_TODO',
		id
	}
}
