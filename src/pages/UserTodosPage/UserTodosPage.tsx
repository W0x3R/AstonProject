import { useParams } from "react-router"
import { useGetTodosByUserIdQuery } from "@entities/todos/api/todosApi"
import { withLoading } from "@shared/lib/hoc/withLoading"
import { TodosList as OriginalTodoList } from "@widgets/TodosList/ui/TodosList"

const TodosWithLoading = withLoading(OriginalTodoList)

export const UserTodosPage = () => {
	const { id } = useParams()
	const userId = Number(id)

	const {
		data: todosData = [],
		isLoading,
		error,
	} = useGetTodosByUserIdQuery(userId)

	return (
		<TodosWithLoading
			todosData={todosData}
			isLoading={isLoading}
			error={error}
			userId={userId}
		/>
	)
}
