import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const todosApi = createApi({
	reducerPath: "todosApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/",
	}),
	tagTypes: ["Todos"],
	endpoints: (builder) => ({
		getTodosByUserId: builder.query({
			query: (userId) => `todos?userId=${userId}`,
			providesTags: (result, error, id) => [{ type: "Todos", id }],
		}),
	}),
})

export const { useGetTodosByUserIdQuery } = todosApi
