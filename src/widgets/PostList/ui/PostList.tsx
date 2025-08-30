import { useCallback, useMemo, useState } from "react"
import type { TPost } from "../../../entities/post/model/types.js"
import type { TPostListProps } from "../model/types.js"
import { ItemList } from "../../../shared/ui/ItemList/ItemList.js"
import styles from "./PostList.module.css"
import PostLengthFilter from "../../../features/PostLengthFilter/ui/PostLengthFilter.js"
import { PostCard } from "../../../entities/post/ui/PostCard.js"
import { CommentList } from "../../CommentList/ui/CommentList.js"
import { Container } from "../../../shared/ui/Container/Container.js"
import { filterByLength } from "../../../features/PostLengthFilter/lib/filterByLength.js"
import { DataNotFound } from "../../../shared/ui/DataNotFound/DataNotFound.js"
import { NavigateLink } from "../../../shared/ui/NavigateLink/NavigateLink.js"
import { BackButton } from "../../../shared/ui/BackButton/BackButton.js"

export const PostList = ({ postsData, error, heading }: TPostListProps) => {
	const [minTitleLength, setMinTitleLength] = useState(0)

	const filteredData = useMemo(() => {
		return filterByLength(postsData, minTitleLength)
	}, [postsData, minTitleLength])

	const onFilterChange = useCallback(
		(length: number) => setMinTitleLength(length),
		[]
	)

	return (
		<section className={styles.section}>
			<Container>
				{heading !== "Все посты:" && <BackButton position="center" />}
				{error && (
					<DataNotFound>
						Ошибка загрузки постов. Попробуйте повторить позже.
					</DataNotFound>
				)}

				{!error && postsData.length !== 0 && (
					<PostLengthFilter onFilterChange={onFilterChange} />
				)}

				{!error && postsData.length === 0 && (
					<p className={styles["no-posts"]}>Постов пока нет.</p>
				)}

				{!error && postsData.length !== 0 && filteredData.length === 0 && (
					<p className={styles["no-posts"]}>
						Похоже, что постов с такой длиной заголовка нет. Пожалуйста,
						попробуйте другие настройки фильтра.
					</p>
				)}

				{!error && filteredData.length > 0 && (
					<>
						<h2 className={styles.title}>{heading}</h2>
						<ItemList<TPost>
							items={filteredData}
							renderItem={(postData) => {
								return (
									<div className={styles.post__wrapper} key={postData.id}>
										<NavigateLink
											text="Открыть пост"
											url={`/posts/${postData.id}`}
										/>
										<PostCard postData={postData} />
										<CommentList postId={postData.id} />
									</div>
								)
							}}
						/>
					</>
				)}
			</Container>
		</section>
	)
}
