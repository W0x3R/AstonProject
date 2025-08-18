import { useCallback, useMemo, useState } from "react"
import styles from "./PostList.module.css"
import { PostCard } from "../../entities/post/ui/PostCard"
import { commentsData } from "../../entities/post/model/commentsData.js"
import { CommentList } from "../CommentList/ui/CommentList.js"
import { Container } from "../../shared/ui/Container/Container"
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter.js"
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength.js"
import { DataNotFound } from "../../shared/ui/DataNotFound/DataNotFound.js"
import { NavigateLink } from "../../shared/ui/NavigateLink/NavigateLink.js"

export const PostList = ({ postsData = [], errorMessage }) => {
	const [minTitleLength, setMinTitleLength] = useState(0)

	const filteredData = useMemo(() => {
		const length = minTitleLength
		return filterByLength(postsData, length)
	}, [postsData, minTitleLength])

	const onFilterChange = useCallback((e) => {
		if (e.target.value.length <= 6) {
			setMinTitleLength(e.target.value)
		}
	}, [])

	return (
		<section className={styles.section}>
			<Container>
				<PostLengthFilter
					value={minTitleLength}
					onFilterChange={onFilterChange}
				/>
				{filteredData.length === 0 && (
					<DataNotFound>
						{errorMessage ?
							errorMessage
						:	`Похоже, что постов с такой длиной заголовка нет. Пожалуйста,
						попробуйте другие настройки фильтра.`
						}
					</DataNotFound>
				)}
				{filteredData.length > 0 && (
					<h2 className={styles.title}>Все посты:</h2>
				)}

				{filteredData.map((postData) => {
					const postComments = commentsData.filter(
						(comment) => comment.postId === postData.id
					)
					return (
						<div className={styles.post__wrapper} key={postData.id}>
							<NavigateLink text="Открыть пост" url={`/posts/${postData.id}`} />
							<PostCard postData={postData} />
							<CommentList postComments={postComments} />
						</div>
					)
				})}
			</Container>
		</section>
	)
}
