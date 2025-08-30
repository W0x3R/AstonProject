import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { TAlbum } from "../model/types"

export const albumsApi = createApi({
	reducerPath: "albumsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/",
	}),
	tagTypes: ["Albums"],
	endpoints: (builder) => ({
		getAlbums: builder.query<TAlbum[], void>({
			query: () => "albums",
			providesTags: (result) =>
				result ?
					[
						...result.map(({ id }) => ({ type: "Albums" as const, id })),
						{ type: "Albums" as const, id: "LIST" },
					]
				:	[{ type: "Albums" as const, id: "LIST" }],
		}),
		getAlbumsByUserId: builder.query<TAlbum[], number>({
			query: (userId) => `albums?userId=${userId}`,
			providesTags: (_result, _error, userId) => [
				{ type: "Albums", id: `LIST_USER_${userId}` },
			],
		}),
	}),
})

export const { useGetAlbumsQuery, useGetAlbumsByUserIdQuery } = albumsApi
