import { configureStore } from "@reduxjs/toolkit"
import { postsApi } from "../../../entities/post/api/postsApi"
import { commentsApi } from "../../../entities/comments/api/commentsApi"
import postReducer from "../../../entities/post/model/slice/postSlice"

export const store = configureStore({
	reducer: {
		posts: postReducer,
		[postsApi.reducerPath]: postsApi.reducer,
		[commentsApi.reducerPath]: commentsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(postsApi.middleware)
			.concat(commentsApi.middleware),
})
