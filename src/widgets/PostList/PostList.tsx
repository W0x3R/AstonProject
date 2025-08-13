import styles from "./PostList.module.css"
import { useCallback, useMemo, useState } from "react"
import { PostCard } from "../../entities/post/ui/PostCard"
import { commentsData } from "../../entities/post/model/commentsData.js"
import { CommentList } from "../CommentList/ui/CommentList.js"
import { Container } from "../../shared/ui/Container/Container"
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter.js"
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength.js"
import { DataNotFound } from "../../shared/ui/DataNotFound/DataNotFound.js"

export const PostList = ({ postsData = [] }) => {
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
		<section>
			<Container>
				<PostLengthFilter
					value={minTitleLength}
					onFilterChange={onFilterChange}
				/>
				{filteredData.length === 0 && (
					<DataNotFound>
						Похоже, что постов с такой длиной заголовка нет. Пожалуйста,
						попробуйте другие настройки фильтра.
					</DataNotFound>
				)}
				{filteredData.map((postData) => {
					const postComments = commentsData.filter(
						(comment) => comment.postId === postData.id
					)
					return (
						<div className={styles.post__wrapper} key={postData.id}>
							<PostCard postData={postData} />
							<CommentList postComments={postComments} />
						</div>
					)
				})}
			</Container>
		</section>
	)
}
