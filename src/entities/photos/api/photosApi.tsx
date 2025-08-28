import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const photosApi = createApi({
	reducerPath: "photosApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/",
	}),
	tagTypes: ["Photos"],
	endpoints: (builder) => ({
		getPhotosByAlbumId: builder.query({
			query: (albumId) => `photos?albumId=${albumId}`,
			providesTags: (result) =>
				result ?
					[
						...result.map(({ id }) => ({ type: "Photos", id })),
						{ type: "Photos", id: "LIST" },
					]
				:	[{ type: "Photos", id: "LIST" }],
		}),
	}),
})

export const { useGetPhotosByAlbumIdQuery } = photosApi
