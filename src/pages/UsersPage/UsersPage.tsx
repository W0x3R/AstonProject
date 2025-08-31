import { useSelector } from "react-redux"
import { useGetUsersQuery } from "@entities/users/api/usersApi"
import { withLoading } from "@shared/lib/hoc/withLoading"
import { UserList as OriginalUserList } from "@widgets/UserList/ui/UserList"
import { selectAllUsers } from "@entities/users/model/slice/userSlice"

const UserListsWithLoading = withLoading(OriginalUserList)

export const UsersPage = () => {
	const { isLoading, error } = useGetUsersQuery()
	const usersFromSlice = useSelector(selectAllUsers)
	return (
		<UserListsWithLoading
			usersData={usersFromSlice}
			isLoading={isLoading}
			error={error}
		/>
	)
}
