import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { TComment } from "../model/types"

export const commentsApi = createApi({
	reducerPath: "commentsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/",
	}),
	tagTypes: ["Comments"],
	endpoints: (builder) => ({
		getCommentsByPostId: builder.query<TComment[], number>({
			query: (postId) => `/comments?postId=${postId}`,
			providesTags: (result, _error, postId) =>
				result ?
					[
						...result.map(({ id }) => ({ type: "Comments" as const, id })),
						{ type: "Comments" as const, id: `LIST_POST_${postId}` },
					]
				:	[{ type: "Comments" as const, id: `LIST_POST_${postId}` }],
		}),
	}),
})

export const { useGetCommentsByPostIdQuery } = commentsApi
