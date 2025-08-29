import { configureStore } from "@reduxjs/toolkit"
import { postsApi } from "../../../entities/post/api/postsApi"
import { commentsApi } from "../../../entities/comments/api/commentsApi"
import { albumsApi } from "../../../entities/albums/api/albumsApi"
import { todosApi } from "../../../entities/todos/api/todosApi"
import { usersApi } from "../../../entities/users/api/usersApi"
import { photosApi } from "../../../entities/photos/api/photosApi"
import postReducer from "../../../entities/post/model/slice/postSlice"
import userReducer from "../../../entities/users/model/slice/userSlice"

export type TRootState = ReturnType<typeof store.getState>

export const store = configureStore({
	reducer: {
		posts: postReducer,
		users: userReducer,
		[postsApi.reducerPath]: postsApi.reducer,
		[commentsApi.reducerPath]: commentsApi.reducer,
		[albumsApi.reducerPath]: albumsApi.reducer,
		[todosApi.reducerPath]: todosApi.reducer,
		[usersApi.reducerPath]: usersApi.reducer,
		[photosApi.reducerPath]: photosApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(postsApi.middleware)
			.concat(commentsApi.middleware)
			.concat(albumsApi.middleware)
			.concat(todosApi.middleware)
			.concat(usersApi.middleware)
			.concat(photosApi.middleware),
})
