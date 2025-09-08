import type { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import type { TUser } from "@entities/users/model/types"
import type { SerializedError } from "@reduxjs/toolkit"

export type TUserListProps = {
	usersData: TUser[]
	error?: FetchBaseQueryError | SerializedError
}

export type TUserCardProps = {
	userData: Omit<TUser, "id">
}
