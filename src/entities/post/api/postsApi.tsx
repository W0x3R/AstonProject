import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { TPost } from "../model/types"

export const postsApi = createApi({
	reducerPath: "postsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/",
	}),
	tagTypes: ["Posts"],
	endpoints: (builder) => ({
		getPosts: builder.query<TPost[], void>({
			query: () => "posts",
			providesTags: (result) =>
				result ?
					[
						...result.map(({ id }) => ({ type: "Posts" as const, id })),
						{ type: "Posts" as const, id: "LIST" },
					]
				:	[{ type: "Posts" as const, id: "LIST" }],
		}),
		getPostById: builder.query<TPost, number>({
			query: (postId) => `posts/${postId}`,
			providesTags: (_result, _error, postId) => [
				{ type: "Posts" as const, postId },
			],
		}),
		getPostsByUserId: builder.query<TPost[], number>({
			query: (userId) => `posts?userId=${userId}`,
			providesTags: (result) =>
				result ?
					[
						...result.map(({ id }) => ({ type: "Posts" as const, id })),
						{ type: "Posts" as const, id: "LIST" },
					]
				:	[{ type: "Posts" as const, id: "LIST" }],
		}),
		deletePost: builder.mutation<void, number>({
			query: (postId) => ({
				url: `posts/${postId}`,
				method: "DELETE",
			}),
			invalidatesTags: (_result, _error, postId) => [
				{ type: "Posts" as const, postId },
				{ type: "Posts" as const, postId: "LIST" },
			],
		}),
	}),
})

export const {
	useGetPostsQuery,
	useGetPostByIdQuery,
	useGetPostsByUserIdQuery,
} = postsApi
