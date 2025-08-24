import { withLoading } from "../../shared/lib/hoc/withLoading"
import { usePosts } from "../../features/PostList/model/hooks/usePosts"
import { PostList as OriginalPostsList } from "../../widgets/PostList/PostList"

const PostListsWithLoading = withLoading(OriginalPostsList)

export const PostsPage = () => {
	const { posts, isLoading, errorMessage } = usePosts()

	return (
		<PostListsWithLoading
			isLoading={isLoading}
			postsData={posts}
			errorMessage={errorMessage}
		/>
	)
}
