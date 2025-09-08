import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { TUser } from "../model/types"

export const usersApi = createApi({
	reducerPath: "usersApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/",
	}),
	tagTypes: ["Users"],
	endpoints: (builder) => ({
		getUsers: builder.query<TUser[], void>({
			query: () => "users",
			providesTags: (result) =>
				result ?
					[
						...result.map(({ id }) => ({ type: "Users" as const, id })),
						{ type: "Users" as const, id: "LIST" },
					]
				:	[{ type: "Users" as const, id: "LIST" }],
		}),
		getUserById: builder.query<TUser, number>({
			query: (id) => `users/${id}`,
			providesTags: (_result, _error, id) => [{ type: "Users" as const, id }],
		}),
	}),
})

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi
