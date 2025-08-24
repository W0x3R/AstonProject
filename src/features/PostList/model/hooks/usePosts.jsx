import { useEffect, useState } from "react"
import { GLOBAL_CLASSES } from "../../../../shared/constants/globalClasses"

export const usePosts = (postId) => {
	const [posts, setPosts] = useState([])
	const [post, setPost] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [errorMessage, setErrorMessage] = useState(null)

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch(GLOBAL_CLASSES.postsUrl)
				if (!response.ok) throw new Error("Ошибка загрузки постов")
				const postsData = await response.json()
				setPosts(postsData)
				if (postId) {
					const getPostById = postsData.find((post) => post.id === postId)
					setPost(getPostById)
				} else {
					throw new Error("Ошибка загрузки поста")
				}
			} catch (error) {
				setErrorMessage(error.message)
			} finally {
				setIsLoading(false)
			}
		}
		fetchPosts()
	}, [])
	return { posts, post, isLoading, errorMessage }
}
