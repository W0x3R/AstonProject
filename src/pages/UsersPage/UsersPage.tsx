import { useEffect, useState } from "react"
import { usersData } from "../../entities/users/model/usersData"
import { withLoading } from "../../shared/lib/hoc/withLoading"
import { UserList as OriginalUserList } from "../../widgets/UserList/UserList"

const UserListsWithLoading = withLoading(OriginalUserList)

export const UsersPage = () => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setData(usersData)
			setIsLoading(false)
		}, 500)

		return () => clearTimeout(timer)
	}, [])

	return <UserListsWithLoading usersData={data} isLoading={isLoading} />
}
