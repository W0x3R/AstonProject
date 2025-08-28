import { withLoading } from "../../shared/lib/hoc/withLoading"
import { PostList as OriginalPostsList } from "../../widgets/PostList/PostList"
import { useGetPostsQuery } from "../../entities/post/api/postsApi"
import { selectAllPosts } from "../../entities/post/model/slice/postSlice"
import { useSelector } from "react-redux"

const PostListsWithLoading = withLoading(OriginalPostsList)

export const PostsPage = () => {
	const { isLoading, error } = useGetPostsQuery()
	const postsFromSlice = useSelector(selectAllPosts)

	return (
		<PostListsWithLoading
			isLoading={isLoading}
			postsData={postsFromSlice}
			error={error}
			heading="Все посты:"
		/>
	)
}
