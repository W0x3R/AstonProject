import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const usersApi = createApi({
	reducerPath: "usersApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/",
	}),
	tagTypes: ["Users"],
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: () => "users",
			providesTags: (result) =>
				result ?
					[
						...result.map(({ id }) => ({ type: "Users", id })),
						{ type: "Users", id: "LIST" },
					]
				:	[{ type: "Users", id: "LIST" }],
		}),
		getUserById: builder.query({
			query: (id) => `users/${id}`,
			providesTags: (result, error, id) => [{ type: "Users", id }],
		}),
	}),
})

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi
