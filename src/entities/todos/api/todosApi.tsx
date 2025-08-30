import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { TTodos } from "../model/types"

export const todosApi = createApi({
	reducerPath: "todosApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/",
	}),
	tagTypes: ["Todos"],
	endpoints: (builder) => ({
		getTodosByUserId: builder.query<TTodos[], number>({
			query: (userId) => `todos?userId=${userId}`,
			providesTags: (_result, _error, userId) => [
				{ type: "Todos" as const, id: `LIST_USER_${userId}` },
			],
		}),
	}),
})

export const { useGetTodosByUserIdQuery } = todosApi
