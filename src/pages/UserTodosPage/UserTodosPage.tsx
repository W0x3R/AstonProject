import { useEffect, useState } from "react"
import { todosData } from "../../entities/todos/model/todosData"
import { withLoading } from "../../shared/lib/hoc/withLoading"
import { TodosList as OriginalTodoList } from "../../widgets/TodosList/TodosList"

const TodosWithLoading = withLoading(OriginalTodoList)

export const UserTodosPage = () => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setData(todosData)
			setIsLoading(false)
		}, 500)

		return () => clearTimeout(timer)
	}, [])

	return <TodosWithLoading todosData={data} isLoading={isLoading} />
}
