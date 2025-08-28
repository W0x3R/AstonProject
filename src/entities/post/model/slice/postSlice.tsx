import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { postsApi } from "../../api/postsApi"

const postsAdapter = createEntityAdapter({
	selectId: (post) => post.id,
})

const initialState = postsAdapter.getInitialState()

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(
			postsApi.endpoints.getPosts.matchFulfilled,
			(state, action) => {
				postsAdapter.setAll(state, action.payload)
			}
		)
		builder.addMatcher(
			postsApi.endpoints.getPostById.matchFulfilled,
			(state, action) => {
				postsAdapter.upsertOne(state, action.payload)
			}
		)
	},
})

export default postsSlice.reducer

export const { selectAll: selectAllPosts, selectById: selectPostById } =
	postsAdapter.getSelectors((state) => state.posts)
