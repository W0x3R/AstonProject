import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const albumsApi = createApi({
	reducerPath: "albumsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/",
	}),
	tagTypes: ["Albums"],
	endpoints: (builder) => ({
		getAlbums: builder.query({
			query: () => "albums",
			providesTags: (result) =>
				result ?
					[
						...result.map(({ id }) => ({ type: "Albums", id })),
						{ type: "Albums", id: "LIST" },
					]
				:	[{ type: "Albums", id: "LIST" }],
		}),
		getAlbumsByUserId: builder.query({
			query: (userId) => `albums?userId=${userId}`,
			providesTags: (result, error, id) => [{ type: "Albums", id }],
		}),
	}),
})

export const { useGetAlbumsQuery, useGetAlbumsByUserIdQuery } = albumsApi
