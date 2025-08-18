import { withLoading } from "../../shared/lib/hoc/withLoading"
import { usePosts } from "../../features/PostList/model/hooks/usePosts"
import { PostList as OriginalPostsList } from "../../widgets/PostList/PostList"
import { GLOBAL_CLASSES } from "../../shared/constants/globalClasses"

const PostListsWithLoading = withLoading(OriginalPostsList)

export const PostsPage = () => {
	const { data, isLoading, error } = usePosts(GLOBAL_CLASSES.postsUrl)

	return (
		<PostListsWithLoading
			isLoading={isLoading}
			postsData={data}
			errorMessage={error}
		/>
	)
}
