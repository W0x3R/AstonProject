import { useCallback, useState } from "react"
import styles from "./CommentList.module.css"
import { Button } from "../../../shared/ui/Button/Button"
import { useGetCommentsByPostIdQuery } from "../../../entities/comments/api/commentsApi"
import { LoadingSpinner } from "../../../shared/ui/LoadingSpinner/LoadingSpinner"

export const CommentList = ({ postId }) => {
	const {
		data: commentsByPostId = [],
		isLoading,
		error,
	} = useGetCommentsByPostIdQuery(postId)

	const [expandedComments, setExpandedComments] = useState([])

	const isCollapsed = expandedComments.includes(postId)

	const toggleComment = useCallback((commentPostId) => {
		setExpandedComments((prev) =>
			prev.includes(commentPostId) ?
				prev.filter((postId) => postId !== commentPostId)
			:	[...prev, commentPostId]
		)
	}, [])

	if (error)
		return <p className={styles["no-comments"]}>Комментарии отсутствуют</p>

	if (isLoading) {
		return <LoadingSpinner size="small" />
	}

	return (
		<div>
			<Button
				className={styles["toggle-comment-btn"]}
				onClick={() => toggleComment(postId)}
			>
				{isCollapsed ?
					`Показать комментарии (${commentsByPostId.length})`
				:	"Свернуть комментарии"}
			</Button>
			{commentsByPostId.map(({ id, name, email, body }) => {
				return (
					<div
						className={`${styles["comment-wrapper"]} ${isCollapsed ? styles.collapsed : ""}`}
						key={id}
					>
						<h2 className={styles.title}>{name}</h2>
						<h3 className={styles.email}>{email}</h3>
						<p className={styles.body}>{body}</p>
					</div>
				)
			})}
		</div>
	)
}
