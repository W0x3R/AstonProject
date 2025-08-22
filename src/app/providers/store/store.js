import { configureStore } from "@reduxjs/toolkit"
import { postsApi } from "../../../entities/post/api/postsApi"
import { commentsApi } from "../../../entities/comments/api/commentsApi"

export const store = configureStore({
	reducer: {
		[postsApi.reducerPath]: postsApi.reducer,
		[commentsApi.reducerPath]: commentsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(postsApi.middleware)
			.concat(commentsApi.middleware),
})
