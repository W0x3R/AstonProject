import { useEffect, useState } from "react"

export const usePosts = (url) => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch(url)
				if (!response.ok) throw new Error("Ошибка загрузки постов")
				const postsData = await response.json()
				setData(postsData)
			} catch (error) {
				setError(error.message)
			} finally {
				setIsLoading(false)
			}
		}
		fetchPosts()
	}, [url])

	return { data, isLoading, error }
}
