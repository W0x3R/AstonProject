import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import type { TUser } from "../types"
import type { TRootState } from "../../../../app/providers/store/store"
import { usersApi } from "../../api/usersApi"

const usersAdapter = createEntityAdapter<TUser>()

const initialState = usersAdapter.getInitialState()

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(
			usersApi.endpoints.getUsers.matchFulfilled,
			(state, action) => {
				usersAdapter.setAll(state, action.payload)
			}
		)
		builder.addMatcher(
			usersApi.endpoints.getUserById.matchFulfilled,
			(state, action) => {
				usersAdapter.upsertOne(state, action.payload)
			}
		)
	},
})

export default usersSlice.reducer

export const { selectAll: selectAllUsers, selectById: selectUserById } =
	usersAdapter.getSelectors((state: TRootState) => state.users)
