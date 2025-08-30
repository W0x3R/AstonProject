import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { TPhoto } from "../model/types"

export const photosApi = createApi({
	reducerPath: "photosApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/",
	}),
	tagTypes: ["Photos"],
	endpoints: (builder) => ({
		getPhotosByAlbumId: builder.query<TPhoto[], number>({
			query: (albumId) => `photos?albumId=${albumId}`,
			providesTags: (result, _error, albumId) =>
				result ?
					[
						...result.map(({ id }) => ({ type: "Photos" as const, id })),
						{ type: "Photos" as const, id: `LIST_ALBUM_${albumId}` },
					]
				:	[{ type: "Photos" as const, id: `LIST_ALBUM_${albumId}` }],
		}),
	}),
})

export const { useGetPhotosByAlbumIdQuery } = photosApi
