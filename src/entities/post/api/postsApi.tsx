import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const postsApi = createApi({
	reducerPath: "postsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/",
	}),
	tagTypes: ["Posts"],
	endpoints: (builder) => ({
		getPosts: builder.query({
			query: () => "posts",
			providesTags: (result) =>
				result ?
					[
						...result.map(({ id }) => ({ type: "Posts", id })),
						{ type: "Posts", id: "LIST" },
					]
				:	[{ type: "Posts", id: "LIST" }],
		}),
		getPostById: builder.query({
			query: (postId) => `posts/${postId}`,
			providesTags: (result, error, id) => [{ type: "Posts", id }],
		}),
		getPostsByUserId: builder.query({
			query: (userId) => `posts?userId=${userId}`,
			providesTags: (result) =>
				result ?
					[
						...result.map(({ id }) => ({ type: "Posts", id })),
						{ type: "Posts", id: "LIST" },
					]
				:	[{ type: "Posts", id: "LIST" }],
		}),
		deletePost: builder.mutation({
			query: (postId) => ({
				url: `posts/${postId}`,
				method: "DELETE",
			}),
			invalidatesTags: (result, error, id) => [
				{ type: "Posts", id },
				{ type: "Posts", id: "LIST" },
			],
		}),
	}),
})

export const {
	useGetPostsQuery,
	useGetPostByIdQuery,
	useGetPostsByUserIdQuery,
} = postsApi
