import type { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import type { SerializedError } from "@reduxjs/toolkit"
import type { TTodos } from "../../../entities/todos/model/types"

export type TTodosListProps = {
	todosData: TTodos[]
	error?: FetchBaseQueryError | SerializedError
	userId: number
}
