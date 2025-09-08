import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import type { TPost } from "../types"
import type { TRootState } from "../../../../app/providers/store/store"
import { postsApi } from "../../api/postsApi"

const postsAdapter = createEntityAdapter<TPost>()

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
	postsAdapter.getSelectors((state: TRootState) => state.posts)
