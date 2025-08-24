import { useParams } from "react-router"
import { withLoading } from "../../shared/lib/hoc/withLoading"
import { PostList as OriginalPostList } from "../../widgets/PostList/PostList"
import { useGetPostsByUserIdQuery } from "../../entities/post/api/postsApi"

const PostListWithLoading = withLoading(OriginalPostList)

export const UserPostsPage = () => {
	const { id } = useParams()
	const userId = Number(id)
	const { data: postsData, isLoading, error } = useGetPostsByUserIdQuery(userId)

	return (
		<PostListWithLoading
			postsData={postsData}
			isLoading={isLoading}
			error={error}
			heading={`Посты пользователя №${userId}:`}
		/>
	)
}
