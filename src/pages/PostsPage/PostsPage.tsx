import { useEffect, useState } from "react"
import { withLoading } from "../../shared/lib/hoc/withLoading"
import { PostList as OriginalPostsList } from "../../widgets/PostList/PostList"
import { postsData } from "../../entities/post/model/postsData"

const PostListsWithLoading = withLoading(OriginalPostsList)

export const PostsPage = () => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		// имитация загрузки данных с сервера
		const timer = setTimeout(() => {
			setData(postsData)
			setIsLoading(false)
		}, 500)
		return () => clearTimeout(timer)
	}, [])

	return <PostListsWithLoading isLoading={isLoading} postsData={data} />
}
