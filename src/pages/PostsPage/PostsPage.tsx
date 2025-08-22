import { withLoading } from "../../shared/lib/hoc/withLoading"
import { PostList as OriginalPostsList } from "../../widgets/PostList/PostList"
import { useGetPostsQuery } from "../../entities/post/api/postsApi"

const PostListsWithLoading = withLoading(OriginalPostsList)

export const PostsPage = () => {
	const { data: postsData = [], isLoading, error } = useGetPostsQuery()

	return (
		<PostListsWithLoading
			isLoading={isLoading}
			postsData={postsData}
			error={error}
		/>
	)
}
