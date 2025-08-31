import { useSelector } from "react-redux"
import { withLoading } from "@shared/lib/hoc/withLoading"
import { PostList as OriginalPostsList } from "@widgets/PostList/ui/PostList"
import { useGetPostsQuery } from "@entities/post/api/postsApi"
import { selectAllPosts } from "@entities/post/model/slice/postSlice"

const PostListsWithLoading = withLoading(OriginalPostsList)

export const PostsPage = () => {
	const { isLoading, error } = useGetPostsQuery()
	const postsFromSlice = useSelector(selectAllPosts)

	return (
		<PostListsWithLoading
			postsData={postsFromSlice}
			isLoading={isLoading}
			error={error}
			heading="Все посты:"
		/>
	)
}
