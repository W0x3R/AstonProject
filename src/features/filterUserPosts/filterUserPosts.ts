export const filterUserAlbums = (todosData, todosId) =>
	todosData.filter((todo) => Number(todo.userId) === todosId)
